import { ReactNode } from 'react';

interface QuestionCardProps {
  number: number;
  children: ReactNode;
  userAnswer?: string;
  correctAnswer?: string;
  showResults?: boolean;
}

export function QuestionCard({ number, children, userAnswer, correctAnswer, showResults }: QuestionCardProps) {
  const isCorrect = showResults && userAnswer && correctAnswer && userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
  const isIncorrect = showResults && userAnswer && correctAnswer && userAnswer.toLowerCase().trim() !== correctAnswer.toLowerCase().trim();

  return (
    <div className={`bg-card border border-border rounded-lg p-6 transition-colors ${
      isCorrect ? 'border-green-500 bg-green-50' : 
      isIncorrect ? 'border-red-500 bg-red-50' : ''
    }`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isCorrect ? 'bg-green-500 text-white' : 
          isIncorrect ? 'bg-red-500 text-white' : 
          'bg-primary text-primary-foreground'
        }`}>
          {number}
        </div>
        <div className="flex-1">
          {children}
          {showResults && isIncorrect && correctAnswer && (
            <div className="mt-3 p-3 bg-green-100 border border-green-300 rounded">
              <p className="text-green-800">
                <strong>Correct answer:</strong> {correctAnswer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
