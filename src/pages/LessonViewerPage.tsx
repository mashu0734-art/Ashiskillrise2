import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Bookmark,
  Edit3,
  BookOpen,
  ArrowLeft,
  Check,
  FileText,
  ExternalLink,
  HelpCircle,
  Code2,
  Share2,
  Play,
  Award
} from 'lucide-react';
import { api, ProgressState } from '../lib/api';
import { Course, Lesson, CourseSection } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import CertificateModal from '../components/CertificateModal';

export default function LessonViewerPage() {
  const { courseSlug, lessonSlug } = useParams<{ courseSlug: string; lessonSlug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { language } = useLanguage();

  const [course, setCourse] = useState<Course | null>(null);
  const [showCertModal, setShowCertModal] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [progress, setProgress] = useState<ProgressState>({ completedLessonIds: [], percent: 0 });
  const [note, setNote] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [noteSaving, setNoteSaving] = useState(false);
  const [noteSaved, setNoteSaved] = useState(false);

  // Quiz state
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Practice state
  const [practiceCode, setPracticeCode] = useState('');
  const [practiceSaved, setPracticeSaved] = useState(false);

  // Video player state
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState('');

  const convertToEmbedUrl = (url: string): string => {
    if (!url) return '';
    if (url.includes('/embed/')) return url;
    
    // Check for shorts
    if (url.includes('shorts/')) {
        const idMatch = url.split('shorts/')[1].split('?')[0];
        if (idMatch) return `https://www.youtube.com/embed/${idMatch}`;
    }

    const watchMatch = url.match(/[?&]v=([^&]+)/);
    if (watchMatch && watchMatch[1]) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch && shortMatch[1]) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }
    return url;
  };

  const getEmbedVideoUrl = () => {
    const categorySlug = course?.categorySlug || '';
    if (currentLesson?.videoUrl && currentLesson.videoUrl.trim() !== '') {
      const converted = convertToEmbedUrl(currentLesson.videoUrl);
      if (converted) return converted;
    }
    if (categorySlug.includes('ai') || categorySlug.includes('tech')) return 'https://www.youtube.com/embed/jC4v5AS4RIM';
    if (categorySlug.includes('design') || categorySlug.includes('creative')) return 'https://www.youtube.com/embed/c9Wg6Cb_YlU';
    if (categorySlug.includes('career') || categorySlug.includes('freelance')) return 'https://www.youtube.com/embed/BYmBm_Do_uk';
    if (categorySlug.includes('market') || categorySlug.includes('business')) return 'https://www.youtube.com/embed/n4p7Koy0ZqE';
    if (categorySlug.includes('office') || categorySlug.includes('prod')) return 'https://www.youtube.com/embed/Vl0H-qTclOg';
    return 'https://www.youtube.com/embed/W6NZfCO5SIk';
  };

  const handlePlayClick = () => {
    setActiveVideoUrl(getEmbedVideoUrl());
    setShowVideoModal(true);
  };

  // Load course and lesson
  useEffect(() => {
    async function load() {
      if (!courseSlug || !lessonSlug) return;
      try {
        const c = await api.getCourseBySlug(courseSlug);
        setCourse(c);
        if (c) {
          // Flatten all lessons
          const allLessons = c.sections.flatMap((s: CourseSection) => s.lessons);
          const active = allLessons.find((l: Lesson) => l.slug === lessonSlug) || allLessons[0];
          setCurrentLesson(active);

          // Load progress
          const prog = await api.getCourseProgress(c.id);
          setProgress(prog);

          if (active) {
            // Load note
            const savedNote = await api.getLessonNote(active.id);
            setNote(savedNote);

            // Load bookmark
            const b = await api.isBookmarked(c.id, active.id);
            setIsBookmarked(b);

            // Reset quiz & practice states for current lesson
            setSelectedQuizOption(null);
            setQuizSubmitted(false);
            setPracticeCode('');
            setPracticeSaved(false);
          }
        }
      } catch {
        // fallback
      }
    }
    load();
  }, [courseSlug, lessonSlug]);

  const allLessons = course ? course.sections.flatMap(s => s.lessons) : [];
  const currentIndex = allLessons.findIndex(l => l.id === currentLesson?.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const isCompleted = currentLesson ? progress.completedLessonIds.includes(currentLesson.id) : false;

  const handleToggleComplete = async () => {
    if (!course || !currentLesson) return;
    const newStatus = !isCompleted;
    const updated = await api.setLessonCompleted(course.id, currentLesson.id, newStatus);
    setProgress(updated);
  };

  const handleSaveNote = async () => {
    if (!currentLesson) return;
    setNoteSaving(true);
    await api.saveLessonNote(currentLesson.id, note);
    setNoteSaving(false);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const handleToggleBookmark = async () => {
    if (!course || !currentLesson) return;
    const res = await api.toggleBookmark(course.id, currentLesson.id, currentLesson.title, course.title);
    setIsBookmarked(res);
  };

  if (!course || !currentLesson) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em]" />
        <p className="mt-4 text-xs text-slate-500">Loading lesson environment...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950">
      {/* Top Learning Header */}
      <div className="sticky top-16 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-3">
          <Link
            to={`/courses/${course.slug}`}
            className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Course</span>
          </Link>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />
          <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">
            {course.title}
          </span>
        </div>

        {/* Progress bar & Completion action */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <span>Progress:</span>
            <div className="w-24 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progress.percent}%` }}
              />
            </div>
            <span className="tabular-nums font-bold text-slate-900 dark:text-white">{progress.percent}%</span>
          </div>

          {progress.percent === 100 && (
            <button
              onClick={() => setShowCertModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-white hover:bg-amber-600 shadow-sm transition-all"
            >
              <Award className="h-4 w-4" />
              <span>Certificate</span>
            </button>
          )}

          <button
            onClick={handleToggleBookmark}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark lesson'}
            className={`p-2 rounded-lg border text-xs transition-colors ${
              isBookmarked
                ? 'border-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-950/40'
                : 'border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400'
            }`}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleToggleComplete}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
            }`}
          >
            {isCompleted ? (
              <>
                <Check className="h-4 w-4" />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Circle className="h-4 w-4" />
                <span>Mark as Done</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Learning Stage: Split Layout with Content & Curriculum Sidebar */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 py-6 gap-8">
        {/* Left: Lesson Content & Interactive Workdeck */}
        <div className="flex-1 space-y-8 max-w-4xl">
          {progress.percent === 100 && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-emerald-500/10 border border-amber-300 dark:border-amber-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Congratulations! Course Completed
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    You've completed all lessons. Claim and share your verified Certificate of Completion!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCertModal(true)}
                className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors shadow-sm shrink-0"
              >
                Claim Certificate
              </button>
            </div>
          )}
          {/* Lesson Header */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Lesson {currentIndex + 1} of {allLessons.length}
              </span>
              <span className="tabular-nums">Est. Duration: {currentLesson.durationMinutes} mins</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {currentLesson.title}
            </h1>

            {/* Video / Interactive Visualizer Stage */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center text-white p-6 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
              <div className="relative z-10 text-center space-y-4 max-w-lg">
                <h3 className="font-bold text-base sm:text-lg text-white">{currentLesson.title}</h3>
                <div className="flex items-center justify-center pt-1">
                  <button
                    onClick={handlePlayClick}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-bold hover:bg-blue-700 shadow-lg transition-transform hover:scale-105"
                  >
                    <Play className="h-4 w-4 fill-white" />
                    <span>Play Video</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Markdown Lesson Content */}
            <div className="prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
              {currentLesson.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-base font-bold text-slate-900 dark:text-white pt-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>
          </div>

          {/* Practice Exercise & Interactive Task */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Practical Application Exercise
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              {currentLesson.practicePrompt}
            </p>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Your Practice Response / Code:
              </label>
              <textarea
                value={practiceCode}
                onChange={e => setPracticeCode(e.target.value)}
                placeholder="Type your solution, code, or written prompt here..."
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs sm:text-sm font-mono text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">
                  {practiceSaved ? 'Solution saved locally!' : 'Exercises are stored with your student profile'}
                </span>
                <button
                  onClick={() => {
                    setPracticeSaved(true);
                    setTimeout(() => setPracticeSaved(false), 2500);
                  }}
                  className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                >
                  Save Submission
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Knowledge Check (Quiz) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Interactive Knowledge Check
              </h2>
            </div>

            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {currentLesson.quiz.question}
            </p>

            <div className="space-y-2">
              {currentLesson.quiz.options.map((opt, i) => {
                const isSelected = selectedQuizOption === i;
                const isCorrect = i === currentLesson.quiz.correctIndex;
                let optionStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300';

                if (quizSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold dark:bg-emerald-950/40 dark:text-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-200';
                }

                return (
                  <button
                    key={i}
                    onClick={() => !quizSubmitted && setSelectedQuizOption(i)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-colors flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    {quizSubmitted && isCorrect && <Check className="h-4 w-4 text-emerald-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              {!quizSubmitted ? (
                <button
                  onClick={() => selectedQuizOption !== null && setQuizSubmitted(true)}
                  disabled={selectedQuizOption === null}
                  className="rounded-lg bg-purple-600 px-4 py-2 text-xs font-semibold text-white hover:bg-purple-700 disabled:opacity-50 transition-colors"
                >
                  Check Answer
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 w-full text-xs text-purple-900 dark:text-purple-200">
                  <span className="font-bold">Explanation:</span> {currentLesson.quiz.explanation}
                </div>
              )}
            </div>
          </div>

          {/* Personal Lesson Notes */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Edit3 className="h-4 w-4 text-slate-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Personal Lesson Notes
                </h3>
              </div>
              {noteSaved && (
                <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                  <Check className="h-3.5 w-3.5" /> Saved
                </span>
              )}
            </div>

            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Jot down key points, questions, or ideas for this lesson..."
              rows={3}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

            <div className="flex justify-end">
              <button
                onClick={handleSaveNote}
                disabled={noteSaving}
                className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 disabled:opacity-50 transition-colors"
              >
                {noteSaving ? 'Saving...' : 'Save Note'}
              </button>
            </div>
          </div>

          {/* Previous / Next Lesson Navigation Controls */}
          <div className="flex items-center justify-between pt-4 pb-12 border-t border-slate-200 dark:border-slate-800">
            {prevLesson ? (
              <button
                onClick={() => navigate(`/learn/${course.slug}/${prevLesson.slug}`)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous:</span> {prevLesson.title}
              </button>
            ) : <div />}

            {nextLesson ? (
              <button
                onClick={() => navigate(`/learn/${course.slug}/${nextLesson.slug}`)}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 shadow-sm"
              >
                <span>Next Lesson</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                to={`/courses/${course.slug}`}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm"
              >
                <Award className="h-4 w-4" />
                <span>Finish Course</span>
              </Link>
            )}
          </div>
        </div>

        {/* Right Sidebar: Course Curriculum Navigation */}
        <div className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Course Syllabus
            </h3>

            <div className="space-y-4 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
              {course.sections.map(section => (
                <div key={section.id} className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
                    {section.title}
                  </div>

                  <div className="space-y-1">
                    {section.lessons.map(lesson => {
                      const isActive = lesson.id === currentLesson.id;
                      const done = progress.completedLessonIds.includes(lesson.id);

                      return (
                        <Link
                          key={lesson.id}
                          to={`/learn/${course.slug}/${lesson.slug}`}
                          className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                            isActive
                              ? 'bg-blue-50 text-blue-700 font-bold dark:bg-blue-950/40 dark:text-blue-400'
                              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            {done ? (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            ) : (
                              <Circle className="h-4 w-4 text-slate-400 shrink-0" />
                            )}
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          <span className="text-[10px] tabular-nums text-slate-400 shrink-0 ml-1">
                            {lesson.durationMinutes}m
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Resources list */}
            {currentLesson.resources && currentLesson.resources.length > 0 && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Lesson Downloads
                </span>
                <div className="space-y-1">
                  {currentLesson.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-xs text-slate-600 dark:text-slate-300 transition-colors"
                    >
                      <span className="truncate">{res.title}</span>
                      <ExternalLink className="h-3 w-3 text-slate-400 shrink-0 ml-1" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {course && (
        <CertificateModal
          course={course}
          isOpen={showCertModal}
          onClose={() => setShowCertModal(false)}
        />
      )}

      {/* Video Player Modal */}
      {showVideoModal && activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="flex flex-wrap items-center justify-between p-4 border-b border-slate-800 bg-slate-950 gap-3">
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-white truncate">
                  {currentLesson?.title || 'Lesson Video'}
                </h3>
              </div>

              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                aria-label="Close video player"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                key={activeVideoUrl}
                src={activeVideoUrl}
                title={currentLesson?.title || 'Lesson Video'}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
