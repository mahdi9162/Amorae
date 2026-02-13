'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    src: '/banner1.webp',
    alt: 'Amorae Banner 1',
    title: 'Compassionate care for your loved ones.',
    description: 'Trusted home nursing and elderly care services — delivered with dignity, comfort, and kindness.',
    cta: 'Book a nurse',
    secondary_cta: 'View nursing services',
  },
  {
    src: '/banner2.webp',
    alt: 'Amorae Banner 2',
    title: 'Gentle and trusted care for your little ones.',
    description: 'Trained caregivers to support your baby’s daily care, safety and comfort — so you can stay stress-free and confident.',
    cta: 'Find a caregiver',
    secondary_cta: 'View childcare services',
  },
  {
    src: '/banner3.webp',
    alt: 'Amorae Banner 3',
    title: 'Keep them together. Keep them safe.',
    description: 'Trusted in-home support for seniors — so comfort, dignity, and companionship stay part of everyday life.',
    cta: 'Book a nurse',
    secondary_cta: 'View elderly care',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={700}
      loop
      className="rounded-2xl relative lg:top-14 md:border md:border-secondary/20 "
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="rounded-2xl bg-white/95">
            <div className="grid lg:grid-cols-2 items-center gap-6 md:gap-10 px-3 pb-10 pt-4 lg:p-14">
              {/* TEXT */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <div className="h-30 md:h-auto">
                  <h1 className="text-xl md:text-4xl lg:text-5xl max-w-140 md:max-w-120 lg:max-w-140 mx-auto lg:mx-0 font-bold leading-tight text-gray-900">
                    {slide.title}
                  </h1>

                  <p className="mt-3 md:mt-4 text-xs md:text-base lg:text-lg text-gray-600 max-w-xl md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                </div>

                <div className="mt-5 md:mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button className="rounded-xl bg-secondary px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition active:scale-95 cursor-pointer">
                    {slide.cta}
                  </button>

                  <button className="rounded-xl border border-secondary/20 bg-white px-7 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition active:scale-95 cursor-pointer">
                    {slide.secondary_cta}
                  </button>
                </div>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1100}
                    height={800}
                    priority={i === 0}
                    className="w-full h-55 md:h-70 lg:h-130 object-cover md:object-fill lg:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
