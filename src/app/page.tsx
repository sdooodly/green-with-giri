import { Hero } from '@/components/Hero';
import { EducationRibbon } from '@/components/EducationRibbon';
import { Catalog } from '@/components/Catalog';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

export default function Home() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <EducationRibbon />
        <Catalog />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
