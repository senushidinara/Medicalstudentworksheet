import { ReactNode } from 'react';

interface ClinicalCaseProps {
  title: string;
  scenario: string;
  children: ReactNode;
}

export function ClinicalCase({ title, scenario, children }: ClinicalCaseProps) {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-blue-900 mb-2">{title}</h4>
        <p className="text-blue-800">{scenario}</p>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}
