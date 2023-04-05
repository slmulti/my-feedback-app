import { createContext, useState, useEffect } from "react";
import Feedback from "react-bootstrap/esm/Feedback";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

    useEffect(() => {
        fetchFeedback();
    }, []);

    //fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    };

    const addFeedback = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        setFeedback([data, ...feedback]);
    };

    const deleteFeedback = async (id) => {
        if (window.confirm("are you sure you want to delete?")) {
            await fetch(`feedback/${id}`, { method: "DELETE" });
            setFeedback(feedback.filter((item) => item.id !== id)); //returns new array with all items minus the array item that was deleted
        }
    };

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    //update feedback item
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updItem),
        });

        const data = await response.json();
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit, //state
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback, //function
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
