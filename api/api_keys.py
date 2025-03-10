import os
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

# Optional: Raise an error if keys are missing
if not GEMINI_API_KEY or not GOOGLE_MAPS_API_KEY:
    raise ValueError("Missing API keys! Check your .env file.")
