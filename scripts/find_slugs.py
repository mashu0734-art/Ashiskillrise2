import json
import re

with open('src/data/courses/urduCourses.ts') as f:
    ur_text = f.read()

courses = re.findall(r"id:\s*'(course-ur-\d+)',\s*slug:\s*'([^']+)'", ur_text)
print("10 Existing Urdu courses:")
for cid, slug in courses:
    print(f"  {cid}: {slug}")
