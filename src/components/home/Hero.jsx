import React from 'react';
import Container from '../container/Container';
import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <section className="relative bg-primary">
      <Container>
        <div className="px-3 lg:px-0 py-6 ">
          <HeroSlider />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
