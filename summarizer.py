from transformers import pipeline

# Load summarization pipeline with T5-small
summarizer = pipeline("summarization",  model="sshleifer/distilbart-cnn-12-6")
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# Input email text
email_content = """
Dear Learner

Welcome to SWAYAM-NPTEL Online Courses and Certification!

Thank you for signing up for our online course "Fundamental Algorithms: Design and Analysis". We wish you an enjoyable and informative learning experience.

Details regarding the course:
Name of the course: Fundamental Algorithms: Design and Analysis 
Course url: https://onlinecourses.nptel.ac.in/noc25_cs33/preview
Course duration : 4 weeks 

The course will begin on 20 January 2025 When content is released on the portal, you will get an email alerting you.

CONTENT AND ASSIGNMENTS

Every week, about 2.5 to 4 hours of videos containing content by the Course instructor will be released along with an assignment based on this. Please watch the lectures, follow the course regularly and submit all assessments and assignments before the due date. Your regular participation is vital for learning and doing well in the course. This will be done week on week through the duration of the course.
Please do the assignments yourself and even if you take help, kindly try to learn from it. These assignment will help you prepare for the final exams. Plagiarism and violating the Honor code will be taken very seriously if detected during the submission of assignments.

ANNOUNCEMENT AND DISCUSSION GROUPS TO CLEAR DOUBTS:

The announcement group - will only have messages from course instructors and teaching assistants - regarding the lessons, assignments, exam registration, hall tickets etc.
The discussion forum (Ask a question tab on the portal) - is for everyone to ask questions and interact.Anyone who knows the answers can reply to anyone's post and the course instructor/TA will also respond to your queries. Please make maximum use of this feature as this will help you learn much better.
If you have any questions regarding the exam, registration, hall tickets, results, queries related to the technical content in the lectures, any doubts in the assignments, etc can be posted in the forum section

TO GET A CERTIFICATE - PROCESS AND CRITERIA:
The course is free to enroll and learn from. But if you want a certificate, you have to register and write the proctored exam conducted by us in person at any of the designated exam centres.
The exam is optional for a fee of Rs 1000/- (Rupees one thousand only).
Date and Time of Exams: 22 March 2025 Morning session 9am to 12 noon; Afternoon Session 2pm to 5pm.
Registration url: Announcements will be made when the registration form is open for registrations.
The online registration form has to be filled and the certification exam fee needs to be paid. More details will be made available when the exam registration form is published. If there are any changes, it will be mentioned then.
Please check the form for more details on the cities where the exams will be held, the conditions you agree to when you fill the form etc.

CRITERIA TO GET A CERTIFICATE

Average assignment score = 25% of average of best 3 assignments out of the total 4 assignments given in the course.
Exam score = 75% of the proctored certification exam score out of 100

Final score = Average assignment score + Exam score

YOU WILL BE ELIGIBLE FOR A CERTIFICATE ONLY IF AVERAGE ASSIGNMENT SCORE >=10/25 AND EXAM SCORE >= 30/75. If one of the 2 criteria is not met, you will not get the certificate even if the Final score >= 40/100.

Certificate will have your name, photograph and the score in the final exam with the breakup.It will have the logos of NPTEL and IIT Kharagpur. It will be e-verifiable at nptel.ac.in/noc.

Only the e-certificate will be made available. Hard copies will not be dispatched.

Once again, thanks for your interest in our online courses and certification. Happy learning.

- NPTEL team
"""
# Generate summary
summary = summarizer(email_content, max_length=150, min_length=25, do_sample=False)

print("Summary:", summary[0]['summary_text'])
# Generate tags
candidate_labels = ["Education", "Health", "Finance", "Technology", "Announcements", "Online Learning"]
tags = classifier(email_content, candidate_labels)

# Filter tags by confidence threshold
threshold = 0.5
refined_tags = [label for label, score in zip(tags['labels'], tags['scores']) if score >= threshold]

print("Tags:", refined_tags)
