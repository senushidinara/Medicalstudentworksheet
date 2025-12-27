import { useState } from 'react';

interface MatchingPair {
  id: string;
  term: string;
  definition: string;
}

interface MatchingExerciseProps {
  pairs: MatchingPair[];
  userMatches: { [key: string]: string };
  onMatchChange: (termId: string, definitionId: string) => void;
  disabled?: boolean;
}

export function MatchingExercise({ pairs, userMatches, onMatchChange, disabled }: MatchingExerciseProps) {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const shuffledDefinitions = [...pairs].sort(() => Math.random() - 0.5);

  const handleDefinitionClick = (definitionId: string) => {
    if (disabled || !selectedTerm) return;
    onMatchChange(selectedTerm, definitionId);
    setSelectedTerm(null);
  };

  const getMatchedDefinition = (termId: string) => {
    const definitionId = userMatches[termId];
    return pairs.find(p => p.id === definitionId)?.definition;
  };

  return (
    <div className="space-y-4">
      <p>Match each term with its correct definition. Click a term, then click its matching definition.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Terms Column */}
        <div className="space-y-2">
          <h4 className="mb-3">Terms</h4>
          {pairs.map((pair) => (
            <div key={pair.id} className="space-y-1">
              <button
                onClick={() => !disabled && setSelectedTerm(pair.id)}
                disabled={disabled}
                className={`w-full text-left p-3 border rounded-lg transition-colors ${
                  selectedTerm === pair.id ? 'bg-blue-100 border-blue-500' : 
                  userMatches[pair.id] ? 'bg-green-50 border-green-500' : 
                  'border-border hover:bg-accent'
                } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              >
                {pair.term}
              </button>
              {userMatches[pair.id] && (
                <div className="text-sm text-muted-foreground pl-3">
                  → {getMatchedDefinition(pair.id)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Definitions Column */}
        <div className="space-y-2">
          <h4 className="mb-3">Definitions</h4>
          {shuffledDefinitions.map((pair) => {
            const isMatched = Object.values(userMatches).includes(pair.id);
            return (
              <button
                key={pair.id}
                onClick={() => handleDefinitionClick(pair.id)}
                disabled={disabled || !selectedTerm}
                className={`w-full text-left p-3 border rounded-lg transition-colors ${
                  isMatched ? 'bg-green-50 border-green-500 opacity-50' : 
                  selectedTerm ? 'border-border hover:bg-accent cursor-pointer' : 
                  'border-border opacity-50'
                } ${disabled ? 'cursor-not-allowed' : ''}`}
              >
                {pair.definition}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
