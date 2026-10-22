import json
import re

with open('scripts/topic_videos.json') as f:
    topic_videos = json.load(f)

with open('src/data/courses/urduCourses.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# For each lesson in urduCourses.ts:
# id: '(l-ur-[^']+)'
# map to en_id: replace 'l-ur-' with 'l-'
# then lookup in topic_videos
def replace_ur_lesson(match):
    lid = match.group(1)
    en_id = lid.replace('l-ur-', 'l-')
    prefix_map = {
        'l-ex-': 'l-xl-',
        'l-ui-': 'l-uiux-',
        'l-dm-': 'l-mktg-',
        'l-wd-': 'l-web-'
    }
    for k, v_pref in prefix_map.items():
        if en_id.startswith(k):
            en_id = en_id.replace(k, v_pref)
            break
    v = topic_videos.get(en_id)
    if not v:
        # try without prefix or check fallback
        print("Not found for:", lid, en_id)
        return match.group(0)

    full = match.group(0)
    v_en = v['en']
    v_ur = v['ur']

    # Remove existing videoUrl / videoUrlUrdu
    full = re.sub(r"\n\s*videoUrl:\s*'[^']*',?", "", full)
    full = re.sub(r"\n\s*videoUrlUrdu:\s*'[^']*',?", "", full)

    insert_code = f"\n            videoUrl: '{v_en}',\n            videoUrlUrdu: '{v_ur}',"
    full = re.sub(r'(orderIndex:\s*\d+,)', r'\1' + insert_code, full, count=1)
    return full

new_content = re.sub(r"\{\s*id:\s*'(l-ur-[^']+)'[\s\S]*?practicePrompt:", replace_ur_lesson, content)

with open('src/data/courses/urduCourses.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

# Verify count of videoUrl and videoUrlUrdu in urduCourses.ts
v_en = len(re.findall(r'videoUrl:', new_content))
v_ur = len(re.findall(r'videoUrlUrdu:', new_content))
print(f"Updated urduCourses.ts: videoUrl={v_en}, videoUrlUrdu={v_ur}")
