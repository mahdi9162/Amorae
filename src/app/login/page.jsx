'use client';

import Link from 'next/link';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import Container from '@/components/container/Container';
import { signIn } from 'next-auth/react';

const Login = () => {
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = {
      email,
      password,
    };

    signIn('credentials', formData);
  };

  return (
    <section className="bg-base-100 px-3 py-14 md:py-20">
      <Container>
        <div className="mx-auto grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              Secure access
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-base-content leading-[1.05]">
              Welcome back to <span className="text-primary">Amorae</span>
            </h1>

            <p className="text-base md:text-lg text-base-content/70 max-w-xl">
              Log in to continue your booking, view status, and manage your care requests.
            </p>

            <div className="max-w-xl rounded-2xl border border-base-300 bg-base-100 p-5">
              <p className="font-semibold text-base-content">Quick tip</p>
              <p className="mt-1 text-sm text-base-content/60">
                If you’re booking for the first time, create an account — it takes less than a minute.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-7 md:p-9 shadow-xl">
            <div className="mb-7">
              <h2 className="text-2xl md:text-3xl font-bold text-base-content">Login</h2>
              <p className="text-sm md:text-base text-base-content/60 mt-1">Use your email and password to continue.</p>
            </div>

            <form onSubmit={handleLoginForm} className="space-y-5">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/70">Email</span>
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base-content/70">
                    <Mail className="h-5 w-5" />
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full rounded-2xl pl-12 h-12"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/70">Password</span>
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base-content/70">
                    <Lock className="h-5 w-5" />
                  </span>

                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full rounded-2xl pl-12 h-12"
                  />
                </div>

                <div className="mt-2">
                  <button type="button" className="link link-hover text-xs text-base-content/60">
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="label cursor-pointer gap-3 justify-start p-0">
                  <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                  <span className="label-text text-sm text-base-content/70">Remember me</span>
                </label>

                <span className="text-xs text-base-content/50">Private route safe</span>
              </div>

              {/* Submit */}
              <button className="btn btn-primary w-full rounded-2xl h-12">Login</button>

              <div className="divider text-xs text-base-content/40">or</div>

              <button type="button" className="btn btn-outline w-full rounded-2xl h-12">
                Continue as Guest (UI)
              </button>

              <p className="text-sm text-base-content/70 text-center pt-2">
                New here?{' '}
                <Link href="/register" className="link link-primary font-semibold">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
