'use client';

import React, { useMemo, useState } from 'react';
import Container from '@/components/container/Container';
import Link from 'next/link';
import { Clock, MapPin, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';

const states = ['California', 'Texas', 'Florida', 'New York'];
const cities = {
  California: ['Los Angeles', 'San Diego', 'San Francisco'],
  Texas: ['Houston', 'Dallas', 'Austin'],
  Florida: ['Miami', 'Orlando', 'Tampa'],
  'New York': ['New York City', 'Buffalo'],
};

const durationOptions = [
  { key: 'hourly', label: 'Hourly', helper: 'Best for short support', unit: 'hour', min: 2 },
  { key: 'daily', label: 'Daily', helper: 'Day-time full support', unit: 'day', min: 1 },
  { key: 'liveIn', label: 'Live-in', helper: '24/7 ongoing care', unit: 'day', min: 3 },
];

const Bookings = ({ service }) => {
  const [durationType, setDurationType] = useState('hourly');
  const [qty, setQty] = useState(2);

  const [state, setState] = useState('California');
  const [city, setCity] = useState(cities['California']?.[0] ?? '');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');

  const rate = useMemo(() => service.price?.[durationType] ?? 0, [durationType, service.price]);
  const base = useMemo(() => rate * qty, [rate, qty]);

  //  fees
  const serviceFee = useMemo(() => Math.round(base * 0.05), [base]);
  const platformFee = 49;

  const total = useMemo(() => base + serviceFee + platformFee, [base, serviceFee, platformFee]);

  const activeDuration = durationOptions.find((d) => d.key === durationType);

  const handleConfirmBooking = async (id) => {
    try {
      const bookingData = {
        serviceId: id,
        serviceSlug: service?.slug,
        serviceTitle: service?.title,

        durationType,
        qty,
        rate,
        base,
        serviceFee,
        platformFee,
        total,

        location: {
          state,
          city,
          area,
          address,
        },
        date,
        status: 'pending',
      };

      const res = await fetch('/api/bookingApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };

  return (
    <section className="py-10 md:py-14 lg:py-18 bg-base-100 px-3 lg:px-0">
      <Container>
        {/* Top breadcrumb */}
        <div className="mb-8">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link href="/" className="link link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="link link-hover">
                  Services
                </Link>
              </li>
              <li className="text-base-content/70">Booking</li>
            </ul>
          </div>

          {/* title */}
          <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="badge badge-secondary rounded-full">{service.tag}</span>
                <span className="badge badge-outline rounded-full border-primary/30 text-base-content/70">Home-first support</span>
              </div>

              <h1 className="mt-3 text-2xl md:text-4xl font-bold text-base-content">Book {service.title}</h1>
              <p className="mt-2 text-sm md:text-base text-base-content/70 max-w-2xl">{service.short}</p>
            </div>

            <div>
              <button className="btn btn-outline border border-primary rounded-xl">Talk to us</button>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* LEFT: Form */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Duration -------------------------------------------------------------- */}
            <div className="rounded-3xl border border-secondary/10 bg-base-100 p-5 md:p-7">
              <div className="flex items-start justify-between gap-0 md:gap-4">
                <div>
                  <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Step 1</p>
                  <h2 className="mt-2 text-lg md:text-xl font-bold text-base-content flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" /> Select Duration
                  </h2>
                  <p className="mt-1 text-sm text-base-content/60">Choose how long you need care — pricing updates instantly.</p>
                </div>

                <span className="badge badge-outline text-xs rounded-full border-primary/30 text-base-content/70">Flexible schedules</span>
              </div>

              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {durationOptions.map((option) => {
                  const active = option.key === durationType;
                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => {
                        setDurationType(option.key);
                        setQty(Math.max(option.min, option.key === 'hourly' ? 2 : 1));
                      }}
                      className={[
                        'text-left rounded-2xl border p-4 transition cursor-pointer',
                        active ? 'border-primary bg-primary/5 shadow-sm' : 'border-base-300 hover:bg-base-200/40',
                      ].join(' ')}
                    >
                      <div className="flex items-center justify-between ">
                        <p className="font-bold text-base-content">{option.label}</p>
                        {active ? (
                          <span className="badge badge-secondary rounded-full">Selected</span>
                        ) : (
                          <span className="badge badge-outline rounded-full border-primary/20 text-base-content/60">Choose</span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-base-content/60">{option.helper}</p>
                      <p className="mt-3 text-xs text-base-content/50">
                        Starts from <span className="font-bold text-base-content">{rate}$</span> / {option.unit}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* qty */}
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/70">How many {activeDuration?.unit}s?</span>
                  </label>
                  <input
                    type="number"
                    min={activeDuration?.min || 1}
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value || 0))}
                    className="input input-bordered rounded-2xl block"
                    placeholder="e.g. 2"
                  />
                  <label className="label">
                    <span className="label-text-alt text-xs md:text-sm text-base-content/50 mt-2">Minimum: {activeDuration?.min}</span>
                  </label>
                </div>

                <div className="rounded-2xl border border-secondary/10 bg-base-100 p-4 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-base-content">Estimated base</p>
                    <p className="text-base-content/70 text-sm">
                      {rate}$ × {qty} = <span className="font-bold text-base-content">{base}$</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Location */}
            <div className="rounded-3xl border border-secondary/10 bg-base-100 p-5 md:p-7">
              <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Step 2</p>

              <h2 className="mt-2 text-lg md:text-xl font-bold text-base-content flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Select Location
              </h2>

              <p className="mt-1 text-sm text-base-content/60">We’ll match a caregiver based on area and schedule.</p>

              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {/* State */}
                <div className="form-control">
                  <label className="label block">
                    <span className="label-text font-semibold text-base-content/70 ">State</span>
                  </label>

                  <select
                    className="select select-bordered rounded-2xl"
                    value={state}
                    onChange={(e) => {
                      const nextState = e.target.value;
                      setState(nextState);

                      const firstCity = cities[nextState]?.[0] ?? '';
                      setCity(firstCity);
                    }}
                  >
                    {states.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div className="form-control">
                  <label className="label block">
                    <span className="label-text font-semibold text-base-content/70">City</span>
                  </label>

                  <select
                    className="select select-bordered rounded-2xl cursor-pointer"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    {(cities[state] ?? []).map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Area */}
                <div className="form-control">
                  <label className="label block">
                    <span className="label-text font-semibold text-base-content/70">Area</span>
                  </label>
                  <input
                    className="input input-bordered rounded-2xl "
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. Downtown / Sector 10"
                  />
                </div>

                {/* Date */}
                <div className="form-control">
                  <label className="label block">
                    <span className="label-text font-semibold text-base-content/70">Date</span>
                  </label>
                  <input type="date" className="input input-bordered rounded-2xl" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                {/* Address */}
                <div className="form-control md:col-span-2">
                  <label className="label block">
                    <span className="label-text font-semibold text-base-content/70">Address</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered rounded-2xl min-h-28 "
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House, street, notes for caregiver (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Confirm */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-5 md:p-7">
              <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">Step 3</p>
              <h2 className="mt-2 text-lg md:text-xl font-bold text-base-content flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Confirm Booking
              </h2>
              <p className="mt-1 text-sm text-base-content/60">
                On submit, booking will be saved with status <span className="font-bold">Pending</span>.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button onClick={() => handleConfirmBooking(service._id)} className="btn btn-secondary py-1 rounded-2xl flex-1">
                  Confirm Booking <ArrowRight className="h-4 w-4" />
                </button>
                <button className="btn btn-outline rounded-2xl py-1 flex-1">Save as draft</button>
              </div>
            </div>
          </div>

          {/* RIGHT: Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-3xl border border-base-300 bg-base-100 p-5 md:p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-base-content">Booking Summary</p>
                    <p className="text-xs text-base-content/60 mt-1">Estimated total updates live.</p>
                  </div>
                  <span className="badge badge-outline rounded-full border-primary/30 text-base-content/70">
                    {durationOptions.find((d) => d.key === durationType)?.label}
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Rate ({activeDuration?.unit})</span>
                    <span className="font-semibold text-base-content">{rate}$</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Quantity</span>
                    <span className="font-semibold text-base-content">{qty}</span>
                  </div>

                  <div className="divider my-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Base</span>
                    <span className="font-semibold text-base-content">{base}$</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Service fee</span>
                    <span className="font-semibold text-base-content">{serviceFee}$</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-base-content/70">Platform fee</span>
                    <span className="font-semibold text-base-content">{platformFee}$</span>
                  </div>

                  <div className="divider my-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-base-content font-bold">Total</span>
                    <span className="text-xl font-extrabold text-base-content">{total}$</span>
                  </div>
                </div>

                <button onClick={() => handleConfirmBooking(service._id)} className="mt-5 btn btn-secondary rounded-2xl w-full">
                  Continue <ArrowRight className="h-4 w-4" />
                </button>

                <p className="mt-3 text-[11px] text-base-content/50 leading-relaxed">
                  * This is an estimate for UI demo. Final price can depend on caregiver availability and plan.
                </p>
              </div>

              <div className="rounded-3xl border border-base-300 bg-primary/5 p-5">
                <p className="text-sm font-bold text-base-content">What you’ll get</p>
                <ul className="mt-3 space-y-2 text-sm text-base-content/70">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    Verified caregivers matched by schedule
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    Clear instructions-first care
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    Flexible changes anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Bookings;
