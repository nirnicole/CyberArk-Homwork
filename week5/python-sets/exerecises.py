# Python program to read
# json file
import json
import os


script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
rel_path = "nyc_jobs.json"
abs_file_path = os.path.join(script_dir, rel_path)

with open(abs_file_path, 'r') as f: #open the file
    jobs = json.load(f) # returns JSON object as 

#ex1:
def find_jobs_by_word(word):
    job_property = "job_description"
    return [job for job in jobs if word in job.get(job_property)]

#ex2:
# "agency"
# "work_location": "120 Broadway, New York, NY"
# "career_level":"Entry-Level"
print(len(find_jobs_by_word("experience"))) # 165

# which agencies offers Entry-Level jobs and jobs that are located in Broadway (not neccesarily the same job)
# this does not mean that an agency needs to have a job in entry level and in Broadway
entry_level_jobs = [job["agency"] for job in jobs if job["career_level"] == "Entry-Level"]
not_in_brooklin = [job["agency"] for job in jobs if "Broadway" in job["work_location"]]

result = (set(entry_level_jobs) & set(not_in_brooklin))
print("broadway", result)


# Closing file
f.close()