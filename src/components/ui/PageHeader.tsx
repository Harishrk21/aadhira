import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
  metaDescription?: string;
}

const PageHeader = ({ 
  title, 
  subtitle,
  description,
  children,
  backgroundImage = "https://images.pexels.com/photos/8363025/pexels-photo-8363025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  metaDescription
}: PageHeaderProps) => {
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
                <p className="mb-4 inline-flex items-center rounded-full border border-amber-400/50 bg-amber-100/80 px-4 py-1.5 text-sm font-semibold text-amber-900 shadow-sm">
                  Child-focused therapy support
                </p>
                <h1 className="mb-5 text-primary-950">{title}</h1>
                {subtitle && (
                  <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-neutral-700 lg:mx-0 lg:max-w-2xl">
                    {subtitle}
                  </p>
                )}
                {description && (
                  <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-neutral-600 lg:mx-0">
                    {description}
                  </p>
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

                  <div className="relative z-30 mx-auto mt-4 max-w-md rounded-2xl border border-primary-200/60 bg-white/70 px-4 py-3 text-center shadow-md backdrop-blur-md sm:px-5">
                    <p className="font-heading text-base font-bold text-primary-950 md:text-lg">Arura Integral Therapy Services</p>
                    <p className="mt-1 flex items-center justify-center gap-2 text-sm text-neutral-700">
                      <MapPin className="h-4 w-4 shrink-0 text-primary-600" />
                      Villivakkam, Chennai
                    </p>
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