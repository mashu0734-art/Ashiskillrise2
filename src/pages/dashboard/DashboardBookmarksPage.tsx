import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, ArrowRight, BookOpen, Edit3 } from 'lucide-react';
import { api } from '../../lib/api';

export default function DashboardBookmarksPage() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const b = await api.getBookmarks();
      setBookmarks(b);
    }
    load();
  }, []);

  const handleRemove = async (courseId: string, lessonId: string) => {
    await api.toggleBookmark(courseId, lessonId, '', '');
    setBookmarks(prev => prev.filter(b => !(b.courseId === courseId && b.lessonId === lessonId)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Saved Bookmarks & Notes
        </h2>
        <p className="text-xs text-slate-500">
          Quickly access your pinned lessons and personal study highlights.
        </p>
      </div>

      {bookmarks.length > 0 ? (
        <div className="space-y-3">
          {bookmarks.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-sm gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 shrink-0">
                  <Bookmark className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {b.title || 'Saved Lesson'}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {b.courseTitle || 'Digital Skill Curriculum'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/courses/${b.courseId}`}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-200 transition-colors"
                >
                  <span>Open</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  onClick={() => handleRemove(b.courseId, b.lessonId)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                  title="Remove bookmark"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
          <Bookmark className="mx-auto h-8 w-8 text-slate-400" />
          <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-white">No bookmarks saved yet</h3>
          <p className="mt-1 text-xs text-slate-500">
            Click the bookmark icon during any lesson to pin it here for fast revision.
          </p>
        </div>
      )}
    </div>
  );
}
