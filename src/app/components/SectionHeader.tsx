interface SectionHeaderProps {
  number: number;
  title: string;
  subtitle: string;
  focus: string;
}

export function SectionHeader({ number, title, subtitle, focus }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-2">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center shadow-lg">
          {number}
        </div>
        <div>
          <h2 className="text-gray-900">{title}</h2>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="ml-16 mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-sm">
          <strong className="text-yellow-900">Clinical Focus:</strong>{' '}
          <span className="text-yellow-800">{focus}</span>
        </p>
      </div>
    </div>
  );
}
