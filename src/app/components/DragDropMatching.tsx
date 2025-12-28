import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface MatchPair {
  id: string;
  term: string;
  definition: string;
}

interface DragDropMatchingProps {
  pairs: MatchPair[];
  showResults?: boolean;
}

const ItemType = {
  DEFINITION: 'definition',
};

interface DraggableDefinitionProps {
  definition: string;
  id: string;
  isMatched: boolean;
}

interface DropZoneProps {
  term: string;
  termId: string;
  onDrop: (definitionId: string, termId: string) => void;
  matchedDefinition: string | null;
  isCorrect?: boolean;
  showResults?: boolean;
}

function DraggableDefinition({ definition, id, isMatched }: DraggableDefinitionProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.DEFINITION,
    item: { id, definition },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isMatched,
  }));

  if (isMatched) return null;

  return (
    <div
      ref={drag}
      className={`p-3 bg-purple-50 border-2 border-purple-300 rounded-lg cursor-move hover:bg-purple-100 transition-colors ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <p className="text-sm text-purple-900">{definition}</p>
    </div>
  );
}

function DropZone({
  term,
  termId,
  onDrop,
  matchedDefinition,
  isCorrect,
  showResults,
}: DropZoneProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.DEFINITION,
    drop: (item: { id: string; definition: string }) => {
      onDrop(item.id, termId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border-2 rounded-lg transition-all min-h-[80px] ${
        isOver ? 'border-blue-500 bg-blue-50 scale-105' : ''
      } ${
        showResults
          ? isCorrect
            ? 'border-green-500 bg-green-50'
            : matchedDefinition
            ? 'border-red-500 bg-red-50'
            : 'border-gray-300 bg-gray-50'
          : matchedDefinition
          ? 'border-purple-500 bg-purple-50'
          : 'border-gray-300 bg-gray-50'
      }`}
    >
      <p className="font-medium mb-2">{term}</p>
      {matchedDefinition ? (
        <p className="text-sm text-gray-700 italic">{matchedDefinition}</p>
      ) : (
        <p className="text-sm text-gray-400 italic">Drop definition here...</p>
      )}
    </div>
  );
}

export function DragDropMatching({ pairs, showResults }: DragDropMatchingProps) {
  const [matches, setMatches] = useState<{ [termId: string]: string }>({});

  const shuffledDefinitions = [...pairs].sort(() => Math.random() - 0.5);

  const handleDrop = (definitionId: string, termId: string) => {
    // Remove definition from any previous match
    const newMatches = { ...matches };
    Object.keys(newMatches).forEach((key) => {
      if (newMatches[key] === definitionId) {
        delete newMatches[key];
      }
    });
    newMatches[termId] = definitionId;
    setMatches(newMatches);
  };

  const isDefinitionMatched = (definitionId: string) => {
    return Object.values(matches).includes(definitionId);
  };

  const getMatchedDefinitionText = (termId: string) => {
    const defId = matches[termId];
    if (!defId) return null;
    const pair = pairs.find((p) => p.id === defId);
    return pair?.definition || null;
  };

  const isCorrectMatch = (termId: string) => {
    return matches[termId] === termId;
  };

  const handleReset = () => {
    setMatches({});
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-4">
        <p className="text-sm">Drag each definition to match it with the correct term:</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Terms with drop zones */}
          <div className="space-y-3">
            <h4 className="mb-3">Terms</h4>
            {pairs.map((pair) => (
              <DropZone
                key={pair.id}
                term={pair.term}
                termId={pair.id}
                onDrop={handleDrop}
                matchedDefinition={getMatchedDefinitionText(pair.id)}
                isCorrect={isCorrectMatch(pair.id)}
                showResults={showResults}
              />
            ))}
          </div>

          {/* Definitions */}
          <div className="space-y-3">
            <h4 className="mb-3">Definitions (Drag these)</h4>
            {shuffledDefinitions.map((pair) => (
              <DraggableDefinition
                key={pair.id}
                id={pair.id}
                definition={pair.definition}
                isMatched={isDefinitionMatched(pair.id)}
              />
            ))}
          </div>
        </div>

        {!showResults && Object.keys(matches).length > 0 && (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset Matches
          </button>
        )}
      </div>
    </DndProvider>
  );
}
