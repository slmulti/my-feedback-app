import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
    //===============================================================
    //map through a list
    //===============================================================
    // const title = "Blog Post";
    // const body = "this is my blog post";
    // const comments = [
    //     { id: 1, text: "comment one" },
    //     { id: 2, text: "comment two" },
    //     { id: 3, text: "comment three" },
    // ];
    // return (
    //     <div className="container">
    //         <h1>{title}</h1>
    //         <p>{body}</p>
    //         <div className="comments">
    //             <h3>Comments ({comments.length})</h3>
    //             <ul>
    //                 {comments.map((comment, index) => (
    //                     <li key={index}>{comment.text}</li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </div>
    // );
    //===============================================================
    //Ternierys
    //===============================================================
    // const title = "Blog Post";
    // const body = "this is my blog post";
    // const comments = [
    //     { id: 1, text: "comment one" },
    //     { id: 2, text: "comment two" },
    //     { id: 3, text: "comment three" },
    // ];
    // const loading = false;
    // const showComments = true;
    // if (loading) return <h1>Loading....</h1>;
    // const commentBlock = (
    //     <div className="comments">
    //         <h3>Comments ({comments.length})</h3>
    //         <ul>
    //             {comments.map((comment, index) => (
    //                 <li key={index}>{comment.text}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
    // return (
    //     <div className="container">
    //         <h1>{title}</h1>
    //         <p>{body}</p>
    //         {showComments && commentBlock}
    //     </div>
    // );
    //===============================================================
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    );
}

export default App;
