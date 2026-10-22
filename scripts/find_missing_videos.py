import json

with open('scripts/english_courses_dump.json') as f:
    en_courses = json.load(f)

with open('scripts/topic_videos.json') as f:
    topic_videos = json.load(f)

missing = []
for c in en_courses:
    for s in c.get('sections', []):
        for l in s.get('lessons', []):
            lid = l['id']
            if lid not in topic_videos:
                missing.append({
                    'course_id': c['id'],
                    'course_title': c['title'],
                    'lesson_id': lid,
                    'lesson_title': l['title']
                })

print(f"Total missing: {len(missing)}")
for m in missing:
    print(f"  {m['course_id']} | {m['lesson_id']} | {m['lesson_title']}")
