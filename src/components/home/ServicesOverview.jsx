import React from 'react';
import Container from '../container/Container';
import { Baby, HeartPulse, ShieldPlus, Users, ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import { collections, dbConnect } from '@/app/lib/dbConnect';

const iconMap = { Baby, HeartPulse, ShieldPlus, Users };
const getServices = async () => {
  const col = await dbConnect(collections.SERVICES);
  const services = await col.find({}).toArray();
  return services;
};

const ServicesOverview = async () => {
  const services = await getServices();

  return (
    <section className="relative my-12 md:my-16 lg:my-30 overflow-hidden bg-base-100 px-3 lg:px-0">
      <Container>
        {/* Header */}
        <div className="relative mx-auto mb-10 md:mb-14 max-w-3xl text-center">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-2 md:mb-4">• Our Services</p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-base-content leading-tight">Services Overview</h2>

          <p className="mt-2 md:mt-4 text-xs md:text-base text-base-content/60 leading-relaxed">
            Baby care to elderly support — compassionate, trusted care for every family.
          </p>

          {/* chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="badge badge-outline border-secondary/30 text-base-content/70 py-3 px-4 rounded-2xl">Verified caregivers</span>
            <span className="badge badge-outline border-secondary/30 text-base-content/70 py-3 px-4 rounded-2xl">Flexible schedules</span>
            <span className="badge badge-outline border-secondary/30 text-base-content/70 py-3 px-4 rounded-2xl">Home-first support</span>
          </div>
        </div>
        {/* Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || ShieldPlus;

            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden rounded-[36px] bg-base-100/70 backdrop-blur-xl  border border-secondary/10 p-7 md:p-8 shadow-sm transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25"
              >
                {/* top accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-primary/30 group-hover:bg-primary transition-colors" />

                {/* subtle corner highlight */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Tag */}
                <div className="flex items-center justify-between">
                  <span className="badge badge-secondary badge-sm rounded-xl px-3 py-3">{service.tag}</span>

                  <span className="group-hover:underline duration-700 inline-flex items-center gap-1 text-xs font-bold text-primary/80 cursor-pointer">
                    View <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-6 mb-6">
                  <div
                    className="
                      w-14 h-14 rounded-3xl
                      bg-primary/10 text-primary
                      flex items-center justify-center
                      ring-1 ring-primary/10
                      group-hover:bg-primary group-hover:text-white
                      group-hover:ring-primary/30
                      transition-all duration-700
                    "
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="h-30">
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-base-content leading-snug">{service.title}</h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-base-content/60 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Check className="w-4 h-4" />
                      </span>
                      <p className="text-sm font-semibold text-base-content/80">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/service/${service._id}`}
                  className="
                    mt-8 w-full rounded-2xl py-4
                    font-bold text-sm btn
                    border border-primary/15
                    bg-primary/5 text-primary
                    group-hover:bg-primary group-hover:text-white
                    transition-all duration-700
                    active:scale-[0.98] cursor-pointer
                  "
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
