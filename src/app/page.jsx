import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/ServicesOverview';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </>
  );
}
