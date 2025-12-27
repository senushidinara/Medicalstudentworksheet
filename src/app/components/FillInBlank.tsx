interface FillInBlankProps {
  question: string;
  answer: string;
  onAnswerChange: (answer: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function FillInBlank({ question, answer, onAnswerChange, disabled, placeholder = "Type your answer..." }: FillInBlankProps) {
  return (
    <div className="space-y-3">
      <p>{question}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full p-3 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
      />
    </div>
  );
}
