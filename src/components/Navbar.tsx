import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  User,
  BookOpen,
  Trophy,
  Settings,
  LogOut,
  Sparkles,
  Globe,
  Image as ImageIcon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import SearchModal from './SearchModal';

export default function Navbar() {
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleResetAvatar = () => {
    updateProfile({ avatarUrl: '' });
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: t('exploreCourses'), href: '/courses' },
    { label: t('learningPaths'), href: '/learning-paths' },
    { label: t('dailyChallenges'), href: '/daily-challenges' },
    { label: t('practiceProjects'), href: '/practice-projects' },
    { label: t('freeResources'), href: '/free-resources' },
    { label: t('career'), href: '/career' },
    { label: t('community'), href: '/community' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 transition-colors">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2.5 whitespace-nowrap group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-violet-600 text-white shadow-sm shadow-blue-500/20 transition-transform group-hover:scale-105">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  Ashiskillrise
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-none">
                  Learn, Practice & Grow
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
              {navLinks.slice(0, 5).map(link => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`whitespace-nowrap transition-colors py-1 ${
                      isActive
                        ? 'text-blue-700 dark:text-blue-400 font-semibold'
                        : 'hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* More Dropdown for additional links */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 py-1 hover:text-slate-900 dark:hover:text-white whitespace-nowrap"
                >
                  <span>More</span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white" />
                </button>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute top-full left-0 w-44 pt-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    {navLinks.slice(5).map(link => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-3 py-2 text-xs font-medium rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Zone 3: Search, Language, Pic, Avatar & 3-lines Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search courses and topics"
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-1.5 text-xs text-slate-500 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-slate-500" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden lg:inline rounded bg-white px-1 py-0.2 text-[9px] font-mono text-slate-400 border border-slate-200 dark:bg-slate-900 dark:border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Language Toggle (EN / اردو) */}
            <button
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'اردو میں تبدیل کریں' : 'Switch to English'}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors shadow-xs"
            >
              <Globe className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400">
                {language === 'en' ? 'اردو' : 'English'}
              </span>
            </button>

            {/* Auth Zone */}
            {isAuthenticated && user ? (
              <div className="relative flex items-center gap-1.5 sm:gap-2" ref={dropdownRef}>
                {/* Hidden File Input for Gallery Upload */}
                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />

                {/* Avatar Button */}
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-1.5 rounded-lg p-0.5 sm:p-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0"
                  aria-expanded={userDropdownOpen}
                >
                  {user.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user.fullName || 'User Profile'}
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-blue-600/30 shadow-xs"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xs ring-2 ring-blue-600/20">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <span className="hidden xl:inline text-xs font-semibold text-slate-700 dark:text-slate-200 max-w-[90px] truncate">
                    {user.fullName}
                  </span>
                  <ChevronDown className="hidden sm:block h-3.5 w-3.5 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 animate-in fade-in zoom-in-95 z-50">
                    <div className="px-3 py-2.5 border-b border-slate-100 dark:border-slate-800 mb-1.5">
                      <div className="flex items-center gap-3">
                        {user.avatarUrl ? (
                          <img
                            src={user.avatarUrl}
                            alt={user.fullName || 'User Profile'}
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500/40"
                          />
                        ) : (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xs ring-2 ring-blue-500/30">
                            <User className="h-5 w-5 text-white" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                            {user.fullName}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>

                      {/* Instant Upload Option from Gallery or Settings */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            avatarInputRef.current?.click();
                          }}
                          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-xs font-semibold transition-colors shadow-sm"
                        >
                          <ImageIcon className="h-3.5 w-3.5" />
                          <span>{language === 'ur' ? 'گیلری سے تصویر لگائیں' : 'Upload from Gallery'}</span>
                        </button>
                        <Link
                          to="/dashboard/settings"
                          className="w-full flex items-center justify-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 text-xs font-semibold transition-colors shadow-sm"
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>{language === 'ur' ? 'کارٹون ایوارٹر بنائیں' : 'Cartoon Avatar Generator'}</span>
                        </Link>
                        {user.avatarUrl && (
                          <button
                            type="button"
                            onClick={handleResetAvatar}
                            className="text-[11px] text-rose-600 hover:text-rose-700 dark:text-rose-400 text-center py-0.5 hover:underline"
                          >
                            {language === 'ur' ? 'تصویر ہٹائیں' : 'Remove Picture'}
                          </button>
                        )}
                      </div>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <User className="h-4 w-4" />
                      {t('dashboard')}
                    </Link>
                    <Link
                      to="/dashboard/courses"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <BookOpen className="h-4 w-4" />
                      {language === 'ur' ? 'میرے کورسز' : 'My Courses'}
                    </Link>
                    <Link
                      to="/dashboard/achievements"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <Trophy className="h-4 w-4" />
                      {language === 'ur' ? 'کامیابیاں' : 'Achievements'}
                    </Link>
                    <Link
                      to="/dashboard/settings"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      {language === 'ur' ? 'سیٹنگز' : 'Settings'}
                    </Link>

                    <div className="my-1 border-t border-slate-100 dark:border-slate-800" />

                    <button
                      onClick={async () => {
                        await logout();
                        navigate('/');
                      }}
                      className="w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/30 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      {t('signOut')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400 whitespace-nowrap transition-colors"
                >
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 whitespace-nowrap transition-colors"
                >
                  {t('signup')}
                </Link>
              </div>
            )}

            {/* 3 Lines Menu Button (Always visible without scrolling) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors shadow-xs"
              aria-label={language === 'ur' ? 'مینیو' : 'Toggle navigation menu'}
              title={language === 'ur' ? 'مینیو' : 'Menu'}
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>
        </div>

        {/* Navigation Drawer (Activated by 3 Lines Button) */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1.5 max-w-7xl mx-auto">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {language === 'ur' ? 'نیویگیشن مینیو' : 'Navigation Menu'}
                </span>
                {isAuthenticated && (
                  <button
                    type="button"
                    onClick={() => avatarInputRef.current?.click()}
                    className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg"
                  >
                    <ImageIcon className="h-3.5 w-3.5" />
                    <span>{language === 'ur' ? 'گیلری سے تصویر لگائیں' : 'Upload Picture'}</span>
                  </button>
                )}
              </div>
              <Link
                to="/"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t('home')}
              </Link>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {link.label}
                </Link>
              ))}

              {isAuthenticated && (
                <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="px-3 pb-1 text-[11px] font-bold uppercase text-slate-400">
                    {language === 'ur' ? 'اکاؤنٹ' : 'Account'}
                  </p>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <User className="h-4 w-4" />
                    {t('dashboard')}
                  </Link>
                  <Link
                    to="/dashboard/courses"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <BookOpen className="h-4 w-4" />
                    {language === 'ur' ? 'میرے کورسز' : 'My Courses'}
                  </Link>
                  <Link
                    to="/dashboard/settings"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <Settings className="h-4 w-4" />
                    {language === 'ur' ? 'سیٹنگز' : 'Settings'}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </>
  );
}
