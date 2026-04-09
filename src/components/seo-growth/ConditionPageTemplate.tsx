import CTASection from '../ui/CTASection';
import RelatedServices from './RelatedServices';

interface ConditionPageTemplateProps {
  title: string;
  symptoms: string[];
  causes: string[];
  therapyApproach: string[];
  relatedServiceSlugs: string[];
}

const ConditionPageTemplate = ({
  title,
  symptoms,
  causes,
  therapyApproach,
  relatedServiceSlugs,
}: ConditionPageTemplateProps) => (
  <>
    <section className="bg-white py-16">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-neutral-900">Symptoms</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">{symptoms.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2 className="mt-10 text-2xl font-bold text-neutral-900">Causes</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">{causes.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2 className="mt-10 text-2xl font-bold text-neutral-900">Therapy Approach for {title}</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">{therapyApproach.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="mt-10"><RelatedServices slugs={relatedServiceSlugs} /></div>
      </div>
    </section>
    <CTASection title={`Support for ${title}`} subtitle="Book an assessment to get a clear intervention plan." />
  </>
);

export default ConditionPageTemplate;
