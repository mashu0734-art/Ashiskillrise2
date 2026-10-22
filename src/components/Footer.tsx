import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Send, CheckCircle2, Cloud } from 'lucide-react';
import { api } from '../lib/api';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, isUrdu } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await api.subscribeNewsletter(email);
      setStatus('success');
      setMessage(res.message || (isUrdu ? 'کامیابی سے سبسکرائب ہو گیا!' : 'Subscribed successfully!'));
      setEmail('');
    } catch {
      setStatus('error');
      setMessage(isUrdu ? 'کوئی خرابی پیش آگئی ہے۔ دوبارہ کوشش کریں۔' : 'Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-violet-600 text-white shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Ashiskillrise
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {isUrdu
                ? 'نئی مہارتیں سیکھیں، اپنا مستقبل بنائیں۔ پریکٹیکل ڈیجیٹل اسکلز اور کیریئر کی تیاری کا جدید تعلیمی پلیٹ فارم۔'
                : 'Learn New Skills. Build Your Future. Educational platform designed for practical digital skills, lessons, and career preparation.'}
            </p>

            {/* Newsletter form */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                {isUrdu ? 'ہفتہ وار اسکل نیوز لیٹر' : 'Weekly Skill Briefing'}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {isUrdu ? 'اہم ترین ڈیجیٹل اسباق اور کیریئر رہنمائی براہ راست اپنی ای میل پر حاصل کریں۔' : 'Actionable digital lessons and career opportunities. No spam.'}
              </p>
              <form onSubmit={handleSubscribe} className="mt-3 flex max-w-md gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={isUrdu ? 'اپنا ای میل پتہ درج کریں' : 'Enter your email address'}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 transition-colors whitespace-nowrap"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{isUrdu ? 'سبسکرائب' : 'Subscribe'}</span>
                </button>
              </form>
              {status === 'success' && (
                <p className="mt-2 text-xs text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {message}
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {isUrdu ? 'دریافت کریں' : 'Explore'}
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'تمام کورسز' : 'All Courses'}
                </Link>
              </li>
              <li>
                <Link to="/learning-paths" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'لرننگ روڈ میپس' : 'Learning Paths'}
                </Link>
              </li>
              <li>
                <Link to="/courses?category=artificial-intelligence" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'مصنوعی ذہانت (AI)' : 'Artificial Intelligence'}
                </Link>
              </li>
              <li>
                <Link to="/courses?category=web-development" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'ویب ڈویلپمنٹ' : 'Web Development'}
                </Link>
              </li>
              <li>
                <Link to="/courses?category=graphic-design" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'گرافک ڈیزائننگ' : 'Graphic Design'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice & Career */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {isUrdu ? 'پریکٹس اور کیریئر' : 'Practice & Growth'}
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/daily-challenges" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'روزانہ چیلنجز' : 'Daily Challenges'}
                </Link>
              </li>
              <li>
                <Link to="/practice-projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'پریکٹس پروجیکٹس' : 'Practice Projects'}
                </Link>
              </li>
              <li>
                <Link to="/free-resources" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'مفت وسائل اور نوٹس' : 'Free Cheatsheets & Guides'}
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'کیریئر رہنمائی' : 'Career Preparation'}
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'لرنر کمیونٹی' : 'Learner Community'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {isUrdu ? 'پلیٹ فارم' : 'Platform'}
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'اسٹوڈنٹ ڈیش بورڈ' : 'Student Dashboard'}
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'اکاؤنٹ لاگ ان' : 'Account Sign In'}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'پرائیویسی پالیسی' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {isUrdu ? 'شرائط و ضوابط' : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>{isUrdu ? '© 2026 Ashiskillrise۔ تمام تعلیمی حقوق محفوظ ہیں۔' : '© 2026 Ashiskillrise. All educational rights reserved.'}</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <span>{isUrdu ? '100% مفت تعلیم' : '100% Free Education'}</span>
            <span aria-hidden="true">·</span>
            <span>{isUrdu ? 'تصدیق شدہ اسناد' : 'Verified Certificates'}</span>
            <span aria-hidden="true">·</span>
            <span>{isUrdu ? 'عملی مہارتیں' : 'Practical Digital Skills'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
