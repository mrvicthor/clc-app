import { Home } from "./components";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Home />
    </div>
  );
}

export default App;
