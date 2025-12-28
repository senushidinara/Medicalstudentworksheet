import { useState } from 'react';

interface TreeNode {
  id: string;
  question: string;
  options: {
    text: string;
    nextNode: string | null;
    isCorrect?: boolean;
    feedback?: string;
  }[];
}

interface DecisionTreeProps {
  title: string;
  scenario: string;
  nodes: TreeNode[];
  startNodeId: string;
}

export function DecisionTree({ title, scenario, nodes, startNodeId }: DecisionTreeProps) {
  const [currentNodeId, setCurrentNodeId] = useState(startNodeId);
  const [path, setPath] = useState<string[]>([startNodeId]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentNode = nodes.find((n) => n.id === currentNodeId);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null || !currentNode) return;

    const option = currentNode.options[selectedOption];
    if (option.nextNode) {
      setCurrentNodeId(option.nextNode);
      setPath([...path, option.nextNode]);
      setSelectedOption(null);
    }
  };

  const handleReset = () => {
    setCurrentNodeId(startNodeId);
    setPath([startNodeId]);
    setSelectedOption(null);
  };

  const isComplete =
    selectedOption !== null &&
    currentNode?.options[selectedOption].nextNode === null;

  const currentFeedback =
    selectedOption !== null ? currentNode?.options[selectedOption].feedback : null;

  const isCorrectPath =
    isComplete && currentNode?.options[selectedOption!].isCorrect;

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 rounded-lg p-5">
        <h4 className="text-indigo-900 mb-2">{title}</h4>
        <p className="text-indigo-800 text-sm">{scenario}</p>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center gap-2">
        {path.map((nodeId, index) => (
          <div key={index} className="flex items-center">
            <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm">
              {index + 1}
            </div>
            {index < path.length - 1 && (
              <div className="w-8 h-0.5 bg-indigo-300 mx-1" />
            )}
          </div>
        ))}
      </div>

      {/* Current question */}
      {currentNode && (
        <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
          <p className="mb-4">{currentNode.question}</p>

          <div className="space-y-3">
            {currentNode.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedOption === index
                    ? 'border-indigo-500 bg-indigo-50 shadow-md'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="decision"
                  checked={selectedOption === index}
                  onChange={() => handleOptionSelect(index)}
                  className="mt-1"
                />
                <span className="flex-1">{option.text}</span>
              </label>
            ))}
          </div>

          {/* Feedback */}
          {currentFeedback && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                isCorrectPath
                  ? 'bg-green-50 border border-green-300'
                  : isComplete
                  ? 'bg-red-50 border border-red-300'
                  : 'bg-blue-50 border border-blue-300'
              }`}
            >
              <p
                className={`text-sm ${
                  isCorrectPath
                    ? 'text-green-800'
                    : isComplete
                    ? 'text-red-800'
                    : 'text-blue-800'
                }`}
              >
                {currentFeedback}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-4 flex gap-3">
            {!isComplete && selectedOption !== null && (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Next
              </button>
            )}
            {(isComplete || path.length > 1) && (
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Start Over
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
