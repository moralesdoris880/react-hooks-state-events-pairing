import video from "../data/video.js";
import Info from "./Info.js";
import Likes from "./Likes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Info views={video.views} uploaded={video.createdAt}/>
      <Likes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
