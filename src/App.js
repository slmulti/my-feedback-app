import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id)); //returns new array with all items minus the array item that was deleted
        }
    };
    return (
        <>
            <Header />
            <FeedbackForm />
            <FeedbackStats feedback={feedback} />
            <div className="container">
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;
