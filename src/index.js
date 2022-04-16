import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, MotionConfig } from "framer-motion";
import { Refresh } from "./Refresh";

import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <h1 style={{color:"white",marginBottom:"100px",marginRight:"400px"}}>React Fremar-Motion Animation</h1>
    
    <MotionConfig reducedMotion="user">
     
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </MotionConfig>


    <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-containe">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </>
  );

  
};

render(<App />, document.getElementById("root"));
