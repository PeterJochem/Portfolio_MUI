import logo from './logo.svg';
import Blog from './blog/Blog.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  HashRouter
} from "react-router-dom";
import Go_Bot_Post from './blog/ProjectDetailPages/Go_Bot_Post.js';
import TBot_Nav_Post from './blog/ProjectDetailPages/Turtle_Bot_Nav_Post.js';
import Deep_RL_Post from './blog/ProjectDetailPages/Deep_RL_Post';
import GAN_Post from './blog/ProjectDetailPages/GAN_Post.js';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header" />

         <Routes>
	   <Route exact path="/Portfolio_MUI" element={<Blog />}/>
	   <Route exact path="/Portfolio_MUI/about" element={<Blog />}/>
	   <Route exact path="/Portfolio_MUI/Go_Bot" element={<Go_Bot_Post />}/> 
	   <Route exact path="/Portfolio_MUI/turtle_bot_navigation" element={<TBot_Nav_Post />}/>
	   <Route exact path="/Portfolio_MUI/deep_rl" element={<Deep_RL_Post />}/>
	   <Route exact path="/Portfolio_MUI/gan" element={<GAN_Post />}/>
	   

	   <Route exact path="/Portfolio_MUI/triple_pendulum" element={null}/>
	   


	   <Route exact path="/Portfolio_MUI/chess_engine" element={null}/>
	   <Route exact path="/Portfolio_MUI/mobile_manipulation" element={null}/>
	   <Route exact path="/Portfolio_MUI/rrt" element={null}/>
	   <Route exact path="/Portfolio_MUI/canny_edge_detector" element={null}/>
	   <Route exact path="/Portfolio_MUI/cbirch97_head_tracking" element={null}/>
	  </Routes>
    </div>
    </Router>
  );
}

export default App;
