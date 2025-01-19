from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Welcome to the email summarization and tagging API!"}

# Load summarization and classification pipelines
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

class EmailContent(BaseModel):
    email_text: str

@app.post("/process-email/")
def process_email(content: EmailContent):
    summary = summarizer(content.email_text, max_length=150, min_length=25, do_sample=False)[0]['summary_text']
    candidate_labels = ["Education", "Health", "Finance", "Technology", "Announcements", "Online Learning"]
    tags = classifier(content.email_text, candidate_labels)
    refined_tags = [label for label, score in zip(tags['labels'], tags['scores']) if score >= 0.25]
    return {"summary": summary, "tags": refined_tags}
