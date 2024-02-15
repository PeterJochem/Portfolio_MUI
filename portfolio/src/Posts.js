let prefix =
  "url(https://raw.githubusercontent.com/PeterJochem/Portfolio_MUI/main/portfolio/public/images/";
let suffix = ")";

let Motion_Planning_Library = {
  dynamicImage: prefix + "UR5_dynamic_in_rviz.gif" + suffix,
  staticImage: "url(/images/UR5_static_in_rviz.png)",
  title: "Motion Planning Library",
  subtitle: "C++, CUDA",
  description:
    "Currently developing a motion planning library from scratch.",
  link: "https://github.com/PeterJochem/MotionPlanning",
};

let Photo_Sharing_App = {
  dynamicImage: prefix + "finstagram.gif" + suffix,
  staticImage: "url(/images/finstagram.gif)",
  title: "Photo Sharing App",
  subtitle: "React, Material UI, Javascript, Python, FastAPI",
  description:
    "Developed a simple Instagram like photo sharing app.",
  link: "https://github.com/PeterJochem/YetAnotherPhotoSharingApp",
};

let Sorting_Visualizer = {
  dynamicImage: prefix + "sorting_visualizer.gif" + suffix,
  staticImage: "url(/images/sorting_visualizer.gif)",
  title: "Sorting Visualizer",
  subtitle: "React, Material UI, Javascript",
  description:
    "Developed a sorting algorithm visualizer with React.",
  link: "https://peterjochem.github.io/Sorting_Visualizer/",
};

let Go_Bot = {
  dynamicImage: prefix + "go_bot.gif" + suffix,
  staticImage: "url(/images/go_bot.gif)",
  title: "Go Bot",
  subtitle: "Reinforcement Learning, ROS, MoveIt, FastAPI, React",
  description:
    "Developed reinforcement learning go playing robot. Robot can play over a network in either Gazebo or the real world",
  link: "./#/Go_Bot",
};

let Turtle_Bot = {
  dynamicImage: prefix + "turtle_bot_pentagon.gif" + suffix,
  staticImage: "url(/images/turtle_bot_pentagon.gif)",
  title: "ROS Navigation Stack",
  subtitle: "ROS, Navigation, C++",
  description:
    "Developed navigation software from scratch for mobile robot in ROS. Deployed onto Turtlebot",
  link: "./#/turtle_bot_navigation",
};

let Deep_RL = {
  dynamicImage: prefix + "hopper_learned_policy.gif" + suffix,
  staticImage: "url(/images/hopper_learned_policy.gif)",
  title: "Deep RL",
  subtitle: "Reinforcement Learning, Tensorflow",
  description:
    "Built a library of deep reinforcement learning algorithms and deployed them in OpenAI gyms.",
  link: "./#/deep_rl",
};

let GAN = {
  dynamicImage: prefix + "GAN_downsampled.gif" + suffix,
  staticImage: "url(/images/GAN_downsampled.gif)",
  title: "GAN",
  subtitle: "GANs, Tensorflow",
  description: "Built a generative adversarial network with Tensorflow",
  link: "https://github.com/PeterJochem/MNIST_GAN",
};

let Pendulum = {
  dynamicImage: prefix + "pend.gif" + suffix,
  staticImage: "url(/images/pend.gif)",
  title: "Triple Pendulum",
  subtitle: "Lagrangian Dynamics",
  description: "Built a triple pendulum simulation",
  link: "https://github.com/PeterJochem/TriplePendulum",
};

let Chess_AI = {
  dynamicImage: prefix + "chess.gif" + suffix,
  staticImage: "url(/images/chess.gif)",
  title: "Chess Engine",
  subtitle: "Classic AI, Search Algorithms",
  description: "Built a chess engine with an AI to play against",
  link: "https://github.com/PeterJochem/Chess_AI",
};

let Mobile_Manipulator = {
  dynamicImage: prefix + "kuka.gif" + suffix,
  staticImage: "url(/images/kuka.gif)",
  title: "Mobile Manipulation",
  subtitle: "VREP, Modern Robotics",
  description: "",
  link: "https://github.com/PeterJochem/Mobile_Manipulator",
};

let RRT = {
  dynamicImage: prefix + "rrt.png" + suffix,
  staticImage: "url(/images/rrt.png)",
  title: "Rapidly Exploring Random Tree",
  subtitle: "Planning Algorithms, Robotics",
  description: "",
  link: "https://github.com/PeterJochem/RRT",
};

let Canny_Edge_Detector = {
  dynamicImage: prefix + "Lena_Processed.png" + suffix,
  staticImage: "url(/images/Lena_Processed.png)",
  title: "Canny Edge Detector From Scratch",
  subtitle: "Computer Vision, Image Processing",
  description: "",
  link: "https://github.com/PeterJochem/CannyEdgeDetector",
};

let CBirch97 = {
  dynamicImage: prefix + "CBirch97.gif" + suffix,
  staticImage: "url(/images/CBirch97.gif)",
  title: "CBirch97 Head Tracking",
  subtitle: "Computer Vision, Image Processing",
  description: "",
  link: "https://github.com/PeterJochem/CBirch_97",
};

let Posts = [
  Motion_Planning_Library,
  Photo_Sharing_App,
  Sorting_Visualizer,
  Go_Bot,
  Turtle_Bot,
  Deep_RL,
  GAN,
  Pendulum,
  Chess_AI,
  Mobile_Manipulator,
  RRT,
  Canny_Edge_Detector,
  CBirch97,
];
export default Posts;
