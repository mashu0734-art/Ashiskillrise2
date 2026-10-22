import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Map, ArrowRight } from 'lucide-react';
import { INITIAL_COURSES, CATEGORIES } from '../data/coursesData';
import { LEARNING_PATHS } from '../data/learningPathsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingCourses = trimmed
    ? INITIAL_COURSES.filter(
        c =>
          c.title.toLowerCase().includes(trimmed) ||
          c.description.toLowerCase().includes(trimmed) ||
          c.categoryName.toLowerCase().includes(trimmed)
      ).slice(0, 5)
    : INITIAL_COURSES.slice(0, 3);

  const matchingPaths = trimmed
    ? LEARNING_PATHS.filter(
        p => p.title.toLowerCase().includes(trimmed) || p.description.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : LEARNING_PATHS.slice(0, 2);

  const matchingCategories = trimmed
    ? CATEGORIES.filter(c => c.name.toLowerCase().includes(trimmed)).slice(0, 4)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search courses, skills, learning paths..."
            autoFocus
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-1"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Courses */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
              Courses
            </div>
            {matchingCourses.length > 0 ? (
              <div className="space-y-1">
                {matchingCourses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onClose();
                      navigate(`/courses/${course.slug}`);
                    }}
                    className="w-full text-left flex items-start justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 mt-0.5 shrink-0">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {course.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
                          <span>{course.categoryName}</span>
                          <span aria-hidden="true">·</span>
                          <span>{course.difficulty}</span>
                          <span aria-hidden="true">·</span>
                          <span>{course.durationMinutes} mins</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 px-2">No matching courses found.</p>
            )}
          </div>

          {/* Learning Paths */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
              Learning Paths
            </div>
            {matchingPaths.length > 0 ? (
              <div className="space-y-1">
                {matchingPaths.map(path => (
                  <button
                    key={path.id}
                    onClick={() => {
                      onClose();
                      navigate(`/learning-paths/${path.slug}`);
                    }}
                    className="w-full text-left flex items-start justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 mt-0.5 shrink-0">
                        <Map className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                          {path.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
                          <span>{path.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{path.estimatedHours} hours</span>
                          <span aria-hidden="true">·</span>
                          <span>{path.courseIds.length} courses</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 px-2">No matching paths found.</p>
            )}
          </div>

          {/* Quick Categories */}
          {matchingCategories.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                Categories
              </div>
              <div className="flex flex-wrap gap-2 px-2">
                {matchingCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onClose();
                      navigate(`/courses?category=${cat.slug}`);
                    }}
                    className="text-xs px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
          <span>Navigate with mouse or arrow keys</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
