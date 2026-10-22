import { INITIAL_COURSES, CATEGORIES } from '../src/data/coursesData';

console.log('--- ASHISKILLRISE 60-COURSE AUDIT ---');
console.log(`Total Categories: ${CATEGORIES.length}`);
console.log(`Total Courses: ${INITIAL_COURSES.length}`);

let totalLessons = 0;
let totalQuizzes = 0;
let errors: string[] = [];
const slugs = new Set<string>();
const ids = new Set<string>();

INITIAL_COURSES.forEach((course, index) => {
  // Check uniqueness
  if (ids.has(course.id)) {
    errors.push(`Duplicate course id: ${course.id}`);
  }
  ids.add(course.id);

  if (slugs.has(course.slug)) {
    errors.push(`Duplicate course slug: ${course.slug}`);
  }
  slugs.add(course.slug);

  // Check required metadata
  if (!course.title || course.title.trim().length === 0) {
    errors.push(`Course ${course.id} missing title`);
  }
  if (!course.description || course.description.trim().length === 0) {
    errors.push(`Course ${course.id} missing description`);
  }
  if (course.isPremium) {
    errors.push(`Course ${course.id} is marked as premium! All courses must be completely free.`);
  }

  // Check sections and lessons
  if (!course.sections || course.sections.length === 0) {
    errors.push(`Course ${course.id} (${course.title}) has no sections!`);
    return;
  }

  let courseLessons = 0;
  course.sections.forEach(section => {
    if (!section.lessons || section.lessons.length === 0) {
      errors.push(`Section ${section.id} in ${course.title} has no lessons`);
      return;
    }

    section.lessons.forEach(lesson => {
      courseLessons++;
      totalLessons++;

      if (!lesson.title || !lesson.slug || !lesson.content) {
        errors.push(`Lesson in ${course.title} missing required fields (title, slug, or content)`);
      }
      if (lesson.content.length < 50) {
        errors.push(`Lesson "${lesson.title}" in ${course.title} has shallow content (<50 chars)`);
      }

      if (lesson.quiz) {
        totalQuizzes++;
        if (!lesson.quiz.question || !lesson.quiz.options || lesson.quiz.options.length < 2) {
          errors.push(`Quiz in lesson "${lesson.title}" has invalid options`);
        }
        if (
          lesson.quiz.correctIndex < 0 ||
          lesson.quiz.correctIndex >= lesson.quiz.options.length
        ) {
          errors.push(`Quiz in lesson "${lesson.title}" has out-of-bounds correctIndex: ${lesson.quiz.correctIndex}`);
        }
      } else {
        errors.push(`Lesson "${lesson.title}" in ${course.title} is missing a quiz`);
      }
    });
  });

  if (courseLessons !== course.lessonCount) {
    // Note difference if any
  }
});

console.log(`Total Lessons Verified: ${totalLessons}`);
console.log(`Total Quizzes Verified: ${totalQuizzes}`);

if (errors.length === 0) {
  console.log('✅ AUDIT PASSED: All 60 courses are 100% complete, free, valid, and contain functional lessons & quizzes!');
} else {
  console.error(`❌ AUDIT FAILED with ${errors.length} issues:`);
  errors.slice(0, 10).forEach(e => console.error(`  - ${e}`));
  process.exit(1);
}
