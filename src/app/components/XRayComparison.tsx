import { useState } from 'react';

interface Finding {
  id: string;
  label: string;
  description: string;
  isCorrect: boolean;
}

interface XRayComparisonProps {
  title: string;
  normalImage: string;
  abnormalImage: string;
  findings: Finding[];
  question: string;
  userAnswer?: string;
  onAnswerSelect?: (findingId: string) => void;
  showResults?: boolean;
}

export function XRayComparison({
  title,
  normalImage,
  abnormalImage,
  findings,
  question,
  userAnswer,
  onAnswerSelect,
  showResults,
}: XRayComparisonProps) {
  const [activeImage, setActiveImage] = useState<'normal' | 'abnormal'>('abnormal');

  const correctFinding = findings.find((f) => f.isCorrect);
  const selectedFinding = findings.find((f) => f.id === userAnswer);

  return (
    <div className="space-y-4">
      <h4 className="text-gray-900">{title}</h4>

      {/* Image viewer */}
      <div className="bg-black rounded-lg p-4">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setActiveImage('normal')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeImage === 'normal'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Normal X-Ray
          </button>
          <button
            onClick={() => setActiveImage('abnormal')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeImage === 'abnormal'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Patient X-Ray
          </button>
        </div>

        <div className="relative bg-gray-900 rounded">
          <img
            src={activeImage === 'normal' ? normalImage : abnormalImage}
            alt={activeImage === 'normal' ? 'Normal X-Ray' : 'Patient X-Ray'}
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <p className="mb-3">{question}</p>

        {/* Findings options */}
        <div className="space-y-2">
          {findings.map((finding) => (
            <label
              key={finding.id}
              className={`flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                userAnswer === finding.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:bg-gray-50'
              } ${showResults && finding.isCorrect ? 'border-green-500 bg-green-50' : ''} ${
                showResults && userAnswer === finding.id && !finding.isCorrect
                  ? 'border-red-500 bg-red-50'
                  : ''
              }`}
            >
              <input
                type="radio"
                name="xray-finding"
                value={finding.id}
                checked={userAnswer === finding.id}
                onChange={() => onAnswerSelect?.(finding.id)}
                disabled={showResults}
                className="mt-1"
              />
              <div className="flex-1">
                <p className="font-medium">{finding.label}</p>
                {showResults && finding.isCorrect && (
                  <p className="text-sm text-green-700 mt-1">{finding.description}</p>
                )}
              </div>
            </label>
          ))}
        </div>

        {/* Results */}
        {showResults && selectedFinding && !selectedFinding.isCorrect && (
          <div className="mt-4 p-3 bg-green-50 border border-green-300 rounded">
            <p className="text-green-900">
              <strong>Correct Answer:</strong> {correctFinding?.label}
            </p>
            <p className="text-sm text-green-800 mt-1">{correctFinding?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
