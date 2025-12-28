import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Step {
  id: string;
  text: string;
  order: number;
}

interface SequenceExerciseProps {
  title: string;
  steps: Step[];
  showResults?: boolean;
}

const ItemType = {
  STEP: 'step',
};

interface DraggableStepProps {
  step: Step;
  index: number;
  moveStep: (dragIndex: number, hoverIndex: number) => void;
}

function DraggableStep({ step, index, moveStep }: DraggableStepProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.STEP,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemType.STEP,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveStep(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`flex items-center gap-3 p-4 bg-white border-2 border-gray-300 rounded-lg cursor-move hover:border-blue-400 transition-colors ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
        {index + 1}
      </div>
      <p className="flex-1 text-sm">{step.text}</p>
      <div className="flex-shrink-0 text-gray-400">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
    </div>
  );
}

export function SequenceExercise({ title, steps: initialSteps, showResults }: SequenceExerciseProps) {
  const [steps, setSteps] = useState(() => {
    // Shuffle the steps initially
    const shuffled = [...initialSteps].sort(() => Math.random() - 0.5);
    return shuffled;
  });

  const moveStep = (dragIndex: number, hoverIndex: number) => {
    const newSteps = [...steps];
    const draggedStep = newSteps[dragIndex];
    newSteps.splice(dragIndex, 1);
    newSteps.splice(hoverIndex, 0, draggedStep);
    setSteps(newSteps);
  };

  const isCorrectOrder = () => {
    return steps.every((step, index) => step.order === index + 1);
  };

  const getStepStatus = (index: number) => {
    if (!showResults) return 'default';
    return steps[index].order === index + 1 ? 'correct' : 'incorrect';
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4>{title}</h4>
          {showResults && (
            <div
              className={`px-4 py-2 rounded-lg ${
                isCorrectOrder()
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {isCorrectOrder() ? '✓ Correct!' : '✗ Incorrect order'}
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Drag and drop to arrange the steps in the correct order:
        </p>
        <div className="space-y-3">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            return (
              <div
                key={step.id}
                className={`${
                  status === 'correct'
                    ? 'ring-2 ring-green-500 rounded-lg'
                    : status === 'incorrect'
                    ? 'ring-2 ring-red-500 rounded-lg'
                    : ''
                }`}
              >
                <DraggableStep
                  step={step}
                  index={index}
                  moveStep={moveStep}
                />
              </div>
            );
          })}
        </div>
      </div>
    </DndProvider>
  );
}
