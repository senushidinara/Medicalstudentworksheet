interface MultipleChoiceProps {
  question: string;
  options: string[];
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
  disabled?: boolean;
}

export function MultipleChoice({ question, options, selectedAnswer, onAnswerSelect, disabled }: MultipleChoiceProps) {
  return (
    <div className="space-y-3">
      <p>{question}</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer transition-colors hover:bg-accent ${
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
