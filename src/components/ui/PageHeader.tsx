import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
  metaDescription?: string;
  eyebrowText?: string;
  showFramework?: boolean;
  frameworkSummary?: string;
  frameworkIdeas?: Array<{ label: string; text: string }>;
}

const HEADER_IDEAS: Array<{ icon: JSX.Element; label: string; text: string }> = [
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    label: 'Clinical Clarity',
    text: 'Assessment-driven planning for focused outcomes',
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    label: 'Visible Progress',
    text: 'Goals reviewed and refined as your child grows',
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    label: 'Family Partnership',
    text: 'Home + therapy alignment for stronger carryover',
  },
];

const DEFAULT_FRAMEWORK_SUMMARY = 'At Arura, each therapy path combines clinical precision, play-based engagement, and family-led carryover so children can build meaningful skills that transfer into everyday life.';

const highlightKeywords = (text: string) => {
  const keywords = [
    'therapy', 'support', 'assessment', 'progress', 'development',
    'learning', 'communication', 'behaviour', 'independence', 'family',
    'intervention', 'evidence-based', 'goals', 'children', 'child',
  ];

  const escapedKeywords = keywords
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`\\b(${escapedKeywords})\\b`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, idx) => (
    keywords.includes(part.toLowerCase()) ? (
      <span key={`${part}-${idx}`} className="font-semibold text-primary-800">
        {part}
      </span>
    ) : (
      <span key={`${part}-${idx}`}>{part}</span>
    )
  ));
};

const PageHeader = ({ 
  title, 
  subtitle,
  description,
  children,
  backgroundImage = "https://images.pexels.com/photos/8363025/pexels-photo-8363025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  metaDescription,
  eyebrowText = 'Child-focused therapy support',
  showFramework = true,
  frameworkSummary = DEFAULT_FRAMEWORK_SUMMARY,
  frameworkIdeas,
}: PageHeaderProps) => {
  const ideasToShow = (frameworkIdeas ?? HEADER_IDEAS.map((item) => ({
    label: item.label,
    text: item.text,
  }))).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${title} | Arura Integral Therapy Services`}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Helmet>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-sky-50/90 to-primary-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,151,255,0.25),transparent)]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-primary-300/30 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A7FEB' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 w-full pt-28 pb-14 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
          <div className="rounded-[2rem] border border-white/80 bg-white/45 p-6 shadow-[0_8px_40px_rgba(26,127,235,0.12)] backdrop-blur-2xl ring-1 ring-primary-200/50 md:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="text-center lg:text-left">
                {eyebrowText && (
                  <p className="mb-4 inline-flex items-center rounded-full border border-amber-400/50 bg-amber-100/80 px-4 py-1.5 text-sm font-semibold text-amber-900 shadow-sm">
                    {eyebrowText}
                  </p>
                )}
                <h1 className="mb-5 text-primary-950">{title}</h1>
                {subtitle && (
                  <p className="mx-auto mb-5 max-w-xl text-lg leading-relaxed text-neutral-700 lg:mx-0 lg:max-w-2xl">
                    {highlightKeywords(subtitle)}
                  </p>
                )}
                {description && (
                  <p className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-neutral-600 lg:mx-0">
                    {highlightKeywords(description)}
                  </p>
                )}
                {showFramework && (subtitle || description) && (
                  <>
                    <p className="mx-auto mb-4 max-w-2xl rounded-xl border border-primary-100/80 bg-white/75 px-4 py-3 text-sm leading-relaxed text-neutral-700 shadow-sm lg:mx-0">
                      {frameworkSummary}
                    </p>
                    <div className="mx-auto mb-6 grid max-w-2xl gap-3 sm:grid-cols-3 lg:mx-0">
                      {ideasToShow.map((item, index) => (
                        <div key={item.label} className="rounded-xl border border-primary-100 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
                          <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary-700">
                            {index === 0 && <ShieldCheck className="h-4 w-4" />}
                            {index === 1 && <TrendingUp className="h-4 w-4" />}
                            {index === 2 && <Sparkles className="h-4 w-4" />}
                            {item.label}
                          </p>
                          <p className="text-xs leading-relaxed text-neutral-600">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {children && <div className="mb-6">{children}</div>}

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-primary-950 shadow-md shadow-amber-600/15 transition hover:bg-amber-300"
                  >
                    Book a consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-primary-300/80 bg-white/70 px-6 py-3 text-sm font-semibold text-primary-900 shadow-sm backdrop-blur-sm transition hover:border-primary-400 hover:bg-white"
                  >
                    Contact our team
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="relative">
                  <div className="absolute -inset-8 z-0 rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-sky-200/55 via-primary-300/40 to-primary-500/45 shadow-[inset_0_2px_24px_rgba(255,255,255,0.45)] backdrop-blur-3xl" />
                  <div className="absolute -inset-4 z-0 rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.5)_0%,rgba(59,151,255,0.12)_45%,rgba(14,116,200,0.18)_100%)] opacity-90" />

                  <div className="relative z-10 overflow-hidden rounded-[1.75rem] border border-white/90 bg-white/25 shadow-2xl ring-1 ring-primary-200/50 backdrop-blur-md">
                    <img
                      src={backgroundImage}
                      alt={`${title} at Arura Integral Therapy Services`}
                      className="relative z-[1] aspect-[4/3] w-full object-cover object-center md:aspect-[5/4]"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-primary-600/20 via-transparent to-sky-300/25 mix-blend-soft-light" />
                    <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-primary-900/20 via-transparent to-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;