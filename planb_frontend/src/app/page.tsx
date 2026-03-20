import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 sm:p-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="z-10 bg-slate-800/50 backdrop-blur-xl p-10 sm:p-14 border border-slate-700 rounded-3xl shadow-2xl max-w-4xl text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Welcome to PlanB
        </h1>
        <p className="text-lg sm:text-2xl mb-10 text-slate-300 max-w-2xl mx-auto">
          The enterprise-grade platform connecting professional drivers, car owners, corporate clients, and car hire companies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/login" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg shadow-indigo-600/30 transform hover:-translate-y-1">
            Sign In
          </Link>
          <Link href="/register" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg border border-slate-600 transform hover:-translate-y-1">
            Create an Account
          </Link>
        </div>
      </div>
    </main>
  );
}
