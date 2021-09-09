var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
var cam = new ModbusRTU();
 
// open connection to a tcp line
client.connectTCP("192.168.137.3", { port: 502 }); //ADAM Device
cam.connectTCP("192.168.137.5", { port: 502 }); //Camera
client.setID(1);
cam.setID(1);

// console.log(cam);
 
// read the values of 10 registers starting at address 0
// on device number 1. and log the values to the console.

// bool = false;

// setInterval(function() {
//     client.writeCoil(18, bool, function(err, data) {
//         console.log(data);
//         console.log(err);
//         bool = !bool
//     });
// }, 5000);

setInterval(async function() {
    // console.log(cam);
    output = await cam.readInputRegisters(1,2); //Reads condition of Alarm 1 on the camera
    console.log(output.buffer.readFloatBE());
    // client.writeCoil(18, output.data[0], function(err, data) { //Sets DO2 to the current condition of Alarm 1
    //     console.log(data);
    //     console.log(err);
    // });
}, 1000);