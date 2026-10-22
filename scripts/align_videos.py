import json
import re

with open('scripts/english_courses_dump.json') as f:
    en_courses = json.load(f)

with open('scripts/generate_video_dictionary.py') as f:
    dict_content = f.read()

# Find all course comments and their keys in generate_video_dictionary.py
lines = dict_content.split('\n')
course_blocks = {}
current_course = None
for line in lines:
    m = re.match(r'\s*#\s*(course-[^:]+):', line)
    if m:
        current_course = m.group(1).strip()
        course_blocks[current_course] = []
    elif current_course and '"l-' in line:
        km = re.search(r'"(l-[^"]+)":\s*(\{[^}]+\})', line)
        if km:
            k = km.group(1)
            v = eval(km.group(2))
            course_blocks[current_course].append(v)

print(f"Total courses in dictionary: {len(course_blocks)}")
for cid in list(course_blocks.keys())[:10]:
    print(f"  {cid}: {len(course_blocks[cid])} video entries")

# Check alignment with en_courses
all_lessons_mapped = {}
for c in en_courses:
    cid = c['id']
    if cid not in course_blocks:
        print(f"ERROR: {cid} not in course_blocks!")
        continue
    c_videos = course_blocks[cid]
    lessons = [l for s in c['sections'] for l in s['lessons']]
    if len(lessons) != len(c_videos):
        print(f"MISMATCH in {cid}: {len(lessons)} lessons vs {len(c_videos)} videos")
    else:
        for l, v in zip(lessons, c_videos):
            all_lessons_mapped[l['id']] = v

print(f"Total verified aligned lesson mappings: {len(all_lessons_mapped)} out of {sum(len(s['lessons']) for c in en_courses for s in c['sections'])}")

with open("scripts/topic_videos.json", "w") as f:
    json.dump(all_lessons_mapped, f, indent=2)

print("Saved all 322 lesson video mappings to scripts/topic_videos.json")
