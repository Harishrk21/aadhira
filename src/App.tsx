import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { seoLandingPages } from './data/seoLandingPagesData';

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Thrive = lazy(() => import('./pages/Thrive.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.tsx'));
const Programs = lazy(() => import('./pages/Programs.tsx'));
const ProgramDetail = lazy(() => import('./pages/ProgramDetail.tsx'));
const ParentPrograms = lazy(() => import('./pages/ParentPrograms.tsx'));
const Conditions = lazy(() => import('./pages/Conditions.tsx'));
const ConditionDetail = lazy(() => import('./pages/ConditionDetail.tsx'));
const Testimonials = lazy(() => import('./pages/Testimonials.tsx'));
const Gallery = lazy(() => import('./pages/Gallery.tsx'));
const Blog = lazy(() => import('./pages/Blog.tsx'));
const BlogDetail = lazy(() => import('./pages/BlogDetail.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const BookAppointment = lazy(() => import('./pages/BookAppointment.tsx'));
const LocationDetail = lazy(() => import('./pages/LocationDetail.tsx'));
const Glossary = lazy(() => import('./pages/Glossary.tsx'));
const GlossaryDetail = lazy(() => import('./pages/GlossaryDetail.tsx'));
const SeoLandingDetail = lazy(() => import('./pages/SeoLandingDetail.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/thrive" element={<Thrive />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/parent-programs" element={<ParentPrograms />} />
          <Route path="/parent-programs/:slug" element={<Navigate to="/parent-programs" replace />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/conditions/:slug" element={<ConditionDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:slug" element={<LocationDetail />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/glossary/:slug" element={<GlossaryDetail />} />
          {seoLandingPages.map((page) => (
            <Route key={page.slug} path={`/${page.slug}`} element={<SeoLandingDetail />} />
          ))}
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
