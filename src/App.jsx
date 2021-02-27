import { createStore } from "redux";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const store = createStore()

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Synchronus Posts</h2>
          <Posts posts={[]} />
        </div>
        <div className="col">
          <h2>Asynchronus Posts</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>

    </div>
  );
}

export default App;
