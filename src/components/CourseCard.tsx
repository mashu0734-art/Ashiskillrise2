import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '../data/coursesData';
import { useLanguage } from '../context/LanguageContext';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [imgError, setImgError] = useState(false);
  const { language, tCategory, t } = useLanguage();
  const isUrdu = language === 'ur';

  const getDifficultyLabel = (diff: string) => {
    if (!isUrdu) return diff;
    switch (diff.toLowerCase()) {
      case 'beginner': return 'ابتدائی';
      case 'intermediate': return 'درمیانی';
      case 'advanced': return 'اعلیٰ';
      default: return diff;
    }
  };

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <div>
        {/* Thumbnail with Zero-Broken-Image Policy */}
        <Link to={`/courses/${course.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 mb-3.5">
          {!imgError ? (
            <img
              src={course.thumbnail}
              alt={course.title}
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-950 p-4 text-center text-white">
              <span className="text-sm font-semibold">{course.title}</span>
            </div>
          )}
        </Link>

        {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1.5">
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {tCategory(course.categorySlug) || course.categoryName}
          </span>
          <span aria-hidden="true">·</span>
          <span>{getDifficultyLabel(course.difficulty)}</span>
          <span aria-hidden="true">·</span>
          <span>{course.isPremium ? (isUrdu ? 'پریمیم' : 'Premium') : (isUrdu ? 'مفت' : 'Free')}</span>
        </div>

        {/* Title */}
        <Link to={`/courses/${course.slug}`}>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
            {course.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span className="tabular-nums">
              {course.durationMinutes}{isUrdu ? ' منٹ' : 'm'}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5 text-slate-400" />
            <span className="tabular-nums">
              {course.lessonCount} {isUrdu ? 'اسباق' : 'lessons'}
            </span>
          </span>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group/btn"
        >
          <span>{isUrdu ? 'کورس دیکھیں' : 'Explore'}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
