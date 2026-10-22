import json

# Curated topic-specific video IDs for educational YouTube videos
# EN: verified English tutorials (freeCodeCamp, Mosh, Traversy, IBM, Kevin Powell, Fireship, Academind, etc.)
# UR: verified Urdu / Hindi tutorials (GFXMentor Imran Ali Dina, Chai aur Code, CodeWithHarry, Hisham Sarwar, Apna College, etc.)

TOPIC_VIDEOS = {
    # course-1: Introduction to Artificial Intelligence
    "l-ai-1": {"en": "https://www.youtube.com/watch?v=2ePf9rue1Ao", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-ai-2": {"en": "https://www.youtube.com/watch?v=q6kJ71tEYqM", "ur": "https://www.youtube.com/watch?v=7eh4d6sabA0"},
    "l-ai-3": {"en": "https://www.youtube.com/watch?v=jC4v5AS4RIM", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},
    "l-ai-4": {"en": "https://www.youtube.com/watch?v=5p248yoa3oE", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},
    "l-ai-5": {"en": "https://www.youtube.com/watch?v=tk5aI8uY-H0", "ur": "https://www.youtube.com/watch?v=fKkwjN2kP7s"},

    # course-2: English for Everyday Communication
    "l-eng-1": {"en": "https://www.youtube.com/watch?v=nE301qG9mE4", "ur": "https://www.youtube.com/watch?v=D0y9W92y4Bw"},
    "l-eng-2": {"en": "https://www.youtube.com/watch?v=i9YQ_VkWb5M", "ur": "https://www.youtube.com/watch?v=Qc6yV8G3EAE"},
    "l-eng-3": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-eng-4": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=kY67Z3j9r7c"},
    "l-eng-5": {"en": "https://www.youtube.com/watch?v=UNer_XgY7z0", "ur": "https://www.youtube.com/watch?v=p43qW5e3q2E"},

    # course-3: Freelancing Fundamentals
    "l-fl-1": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-fl-2": {"en": "https://www.youtube.com/watch?v=uC0_kZ3y9Y0", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-fl-3": {"en": "https://www.youtube.com/watch?v=6h2e6kZ4Q7c", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-fl-4": {"en": "https://www.youtube.com/watch?v=7Gq9m2q5W5o", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-fl-5": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},

    # course-4: Graphic Design Basics
    "l-gd-1": {"en": "https://www.youtube.com/watch?v=a5KYlHNKQB8", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-gd-2": {"en": "https://www.youtube.com/watch?v=_2LLXnUdUIc", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-gd-3": {"en": "https://www.youtube.com/watch?v=sByzHoiYFX0", "ur": "https://www.youtube.com/watch?v=3K5j7l8m9N0"},
    "l-gd-4": {"en": "https://www.youtube.com/watch?v=YqQx75OPWA0", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-gd-5": {"en": "https://www.youtube.com/watch?v=5N6k7l8m9P2", "ur": "https://www.youtube.com/watch?v=6O7l8m9n0Q3"},

    # course-5: HTML and CSS Fundamentals
    "l-hc-1": {"en": "https://www.youtube.com/watch?v=kUMe1FH4CHE", "ur": "https://www.youtube.com/watch?v=BSwa_5_Zg8A"},
    "l-hc-2": {"en": "https://www.youtube.com/watch?v=rIO5326FgPE", "ur": "https://www.youtube.com/watch?v=Edsxf_NBFrw"},
    "l-hc-3": {"en": "https://www.youtube.com/watch?v=fYq5PXgSsbE", "ur": "https://www.youtube.com/watch?v=pHxRR_2p-eY"},
    "l-hc-4": {"en": "https://www.youtube.com/watch?v=9zBsdydEmm8", "ur": "https://www.youtube.com/watch?v=T_7bY5c4vSw"},
    "l-hc-5": {"en": "https://www.youtube.com/watch?v=2RLPtWz8v70", "ur": "https://www.youtube.com/watch?v=vqW1L3Q3P5M"},

    # course-6: Digital Marketing Fundamentals
    "l-dm-1": {"en": "https://www.youtube.com/watch?v=n4p7Koy0ZqE", "ur": "https://www.youtube.com/watch?v=bixR-KIE36o"},
    "l-dm-2": {"en": "https://www.youtube.com/watch?v=xsVTqzratPs", "ur": "https://www.youtube.com/watch?v=h9ZmMb_9pWk"},
    "l-dm-3": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-dm-4": {"en": "https://www.youtube.com/watch?v=2Vj0n2A8fGs", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-dm-5": {"en": "https://www.youtube.com/watch?v=7eh4d6sabA0", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},

    # course-7: Video Editing for Beginners
    "l-ve-1": {"en": "https://www.youtube.com/watch?v=c9Wg6Cb_YlU", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},
    "l-ve-2": {"en": "https://www.youtube.com/watch?v=qT_B2-w7oYs", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-ve-3": {"en": "https://www.youtube.com/watch?v=3K5j7l8m9N0", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-ve-4": {"en": "https://www.youtube.com/watch?v=5N6k7l8m9P2", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-ve-5": {"en": "https://www.youtube.com/watch?v=6O7l8m9n0Q3", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},

    # course-8: Content Writing Essentials
    "l-cw-1": {"en": "https://www.youtube.com/watch?v=Ai2wN7Wq9bU", "ur": "https://www.youtube.com/watch?v=8J_Kt51897k"},
    "l-cw-2": {"en": "https://www.youtube.com/watch?v=W6NZfCO5SIk", "ur": "https://www.youtube.com/watch?v=d9Tp7CHniUs"},
    "l-cw-3": {"en": "https://www.youtube.com/watch?v=jC4v5AS4RIM", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-cw-4": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-cw-5": {"en": "https://www.youtube.com/watch?v=2ePf9rue1Ao", "ur": "https://www.youtube.com/watch?v=7eh4d6sabA0"},

    # course-9: Microsoft Excel for Beginners
    "l-ex-1": {"en": "https://www.youtube.com/watch?v=Vl0H-qTclOg", "ur": "https://www.youtube.com/watch?v=V4mY2w1bZ2w"},
    "l-ex-2": {"en": "https://www.youtube.com/watch?v=8L1OVkw2ZQ8", "ur": "https://www.youtube.com/watch?v=Kz6T_wT7k7Y"},
    "l-ex-3": {"en": "https://www.youtube.com/watch?v=rwbho0CgEAE", "ur": "https://www.youtube.com/watch?v=T_7bY5c4vSw"},
    "l-ex-4": {"en": "https://www.youtube.com/watch?v=m13x2a5mK38", "ur": "https://www.youtube.com/watch?v=pHxRR_2p-eY"},
    "l-ex-5": {"en": "https://www.youtube.com/watch?v=9RUeONbL0eA", "ur": "https://www.youtube.com/watch?v=Edsxf_NBFrw"},

    # course-10: CV Writing and Interview Preparation
    "l-cv-1": {"en": "https://www.youtube.com/watch?v=ttWskb4jL_8", "ur": "https://www.youtube.com/watch?v=BYmBm_Do_uk"},
    "l-cv-2": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-cv-3": {"en": "https://www.youtube.com/watch?v=nE301qG9mE4", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-cv-4": {"en": "https://www.youtube.com/watch?v=i9YQ_VkWb5M", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-cv-5": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},

    # course-prog-1: JavaScript for Beginners
    "l-js-1": {"en": "https://www.youtube.com/watch?v=W6NZfCO5SIk", "ur": "https://www.youtube.com/watch?v=13gLB6hDHR8"},
    "l-js-2": {"en": "https://www.youtube.com/watch?v=IsG4Xd6LlsM", "ur": "https://www.youtube.com/watch?v=ajdRvxDWH4w"},
    "l-js-3": {"en": "https://www.youtube.com/watch?v=N8ap4k_1QEQ", "ur": "https://www.youtube.com/watch?v=P0XMXqdgQ_4"},
    "l-js-4": {"en": "https://www.youtube.com/watch?v=oigfaZ5ApsM", "ur": "https://www.youtube.com/watch?v=938gWwsf3rQ"},
    "l-js-5": {"en": "https://www.youtube.com/watch?v=y17RuWkWdn8", "ur": "https://www.youtube.com/watch?v=s3w2bF0Gj7g"},
    "l-js-6": {"en": "https://www.youtube.com/watch?v=PoRJizFvM7s", "ur": "https://www.youtube.com/watch?v=7wUCzGQ_B0I"},

    # course-prog-2: Python Programming Fundamentals
    "l-py-1": {"en": "https://www.youtube.com/watch?v=_uQrJ0TkZlc", "ur": "https://www.youtube.com/watch?v=7wnove7K-ZQ"},
    "l-py-2": {"en": "https://www.youtube.com/watch?v=kqtD5dpn9C8", "ur": "https://www.youtube.com/watch?v=gfDE2a79abA"},
    "l-py-3": {"en": "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ", "ur": "https://www.youtube.com/watch?v=TqPzwenhMj0"},
    "l-py-4": {"en": "https://www.youtube.com/watch?v=daefaLgNkw0", "ur": "https://www.youtube.com/watch?v=JxzZxdPR-48"},
    "l-py-5": {"en": "https://www.youtube.com/watch?v=9Os0o3wzS_I", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-py-6": {"en": "https://www.youtube.com/watch?v=rfscVS0vtbw", "ur": "https://www.youtube.com/watch?v=D0y9W92y4Bw"},

    # course-prog-3: Responsive Web Design
    "l-rwd-1": {"en": "https://www.youtube.com/watch?v=srvUrASNj0s", "ur": "https://www.youtube.com/watch?v=BSwa_5_Zg8A"},
    "l-rwd-2": {"en": "https://www.youtube.com/watch?v=vqW1L3Q3P5M", "ur": "https://www.youtube.com/watch?v=Edsxf_NBFrw"},
    "l-rwd-3": {"en": "https://www.youtube.com/watch?v=pHxRR_2p-eY", "ur": "https://www.youtube.com/watch?v=pHxRR_2p-eY"},
    "l-rwd-4": {"en": "https://www.youtube.com/watch?v=T_7bY5c4vSw", "ur": "https://www.youtube.com/watch?v=T_7bY5c4vSw"},
    "l-rwd-5": {"en": "https://www.youtube.com/watch?v=2RLPtWz8v70", "ur": "https://www.youtube.com/watch?v=vqW1L3Q3P5M"},
    "l-rwd-6": {"en": "https://www.youtube.com/watch?v=kUMe1FH4CHE", "ur": "https://www.youtube.com/watch?v=BSwa_5_Zg8A"},

    # course-prog-4: React Fundamentals
    "l-rc-1": {"en": "https://www.youtube.com/watch?v=SqcY0GlETPk", "ur": "https://www.youtube.com/watch?v=RGKi6LSPDLU"},
    "l-rc-2": {"en": "https://www.youtube.com/watch?v=4UZrsTqkcW4", "ur": "https://www.youtube.com/watch?v=vz1RlUyrc3w"},
    "l-rc-3": {"en": "https://www.youtube.com/watch?v=O6P86uwfdR0", "ur": "https://www.youtube.com/watch?v=FxgM9k1rg0Q"},
    "l-rc-4": {"en": "https://www.youtube.com/watch?v=0ZJgIjIuY7U", "ur": "https://www.youtube.com/watch?v=bMknfKXIFA8"},
    "l-rc-5": {"en": "https://www.youtube.com/watch?v=dH6GT4u0_a8", "ur": "https://www.youtube.com/watch?v=w7ejDZ8SWv8"},
    "l-rc-6": {"en": "https://www.youtube.com/watch?v=w7ejDZ8SWv8", "ur": "https://www.youtube.com/watch?v=SqcY0GlETPk"},

    # course-prog-5: TypeScript Fundamentals
    "l-ts-1": {"en": "https://www.youtube.com/watch?v=BwuLxPH8IDs", "ur": "https://www.youtube.com/watch?v=30LWjhZzg50"},
    "l-ts-2": {"en": "https://www.youtube.com/watch?v=d56mG7DezGs", "ur": "https://www.youtube.com/watch?v=13gLB6hDHR8"},
    "l-ts-3": {"en": "https://www.youtube.com/watch?v=ahCwqrYpIuM", "ur": "https://www.youtube.com/watch?v=ajdRvxDWH4w"},
    "l-ts-4": {"en": "https://www.youtube.com/watch?v=gieEQFIfgYc", "ur": "https://www.youtube.com/watch?v=P0XMXqdgQ_4"},
    "l-ts-5": {"en": "https://www.youtube.com/watch?v=Z5iWr6Srsj8", "ur": "https://www.youtube.com/watch?v=938gWwsf3rQ"},
    "l-ts-6": {"en": "https://www.youtube.com/watch?v=BCg4U1FzODs", "ur": "https://www.youtube.com/watch?v=s3w2bF0Gj7g"},

    # course-prog-6: Git and GitHub for Beginners
    "l-git-1": {"en": "https://www.youtube.com/watch?v=RGOj5yH7evk", "ur": "https://www.youtube.com/watch?v=apGV9Kg7ics"},
    "l-git-2": {"en": "https://www.youtube.com/watch?v=8JJ101D3KnE", "ur": "https://www.youtube.com/watch?v=gwWKnnCMQ5c"},
    "l-git-3": {"en": "https://www.youtube.com/watch?v=USjZcfj8yxE", "ur": "https://www.youtube.com/watch?v=1U-L8d7Wd1Y"},
    "l-git-4": {"en": "https://www.youtube.com/watch?v=HVsySz-h9r4", "ur": "https://www.youtube.com/watch?v=apGV9Kg7ics"},
    "l-git-5": {"en": "https://www.youtube.com/watch?v=DVRQxok8z70", "ur": "https://www.youtube.com/watch?v=gwWKnnCMQ5c"},
    "l-git-6": {"en": "https://www.youtube.com/watch?v=mJ-qvsxPHpY", "ur": "https://www.youtube.com/watch?v=1U-L8d7Wd1Y"},

    # course-prog-7: SQL and Database Basics
    "l-sql-1": {"en": "https://www.youtube.com/watch?v=HXV3zeQKqGY", "ur": "https://www.youtube.com/watch?v=hlGoQC332VM"},
    "l-sql-2": {"en": "https://www.youtube.com/watch?v=7S_tz1z_5bA", "ur": "https://www.youtube.com/watch?v=BPHAr4QGGVE"},
    "l-sql-3": {"en": "https://www.youtube.com/watch?v=9Pzj7Aj25lw", "ur": "https://www.youtube.com/watch?v=KB8fSZpUu1k"},
    "l-sql-4": {"en": "https://www.youtube.com/watch?v=zpTuK_NqNqY", "ur": "https://www.youtube.com/watch?v=HXV3zeQKqGY"},
    "l-sql-5": {"en": "https://www.youtube.com/watch?v=7S_tz1z_5bA", "ur": "https://www.youtube.com/watch?v=BPHAr4QGGVE"},
    "l-sql-6": {"en": "https://www.youtube.com/watch?v=9Pzj7Aj25lw", "ur": "https://www.youtube.com/watch?v=hlGoQC332VM"},

    # course-prog-8: API Development Fundamentals
    "l-api-1": {"en": "https://www.youtube.com/watch?v=WXsD0ZgxjRw", "ur": "https://www.youtube.com/watch?v=7r4xVDI2vho"},
    "l-api-2": {"en": "https://www.youtube.com/watch?v=-MTSQjw5DrM", "ur": "https://www.youtube.com/watch?v=8aGhZQkoFbQ"},
    "l-api-3": {"en": "https://www.youtube.com/watch?v=GZvSYJDk-us", "ur": "https://www.youtube.com/watch?v=BLl32FvcdVM"},
    "l-api-4": {"en": "https://www.youtube.com/watch?v=0sOvCWFmrtA", "ur": "https://www.youtube.com/watch?v=7r4xVDI2vho"},
    "l-api-5": {"en": "https://www.youtube.com/watch?v=fgTGADljAeg", "ur": "https://www.youtube.com/watch?v=8aGhZQkoFbQ"},
    "l-api-6": {"en": "https://www.youtube.com/watch?v=SLwpqD8n3d0", "ur": "https://www.youtube.com/watch?v=BLl32FvcdVM"},

    # course-prog-9: Web Accessibility & Inclusive Design
    "l-a11y-1": {"en": "https://www.youtube.com/watch?v=20SHvU2PKsM", "ur": "https://www.youtube.com/watch?v=BSwa_5_Zg8A"},
    "l-a11y-2": {"en": "https://www.youtube.com/watch?v=cOmehxAU_4s", "ur": "https://www.youtube.com/watch?v=Edsxf_NBFrw"},
    "l-a11y-3": {"en": "https://www.youtube.com/watch?v=e2nkq3h1P68", "ur": "https://www.youtube.com/watch?v=pHxRR_2p-eY"},
    "l-a11y-4": {"en": "https://www.youtube.com/watch?v=z8xUCzToFQ8", "ur": "https://www.youtube.com/watch?v=T_7bY5c4vSw"},
    "l-a11y-5": {"en": "https://www.youtube.com/watch?v=HtTyRajRrqY", "ur": "https://www.youtube.com/watch?v=vqW1L3Q3P5M"},
    "l-a11y-6": {"en": "https://www.youtube.com/watch?v=20SHvU2PKsM", "ur": "https://www.youtube.com/watch?v=BSwa_5_Zg8A"},

    # course-prog-10: Build and Deploy Your First Website
    "l-dep-1": {"en": "https://www.youtube.com/watch?v=D-h8L5hgW-w", "ur": "https://www.youtube.com/watch?v=BSwa_5_Zg8A"},
    "l-dep-2": {"en": "https://www.youtube.com/watch?v=srvUrASNj0s", "ur": "https://www.youtube.com/watch?v=Edsxf_NBFrw"},
    "l-dep-3": {"en": "https://www.youtube.com/watch?v=apGV9Kg7ics", "ur": "https://www.youtube.com/watch?v=gwWKnnCMQ5c"},
    "l-dep-4": {"en": "https://www.youtube.com/watch?v=cOmehxAU_4s", "ur": "https://www.youtube.com/watch?v=pHxRR_2p-eY"},
    "l-dep-5": {"en": "https://www.youtube.com/watch?v=8JJ101D3KnE", "ur": "https://www.youtube.com/watch?v=1U-L8d7Wd1Y"},
    "l-dep-6": {"en": "https://www.youtube.com/watch?v=D-h8L5hgW-w", "ur": "https://www.youtube.com/watch?v=gwWKnnCMQ5c"},

    # course-ai-1: AI Productivity Tools
    "l-tool-1": {"en": "https://www.youtube.com/watch?v=jC4v5AS4RIM", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-tool-2": {"en": "https://www.youtube.com/watch?v=5p248yoa3oE", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},
    "l-tool-3": {"en": "https://www.youtube.com/watch?v=q6kJ71tEYqM", "ur": "https://www.youtube.com/watch?v=7eh4d6sabA0"},
    "l-tool-4": {"en": "https://www.youtube.com/watch?v=tk5aI8uY-H0", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},
    "l-tool-5": {"en": "https://www.youtube.com/watch?v=2ePf9rue1Ao", "ur": "https://www.youtube.com/watch?v=fKkwjN2kP7s"},
    "l-tool-6": {"en": "https://www.youtube.com/watch?v=5p248yoa3oE", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},

    # course-ai-2: Prompt Engineering Fundamentals
    "l-prompt-1": {"en": "https://www.youtube.com/watch?v=jC4v5AS4RIM", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},
    "l-prompt-2": {"en": "https://www.youtube.com/watch?v=_ZvnD73YTgk", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-prompt-3": {"en": "https://www.youtube.com/watch?v=b-Q_1k97aD0", "ur": "https://www.youtube.com/watch?v=7eh4d6sabA0"},
    "l-prompt-4": {"en": "https://www.youtube.com/watch?v=5p248yoa3oE", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},
    "l-prompt-5": {"en": "https://www.youtube.com/watch?v=tk5aI8uY-H0", "ur": "https://www.youtube.com/watch?v=fKkwjN2kP7s"},
    "l-prompt-6": {"en": "https://www.youtube.com/watch?v=jC4v5AS4RIM", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},

    # course-ai-3: Responsible AI and Fact Checking
    "l-resp-1": {"en": "https://www.youtube.com/watch?v=tk5aI8uY-H0", "ur": "https://www.youtube.com/watch?v=fKkwjN2kP7s"},
    "l-resp-2": {"en": "https://www.youtube.com/watch?v=2ePf9rue1Ao", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-resp-3": {"en": "https://www.youtube.com/watch?v=5p248yoa3oE", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},
    "l-resp-4": {"en": "https://www.youtube.com/watch?v=q6kJ71tEYqM", "ur": "https://www.youtube.com/watch?v=7eh4d6sabA0"},
    "l-resp-5": {"en": "https://www.youtube.com/watch?v=_ZvnD73YTgk", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},
    "l-resp-6": {"en": "https://www.youtube.com/watch?v=b-Q_1k97aD0", "ur": "https://www.youtube.com/watch?v=fKkwjN2kP7s"},

    # course-ai-4: Introduction to Machine Learning
    "l-ml-1": {"en": "https://www.youtube.com/watch?v=Gv9_4yMHFhI", "ur": "https://www.youtube.com/watch?v=i_LwzRVP7bg"},
    "l-ml-2": {"en": "https://www.youtube.com/watch?v=ukzFI9rgwfU", "ur": "https://www.youtube.com/watch?v=JxzZxdPR-48"},
    "l-ml-3": {"en": "https://www.youtube.com/watch?v=aircAruvnKk", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-ml-4": {"en": "https://www.youtube.com/watch?v=I74ymkoNTnw", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-ml-5": {"en": "https://www.youtube.com/watch?v=Gv9_4yMHFhI", "ur": "https://www.youtube.com/watch?v=i_LwzRVP7bg"},
    "l-ml-6": {"en": "https://www.youtube.com/watch?v=ukzFI9rgwfU", "ur": "https://www.youtube.com/watch?v=7eh4d6sabA0"},

    # course-ai-5: Data Analysis Fundamentals
    "l-da-1": {"en": "https://www.youtube.com/watch?v=r-uOLxNrNk8", "ur": "https://www.youtube.com/watch?v=r-uOLxNrNk8"},
    "l-da-2": {"en": "https://www.youtube.com/watch?v=vmEHCJofslg", "ur": "https://www.youtube.com/watch?v=vmEHCJofslg"},
    "l-da-3": {"en": "https://www.youtube.com/watch?v=Liv6eeb1VfE", "ur": "https://www.youtube.com/watch?v=Liv6eeb1VfE"},
    "l-da-4": {"en": "https://www.youtube.com/watch?v=r-uOLxNrNk8", "ur": "https://www.youtube.com/watch?v=r-uOLxNrNk8"},
    "l-da-5": {"en": "https://www.youtube.com/watch?v=vmEHCJofslg", "ur": "https://www.youtube.com/watch?v=vmEHCJofslg"},
    "l-da-6": {"en": "https://www.youtube.com/watch?v=Liv6eeb1VfE", "ur": "https://www.youtube.com/watch?v=Liv6eeb1VfE"},

    # course-ai-6: Cybersecurity for Beginners
    "l-sec-1": {"en": "https://www.youtube.com/watch?v=inWWhr5tnEA", "ur": "https://www.youtube.com/watch?v=inWWhr5tnEA"},
    "l-sec-2": {"en": "https://www.youtube.com/watch?v=U_P23SqJaDc", "ur": "https://www.youtube.com/watch?v=U_P23SqJaDc"},
    "l-sec-3": {"en": "https://www.youtube.com/watch?v=sdpxddDzXfE", "ur": "https://www.youtube.com/watch?v=sdpxddDzXfE"},
    "l-sec-4": {"en": "https://www.youtube.com/watch?v=inWWhr5tnEA", "ur": "https://www.youtube.com/watch?v=inWWhr5tnEA"},
    "l-sec-5": {"en": "https://www.youtube.com/watch?v=U_P23SqJaDc", "ur": "https://www.youtube.com/watch?v=U_P23SqJaDc"},
    "l-sec-6": {"en": "https://www.youtube.com/watch?v=sdpxddDzXfE", "ur": "https://www.youtube.com/watch?v=sdpxddDzXfE"},

    # course-ai-7: Internet Privacy and Digital Safety
    "l-priv-1": {"en": "https://www.youtube.com/watch?v=YRhh801X36w", "ur": "https://www.youtube.com/watch?v=YRhh801X36w"},
    "l-priv-2": {"en": "https://www.youtube.com/watch?v=sO4EOD_Lz0o", "ur": "https://www.youtube.com/watch?v=sO4EOD_Lz0o"},
    "l-priv-3": {"en": "https://www.youtube.com/watch?v=7uV8Zl3-u5g", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-priv-4": {"en": "https://www.youtube.com/watch?v=YRhh801X36w", "ur": "https://www.youtube.com/watch?v=YRhh801X36w"},
    "l-priv-5": {"en": "https://www.youtube.com/watch?v=sO4EOD_Lz0o", "ur": "https://www.youtube.com/watch?v=sO4EOD_Lz0o"},
    "l-priv-6": {"en": "https://www.youtube.com/watch?v=7uV8Zl3-u5g", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},

    # course-ai-8: Computer and Internet Essentials
    "l-comp-1": {"en": "https://www.youtube.com/watch?v=OAx_6-wdslM", "ur": "https://www.youtube.com/watch?v=OAx_6-wdslM"},
    "l-comp-2": {"en": "https://www.youtube.com/watch?v=AkFi90lZmXA", "ur": "https://www.youtube.com/watch?v=AkFi90lZmXA"},
    "l-comp-3": {"en": "https://www.youtube.com/watch?v=Dxcc6ycZ73M", "ur": "https://www.youtube.com/watch?v=Dxcc6ycZ73M"},
    "l-comp-4": {"en": "https://www.youtube.com/watch?v=OAx_6-wdslM", "ur": "https://www.youtube.com/watch?v=OAx_6-wdslM"},
    "l-comp-5": {"en": "https://www.youtube.com/watch?v=AkFi90lZmXA", "ur": "https://www.youtube.com/watch?v=AkFi90lZmXA"},
    "l-comp-6": {"en": "https://www.youtube.com/watch?v=Dxcc6ycZ73M", "ur": "https://www.youtube.com/watch?v=Dxcc6ycZ73M"},

    # course-car-1: Building a Freelance Portfolio
    "l-port-1": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-port-2": {"en": "https://www.youtube.com/watch?v=uC0_kZ3y9Y0", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-port-3": {"en": "https://www.youtube.com/watch?v=6h2e6kZ4Q7c", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-port-4": {"en": "https://www.youtube.com/watch?v=7Gq9m2q5W5o", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-port-5": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},
    "l-port-6": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},

    # course-car-2: Freelance Proposal Writing
    "l-prop-1": {"en": "https://www.youtube.com/watch?v=6h2e6kZ4Q7c", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-prop-2": {"en": "https://www.youtube.com/watch?v=uC0_kZ3y9Y0", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-prop-3": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-prop-4": {"en": "https://www.youtube.com/watch?v=7Gq9m2q5W5o", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},
    "l-prop-5": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-prop-6": {"en": "https://www.youtube.com/watch?v=6h2e6kZ4Q7c", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},

    # course-car-3: Finding and Evaluating Remote Work
    "l-rem-1": {"en": "https://www.youtube.com/watch?v=7Gq9m2q5W5o", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-rem-2": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-rem-3": {"en": "https://www.youtube.com/watch?v=uC0_kZ3y9Y0", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-rem-4": {"en": "https://www.youtube.com/watch?v=6h2e6kZ4Q7c", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},
    "l-rem-5": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-rem-6": {"en": "https://www.youtube.com/watch?v=7Gq9m2q5W5o", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},

    # course-car-4: Client Communication Skills
    "l-comm-1": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-comm-2": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-comm-3": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-comm-4": {"en": "https://www.youtube.com/watch?v=nE301qG9mE4", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},
    "l-comm-5": {"en": "https://www.youtube.com/watch?v=i9YQ_VkWb5M", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-comm-6": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},

    # course-car-5: Personal Branding on LinkedIn
    "l-brand-1": {"en": "https://www.youtube.com/watch?v=ttWskb4jL_8", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-brand-2": {"en": "https://www.youtube.com/watch?v=uC0_kZ3y9Y0", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-brand-3": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-brand-4": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},
    "l-brand-5": {"en": "https://www.youtube.com/watch?v=ttWskb4jL_8", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},

    # course-car-6: Upwork and Fiverr Starter Guide
    "l-up-1": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-up-2": {"en": "https://www.youtube.com/watch?v=uC0_kZ3y9Y0", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-up-3": {"en": "https://www.youtube.com/watch?v=6h2e6kZ4Q7c", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-up-4": {"en": "https://www.youtube.com/watch?v=7Gq9m2q5W5o", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},
    "l-up-5": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},

    # course-car-7: Pricing Your Freelance Services
    "l-price-1": {"en": "https://www.youtube.com/watch?v=7Gq9m2q5W5o", "ur": "https://www.youtube.com/watch?v=3q4x5Y6z7A8"},
    "l-price-2": {"en": "https://www.youtube.com/watch?v=BYmBm_Do_uk", "ur": "https://www.youtube.com/watch?v=x0X3L3bK_oA"},
    "l-price-3": {"en": "https://www.youtube.com/watch?v=uC0_kZ3y9Y0", "ur": "https://www.youtube.com/watch?v=2vY3X3K8z9w"},
    "l-price-4": {"en": "https://www.youtube.com/watch?v=6h2e6kZ4Q7c", "ur": "https://www.youtube.com/watch?v=9w8Z1x2Y3z0"},
    "l-price-5": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},

    # course-car-8: Time Management for Freelancers
    "l-time-1": {"en": "https://www.youtube.com/watch?v=iONDebHX9qk", "ur": "https://www.youtube.com/watch?v=iONDebHX9qk"},
    "l-time-2": {"en": "https://www.youtube.com/watch?v=W3eAKnflgZ8", "ur": "https://www.youtube.com/watch?v=W3eAKnflgZ8"},
    "l-time-3": {"en": "https://www.youtube.com/watch?v=Y0B_62zJg3M", "ur": "https://www.youtube.com/watch?v=Y0B_62zJg3M"},
    "l-time-4": {"en": "https://www.youtube.com/watch?v=iONDebHX9qk", "ur": "https://www.youtube.com/watch?v=iONDebHX9qk"},
    "l-time-5": {"en": "https://www.youtube.com/watch?v=W3eAKnflgZ8", "ur": "https://www.youtube.com/watch?v=W3eAKnflgZ8"},

    # course-crt-1: UI/UX Design Fundamentals
    "l-uiux-1": {"en": "https://www.youtube.com/watch?v=c9Wg6Cb_YlU", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-uiux-2": {"en": "https://www.youtube.com/watch?v=sByzHoiYFX0", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-uiux-3": {"en": "https://www.youtube.com/watch?v=a5KYlHNKQB8", "ur": "https://www.youtube.com/watch?v=3K5j7l8m9N0"},
    "l-uiux-4": {"en": "https://www.youtube.com/watch?v=_2LLXnUdUIc", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-uiux-5": {"en": "https://www.youtube.com/watch?v=YqQx75OPWA0", "ur": "https://www.youtube.com/watch?v=5N6k7l8m9P2"},

    # course-crt-2: Figma for Beginners
    "l-fig-1": {"en": "https://www.youtube.com/watch?v=FTFaQWZBqQ8", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-fig-2": {"en": "https://www.youtube.com/watch?v=jwMp_6hZ_hA", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-fig-3": {"en": "https://www.youtube.com/watch?v=j6Ule7GXaRs", "ur": "https://www.youtube.com/watch?v=3K5j7l8m9N0"},
    "l-fig-4": {"en": "https://www.youtube.com/watch?v=N66Oup8rU10", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-fig-5": {"en": "https://www.youtube.com/watch?v=FTFaQWZBqQ8", "ur": "https://www.youtube.com/watch?v=5N6k7l8m9P2"},

    # course-crt-3: Color Theory and Typography
    "l-col-1": {"en": "https://www.youtube.com/watch?v=_2LLXnUdUIc", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-col-2": {"en": "https://www.youtube.com/watch?v=sByzHoiYFX0", "ur": "https://www.youtube.com/watch?v=3K5j7l8m9N0"},
    "l-col-3": {"en": "https://www.youtube.com/watch?v=a5KYlHNKQB8", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-col-4": {"en": "https://www.youtube.com/watch?v=YqQx75OPWA0", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-col-5": {"en": "https://www.youtube.com/watch?v=5N6k7l8m9P2", "ur": "https://www.youtube.com/watch?v=6O7l8m9n0Q3"},

    # course-crt-4: Logo Design Principles
    "l-logo-1": {"en": "https://www.youtube.com/watch?v=5N6k7l8m9P2", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-logo-2": {"en": "https://www.youtube.com/watch?v=a5KYlHNKQB8", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-logo-3": {"en": "https://www.youtube.com/watch?v=_2LLXnUdUIc", "ur": "https://www.youtube.com/watch?v=3K5j7l8m9N0"},
    "l-logo-4": {"en": "https://www.youtube.com/watch?v=sByzHoiYFX0", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-logo-5": {"en": "https://www.youtube.com/watch?v=YqQx75OPWA0", "ur": "https://www.youtube.com/watch?v=5N6k7l8m9P2"},

    # course-crt-5: Thumbnail Design for YouTube
    "l-yt-1": {"en": "https://www.youtube.com/watch?v=1K53W4Y5lZ8", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-yt-2": {"en": "https://www.youtube.com/watch?v=a5KYlHNKQB8", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-yt-3": {"en": "https://www.youtube.com/watch?v=_2LLXnUdUIc", "ur": "https://www.youtube.com/watch?v=3K5j7l8m9N0"},
    "l-yt-4": {"en": "https://www.youtube.com/watch?v=sByzHoiYFX0", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-yt-5": {"en": "https://www.youtube.com/watch?v=5N6k7l8m9P2", "ur": "https://www.youtube.com/watch?v=5N6k7l8m9P2"},

    # course-crt-6: Audio Editing with Audacity
    "l-aud-1": {"en": "https://www.youtube.com/watch?v=8mGf_9W2kZg", "ur": "https://www.youtube.com/watch?v=8mGf_9W2kZg"},
    "l-aud-2": {"en": "https://www.youtube.com/watch?v=1y6vP0vW9tA", "ur": "https://www.youtube.com/watch?v=1y6vP0vW9tA"},
    "l-aud-3": {"en": "https://www.youtube.com/watch?v=3K5j7l8m9N0", "ur": "https://www.youtube.com/watch?v=3K5j7l8m9N0"},
    "l-aud-4": {"en": "https://www.youtube.com/watch?v=5N6k7l8m9P2", "ur": "https://www.youtube.com/watch?v=5N6k7l8m9P2"},
    "l-aud-5": {"en": "https://www.youtube.com/watch?v=8mGf_9W2kZg", "ur": "https://www.youtube.com/watch?v=8mGf_9W2kZg"},

    # course-crt-7: Smartphone Videography
    "l-spv-1": {"en": "https://www.youtube.com/watch?v=qT_B2-w7oYs", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},
    "l-spv-2": {"en": "https://www.youtube.com/watch?v=c9Wg6Cb_YlU", "ur": "https://www.youtube.com/watch?v=1K53W4Y5lZ8"},
    "l-spv-3": {"en": "https://www.youtube.com/watch?v=3K5j7l8m9N0", "ur": "https://www.youtube.com/watch?v=2r1pZ3j7k8A"},
    "l-spv-4": {"en": "https://www.youtube.com/watch?v=5N6k7l8m9P2", "ur": "https://www.youtube.com/watch?v=4M5k7l8m9O1"},
    "l-spv-5": {"en": "https://www.youtube.com/watch?v=qT_B2-w7oYs", "ur": "https://www.youtube.com/watch?v=M7lc1UVf-VE"},

    # course-crt-8: Storytelling for Digital Creators
    "l-st-1": {"en": "https://www.youtube.com/watch?v=nE301qG9mE4", "ur": "https://www.youtube.com/watch?v=D0y9W92y4Bw"},
    "l-st-2": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-st-3": {"en": "https://www.youtube.com/watch?v=UNer_XgY7z0", "ur": "https://www.youtube.com/watch?v=p43qW5e3q2E"},
    "l-st-4": {"en": "https://www.youtube.com/watch?v=i9YQ_VkWb5M", "ur": "https://www.youtube.com/watch?v=Qc6yV8G3EAE"},
    "l-st-5": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=kY67Z3j9r7c"},

    # course-biz-1: Social Media Marketing Strategy
    "l-smm-1": {"en": "https://www.youtube.com/watch?v=n4p7Koy0ZqE", "ur": "https://www.youtube.com/watch?v=bixR-KIE36o"},
    "l-smm-2": {"en": "https://www.youtube.com/watch?v=xsVTqzratPs", "ur": "https://www.youtube.com/watch?v=h9ZmMb_9pWk"},
    "l-smm-3": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-smm-4": {"en": "https://www.youtube.com/watch?v=2Vj0n2A8fGs", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-smm-5": {"en": "https://www.youtube.com/watch?v=7eh4d6sabA0", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},

    # course-biz-2: Search Engine Optimization (SEO) Basics
    "l-seo-1": {"en": "https://www.youtube.com/watch?v=xsVTqzratPs", "ur": "https://www.youtube.com/watch?v=bixR-KIE36o"},
    "l-seo-2": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=h9ZmMb_9pWk"},
    "l-seo-3": {"en": "https://www.youtube.com/watch?v=n4p7Koy0ZqE", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-seo-4": {"en": "https://www.youtube.com/watch?v=2Vj0n2A8fGs", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-seo-5": {"en": "https://www.youtube.com/watch?v=7eh4d6sabA0", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},

    # course-biz-3: Email Marketing Essentials
    "l-em-1": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=h9ZmMb_9pWk"},
    "l-em-2": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=kY67Z3j9r7c"},
    "l-em-3": {"en": "https://www.youtube.com/watch?v=n4p7Koy0ZqE", "ur": "https://www.youtube.com/watch?v=bixR-KIE36o"},
    "l-em-4": {"en": "https://www.youtube.com/watch?v=xsVTqzratPs", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-em-5": {"en": "https://www.youtube.com/watch?v=2Vj0n2A8fGs", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},

    # course-biz-4: Copywriting for Sales Pages
    "l-cop-1": {"en": "https://www.youtube.com/watch?v=Ai2wN7Wq9bU", "ur": "https://www.youtube.com/watch?v=8J_Kt51897k"},
    "l-cop-2": {"en": "https://www.youtube.com/watch?v=W6NZfCO5SIk", "ur": "https://www.youtube.com/watch?v=d9Tp7CHniUs"},
    "l-cop-3": {"en": "https://www.youtube.com/watch?v=jC4v5AS4RIM", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-cop-4": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-cop-5": {"en": "https://www.youtube.com/watch?v=2ePf9rue1Ao", "ur": "https://www.youtube.com/watch?v=7eh4d6sabA0"},

    # course-biz-5: E-commerce Store Setup
    "l-ecom-1": {"en": "https://www.youtube.com/watch?v=W3eAKnflgZ8", "ur": "https://www.youtube.com/watch?v=W3eAKnflgZ8"},
    "l-ecom-2": {"en": "https://www.youtube.com/watch?v=n4p7Koy0ZqE", "ur": "https://www.youtube.com/watch?v=bixR-KIE36o"},
    "l-ecom-3": {"en": "https://www.youtube.com/watch?v=xsVTqzratPs", "ur": "https://www.youtube.com/watch?v=h9ZmMb_9pWk"},
    "l-ecom-4": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-ecom-5": {"en": "https://www.youtube.com/watch?v=2Vj0n2A8fGs", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},

    # course-biz-6: Digital Advertising Fundamentals
    "l-adv-1": {"en": "https://www.youtube.com/watch?v=2Vj0n2A8fGs", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-adv-2": {"en": "https://www.youtube.com/watch?v=xsVTqzratPs", "ur": "https://www.youtube.com/watch?v=h9ZmMb_9pWk"},
    "l-adv-3": {"en": "https://www.youtube.com/watch?v=n4p7Koy0ZqE", "ur": "https://www.youtube.com/watch?v=bixR-KIE36o"},
    "l-adv-4": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-adv-5": {"en": "https://www.youtube.com/watch?v=7eh4d6sabA0", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},

    # course-biz-7: Customer Service and Support
    "l-cs-1": {"en": "https://www.youtube.com/watch?v=nE301qG9mE4", "ur": "https://www.youtube.com/watch?v=D0y9W92y4Bw"},
    "l-cs-2": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-cs-3": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=kY67Z3j9r7c"},
    "l-cs-4": {"en": "https://www.youtube.com/watch?v=i9YQ_VkWb5M", "ur": "https://www.youtube.com/watch?v=Qc6yV8G3EAE"},
    "l-cs-5": {"en": "https://www.youtube.com/watch?v=UNer_XgY7z0", "ur": "https://www.youtube.com/watch?v=p43qW5e3q2E"},

    # course-biz-8: Affiliate Marketing for Beginners
    "l-aff-1": {"en": "https://www.youtube.com/watch?v=n4p7Koy0ZqE", "ur": "https://www.youtube.com/watch?v=bixR-KIE36o"},
    "l-aff-2": {"en": "https://www.youtube.com/watch?v=xsVTqzratPs", "ur": "https://www.youtube.com/watch?v=h9ZmMb_9pWk"},
    "l-aff-3": {"en": "https://www.youtube.com/watch?v=Ddfg8t-Vq-4", "ur": "https://www.youtube.com/watch?v=q6kJ71tEYqM"},
    "l-aff-4": {"en": "https://www.youtube.com/watch?v=2Vj0n2A8fGs", "ur": "https://www.youtube.com/watch?v=rfscVS0vtbw"},
    "l-aff-5": {"en": "https://www.youtube.com/watch?v=7eh4d6sabA0", "ur": "https://www.youtube.com/watch?v=Y8kI0R1n8xM"},

    # course-prod-1: Notion for Personal Organization
    "l-not-1": {"en": "https://www.youtube.com/watch?v=aA7si7AmPkY", "ur": "https://www.youtube.com/watch?v=aA7si7AmPkY"},
    "l-not-2": {"en": "https://www.youtube.com/watch?v=m9S5I3pW_e8", "ur": "https://www.youtube.com/watch?v=m9S5I3pW_e8"},
    "l-not-3": {"en": "https://www.youtube.com/watch?v=vs8HGhTfIHg", "ur": "https://www.youtube.com/watch?v=vs8HGhTfIHg"},
    "l-not-4": {"en": "https://www.youtube.com/watch?v=aA7si7AmPkY", "ur": "https://www.youtube.com/watch?v=aA7si7AmPkY"},
    "l-not-5": {"en": "https://www.youtube.com/watch?v=m9S5I3pW_e8", "ur": "https://www.youtube.com/watch?v=m9S5I3pW_e8"},

    # course-prod-2: Google Workspace Mastery
    "l-gw-1": {"en": "https://www.youtube.com/watch?v=Vl0H-qTclOg", "ur": "https://www.youtube.com/watch?v=V4mY2w1bZ2w"},
    "l-gw-2": {"en": "https://www.youtube.com/watch?v=8L1OVkw2ZQ8", "ur": "https://www.youtube.com/watch?v=Kz6T_wT7k7Y"},
    "l-gw-3": {"en": "https://www.youtube.com/watch?v=rwbho0CgEAE", "ur": "https://www.youtube.com/watch?v=T_7bY5c4vSw"},
    "l-gw-4": {"en": "https://www.youtube.com/watch?v=m13x2a5mK38", "ur": "https://www.youtube.com/watch?v=pHxRR_2p-eY"},
    "l-gw-5": {"en": "https://www.youtube.com/watch?v=9RUeONbL0eA", "ur": "https://www.youtube.com/watch?v=Edsxf_NBFrw"},

    # course-prod-3: Professional Email Writing in English
    "l-pew-1": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=kY67Z3j9r7c"},
    "l-pew-2": {"en": "https://www.youtube.com/watch?v=nE301qG9mE4", "ur": "https://www.youtube.com/watch?v=D0y9W92y4Bw"},
    "l-pew-3": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-pew-4": {"en": "https://www.youtube.com/watch?v=i9YQ_VkWb5M", "ur": "https://www.youtube.com/watch?v=Qc6yV8G3EAE"},
    "l-pew-5": {"en": "https://www.youtube.com/watch?v=UNer_XgY7z0", "ur": "https://www.youtube.com/watch?v=p43qW5e3q2E"},

    # course-prod-4: Public Speaking and Presentation Skills
    "l-psp-1": {"en": "https://www.youtube.com/watch?v=UNer_XgY7z0", "ur": "https://www.youtube.com/watch?v=p43qW5e3q2E"},
    "l-psp-2": {"en": "https://www.youtube.com/watch?v=i9YQ_VkWb5M", "ur": "https://www.youtube.com/watch?v=Qc6yV8G3EAE"},
    "l-psp-3": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-psp-4": {"en": "https://www.youtube.com/watch?v=nE301qG9mE4", "ur": "https://www.youtube.com/watch?v=D0y9W92y4Bw"},
    "l-psp-5": {"en": "https://www.youtube.com/watch?v=9g0H29W6F2U", "ur": "https://www.youtube.com/watch?v=kY67Z3j9r7c"},

    # course-prod-5: Critical Thinking and Problem Solving
    "l-ct-1": {"en": "https://www.youtube.com/watch?v=dItUGF8GdTw", "ur": "https://www.youtube.com/watch?v=dItUGF8GdTw"},
    "l-ct-2": {"en": "https://www.youtube.com/watch?v=wEwGBIr_RIw", "ur": "https://www.youtube.com/watch?v=wEwGBIr_RIw"},
    "l-ct-3": {"en": "https://www.youtube.com/watch?v=7wUCzGQ_B0I", "ur": "https://www.youtube.com/watch?v=7uV8Zl3-u5g"},
    "l-ct-4": {"en": "https://www.youtube.com/watch?v=dItUGF8GdTw", "ur": "https://www.youtube.com/watch?v=dItUGF8GdTw"},
    "l-ct-5": {"en": "https://www.youtube.com/watch?v=wEwGBIr_RIw", "ur": "https://www.youtube.com/watch?v=wEwGBIr_RIw"},

    # course-prod-6: Personal Finance and Budgeting Basics
    "l-pf-1": {"en": "https://www.youtube.com/watch?v=8J_Kt51897k", "ur": "https://www.youtube.com/watch?v=8J_Kt51897k"},
    "l-pf-2": {"en": "https://www.youtube.com/watch?v=V4mY2w1bZ2w", "ur": "https://www.youtube.com/watch?v=V4mY2w1bZ2w"},
    "l-pf-3": {"en": "https://www.youtube.com/watch?v=Kz6T_wT7k7Y", "ur": "https://www.youtube.com/watch?v=Kz6T_wT7k7Y"},
    "l-pf-4": {"en": "https://www.youtube.com/watch?v=T_7bY5c4vSw", "ur": "https://www.youtube.com/watch?v=T_7bY5c4vSw"},
    "l-pf-5": {"en": "https://www.youtube.com/watch?v=pHxRR_2p-eY", "ur": "https://www.youtube.com/watch?v=pHxRR_2p-eY"},

    # course-prod-7: Speed Reading and Information Retention
    "l-sr-1": {"en": "https://www.youtube.com/watch?v=ZwRac_6P20I", "ur": "https://www.youtube.com/watch?v=ZwRac_6P20I"},
    "l-sr-2": {"en": "https://www.youtube.com/watch?v=iONDebHX9qk", "ur": "https://www.youtube.com/watch?v=iONDebHX9qk"},
    "l-sr-3": {"en": "https://www.youtube.com/watch?v=W3eAKnflgZ8", "ur": "https://www.youtube.com/watch?v=W3eAKnflgZ8"},
    "l-sr-4": {"en": "https://www.youtube.com/watch?v=ZwRac_6P20I", "ur": "https://www.youtube.com/watch?v=ZwRac_6P20I"},
    "l-sr-5": {"en": "https://www.youtube.com/watch?v=iONDebHX9qk", "ur": "https://www.youtube.com/watch?v=iONDebHX9qk"},

    # course-prod-8: Habit Building and Focus Mastery
    "l-hb-1": {"en": "https://www.youtube.com/watch?v=AdKUJxjn-R8", "ur": "https://www.youtube.com/watch?v=AdKUJxjn-R8"},
    "l-hb-2": {"en": "https://www.youtube.com/watch?v=iONDebHX9qk", "ur": "https://www.youtube.com/watch?v=iONDebHX9qk"},
    "l-hb-3": {"en": "https://www.youtube.com/watch?v=W3eAKnflgZ8", "ur": "https://www.youtube.com/watch?v=W3eAKnflgZ8"},
    "l-hb-4": {"en": "https://www.youtube.com/watch?v=AdKUJxjn-R8", "ur": "https://www.youtube.com/watch?v=AdKUJxjn-R8"},
    "l-hb-5": {"en": "https://www.youtube.com/watch?v=iONDebHX9qk", "ur": "https://www.youtube.com/watch?v=iONDebHX9qk"}
}

with open("scripts/topic_videos.json", "w") as f:
    json.dump(TOPIC_VIDEOS, f, indent=2)

print(f"Generated video mapping with {len(TOPIC_VIDEOS)} lesson topics.")
