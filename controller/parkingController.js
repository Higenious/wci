let available_park_lot = [];
let maxSize = 0;
let carParked = [];






/** creating parking lot */
function create_parking_lot(input) {
    maxSize = parseInt(input);
    for (i = 1; i <= maxSize; i++) {
        available_park_lot.push(i);
    }
    return `Created a parking lot with ${available_park_lot.length} slots`;
}







/** park car */
function park(details, Colour) {
    if (maxSize === 0) {
        return `parking_lot is not initialized. please create parking lot`
    } else if (maxSize === carParked.length) {
        return `Sorry, parking lot is full`;
    } else {
        let slot = available_park_lot[0];
        let registration_Numnber = details;
        carParked.push({
            'slot': slot,
            'registration_Numnber': registration_Numnber,
            'Colour' : Colour
        });
        available_park_lot.shift();
        return `Allocated slot number: ${slot}`
    }

}




/** leave car */
async function leave(details, time) {
     if (maxSize === 0) {
       return "parking lot is not initiated";
    } else if (carParked.length > 0) {
        let obj = carParked.find(o => o.slot == details);
        if(obj !== undefined){
            let filteredAry = carParked.filter(function(e) { return e !==  obj })
            carParked = filteredAry.slice();
            let parking_fee =  time * 10 -10;   
            return `Slot number ${obj.slot} is free`          
        }else{
         return `Slot number ${details} not found`;
        }
  }
  else {
    return `Parking lot is empty`
  }
 }




/** Status of car*/
function status() {
    if (maxSize === 0) {
        return "parking lot is not initiated";
    } else if (carParked.length > 0) {
        console.log("Slot No.\tRegistration No.\tColour");
        carParked.forEach(function (row) {
            console.log(row.slot + "\t         " + row.registration_Numnber  +"\t         " +row.Colour);
        });
    } else {
        return `Parking lot is empty`
    }
}



/** find by colour */
function findByColor(colour){
    if (maxSize === 0) {
        return "parking lot is not initiated";
     } else if (carParked.length > 0) {
         let obj = carParked.find(o => o.Colour == colour);
         if(obj !== undefined){
             let filteredAry = carParked.filter(function(e) { return e !==  obj })
             carParked = filteredAry.slice();
             return `${obj.slot}`          
         }else{
          return `Not found`;
         }
   }
   else {
     return `Parking lot is empty`
   }
}




/** */
function findSlotNumber(){
    if (maxSize === 0) {
        return "parking lot is not initiated";
     } else if (carParked.length > 0) {
         let obj = carParked.find(o => o.Colour == colour);
         if(obj !== undefined){
             let filteredAry = carParked.filter(function(e) { return e !==  obj })
             carParked = filteredAry.slice();
            // let parking_fee =  time * 10 -10;   
             return `${obj.slot}`          
         }else{
          return `Not found`;
         }
   }
   else {
     return `Parking lot is empty`
   }
}





/** find by reg number */
function findByRegNum(req_number){
    if (maxSize === 0) {
        return "parking lot is not initiated";
     } else if (carParked.length > 0) {
         let obj = carParked.find(o => o.registration_Numnber == req_number);
         if(obj !== undefined){
             let filteredAry = carParked.filter(function(e) { return e !==  obj })
             carParked = filteredAry.slice();
             return `${obj.slot}`          
         }else{
          return `Not found`;
         }
   }
   else {
     return `Parking lot is empty`
   }
}





/** module export */
module.exports = {
    create_parking_lot,
    park,
    leave,
    findByColor,
    status,
    findSlotNumber,
    findByRegNum
}