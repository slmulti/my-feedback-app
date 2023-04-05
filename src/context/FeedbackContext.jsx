import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import Feedback from "react-bootstrap/esm/Feedback";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        { id: 1, text: "This is Feedback item 1", rating: 10 },
        { id: 2, text: "This is Feedback item 2", rating: 9 },
        { id: 3, text: "This is Feedback item 3", rating: 7 },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm("are you sure you want to delete?")) {
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
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updItem } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit, //state
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
