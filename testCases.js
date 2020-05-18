let expect = require('chai').expect;
let parking = require('./Controller/parkingController');




/** park car before creating parking slot */

describe('park car before creating parking slot', async function () {
    it('Allocated slot number: 1', async function () {
     var preResult = 'parking_lot is not initialized. please create parking lot';
     var result = await parking.park('MH-27-AV-9838');
     console.log(result);
     expect(result).to.be.equal(preResult);

   });
});



/** Free Car Before initiating parking slot */

describe('park car before creating parking slot', async function () {
    it('parking lot is not initiated', async function () {
     var preResult = 'parking lot is not initiated';
     var result = await parking.leave('MH-27-AV-9838', '4');
     console.log(result);
     expect(result).to.be.equal(preResult);

   });
});






/** initialize park slot  */
describe('create_parking_lot 6', async function () {
     it('should create 6 parking slots', async function () {
      var preResult = 'Created a parking lot with 6 slots';
      var result = await parking.create_parking_lot(6);
      console.log(result);
      expect(result).to.be.equal(preResult);
 
    });
});





/** park car */

describe('park car', async function () {
    it('Allocated slot number: 1', async function () {
     var preResult = 'Allocated slot number: 1';
     var result = await parking.park('MH-27-AV-9838');
     console.log(result);
     expect(result).to.be.equal(preResult);

   });
});




/** leave car from parking slot */
describe('Free car in parking slot', async function () {
    it('Leave Car', async function () {
     var preResult = 'Slot number 4 is free';
     var result = await parking.leave('4');
     console.log(result);
     expect(result).to.be.equal(preResult);

   });
});


