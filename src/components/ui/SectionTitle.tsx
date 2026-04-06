import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  children?: ReactNode;
  titleColor?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  children,
  titleColor = 'text-neutral-900'
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className={`${titleColor} mb-4`}>{title}</h2>
      {subtitle && <p className="text-lg text-neutral-600">{subtitle}</p>}
      {children}
    </div>
  );
};

export default SectionTitle;