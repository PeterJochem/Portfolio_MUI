import logo from './logo.svg';
import Blog from './blog/Blog.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
//import DetailedPost from './blog/DetailedPost.js';
import Go_Bot_Post from './blog/ProjectDetailPages/Go_Bot_Post.js';
import TBot_Nav_Post from './blog/ProjectDetailPages/Turtle_Bot_Nav_Post.js';
import Deep_RL_Post from './blog/ProjectDetailPages/Deep_RL_Post';
import GAN_Post from './blog/ProjectDetailPages/GAN_Post.js';


function App() {
  return (
    <div className="App">
      <header className="App-header" />

	<Router>
         <Routes>
	   <Route exact path="/" element={<Blog />}/>
	   <Route exact path="/about" element={<Blog />}/>
	   <Route exact path="/Go_Bot" element={<Go_Bot_Post />}/> 
	   <Route exact path="/turtle_bot_navigation" element={<TBot_Nav_Post />}/>
	   <Route exact path="/deep_rl" element={<Deep_RL_Post />}/>
	   <Route exact path="/gan" element={<GAN_Post />}/>
	   

	   <Route exact path="/triple_pendulum" element={null}/>
	   


	   <Route exact path="/chess_engine" element={null}/>
	   <Route exact path="mobile_manipulation" element={null}/>
	   <Route exact path="/rrt" element={null}/>
	   <Route exact path="/canny_edge_detector" element={null}/>
	   <Route exact path="/cbirch97_head_tracking" element={null}/>
	  </Routes>
        </Router>
    </div>
  );
}

export default App;
