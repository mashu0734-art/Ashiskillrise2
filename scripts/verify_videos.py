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
                missing.append((c['id'], lid, l['title']))

print(f"Total English lessons: {sum(len(s['lessons']) for c in en_courses for s in c['sections'])}")
print(f"Missing from topic_videos: {len(missing)}")
if missing:
    for m in missing[:10]:
        print(" ", m)
