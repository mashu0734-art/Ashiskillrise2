import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Code,
  Briefcase,
  Palette,
  MessageSquare,
  TrendingUp,
  Video,
  PenTool,
  FileSpreadsheet,
  Award,
  Terminal,
  BarChart3,
  ShoppingBag,
  DollarSign,
  Monitor,
  Flame,
  Search,
  Check,
  Trophy,
  Zap
} from 'lucide-react';
import { INITIAL_COURSES, CATEGORIES } from '../data/coursesData';
import { LEARNING_PATHS } from '../data/learningPathsData';
import CourseCard from '../components/CourseCard';
import AdBanner from '../components/AdBanner';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { language, isUrdu, t, tCategory } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dailyAnswer, setDailyAnswer] = useState<string | null>(null);

  // Category Icon Resolver
  const getCategoryIcon = (slug: string, className = 'h-5 w-5') => {
    switch (slug) {
      case 'artificial-intelligence': return <Sparkles className={className} />;
      case 'english-communication': return <MessageSquare className={className} />;
      case 'freelancing': return <Briefcase className={className} />;
      case 'graphic-design': return <Palette className={className} />;
      case 'web-development': return <Code className={className} />;
      case 'digital-marketing': return <TrendingUp className={className} />;
      case 'video-editing': return <Video className={className} />;
      case 'content-writing': return <PenTool className={className} />;
      case 'microsoft-office': return <FileSpreadsheet className={className} />;
      case 'career-development': return <Award className={className} />;
      case 'programming': return <Terminal className={className} />;
      case 'data-analysis': return <BarChart3 className={className} />;
      case 'e-commerce': return <ShoppingBag className={className} />;
      case 'personal-finance': return <DollarSign className={className} />;
      default: return <Monitor className={className} />;
    }
  };

  // Filter courses
  const filteredCourses = INITIAL_COURSES.filter(c => {
    const matchesFilter =
      selectedFilter === 'all' ||
      c.categorySlug === selectedFilter ||
      c.categoryId === selectedFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-12">
      {/* 1. Classic Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 px-6 py-10 sm:px-12 sm:py-14 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-100 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span>{t('heroBadge')}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t('heroTitle')}
          </h1>

          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
            {t('heroSubtitle')}
          </p>

          {/* Quick Search & CTA Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute ${isUrdu ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400`} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t('heroSearchPlaceholder')}
                className={`w-full rounded-xl bg-white text-slate-900 placeholder:text-slate-400 ${isUrdu ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 text-xs sm:text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute ${isUrdu ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold`}
                >
                  {t('clear')}
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-blue-700 shadow-md hover:bg-blue-50 transition-colors"
              >
                <span>{t('browseCourses')}</span>
                <ArrowRight className={`h-4 w-4 ${isUrdu ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                to="/learning-paths"
                className="inline-flex items-center justify-center rounded-xl bg-blue-800/80 hover:bg-blue-800 text-white border border-white/20 px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors"
              >
                {t('roadmaps')}
              </Link>
            </div>
          </div>

          {/* Value Stats Strip */}
          <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
              <span><strong>10+</strong> {t('statCourses')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
              <span><strong>15</strong> {t('statCategories')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
              <span><strong>{isUrdu ? 'روزانہ' : 'Daily'}</strong> {t('statDrills')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
              <span><strong>{isUrdu ? 'مفت' : 'Free'}</strong> {t('statCerts')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Explore by Category Grid (15 Skill Categories) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t('exploreByCategory')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {t('exploreByCategorySub')}
            </p>
          </div>
          <Link
            to="/courses"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>{t('allCategories')}</span>
            <ArrowRight className={`h-3.5 w-3.5 ${isUrdu ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CATEGORIES.map(category => (
            <Link
              key={category.id}
              to={`/courses?category=${category.slug}`}
              className="group flex flex-col items-center text-center p-3.5 rounded-2xl border border-slate-200/80 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors dark:bg-slate-800 dark:text-blue-400">
                {getCategoryIcon(category.slug, 'h-5 w-5')}
              </div>
              <h3 className="mt-2.5 text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-1">
                {tCategory(category.slug) || category.name}
              </h3>
              <span className="mt-0.5 text-[11px] text-slate-400">
                {INITIAL_COURSES.filter(c => c.categorySlug === category.slug || c.categoryId === category.id).length || 1} {t('coursesCountSuffix')}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Featured Courses Section with Filter Tabs */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t('featuredCourses')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {t('featuredCoursesSub')}
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {t('filterAll')}
            </button>
            <button
              onClick={() => setSelectedFilter('artificial-intelligence')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                selectedFilter === 'artificial-intelligence'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {t('filterAi')}
            </button>
            <button
              onClick={() => setSelectedFilter('web-development')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                selectedFilter === 'web-development'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {t('filterWeb')}
            </button>
            <button
              onClick={() => setSelectedFilter('graphic-design')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                selectedFilter === 'graphic-design'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {t('filterDesign')}
            </button>
            <button
              onClick={() => setSelectedFilter('freelancing')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                selectedFilter === 'freelancing'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {t('filterFreelance')}
            </button>
          </div>
        </div>

        {/* Courses Grid using standard CourseCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.slice(0, 6).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <span>{t('viewAllCourses')}</span>
            <ArrowRight className={`h-4 w-4 text-blue-600 ${isUrdu ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* Adsterra Leaderboard Banner (728x90 on Desktop, 320x50 on Mobile) */}
      <AdBanner unit="responsive-leaderboard" />

      {/* 4. Structured Learning Roadmaps */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 space-y-6 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              <Zap className="h-3.5 w-3.5" />
              <span>{t('stepByStepRoadmaps')}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              {t('curatedLearningPaths')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {t('curatedLearningPathsSub')}
            </p>
          </div>
          <Link
            to="/learning-paths"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>{t('allPaths')}</span>
            <ArrowRight className={`h-3.5 w-3.5 ${isUrdu ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LEARNING_PATHS.slice(0, 4).map(path => (
            <div
              key={path.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-blue-300 hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {tCategory(path.category.toLowerCase().replace(/ /g, '-')) || path.category}
                  </span>
                  <span>~{path.estimatedHours} {t('hours')}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                  <Link to={`/learning-paths/${path.slug}`}>{path.title}</Link>
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {path.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <BookOpen className="h-3.5 w-3.5 text-slate-400" />
                  <span>{path.courseIds.length} {t('coursesIncluded')}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {t('certIncluded')}
                </span>
                <Link
                  to={`/learning-paths/${path.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  <span>{t('startPath')}</span>
                  <ArrowRight className={`h-3.5 w-3.5 ${isUrdu ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Daily Challenge & Practice Drills */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Challenge Card */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                <Flame className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">{t('dailyDrillBadge')}</span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{t('todayQuickChallenge')}</h3>
              </div>
            </div>
            <Link
              to="/daily-challenges"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              {t('moreDrills')}
            </Link>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/70 space-y-2 dark:border-slate-800 dark:bg-slate-800/60">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {t('scenarioQuestion')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {[
                { id: 'a', text: t('optA') },
                { id: 'b', text: t('optB') },
                { id: 'c', text: t('optC') },
                { id: 'd', text: t('optD') }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setDailyAnswer(opt.id)}
                  className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                    dailyAnswer === opt.id
                      ? opt.id === 'b'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                        : 'border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
            {dailyAnswer && (
              <div className={`mt-2 p-2.5 rounded-lg text-xs font-medium flex items-center gap-2 ${
                dailyAnswer === 'b' ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-amber-100/70 text-amber-900 dark:bg-amber-900/40 dark:text-amber-300'
              }`}>
                {dailyAnswer === 'b' ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{t('correctFeedback')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('incorrectFeedback')}</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Free Career Toolkit Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between space-y-4 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">{t('toolkitBadge')}</span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{t('careerHubTitle')}</h3>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('careerHubDesc')}
            </p>

            <div className="mt-3 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>{t('toolRateCalc')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>{t('toolProposalGen')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>{t('toolInterviewBank')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                <span>{t('toolContractTemp')}</span>
              </div>
            </div>
          </div>

          <Link
            to="/career"
            className="w-full text-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-2 text-xs font-semibold shadow-xs transition-colors"
          >
            {t('launchToolkit')}
          </Link>
        </div>
      </section>

      {/* Adsterra Standard Banner (468x60 on Desktop/Tablet, 320x50 on Mobile) */}
      <AdBanner unit="responsive-banner" />

      {/* 6. Why Ashiskillrise / Free Platform Guarantee */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('whyAshiskillriseTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t('whyAshiskillriseSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="p-4 rounded-xl bg-slate-50 space-y-2 dark:bg-slate-800/60">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">{t('freeForeverTitle')}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('freeForeverDesc')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 space-y-2 dark:bg-slate-800/60">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">{t('projectBasedTitle')}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('projectBasedDesc')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 space-y-2 dark:bg-slate-800/60">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">{t('verifiedCredsTitle')}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('verifiedCredsDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Adsterra Native Banner Unit */}
      <AdBanner unit="native" />

      {/* 7. Call To Action (CTA) Banner */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 p-8 sm:p-12 text-center text-white space-y-4 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {t('bottomCtaTitle')}
        </h2>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
          {t('bottomCtaSub')}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/register"
            className="rounded-xl bg-white text-blue-700 px-6 py-2.5 text-xs sm:text-sm font-bold hover:bg-blue-50 shadow-md transition-colors"
          >
            {t('createFreeAccount')}
          </Link>
          <Link
            to="/courses"
            className="rounded-xl bg-blue-900/60 hover:bg-blue-900 text-white border border-white/20 px-6 py-2.5 text-xs sm:text-sm font-semibold transition-colors"
          >
            {t('exploreCatalog')}
          </Link>
        </div>
      </section>
    </div>
  );
}
