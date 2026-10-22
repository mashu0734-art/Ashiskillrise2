import json

with open('scripts/english_courses_dump.json') as f:
    en_courses = json.load(f)

matched_en_ids = {
    'course-1': 'course-ur-1',
    'course-prog-1': 'course-ur-2',
    'course-prog-2': 'course-ur-3',
    'course-9': 'course-ur-4',
    'course-crt-1': 'course-ur-5',
    'course-3': 'course-ur-6',
    'course-6': 'course-ur-7',
    'course-8': 'course-ur-8',
    'course-5': 'course-ur-9',
    'course-prod-6': 'course-ur-10'
}

unmatched = [c for c in en_courses if c['id'] not in matched_en_ids]
print(f"Total unmatched English courses needing Urdu counterpart: {len(unmatched)}")
for i, c in enumerate(unmatched):
    print(f"{i+1:2d}. {c['id']} | {c['slug']} | {c['title']} | lessons: {sum(len(s['lessons']) for s in c['sections'])}")
