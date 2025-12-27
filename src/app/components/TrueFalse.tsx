interface TrueFalseProps {
  question: string;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
  disabled?: boolean;
}

export function TrueFalse({ question, selectedAnswer, onAnswerSelect, disabled }: TrueFalseProps) {
  return (
    <div className="space-y-3">
      <p>{question}</p>
      <div className="flex gap-4">
        {['True', 'False'].map((option) => (
          <label
            key={option}
            className={`flex-1 flex items-center justify-center gap-3 p-3 border border-border rounded-lg cursor-pointer transition-colors hover:bg-accent ${
              selectedAnswer === option ? 'bg-accent border-primary' : ''
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <input
              type="radio"
              name={question}
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => onAnswerSelect(e.target.value)}
              disabled={disabled}
              className="w-4 h-4"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
