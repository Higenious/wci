const express = require('express');
const parkingController = require('./Controller/parkingController');
const port = 3000;
const app = express();
const fs = require('fs');
const readline = require("readline");
const fileStream = fs.createReadStream('./bin/parking_lot file_inputs.txt');  // passing input file

app.get('/', (req, res) => {
  res.send('welcome to parking lot');
});



/** Readline allows reading of a stream */
const rl = readline.createInterface({
  input: fileStream,
  output: process.stdout
});



/** input of streams */
rl.on('line', async (input) => {
  input = input.split(" ");
  
  switch (input[0]) {
    case "create_parking_lot": {
      try {
        console.log('creting parking lo', input[1]);
        let lots = input[1];
        const result = await parkingController.create_parking_lot(lots);
        console.log(result);
      }
      catch (err) {
        console.log(`Error occured while creating parking lot :>> ${err}`);
      }
    }
      break;


    case "park": {
      try {
        let parkResult = await parkingController.park(input[1].trim(), input[2].trim());
        console.log(parkResult);
      }
      catch (err) {
        console.log('Error while Parking car :>> ', err);
      }
    }
      break;


    case "leave": {
      try {
        const result = await parkingController.leave(input[1], input[2])
        console.log(result);

      }
      catch (err) {
        console.log('err :>> ', err);
      }
    }
      break;

    case "status": {
      try {
        const result = parkingController.status();
        console.log(result);
      } catch (err) {
        console.log(`Error while shoowing result ${err}`);
      }
    }break;

   
    case "registration_numbers_for_cars_with_colour": {
        try {
            const result = await parkingController.findByColor(input[1], input[2])
            console.log(result);
    
          }
          catch (err) {
            console.log('err :>> ', err);
          }
        }

    break;

    

    case "slot_numbers_for_cars_with_colour": {
        try {
            const result = await parkingController.findByColor(input[1], input[2])
            console.log(result);
    
          }
          catch (err) {
            console.log('err :>> ', err);
          }
        }

    break;
 

    

    case "slot_number_for_registration_number": {
        try {
            const result = await parkingController.findByRegNum(input[1], input[2])
            console.log(result);
    
          }
          catch (err) {
            console.log('err :>> ', err);
          }
        }

    break;
 
 
    default:
      console.log('Please Enter Correct choice');
  }

});




/** server listen on port */
app.listen(port, () => console.log(`Successfully running on ${port}`));