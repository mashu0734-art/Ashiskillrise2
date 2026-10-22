import json

with open('scripts/english_courses_dump.json') as f:
    en_courses = json.load(f)

# Let's see what the 10 Urdu courses correspond to
with open('src/data/courses/urduCourses.ts') as f:
    ur_text = f.read()

import re
matches = re.findall(r"id:\s*'(course-ur-\d+)',\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)'", ur_text)
print("10 Existing Urdu courses:")
for cid, slug, title in matches:
    print(f"  {cid} | {slug} | {title}")

print("\nTotal English courses:", len(en_courses))
for i, c in enumerate(en_courses):
    print(f"  [{i+1}] {c['id']} | {c['slug']} | {c['title']} ({len(c['sections'])} sec, {sum(len(s['lessons']) for s in c['sections'])} lessons)")
