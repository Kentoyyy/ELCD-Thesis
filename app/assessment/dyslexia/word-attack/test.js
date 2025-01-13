import { useState } from "react";

export default function TestPage() {
    const [responses, setResponses] = useState([]);
    const [result, setResult] = useState(null);

    const handleResponseChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
    };

    const submitTest = async () => {
        const response = await fetch("/api/submit-word-attack", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ responses }),
        });

        const result = await response.json();
        setResult(result);
    };

    return (
        <div>
            <h1>Word Attack Test</h1>
            {[0, 1, 2, 3, 4].map((_, index) => (
                <div key={index}>
                    <label>Question {index + 1}</label>
                    <input
                        type="number"
                        value={responses[index] || ""}
                        onChange={(e) => handleResponseChange(index, Number(e.target.value))}
                    />
                </div>
            ))}
            <button onClick={submitTest}>Submit Test</button>

            {result && (
                <div>
                    <h2>Test Result</h2>
                    <p>{result.message}</p>
                </div>
            )}
        </div>
    );
}
