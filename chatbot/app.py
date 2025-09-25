import streamlit as st

st.set_page_config(page_title="Tiny Chatbot", page_icon="🤖")
st.title("🤖 Tiny Chatbot")

prompt = st.text_input("Say something to the bot:")

if prompt:
    text = prompt.lower()
    if "hello" in text or "hi" in text:
        st.success("Hey! I'm movie-bot-lite. Tell me a mood or say 'movie'.")
    elif "movie" in text or "recommend" in text:
        st.success("Try: Inception, The Dark Knight, or Spirited Away 🎬")
    elif "sad" in text or "cry" in text:
        st.info("Maybe try a feel-good film: Paddington 2 or Queen's Gambit for vibes.")
    else:
        st.write("Huh — I'm still learning. Try 'hello' or 'movie'.")
