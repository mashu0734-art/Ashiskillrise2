import React, { useRef } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  LineChart,
  Trophy,
  Bookmark,
  Settings,
  User as UserIcon,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function DashboardLayout() {
  const { user, isAuthenticated, updateProfile } = useAuth();
  const { language, isUrdu } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          updateProfile({ avatarUrl: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const navItems = [
    { label: isUrdu ? 'اوور ویو' : 'Overview', to: '/dashboard', icon: LayoutDashboard, end: true },
    { label: isUrdu ? 'میرے کورسز' : 'My Courses', to: '/dashboard/courses', icon: BookOpen },
    { label: isUrdu ? 'پروگریس اور اعدادوشمار' : 'Progress & Stats', to: '/dashboard/progress', icon: LineChart },
    { label: isUrdu ? 'کامیابیاں' : 'Achievements', to: '/dashboard/achievements', icon: Trophy },
    { label: isUrdu ? 'بک مارکس اور نوٹس' : 'Bookmarks & Notes', to: '/dashboard/bookmarks', icon: Bookmark },
    { label: isUrdu ? 'سیٹنگز' : 'Settings', to: '/dashboard/settings', icon: Settings }
  ];

  if (!isAuthenticated || !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <UserIcon className="mx-auto h-12 w-12 text-slate-400" />
        <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
          Sign In to Access Your Dashboard
        </h2>
        <p className="mt-2 text-xs text-slate-500">
          Your dashboard saves your course progress, personal lesson notes, and achievements.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/login"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Dashboard Top Greeting Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
        <div className="flex items-center gap-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
          <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.fullName}
                className="h-14 w-14 rounded-2xl object-cover ring-2 ring-blue-600/30 shadow-md group-hover:opacity-90 transition-opacity bg-white"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white ring-2 ring-blue-600/30 shadow-md">
                <UserIcon className="h-7 w-7 text-white" />
              </div>
            )}
            <div
              title={isUrdu ? 'گیلری سے تصویر لگائیں' : 'Upload picture from gallery'}
              className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors"
            >
              <ImageIcon className="h-3.5 w-3.5" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {isUrdu ? `خوش آمدید، ${user.fullName}!` : `Welcome back, ${user.fullName}!`}
              </h1>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <ImageIcon className="h-3 w-3" />
                <span>{isUrdu ? 'گیلری سے تصویر' : 'Gallery Pic'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {isUrdu ? 'پرسنل پروفائل اور لرننگ ڈیش بورڈ' : 'Personalized profile · Cloudflare synchronized'}
            </p>
          </div>
        </div>

        <Link
          to="/courses"
          className="self-start sm:self-auto rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 shadow-sm transition-colors"
        >
          {isUrdu ? 'مزید کورسز براؤز کریں' : 'Browse More Courses'}
        </Link>
      </div>

      {/* Dashboard Navigation Tabs */}
      <div className="flex overflow-x-auto gap-2 py-4 border-b border-slate-200 dark:border-slate-800 scrollbar-none">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* Outlet Subpage Content */}
      <div className="pt-6">
        <Outlet />
      </div>
    </div>
  );
}
