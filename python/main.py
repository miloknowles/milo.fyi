import requests
from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get("/")
async def root():
  return {"message": "Hello World"}


@app.get("/utils/convert-google-doc")
def convert_google_doc(url: str):
  """Fetch a google doc at the given url and convert it to markdown."""
  print(url)
  # Fetch the google doc from the URL.
  response = requests.get(url, allow_redirects=True)
  print(response)

  if response.status_code != 200:
    raise HTTPException(status_code=404, detail="Failed to fetch the google doc.")
  
  data = response.text
  print(data)

  return {"message": url}