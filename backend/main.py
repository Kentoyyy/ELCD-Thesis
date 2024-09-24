from fastapi import FastAPI, HTTPException
from langchain.document_loaders import PyPDFLoader
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI

app = FastAPI()

# Use PyPDFLoader to load a PDF document
loader = PyPDFLoader("./documents/data.pdf")
documents = loader.load()

llm = OpenAI()  # or any other LLM you prefer
qa_chain = load_qa_chain(llm, chain_type="stuff")

@app.get("/ask")
async def ask_question(question: str):
    if not question:
        raise HTTPException(status_code=400, detail="Question must be provided")
    answer = qa_chain.run(input_documents=documents, question=question)
    return {"answer": answer}
