import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}
