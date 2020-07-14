var name='prakash';
var age='24';
var i=1;
var college=['usharama','lbrce'];
const universities=({university:'JNTU',location:'ap'});
// universities='klu';
 //the const variable doesnt change when we again intialize and it shows error

    


console.log(name);
console.error(age);
console.warn(college);
console.table(universities);
console.time('loop');
for(let i=0;i<4;i++){
   
    console.log(i);
    console.count(i);
}
console.timeEnd('loop');
console.log(i);

console.log('%c THANKS TO LETS UPGRADE ', 'color:#ff5c33;font-size:20px;border:2px black solid'); 