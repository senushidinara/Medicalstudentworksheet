import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface LabelItem {
  id: string;
  text: string;
  correctTarget: string;
}

interface DropZone {
  id: string;
  x: number;
  y: number;
  label: string;
}

interface DragDropLabelProps {
  imageSrc: string;
  labels: LabelItem[];
  dropZones: DropZone[];
  showResults?: boolean;
}

interface DraggableLabelProps {
  label: LabelItem;
  isPlaced: boolean;
}

interface DropTargetProps {
  zone: DropZone;
  onDrop: (labelId: string, zoneId: string) => void;
  placedLabel: string | null;
  isCorrect?: boolean;
  showResults?: boolean;
}

const ItemType = {
  LABEL: 'label',
};

function DraggableLabel({ label, isPlaced }: DraggableLabelProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.LABEL,
    item: { id: label.id, text: label.text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isPlaced,
  }));

  if (isPlaced) return null;

  return (
    <div
      ref={drag}
      className={`px-4 py-2 bg-blue-100 border-2 border-blue-300 rounded-lg cursor-move hover:bg-blue-200 transition-colors ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <p className="text-sm text-blue-900">{label.text}</p>
    </div>
  );
}

function DropTarget({ zone, onDrop, placedLabel, isCorrect, showResults }: DropTargetProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.LABEL,
    drop: (item: { id: string; text: string }) => {
      onDrop(item.id, zone.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`absolute w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
        isOver ? 'scale-125 border-blue-500 bg-blue-100' : ''
      } ${
        showResults
          ? isCorrect
            ? 'border-green-500 bg-green-100'
            : 'border-red-500 bg-red-100'
          : placedLabel
          ? 'border-purple-500 bg-purple-100'
          : 'border-gray-400 bg-white'
      }`}
      style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
    >
      <span className="text-xs font-bold">
        {placedLabel ? '✓' : zone.id.split('-')[1]}
      </span>
    </div>
  );
}

export function DragDropLabel({ imageSrc, labels, dropZones, showResults }: DragDropLabelProps) {
  const [placements, setPlacements] = useState<{ [zoneId: string]: string }>({});

  const handleDrop = (labelId: string, zoneId: string) => {
    // Remove label from any previous placement
    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach((key) => {
      if (newPlacements[key] === labelId) {
        delete newPlacements[key];
      }
    });
    newPlacements[zoneId] = labelId;
    setPlacements(newPlacements);
  };

  const handleReset = () => {
    setPlacements({});
  };

  const isLabelPlaced = (labelId: string) => {
    return Object.values(placements).includes(labelId);
  };

  const getPlacedLabelText = (zoneId: string) => {
    const labelId = placements[zoneId];
    if (!labelId) return null;
    const label = labels.find((l) => l.id === labelId);
    return label?.text || null;
  };

  const isCorrectPlacement = (zoneId: string) => {
    const labelId = placements[zoneId];
    if (!labelId) return false;
    const label = labels.find((l) => l.id === labelId);
    return label?.correctTarget === zoneId;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-4">
        <p className="text-sm">Drag the labels below to the correct locations on the image:</p>

        {/* Image with drop zones */}
        <div className="relative inline-block bg-white rounded-lg border-2 border-gray-300 p-4">
          <img src={imageSrc} alt="Anatomical diagram" className="max-w-full h-auto rounded" />
          {dropZones.map((zone) => (
            <DropTarget
              key={zone.id}
              zone={zone}
              onDrop={handleDrop}
              placedLabel={getPlacedLabelText(zone.id)}
              isCorrect={isCorrectPlacement(zone.id)}
              showResults={showResults}
            />
          ))}
        </div>

        {/* Draggable labels */}
        <div className="flex flex-wrap gap-3">
          {labels.map((label) => (
            <DraggableLabel
              key={label.id}
              label={label}
              isPlaced={isLabelPlaced(label.id)}
            />
          ))}
        </div>

        {/* Placed labels list */}
        {Object.keys(placements).length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="mb-2">Your Placements:</h4>
            <div className="space-y-2">
              {dropZones.map((zone) => {
                const labelText = getPlacedLabelText(zone.id);
                if (!labelText) return null;
                const isCorrect = isCorrectPlacement(zone.id);
                return (
                  <div
                    key={zone.id}
                    className={`p-2 rounded ${
                      showResults
                        ? isCorrect
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        : 'bg-gray-100'
                    }`}
                  >
                    <span className="text-sm">
                      Point {zone.id.split('-')[1]}: {labelText}
                      {showResults && !isCorrect && (
                        <span className="ml-2 text-xs">
                          (Correct: {zone.label})
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!showResults && Object.keys(placements).length > 0 && (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset Placements
          </button>
        )}
      </div>
    </DndProvider>
  );
}
