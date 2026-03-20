"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchApi } from '@/services/api';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: 'DRIVER'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Assuming a custom registration endpoint /api/users/register/
      await fetchApi('/users/', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      router.push('/login?registered=true');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Registration failed');
      } else {
        setError('Registration failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Create an Account
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Join the PlanB network
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          {error && <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</div>}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">First Name</label>
              <input type="text" name="first_name" required onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Last Name</label>
              <input type="text" name="last_name" required onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Username</label>
              <input type="text" name="username" required onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <input type="email" name="email" required onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Password</label>
              <input type="password" name="password" required onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">I am a...</label>
              <select name="role" onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                <option value="DRIVER">Driver</option>
                <option value="CAR_OWNER">Car Owner</option>
                <option value="CORPORATE">Corporate Client</option>
                <option value="CAR_HIRE">Car Hire Company</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 font-medium transition-colors disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Registers'}
            </button>
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-slate-600">Already have an account? </span>
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
