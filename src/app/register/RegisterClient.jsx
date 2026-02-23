'use client';

import Link from 'next/link';
import { IdCard, User, Mail, Phone, LockKeyhole, ShieldCheck } from 'lucide-react';
import Container from '@/components/container/Container';
import { useState } from 'react';
import { postUser } from '@/actions/server/auth';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const RegisterClient = () => {
  const [formData, setFormData] = useState({
    nid: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    setError('');

    // basic validation
    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match.');
      return;
    }

    // optional: minimum rules
    if (formData.password.length < 6) {
      setError('Password minimum 6 characters');
      return;
    }

    const result = await postUser(formData);

    if (result?.acknowledged) {
      alert('successfull');
      router.push('/login');
    } else {
      alert('Registration failed!');
    }
  };

  return (
    <section className="bg-base-100 px-3 py-12 md:py-16">
      <Container>
        <div className="mx-auto grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" />
              Create your Amorae account
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-base-content leading-tight">
              Register with <span className="text-primary">Amorae —</span> <span className="block">book care with confidence</span>
            </h1>

            <p className="text-base-content/70 max-w-xl">
              We keep it simple — your account helps us save your booking info and show status updates later.
            </p>

            {/* Password rules  */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-5 md:p-6">
              <p className="font-bold text-base-content">Password rules</p>
              <ul className="mt-3 space-y-2 text-sm text-base-content/70">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Minimum 6 characters
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  At least 1 uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  At least 1 lowercase letter
                </li>
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 md:p-8 shadow-xl">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-base-content">Registration</h2>
              <p className="text-sm text-base-content/60 mt-1">Fill in your details to continue booking.</p>
            </div>

            <form onSubmit={handleRegisterForm} className="grid gap-4">
              {/* NID */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/70">NID No</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <IdCard className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    name="nid"
                    value={formData.nid}
                    onChange={handleChange}
                    placeholder="NID number"
                    required
                    className="input input-bordered w-full rounded-2xl pl-12"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/70">Name</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <User className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="input input-bordered w-full rounded-2xl pl-12"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/70">Email</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <Mail className="h-5 w-5" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="input input-bordered w-full rounded-2xl pl-12"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/70">Contact</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <Phone className="h-5 w-5" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="input input-bordered w-full rounded-2xl pl-12"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/70">Password</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                      <LockKeyhole className="h-5 w-5" />
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="input input-bordered w-full rounded-2xl pl-12"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content/70">Confirm Password</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                      <LockKeyhole className="h-5 w-5" />
                    </span>
                    <input
                      type="password"
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="input input-bordered w-full rounded-2xl pl-12"
                    />
                  </div>
                  {error && <p className="text-xs text-error mt-2">{error}</p>}
                </div>
              </div>

              {/* checkbox */}
              <label className="label cursor-pointer justify-start gap-3 p-0 mt-1">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                <span className="label-text text-sm text-base-content/70">I agree to the Terms & Privacy (UI)</span>
              </label>

              {/* submit */}
              <button className="btn btn-primary w-full rounded-2xl mt-2">Create Account</button>

              <p className="text-sm text-base-content/70 text-center mt-2">
                Already have an account?{' '}
                <Link href="/login" className="link link-primary font-semibold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RegisterClient;
