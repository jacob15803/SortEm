from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"],  # Replace "*" with specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load summarization pipeline with T5-small
summarizer = pipeline("summarization",  model="sshleifer/distilbart-cnn-12-6")
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# Input email text
email_content = """
"\near All,\n\nGreetings from Rajagiri School of Engineering & Technology!\n\n  SLK Global is hiring 2025 batch students\n\n1.      About the Organization\n\n  SLK Global Group is a global leader in supply chain solutions, specializing in logistics, procurement, and subcontracting services across defense, oil and gas, and commercial sectors. With a strong presence in global markets, SLK Global provides innovative and efficient logistics solutions to meet the diverse needs of its clients.\n\nFor more information, please visit https://slkglobal.co/.\n\n\n2.      Eligibility\n\nProgramme\n\nB.Tech, M.Tech\n\nBranches\n\nAEI, AD, CS, CSBS, IT, EC, EEE, ME, CE\n\nMarks\n\n10th (%)\n\n   12th (%)\n\nBTech CGPA/%\n\nMTech CGPA/%\n\n \n\n \n\n \n\n \n\nCurrent Backlogs\n\nZero Backlogs\n\n \n\n \n\n\n3.      Job Details\n\nJob Title: Logistics Executive (Fresh Graduate \u2013 Engineering Background)\nLocation: [Specify Location, e.g., Kochi, India or SLK Global offices]\nKey Responsibilities:\nManaging global logistics operations, including international and domestic movements.\nCoordinating with vendors and carriers to optimize costs and services.\nEnsuring compliance with global trade regulations and managing customs documentation.\nSupporting inventory management and supply chain activities.\nAnalyzing and optimizing logistics processes for efficiency and cost-effectiveness.\nPreparing documentation and generating logistics performance reports.\nKey Skills:\nBasic knowledge of global logistics and supply chain concepts.\nStrong analytical and communication skills.\nAdaptability and teamwork in a dynamic environment.\n4.  Compensation\n\n\nThe compensation details will be informed during the recruitment process.\n\n      \n\n            Last Date of Application: 14th Tuesday 2025\n\n        Register using the link:"}     

"""
@app.get("/emails")
def get_emails():
    summary = summarizer(email_content, max_length=150, min_length=25, do_sample=False)[0]['summary_text']
    candidate_labels = ["Education", "Health", "Finance", "Technology", "Announcements", "Online Learning"]
    tags = classifier(email_content, candidate_labels)
    refined_tags = [label for label, score in zip(tags['labels'], tags['scores']) if score >= 0.25]
    return {"summary": summary, "tags": refined_tags}

