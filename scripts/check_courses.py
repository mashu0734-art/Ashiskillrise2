import json
import re

with open('scripts/english_courses_dump.json') as f:
    en_courses = json.load(f)

print(f"Total English courses in dump: {len(en_courses)}")
total_en_lessons = sum(len(s.get('lessons', [])) for c in en_courses for s in c.get('sections', []))
print(f"Total English lessons: {total_en_lessons}")

with open('src/data/courses/urduCourses.ts') as f:
    ur_content = f.read()

ur_courses = re.findall(r"id:\s*'(course-ur-\d+)'", ur_content)
print(f"Urdu courses count: {len(ur_courses)} -> {ur_courses}")

ur_lessons = re.findall(r"id:\s*'(l-ur-[^']+)'", ur_content)
print(f"Urdu lessons count: {len(ur_lessons)}")
