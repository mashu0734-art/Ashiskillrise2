import re

with open('scripts/generate_video_dictionary.py') as f:
    text = f.read()

keys = re.findall(r'"(l-[^"]+)":', text)
print(f"Total keys defined in generate_video_dictionary.py: {len(keys)}")
print("Sample keys:", keys[:30])
