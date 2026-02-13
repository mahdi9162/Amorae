'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'David R.',
    role: 'Son of an elderly parent',
    category: 'Elderly & Senior Care',
    quote: 'Amorae helped my father stay independent and comfortable at home.',
    description: 'The caregiver supported daily routines, mobility, and companionship with genuine patience.',
    rating: 5,
    date: '2 weeks ago',
    avatar: '/m_user1.webp',
  },
  {
    name: 'Sarah M.',
    role: 'Mother of a newborn',
    category: 'Baby & Child Care',
    quote: 'Our caregiver was kind, calm, and made us feel safe from day one.',
    description: 'Feeding routines, hygiene, and baby comfort were handled so thoughtfully — we finally relaxed.',
    rating: 5,
    date: '1 month ago',
    avatar: '/w_user1.webp',
  },
  {
    name: 'Linda K.',
    role: 'Family caregiver',
    category: 'Home Nursing',
    quote: 'The home nurse gave us confidence during recovery at home.',
    description: 'Medication support, monitoring, and clear guidance made a real difference for our family.',
    rating: 4.5,
    date: '3 weeks ago',
    avatar: '/w_user2.webp',
  },
];

const Stars = ({ value = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < value ? 'fill-primary text-primary' : 'text-base-300'}`} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="relative my-12 md:my-16 lg:my-30 py-6 md:py-8 lg:py-10 overflow-hidden px-3 lg:px-0 bg-linear-to-b from-primary/10 via-base-100 to-base-100">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-24 -left-28 h-96 w-96 rounded-full bg-secondary/10 blur-3xl opacity-50" />

      <div className="pointer-events-none absolute -top-20 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.35em] mb-3">• Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-base-content leading-tight">What Families Say</h2>
          <p className="mt-3 text-sm md:text-base text-base-content/60">
            Real stories from parents and families who needed trusted care at home.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="badge badge-outline border-primary/30 text-base-content/70 py-3 px-4 rounded-full">Verified caregivers</span>
            <span className="badge badge-outline border-primary/30 text-base-content/70 py-3 px-4 rounded-full">Home-first support</span>
            <span className="badge badge-outline border-primary/30 text-base-content/70 py-3 px-4 rounded-full">Flexible schedules</span>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="testimonialsSwiper"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="rounded-3xl">
                <div className="relative rounded-3xl border border-secondary/20 bg-base-100 shadow-xl overflow-hidden h-110 sm:h-135 md:h-auto">
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />

                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="badge badge-secondary rounded-full px-4 py-3 max-w-[70%] truncate">{t.category}</span>
                      <span className="text-xs text-base-content/50 whitespace-nowrap">{t.date}</span>
                    </div>

                    <div className="mt-6 flex items-start gap-3">
                      <div className="mt-1 rounded-2xl bg-primary/10 p-2 text-primary shrink-0">
                        <Quote className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-base-content leading-snug line-clamp-3">{t.quote}</h3>
                    </div>

                    <p className="mt-4 text-sm md:text-base text-base-content/70 leading-relaxed line-clamp-4">“{t.description}”</p>

                    <div className="mt-5 flex items-center justify-between">
                      <Stars value={t.rating} />
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {t.rating.toFixed(1)} / 5.0
                      </span>
                    </div>

                    <div className="mt-1 pt-6 pb-8 border-t border-base-300 flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={200}
                          height={200}
                          className="h-12 w-12 rounded-2xl object-cover border border-base-300"
                        />
                        <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary border-2 border-base-100" />
                      </div>

                      <div className="flex-1 min-w-0 ">
                        <p className="font-bold text-base-content leading-tight truncate">{t.name}</p>
                        <p className="text-xs text-base-content/60 truncate">{t.role}</p>
                      </div>

                      <button className="btn btn-secondary btn-sm rounded-xl shrink-0">Read more</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
