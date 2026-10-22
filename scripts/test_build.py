import json
import re

# Load dump and videos
with open('scripts/english_courses_dump.json') as f:
    en_courses = json.load(f)

with open('scripts/topic_videos.json') as f:
    topic_videos = json.load(f)

print(f"Loaded {len(en_courses)} English courses and {len(topic_videos)} video topics.")
