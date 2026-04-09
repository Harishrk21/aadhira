import { Link } from 'react-router-dom';
import CTASection from '../ui/CTASection';

interface ServiceFaq {
  q: string;
  a: string;
}

interface ServicePageTemplateProps {
  title: string;
  intro: string;
  benefits: string[];
  whoNeedsThis: string[];
  process: { title: string; description: string }[];
  faq: ServiceFaq[];
}

const ServicePageTemplate = ({
  title,
  intro,
  benefits,
  whoNeedsThis,
  process,
  faq,
}: ServicePageTemplateProps) => (
  <>
    <section className="bg-white py-16">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-neutral-900">Intro to {title}</h2>
        <p className="mt-3 text-neutral-700">{intro}</p>

        <h2 className="mt-10 text-2xl font-bold text-neutral-900">Benefits</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">{benefits.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2 className="mt-10 text-2xl font-bold text-neutral-900">Who needs this</h2>
        <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">{whoNeedsThis.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2 className="mt-10 text-2xl font-bold text-neutral-900">Therapy process</h2>
        <div className="mt-3 space-y-3">{process.map((step) => <div key={step.title} className="rounded-xl border border-primary-100 p-4"><h3 className="font-semibold text-neutral-900">{step.title}</h3><p className="text-neutral-700 text-sm">{step.description}</p></div>)}</div>

        <h2 className="mt-10 text-2xl font-bold text-neutral-900">FAQ</h2>
        <div className="mt-3 space-y-2">{faq.map((item) => <details key={item.q} className="rounded-xl border border-primary-100 p-4"><summary className="font-semibold text-neutral-900 cursor-pointer">{item.q}</summary><p className="mt-2 text-neutral-700 text-sm">{item.a}</p></details>)}</div>

        <div className="mt-8 text-sm text-neutral-600">
          Looking for related reading? Visit our <Link to="/blog" className="text-primary-700 font-semibold hover:underline">problem-based blog guides</Link> or see <Link to="/testimonials" className="text-primary-700 font-semibold hover:underline">trust-based parent reviews</Link>.
        </div>
      </div>
    </section>
    <CTASection title={`Book ${title}`} subtitle="Talk to our team and get a personalized therapy plan." />
  </>
);

export default ServicePageTemplate;
