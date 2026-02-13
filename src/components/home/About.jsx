import React from 'react';
import Container from '../container/Container';
import Image from 'next/image';

const collapseTexts = [
  {
    heading: 'Baby & Child Care Support',
    title: 'Trained caregivers for newborns and children, helping with daily routines, safety, feeding and attentive supervision at home.',
  },
  {
    heading: 'Elderly & Senior Care',
    title: 'Compassionate in-home support for seniors, focusing on comfort, dignity, companionship and daily assistance.',
  },
  {
    heading: 'Trained & Verified Caregivers',
    title:
      'All caregivers are carefully screened, trained and continuously supported to ensure safe and reliable care for your loved ones.',
  },
  {
    heading: 'Flexible Home Nursing Services',
    title: 'Professional nursing support at home for recovery, medication assistance and health monitoring — based on your family’s needs.',
  },
  {
    heading: 'Personalised Care Planning',
    title:
      'Every family receives a tailored care plan, matching the right caregiver, schedule and support level for both children and seniors.',
  },
];

const About = () => {
  return (
    <section className="my-10 md:my-16 lg:my-30 overflow-hidden bg-base-100 px-3 lg:px-0">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="space-y-4 lg:space-y-6">
            <p className="text-sm font-medium text-primary">• About Us</p>

            <div className="space-y-3">
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold leading-tight text-base-content">
                Personalized Home Care for
                <span className="block">Every Stage of Life</span>
              </h2>

              <p className="text-xs md:text-base text-base-content/70 max-w-xl">
                We support families with trusted baby care, elderly care, and home nursing — delivered with compassion, comfort, and
                professional caregivers.
              </p>
            </div>

            {/* Expertise header line */}
            <div className="flex items-center gap-4 pt-2">
              <p className="text-sm font-semibold text-base-content/70">Expertise</p>
              <div className="h-px flex-1 bg-secondary/30" />
            </div>

            {/* List */}
            <div className="space-y-3">
              {collapseTexts.map((t, i) => (
                <div key={i} tabIndex={0} className="collapse collapse-plus bg-base-100 border border-secondary/20 rounded-2xl">
                  <div className="collapse-title font-semibold text-base-content flex items-center gap-3">
                    <span className="text-primary font-bold w-8">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 text-sm">{t.heading}</span>
                  </div>
                  <div className="collapse-content text-xs md:text-sm text-base-content/70">{t.title}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="btn btn-secondary rounded-xl px-6">Learn More</button>
            </div>
          </div>

          {/* RIGHT - Image Grid */}
          <div className="relative flex-1 w-full max-w-xl md:mx-auto lg:ml-auto h-auto md:h-150 mt-12 md:mt-0">
            {/* female */}
            <div className="relative md:absolute left-0 md:left-0 top-0 md:top-20 w-full md:w-[45%] aspect-3/4 rounded-3xl overflow-hidden shadow-2xl bg-primary/20 hover:translate-y-1 duration-500 mb-6 md:mb-0">
              <Image src="/femaleNurse.webp" alt="Female Caregiver" fill className="object-cover" />

              {/* static box */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-lg text-white">
                <h3 className="text-2xl font-bold">
                  5,000+ <span className="block text-sm">Families Supported.</span>
                </h3>
                <p className="text-xs opacity-80">Trusted home care for seniors and children.</p>
              </div>
            </div>

            {/* Male */}
            <div className="relative md:absolute right-0 md:right-0 top-0 md:top-0 w-full md:w-[52%] aspect-3/4 rounded-3xl overflow-hidden shadow-2xl md:border-8 md:border-white bg-primary/20 hover:translate-y-1 duration-500">
              <Image src="/maleNurse.webp" alt="Male Caregiver" fill className="object-cover" />

              {/* static box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white">
                <p className="text-[10px] uppercase tracking-wider font-bold mb-1">• PERSONALIZED CARE</p>

                <p className="text-xs font-bold leading-tight opacity-90 mb-1">Care plans tailored for every family</p>

                <p className="text-[11px] leading-tight opacity-90">
                  From baby care to elderly support — we match you with trained caregivers based on your needs, schedule and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
