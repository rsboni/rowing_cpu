import React, { useRef, useEffect } from "react";

// The Canvas custom component receives the distance value from it's parent component
const Canvas = ({ speed }) => {
  // Reference the canvas HTML5 object
  const canvasRef = useRef(null);

  // Use effect trigers a function every time it's depencies (speficied on []) changes,
  // In this case, when distance changes, useEffects triggers the function to draw on screen
  useEffect(() => {
    // Getting the canvas reference declared above
    const canvas = canvasRef.current;
    // ctx (context) will be the variable to create 2d graphics on the canvas element
    const ctx = canvas.getContext("2d");
    // Clears any previus drawing on the canvas as the drawing will be recurrent
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Creates a drawing start point
    ctx.beginPath();
    // Starting at 10 all the way to 170, there are 160px to fill the maximum distance which is set to 200cm
    let multiplier = 160*2 / 300;
    //Setting a blueish color to draw
    ctx.fillStyle = "#6464ff";
    //Setting the position and drawing
    ctx.rect(10, 300, 120, -speed * multiplier);
    ctx.fill();
  }, [speed]);

  return <canvas ref={canvasRef} width={140} height={300} />;
};

export default Canvas;