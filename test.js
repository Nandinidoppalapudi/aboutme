QUnit.test('Testing Area function with positive number sets of inputs', function (assert) {
 
    assert.equal(myFunction(2,4),8,'Tested with small positive number ');
    assert.equal(myFunction(2,0),0,'Tested with zero number ');
    assert.equal(myFunction(2,8),16,'Tested with large positive number');
 });
 
 QUnit.test('Testing Area function with negitive number sets of inputs', function (assert) {
 
    assert.equal(myFunction(-2,6),-12,'Tested with small -ve number ');
    assert.equal(myFunction(-2,0),0,'Tested with small -ve number ');
    assert.equal(myFunction(-2,-8),16,'Tested with large -ve number ');
 });
 
 QUnit.test('Testing Area function with floating point number sets of inputs', function (assert) {
 
    assert.equal(myFunction(2,5.6),11.2,'Tested with small floating point number ');
    assert.equal(myFunction(2,1.0),2.0,'Tested with small floating point number ');
    assert.equal(myFunction(2,5.2),10.4,'Tested with large floting number');
 });
 
QUnit.test('Testing DOM Manipulation', function (assert) {
 
   assert.equal(document.getElementById('one').innerHTML,"element has id one.",'DOM manipulation testing.');
   assert.equal(document.getElementsByClassName('two').innerHTML,"element belongs to two.",'DOM manipulation testing.');
   
});
 
 
 
