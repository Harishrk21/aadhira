import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';

const galleryItems = [
  {
    id: 1,
    title: 'Arura Centre Exterior',
    image: '/gallery/open_nag.png',
  },
  {
    id: 2,
    title: 'Centre Front View',
    image: '/gallery/open_nag2.png',
  },
  {
    id: 3,
    title: 'Centre Entrance',
    image: '/gallery/open_nag3.png',
  },
  {
    id: 4,
    title: 'Facility Exterior',
    image: '/gallery/open_nag4.png',
  },
  {
    id: 5,
    title: 'Center Exterior Angle',
    image: '/gallery/open_nag5.png',
  },
  {
    id: 6,
    title: 'Outdoor View',
    image: '/gallery/open_nag6.png',
  },
  {
    id: 7,
    title: 'Main Exterior',
    image: '/gallery/open_nag7.png',
  },
  {
    id: 8,
    title: 'Interior Therapy Room',
    image: '/gallery/interior2.png',
  },
  {
    id: 9,
    title: 'Interior Setup',
    image: '/gallery/int3.png',
  },
  {
    id: 10,
    title: 'Interior Session Space',
    image: '/gallery/int4.png',
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openViewer = (index: number) => setActiveIndex(index);
  const closeViewer = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((prev) => (prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length));
  const showNext = () => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % galleryItems.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Inside our therapy sessions"
        description="A quick look at our child-friendly environment, activities, and therapy moments."
        backgroundImage="https://images.pexels.com/photos/8363025/pexels-photo-8363025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Gallery of Arura Paediatric Therapy Services in Chennai."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <SectionTitle
            title="Our Gallery"
            subtitle="Therapy spaces, sessions, and real learning moments"
          />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openViewer(index)}
                className="group relative overflow-hidden rounded-2xl border border-primary-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img src={item.image} alt={item.title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-950/70 to-transparent p-3">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-3 sm:p-6">
          <button
            type="button"
            onClick={closeViewer}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-3 sm:left-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="w-full max-w-5xl">
            <img
              src={galleryItems[activeIndex].image}
              alt={galleryItems[activeIndex].title}
              className="max-h-[82vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-3 text-center text-sm font-medium text-white/90">{galleryItems[activeIndex].title}</p>
          </div>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 sm:right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      <CTASection />
    </>
  );
};

export default Gallery;
