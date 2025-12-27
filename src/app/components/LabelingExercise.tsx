import { useState } from 'react';

interface Point {
  x: number;
  y: number;
  label: string;
  userAnswer: string;
}

interface LabelingExerciseProps {
  imageSrc: string;
  points: Point[];
  onAnswerChange: (index: number, answer: string) => void;
  disabled?: boolean;
}

export function LabelingExercise({ imageSrc, points, onAnswerChange, disabled }: LabelingExerciseProps) {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <p>Click on each numbered point and type the correct anatomical structure:</p>
      <div className="relative inline-block">
        <img src={imageSrc} alt="Anatomical diagram" className="max-w-full h-auto rounded-lg border border-border" />
        {points.map((point, index) => (
          <div
            key={index}
            className="absolute cursor-pointer"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            onClick={() => !disabled && setSelectedPoint(index)}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              selectedPoint === index ? 'bg-blue-600 text-white scale-125' : 
              point.userAnswer ? 'bg-green-500 text-white' : 
              'bg-red-500 text-white'
            } ${disabled ? 'cursor-not-allowed' : 'hover:scale-110'}`}>
              {index + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {points.map((point, index) => (
          <div key={index} className="space-y-1">
            <label className="block">Point {index + 1}:</label>
            <input
              type="text"
              value={point.userAnswer}
              onChange={(e) => onAnswerChange(index, e.target.value)}
              disabled={disabled}
              placeholder="Type structure name..."
              className="w-full p-2 border border-border rounded bg-input-background focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
              onFocus={() => setSelectedPoint(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
