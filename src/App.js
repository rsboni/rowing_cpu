import React, { useState, useEffect } from "react";
import "./styles.css";
import Canvas from "./canvas";
import firebase from "./firebase";
import Chart from "react-apexcharts";


const App = () => {
  // Define the state of the component
  const [speed, setSpeed ] = useState(0);
  const [yValue, setYValue ] = useState([]);
  const [strokes, setStrokes] = useState([]);

  // Listen to changes on the firebase database, specifically the "speed" entry
  useEffect(() => {
    const getValue = firebase.database().ref("Speed");
    getValue.on("value", snapshot => {
      let value = snapshot.val();
      // Whenever the value changes on the server, it is also reset on the running app through the variable
      setYValue(sp =>  ([...sp, value.toFixed(0) * 6]));
      setSpeed(value * 6);
      setTimeout(() => {
        if(value * 6 > 100){
        
          setStrokes(st => [...st, new Date().getTime()]);
  
          console.log("stroke")
      } 
      }, 1500);
      
      
    });
  }, []);



  return (


    <div> 
      <div className="litreDisplay">
        <div className="canvas">
          {/* The variable is passed down to the Canvas component, which will re-render every time its altered*/} 
          <Canvas speed={speed} />
        </div>
        <div className="displayValue">
          <p><span>{strokes.length}</span> strokes</p>
          <p><span>{strokes.length >= 3 ? 
          Math.floor(60 / 
          (
            (
              (strokes[strokes.length-1] - strokes[strokes.length-2]) + 
              (strokes[strokes.length-2] - strokes[strokes.length-3])
            )
            / 2000)
            ) :
           0}</span> SPM</p>
          <p>{speed} speed</p>
        </div>
      </div>

      <div>
        <Chart
          options={
            {
              chart: {
                id: 'realtime',
                height: 350,
                type: 'line',
                animations: {
                  enabled: true,
                  easing: 'linear',
                  dynamicAnimation: {
                    speed: 1000
                  }
                },
                toolbar: {
                  show: false
                },
                zoom: {
                  enabled: false
                }
              },  
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Speed / Time',
                align: 'left'
              },
              markers: {
                size: 0
              },
              xaxis: {
                type: 'numeric',
                range: 40
              },
              yaxis: {
                max: undefined
              },
              legend: {
                show: false
              },
              series: [{
                  data: [yValue]
              }]
            }
          }
          series={[{data: yValue}]}
          
          width="100%"

          height="200px"
        />
      </div>
    </div>
  );
};

export default App;