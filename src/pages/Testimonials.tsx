import { Link } from 'react-router-dom';
import { Star, ExternalLink, QrCode, MapPin } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';

const Testimonials = () => {
  return (
    <>
      <PageHeader
        title="Testimonials"
        subtitle="Google-style reviews from our families"
        description="See 5-star parent feedback for Arura Therapy Services. Read real stories from families and scan the QR to leave your Google review."
        backgroundImage="https://images.pexels.com/photos/8944024/pexels-photo-8944024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Read success stories from families at Arura Integral Therapy Services — paediatric therapy across Chennai centers including Villivakkam, Valasaravakkam, Chengalpattu, and Nungambakkam."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <SectionTitle
            title="Google Reviews"
            subtitle="Trusted by Chennai families for child-focused therapy care"
          />

          <div className="mb-12 rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-sky-50 p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-neutral-700">
                  <span className="text-lg font-black tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <span>Reviews</span>
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
                  Rated 5.0 by happy parents
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-neutral-700">5.0 average rating</p>
                </div>
                <p className="mt-4 max-w-2xl text-neutral-600">
                  Your support helps other parents discover quality therapy care. Please scan the QR code or click below to post your Google review.
                </p>
                <a
                  href="https://g.page/r/CXIVuNbXNx7OEBM/review"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-xl bg-primary-700 px-5 py-3 font-semibold text-white transition hover:bg-primary-800"
                >
                  Open Review Page
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mx-auto w-full max-w-xs rounded-3xl border border-primary-100 bg-white p-5 text-center shadow-md">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <QrCode className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold text-neutral-800">Google Review QR</p>
                <p className="mt-2 text-xs text-neutral-500">
                  Scan this QR to review us on Google.
                </p>
                <img
                  src="/review.png"
                  alt="Google review page QR code"
                  className="mt-4 w-full rounded-xl border border-neutral-200"
                  loading="lazy"
                />
                <a
                  href="https://g.page/r/CXIVuNbXNx7OEBM/review"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-900"
                >
                  <MapPin className="mr-1 h-4 w-4" />
                  Tap to open review link
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">Google Review</span>
                </div>
                <p className="line-clamp-5 text-sm leading-relaxed text-neutral-700">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-5 border-t border-neutral-100 pt-4">
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-900">
              Need directions before visiting our center?
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-14 md:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary-100 bg-white px-6 py-10 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">Share your review in 30 seconds</h3>
            <p className="mt-3 text-neutral-600">
              Tell other parents how therapy helped your child. Your Google review supports families searching for trusted care.
            </p>
            <a
              href="https://g.page/r/CXIVuNbXNx7OEBM/review"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-xl bg-amber-400 px-6 py-3 font-bold text-primary-950 transition hover:bg-amber-300"
            >
              Write a Google Review
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Testimonials;