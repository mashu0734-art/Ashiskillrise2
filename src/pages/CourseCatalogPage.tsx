import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, BookOpen, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { api } from '../lib/api';
import { Course, CATEGORIES } from '../data/coursesData';
import CourseCard from '../components/CourseCard';

export default function CourseCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters state
  const categoryParam = searchParams.get('category') || 'all';
  const difficultyParam = searchParams.get('difficulty') || 'all';
  const pricingParam = searchParams.get('pricing') || 'all';
  const languageParam = searchParams.get('language') || 'all';
  const sortByParam = searchParams.get('sort') || 'recommended';
  const searchParam = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(searchParam);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await api.getCourses();
        setCourses(data);
      } catch {
        // fallback
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSearchParams(new URLSearchParams());
  };

  // Filtered and Sorted courses
  const displayedCourses = useMemo(() => {
    let result = [...courses];

    // Category
    if (categoryParam !== 'all') {
      result = result.filter(
        c => c.categorySlug === categoryParam || c.categoryId === categoryParam
      );
    }

    // Difficulty
    if (difficultyParam !== 'all') {
      result = result.filter(c => c.difficulty.toLowerCase() === difficultyParam.toLowerCase());
    }

    // Pricing
    if (pricingParam === 'free') {
      result = result.filter(c => !c.isPremium);
    } else if (pricingParam === 'premium') {
      result = result.filter(c => c.isPremium);
    }

    // Language
    if (languageParam !== 'all') {
      result = result.filter(c => c.language.toLowerCase() === languageParam.toLowerCase());
    }

    // Search
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.categoryName.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortByParam === 'duration-asc') {
      result.sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (sortByParam === 'duration-desc') {
      result.sort((a, b) => b.durationMinutes - a.durationMinutes);
    } else if (sortByParam === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [courses, categoryParam, difficultyParam, pricingParam, languageParam, sortByParam, searchQuery]);

  const hasActiveFilters =
    categoryParam !== 'all' ||
    difficultyParam !== 'all' ||
    pricingParam !== 'all' ||
    languageParam !== 'all' ||
    sortByParam !== 'recommended' ||
    searchQuery.trim() !== '';

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Course Catalog
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Explore complete digital skill curriculums designed for practical application.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="relative md:col-span-5">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                updateParam('search', e.target.value);
              }}
              placeholder="Search by title, topic, or keyword..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  updateParam('search', '');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Select */}
          <div className="md:col-span-3">
            <select
              value={categoryParam}
              onChange={e => updateParam('category', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Select */}
          <div className="md:col-span-2">
            <select
              value={difficultyParam}
              onChange={e => updateParam('difficulty', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Sort By Select */}
          <div className="md:col-span-2">
            <select
              value={sortByParam}
              onChange={e => updateParam('sort', e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <option value="recommended">Recommended</option>
              <option value="duration-asc">Duration: Short to Long</option>
              <option value="duration-desc">Duration: Long to Short</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Secondary Filter Chips and Active Clear */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 font-medium">Pricing:</span>
            {['all', 'free', 'premium'].map(p => (
              <button
                key={p}
                onClick={() => updateParam('pricing', p)}
                className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                  pricingParam === p
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {p}
              </button>
            ))}

            <span className="text-slate-400 font-medium ml-2">Language:</span>
            {['all', 'english'].map(lang => (
              <button
                key={lang}
                onClick={() => updateParam('language', lang)}
                className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                  languageParam === lang
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Clear All Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Courses Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Showing <strong className="text-slate-900 dark:text-white tabular-nums">{displayedCourses.length}</strong> of{' '}
          <strong className="text-slate-900 dark:text-white tabular-nums">{courses.length}</strong> courses
        </span>
      </div>

      {/* Course Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4 h-72 dark:border-slate-800 dark:bg-slate-900" />
          ))}
        </div>
      ) : displayedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-16 text-center dark:border-slate-800 dark:bg-slate-900">
          <BookOpen className="mx-auto h-10 w-10 text-slate-400" />
          <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
            No courses match your filter criteria
          </h3>
          <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
            Try resetting your search query or selecting a different category.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
