import json
import re

with open('scripts/topic_videos.json') as f:
    topic_videos = json.load(f)

# Files to update
files = [
    'src/data/coursesData.ts',
    'src/data/courses/programmingCourses.ts',
    'src/data/courses/aiTechCourses.ts',
    'src/data/courses/careerCourses.ts',
    'src/data/courses/creativeCourses.ts',
    'src/data/courses/businessCourses.ts',
    'src/data/courses/productivityCourses.ts',
    'src/data/courses/urduCourses.ts'
]

total_updated = 0

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match lesson blocks
    # We find: id: '(l-[^']+)'
    def replace_lesson(match):
        global total_updated
        lid = match.group(1)
        # Check if lid in topic_videos
        v = topic_videos.get(lid)
        if not v:
            return match.group(0)

        # Get existing block text
        full = match.group(0)
        
        # If videoUrl already present, update or keep
        v_en = v['en']
        v_ur = v['ur']

        # Replace or add videoUrl / videoUrlUrdu
        # Remove old videoUrl / videoUrlUrdu if any
        full = re.sub(r"\n\s*videoUrl:\s*'[^']*',?", "", full)
        full = re.sub(r"\n\s*videoUrlUrdu:\s*'[^']*',?", "", full)

        # Insert after orderIndex: \d+,
        insert_code = f"\n            videoUrl: '{v_en}',\n            videoUrlUrdu: '{v_ur}',"
        if re.search(r'orderIndex:\s*\d+,', full):
            full = re.sub(r'(orderIndex:\s*\d+,)', r'\1' + insert_code, full, count=1)
            total_updated += 1
        elif re.search(r'durationMinutes:\s*\d+,', full):
            full = re.sub(r'(durationMinutes:\s*\d+,)', r'\1' + insert_code, full, count=1)
            total_updated += 1

        return full

    # Match each lesson: from { id: 'l-... to the end of that lesson object before next lesson or }
    # Better: match each lesson object:
    # We can match { \n\s*id: '(l-[^']+)'[\s\S]*?quiz: \{
    new_content = re.sub(r"\{\s*id:\s*'(l-[^']+)'[\s\S]*?practicePrompt:", replace_lesson, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print(f"Total English & existing Urdu lesson video injections: {total_updated}")
