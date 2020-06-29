### ROWING CPU PROJECT

I had a pretty dumb water tank rowing machine, and started to make it smarter. It's a work in progress and I'll be making updates soon.

1. The machine

It was a basic water tank rowing machine. It has three (some kind of) paddles that rotate inside the water tank. It increases the speed as we stroke, and also the resistance force is proportional with the push force of your stroke.

2. The sensors

It had just a reed switch in the seat, that used to measure one row at 2 closed signals, as the seat goes by it.
The update: five magnets in the drive wheel of the paddles and a new fixed reed switch that measures the speed of the paddles (and consequently the force applied by each stroke).

3. ESP32 and data transmission

In this first commit I'm using a ESP32 connected with two digital ports that reads both sensors data and streams it via a Firebase application.
Further I'll make it all using BLE (bluetooth low energy) and a React PWA installed in any device (actually using a iPad).

4. Finally, the UI

Right now, just a simple React App that plots a real time graphic curve with the speed/force of the wheel and also calculates some useful numbers, such as SPM (stroke per minutes), number of strokes, current speed, and also a force bar.

5. Further implementation

As said, BLE connection will be a major update. Also I want to create multiple display options, using force curve, using just stroke and SPM, time and duration, and it all can be draggable so the user can select what he wants to display.
Also some reset options and some information sharing would be great.