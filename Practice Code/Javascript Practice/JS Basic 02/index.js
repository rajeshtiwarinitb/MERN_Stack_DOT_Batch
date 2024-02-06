/*
//object create..
const rectangle = {
    //properties..
    length: '1',
    breadth : '2',

    //behaviour..
    draw: function() {
      console.log('drawing rectangle');
    }

};

//object create inside a function..
//factory function which make an object and return it.
function createRectangle(len ,bre){

    //object create.
    return  rectangle = {
        //properties..
        length: len,
        breadth : bre,
    
        //behaviour..
        draw: function() {
          console.log('drawing rectangle');
        }
    
    };

}

let rectangleObj1 = createRectangle(5,4);
let rectangleObj2 = createRectangle(7,8);
let rectangleObj3 = createRectangle(6,9);
*/

//constructor function ...
function Rectangle(len ,bre){
   this.length = len;
   this.breadth = bre;
   this.draw = function(){
      console.log('drawing');
   }
}

//object creation using constructor function..
let rectangleObjNew = new Rectangle(4,6);
rectangleObjNew.color = 'Yellow';
console.log(rectangleObjNew);

delete rectangleObjNew.color;
console.log(rectangleObjNew);

//premittive values 
let a = 10;
let b = a ;
a++;
console.log(a);
console.log(b);

//Reference Values
let aa = {
   value: 10
};
let bb = aa ;
aa.value++;
console.log(aa);
console.log(bb);

//Function call 
//pass by value.
let xa = 10;
function inc(xa){
  xa++;
}
inc(xa);
console.log(xa);

//pass by reference..
let ya = {value: 10};

function inc(ya){
  ya.value++;
}
inc(ya);
console.log(ya.value);

//for-in
let RectangleNew = {
  length:2,
  breadth:4
};

for(let key in RectangleNew){
  //keys are reflected through key variable .
  //values are reflected through Rectangle[key] .
   console.log(key, RectangleNew[key]);
}

//for-of loop for iterables  here Object.keys(ObjectName) make an array of keys.
for(let key of Object.keys(RectangleNew)){
  console.log(key);
}
//for-of loop for iterables  here Object.entries(ObjectName)
for(let key of Object.entries(RectangleNew)){
  console.log(key);
}

//to check a key which is present in the Object key or not by this type..
if('color' in RectangleNew ){
  console.log('Present');
}
else{
  console.log('Not Present');
}

//Object clonings..
let src = {
  a : 10,
  b : 11,
  c : 12
};

//first way of object cloning : iterable
let dest1 = { };

for(let key in src){
     dest1[key] = src[key];
}
console.log('dest1',dest1);

//second way of object cloning : assign one object to another object .

let dest2 = Object.assign({},src);
console.log('dest2',dest2);

//third way of object cloning : spread
let dest3 = {...src};
console.log('dest3',dest3);

//
let src2 = {value : 25 };
destsrc = Object.assign({} , src,src2);
console.log('destsrc',destsrc);