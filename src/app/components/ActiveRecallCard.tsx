import { useState } from 'react';

interface ActiveRecallCardProps {
  question: string;
  answer: string;
  hint?: string;
  disabled?: boolean;
}

export function ActiveRecallCard({ question, answer, hint, disabled }: ActiveRecallCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000">
      <div 
        className={`relative w-full min-h-[200px] transition-all duration-500 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => !disabled && setIsFlipped(!isFlipped)}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Question Side */}
        <div 
          className={`absolute w-full h-full bg-blue-50 border-2 border-blue-300 rounded-lg p-6 backface-hidden ${
            isFlipped ? 'invisible' : 'visible'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                ?
              </div>
              <div className="flex-1">
                <h4 className="text-blue-900 mb-2">Active Recall</h4>
                <p className="text-blue-800">{question}</p>
              </div>
            </div>
            {hint && (
              <div className="mt-auto pt-4 border-t border-blue-200">
                <p className="text-sm text-blue-600">💡 Hint: {hint}</p>
              </div>
            )}
            <div className="mt-4 text-center">
              <p className="text-sm text-blue-600">Click to reveal answer →</p>
            </div>
          </div>
        </div>

        {/* Answer Side */}
        <div 
          className={`absolute w-full h-full bg-green-50 border-2 border-green-300 rounded-lg p-6 ${
            isFlipped ? 'visible' : 'invisible'
          }`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                ✓
              </div>
              <div className="flex-1">
                <h4 className="text-green-900 mb-2">Answer</h4>
                <p className="text-green-800">{answer}</p>
              </div>
            </div>
            <div className="mt-auto text-center">
              <p className="text-sm text-green-600">Click to see question again →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
