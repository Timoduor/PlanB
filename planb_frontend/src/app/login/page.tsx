"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { fetchApi } from '@/services/api';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await fetchApi('/auth/login/', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      await login(data.access, data.refresh);

      const userData = await fetchApi('/users/me/', {
        headers: {
          Authorization: `Bearer ${data.access}`,
        },
      });

      const role = userData.role?.toUpperCase().trim();

      if (role === 'DRIVER') {
        router.push('/dashboard/driver');

      } else if (role === 'CAR_HIRE' || role === 'CARHIRE') {
        router.push('/dashboard/car-hire');

      } else if (role === 'CORPORATE') {
        router.push('/dashboard/corporate');

      } else if (role === 'CLIENT' || role === 'USER') {
        router.push('/dashboard/client');

      } else {
        console.warn("Unknown role:", role);
        router.push('/dashboard/client');
      }

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Invalid credentials');
      } else {
        setError('Invalid credentials');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-slate-100">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to your PlanB account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <div className="space-y-5">

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              />
            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 font-medium transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {/* Footer */}
          <div className="text-center mt-4">
            <span className="text-sm text-slate-600">
              Don&apos;t have an account?
            </span>{" "}
            <Link
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-700 transition"
            >
              Sign up
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}