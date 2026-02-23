import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Clock3, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import Container from '@/components/container/Container';
import { dbConnect, collections } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';

const getSingleService = async (id) => {
  const col = dbConnect(collections.SERVICES);
  return await col.findOne({ _id: new ObjectId(id) });
};

const ServiceDetailPage = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service) return <h2>Service not found</h2>;
  return (
    <div className="bg-base-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-130 w-130 rounded-full bg-primary/10 blur-3xl" />

        <Container>
          <div className="mx-auto px-3 md:px-6 pt-10 md:pt-14 pb-8 md:pb-12">
            {/* breadcrumb */}
            <div className="text-sm breadcrumbs text-base-content/60">
              <ul>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary">
                    Services
                  </Link>
                </li>
                <li className="text-base-content">{service.title}</li>
              </ul>
            </div>

            <div className="mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="badge badge-secondary text-xs md:text-sm rounded-full px-4 py-3">{service.tag}</span>
                  <span className="badge badge-outline text-xs md:text-sm border-primary/20 text-base-content/70 rounded-full px-4 py-3">
                    Home-first support
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-base-content">{service.title}</h1>

                <p className="text-sm md:text-base text-base-content/70 leading-relaxed max-w-xl">{service.description}</p>

                {/* quick highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="badge badge-outline border-base-300 rounded-full px-4 py-3 gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Verified caregivers
                  </span>
                  <span className="badge badge-outline border-base-300 rounded-full px-4 py-3 gap-2">
                    <Clock3 className="h-4 w-4 text-primary" />
                    Flexible schedules
                  </span>
                  <span className="badge badge-outline border-base-300 rounded-full px-4 py-3 gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Personalized care
                  </span>
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  {/* Requirement: Book Service -> Booking/Login */}
                  <Link href={`/booking/${service._id}`} className="btn btn-primary rounded-2xl px-7">
                    {service.details.ctaPrimary}
                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <Link href="/contact" className="btn btn-secondary rounded-2xl px-7">
                    {service.details.ctaSecondary}
                  </Link>
                </div>
              </div>

              {/* Right image card */}
              <div className="relative">
                <div className="absolute -top-8 -left-8 h-44 w-44 rounded-3xl bg-primary/10 blur-2xl" />
                <div className="rounded-[34px] border border-base-300 bg-base-100 shadow-xl overflow-hidden">
                  <div className="relative aspect-4/3 md:aspect-16/11">
                    <Image src={service.heroImage} alt={service.title} fill className="object-cover" priority />
                  </div>

                  {/* bottom info bar */}
                  <div className="p-5 md:p-6">
                    <p className="text-sm md:text-base text-justify text-base-content/80 leading-relaxed">
                      {service.details.longDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.details.availability.map((available) => (
                        <span
                          key={available}
                          className="badge bg-secondary/50 text-white text-xs md:text-sm border-primary/20 rounded-full px-4 py-3"
                        >
                          {available}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="mx-auto mt-20 px-3 md:px-6 pb-14 md:pb-18">
        <Container>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Included */}
              <div className="rounded-3xl border border-base-300 bg-base-100 p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-base-content mb-4">What’s included</h2>

                <div className="grid sm:grid-cols-2 gap-3">
                  {service.details.included.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-secondary/10 bg-base-100 p-4">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-xs md:text-sm text-base-content/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div className="rounded-3xl border border-base-300 bg-base-100 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-base-content mb-4">How it works</h2>

                <div className="space-y-3">
                  {service.details.howItWorks.map((step, i) => (
                    <div key={step} className="flex items-start gap-4 rounded-2xl border border-secondary/8 bg-base-100 p-4">
                      <div className="h-8 md:h-9 w-12 md:w-9 rounded-2xl bg-primary/10 text-xs md:text-base text-primary font-bold flex items-center justify-center">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <p className="text-xs md:text-sm text-base-content/70 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 ">
                  <Link href="/booking" className="btn btn-primary rounded-2xl">
                    Book Service
                  </Link>
                </div>
              </div>

              {/* FAQs */}
              <div className="rounded-3xl border border-base-300 bg-base-100 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-base-content mb-4">FAQs</h2>

                <div className="space-y-3">
                  {service.details.faqs.map((f, idx) => (
                    <div key={idx} tabIndex={0} className="collapse collapse-plus rounded-2xl border border-secondary/10 bg-base-100">
                      <div className="collapse-title font-semibold text-sm md:text-base text-base-content">{f.q}</div>
                      <div className="collapse-content text-xs md:text-sm text-base-content/70 leading-relaxed">{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Ideal for */}
              <div className="rounded-3xl border border-base-300 bg-base-100 p-4 md:p-7">
                <h3 className="text-lg font-bold text-base-content mb-3">Ideal for</h3>
                <div className="flex flex-wrap gap-2">
                  {service.details.idealFor.map((x) => (
                    <span
                      key={x}
                      className="badge badge-outline border-primary/20 text-base-content/70 text-xs md:text-sm w-full rounded-full px-4 py-3"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              {/* Safety & trust */}
              <div className="rounded-3xl border border-base-300 bg-base-100 p-6 md:p-7">
                <h3 className="text-lg font-bold text-base-content mb-3">Safety & trust</h3>
                <ul className="space-y-3">
                  {service.details.safetyTrust.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <span className="mt-1 h-6 w-6 rounded-xl bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </span>
                      <p className="text-sm text-base-content/70 leading-relaxed">{x}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 md:p-7">
                <p className="text-sm text-base-content/70">
                  Ready to start? Tell us your schedule and care needs — we’ll match the right caregiver.
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <Link href={`/booking/${service._id}`} className="btn btn-primary rounded-2xl">
                    Book Service
                  </Link>
                  <Link href="/services" className="btn btn-secondary rounded-2xl">
                    View all services
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default ServiceDetailPage;
