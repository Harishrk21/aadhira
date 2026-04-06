import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  metaDescription?: string;
}

const PageHeader = ({ 
  title, 
  subtitle,
  children,
  backgroundImage = "https://images.pexels.com/photos/8363025/pexels-photo-8363025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  metaDescription
}: PageHeaderProps) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | Aadhiraa Paediatric Therapy Services`}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Helmet>
      <div className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-primary-900 bg-opacity-75"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-white mb-4">{title}</h1>
            {subtitle && <p className="text-xl md:text-2xl text-primary-100">{subtitle}</p>}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;