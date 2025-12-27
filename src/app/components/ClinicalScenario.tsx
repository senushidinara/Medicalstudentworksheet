import { useState } from 'react';

interface ClinicalScenarioProps {
  scenario: string;
  question: string;
  answer: string;
  explanation?: string;
  userAnswer?: string;
  onAnswerChange?: (answer: string) => void;
  showAnswer?: boolean;
  disabled?: boolean;
}

export function ClinicalScenario({ 
  scenario, 
  question, 
  answer, 
  explanation,
  userAnswer,
  onAnswerChange,
  showAnswer,
  disabled
}: ClinicalScenarioProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="space-y-4">
      {/* Scenario Box */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center">
            🏥
          </div>
          <div>
            <h4 className="text-purple-900 mb-2">Clinical Scenario</h4>
            <p className="text-purple-800">{scenario}</p>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <p className="mb-3">{question}</p>
        
        {!showAnswer ? (
          <input
            type="text"
            value={userAnswer || ''}
            onChange={(e) => onAnswerChange?.(e.target.value)}
            disabled={disabled}
            placeholder="Type your answer..."
            className="w-full p-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
          />
        ) : (
          <div className="space-y-3">
            {userAnswer && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-600">Your answer:</p>
                <p className="text-blue-900">{userAnswer}</p>
              </div>
            )}
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p className="text-green-900">
                <strong>Correct Answer:</strong> {answer}
              </p>
              {explanation && (
                <p className="mt-2 text-green-800 text-sm">
                  <strong>Explanation:</strong> {explanation}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
