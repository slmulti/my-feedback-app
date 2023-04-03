import { useState } from "react";
import React from "react";
import Card from "./shared/Card";

function FeedbackForm() {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        console.log("e.target.value", e.target.value);
        setText(e.target.value);
    };
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* rating select compontent */}
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a Review"
                        value={text}
                    ></input>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    );
}

export default FeedbackForm;
