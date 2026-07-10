from google import genai

client = genai.Client(api_key="API_KEY")

def get_response(question):
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=question
        )
        return response.text
    except Exception as e:
        return f"Error: {e}"
