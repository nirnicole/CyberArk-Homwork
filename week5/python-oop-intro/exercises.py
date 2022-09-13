from inspect import _void


class YouTubeLessonManager:
    
    def __init__(self):
        self.lessons = {}
        self.counter = {}

    def save(self, name, url):
        url  = url.split("?v=")[1]
        self.lessons[self.replace_panctuation(name.lower(), ' ')] = url
    
    def get(self, lesson_name):
        self.counter[lesson_name] = self.counter.get(lesson_name, 0)+1
        lesson_name = self.replace_panctuation(lesson_name.lower(), ' ')
        results = []
        for name, value in self.lessons.items():
            if lesson_name in name:
                results.append("https://www.youtube.com/watch?v=" + value)
        return results[0] if len(results) == 1 else results


    def get_counts(self, word):
        return self.counter[word]

    def replace_panctuation(self, word, char):
        bad_chars = [',','-',':','.']
        return "".join([c if (c not in bad_chars) else char for c in word])
    
    def get_most_popular_lesson(self):
        max = 0
        for name, value in self.counter.items():
            if value>max:
                max = value
                res = name
        return res
        

# lesson_manager = YouTubeLessonManager()
# print(lesson_manager.lessons) 

# lesson_manager = YouTubeLessonManager()
# lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
# print(lesson_manager.lessons) # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}  
# # print(lesson_manager.lessons["For-Loops"]) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 

# print(lesson_manager.get("For-Loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 

# print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("fOr-LooPS")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA") 
lesson_manager.save("While-Loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")
lesson_manager.save("Functions", "https://www.youtube.com/watch?v=NSbOtYzIQI0")
lesson_manager.save("Dictionaries", "https://www.youtube.com/watch?v=ZEZdys-fHDw")  
###--------------------------------------
lesson_manager.get("functions") # outputs: 'https://www.youtube.com/watch?v=NSbOtYzIQI0' 
lesson_manager.get("for loops") # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 

print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("loops")) # outputs ['https://www.youtube.com/watch?v=OnDr4J2UXSA', 'https://www.youtube.com/watch?v=6TEGxJXLAWQ']

lesson_manager.get("For-Loops") 
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries") 
print(lesson_manager.get_counts('For-Loops')) # outputs: 3
print(lesson_manager.get_counts('Dictionaries')) # outputs: 2

print(lesson_manager.get_most_popular_lesson()) # outputs: 'For-Loops'