import logo from './logo.svg';
import PortfolioMainPage from './PortfolioMainPage.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  HashRouter
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import Go_Bot_Post from './ProjectDetailPages/Go_Bot_Post.js';
import TBot_Nav_Post from './ProjectDetailPages/Turtle_Bot_Nav_Post.js';
import Deep_RL_Post from './ProjectDetailPages/Deep_RL_Post';
import GAN_Post from './ProjectDetailPages/GAN_Post.js';


function App() {
  return (
    <HashRouter  basename={"/"}>
    <Helmet>
        <title>Peter Jochem</title>
      </Helmet>

    <div className="App">
      <header className="App-header" />

         <Routes>
	   <Route exact path="/" element={<PortfolioMainPage />}/>
	   <Route path="/Portfolio_MUI/about" element={<PortfolioMainPage />}/>
	   <Route path="/Go_Bot" element={<Go_Bot_Post />}/> 
	   <Route path="/turtle_bot_navigation" element={<TBot_Nav_Post />}/>
	   <Route path="/deep_rl" element={<Deep_RL_Post />}/>
	   <Route path="/gan" element={<GAN_Post />}/>
	   

	   <Route exact path="/Portfolio_MUI/triple_pendulum" element={null}/>
	   


	   <Route exact path="/Portfolio_MUI/chess_engine" element={null}/>
	   <Route exact path="/Portfolio_MUI/mobile_manipulation" element={null}/>
	   <Route exact path="/Portfolio_MUI/rrt" element={null}/>
	   <Route exact path="/Portfolio_MUI/canny_edge_detector" element={null}/>
	   <Route exact path="/Portfolio_MUI/cbirch97_head_tracking" element={null}/>
	  </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
