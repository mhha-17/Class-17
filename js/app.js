 /* Date/Month/Year Start */
 let day = document.getElementById('day');
 for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option');
    let optionText = document.createTextNode(i)
    option.appendChild(optionText)
    day.appendChild(option)
 } 
 
 
 let month = document.getElementById('month');
 for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    let optionText = document.createTextNode(i)
    option.appendChild(optionText)
    month.appendChild(option)
 } 
 
 let year = document.getElementById('year');
 for (let i = 1999; i <= 2022; i++) {
    let option = document.createElement('option');
    let optionText = document.createTextNode(i)
    option.appendChild(optionText)
    year.appendChild(option)
 }


 /* Date/Month/Year End*/

 /* Result Calculator Start */

 document.write('<h2>HW:01_Result Calculation:</h2><br>');
 
 var English = 82;
if(English >=80 && English <= 100) {
   document.write('English = A+');
}else if(English >= 70 && English <= 79){
   document.write('English = A');
}else if(English >= 60 && English <= 69){
   document.write('English = A-');
}else if(English >= 50 && English <= 59){
   document.write('English = B');
}else if( English >= 40 && English <= 49){
   document.write('English = C');
}else if(English >=33 && English <= 39){
    document.write('English = D');
} else{
   document.write('English = Failed');
}

document.write('<br><br>');

var Bangla = 72;
if(Bangla >=80 && Bangla <= 100) {
   document.write('Bangla = A+');
}else if(Bangla >= 70 && Bangla <= 79){
   document.write('Bangla = A');
}else if(Bangla >= 60 && Bangla <= 69){
   document.write('Bangla = A-');
}else if( Bangla >= 50 && Bangla <= 59){
   document.write('Bangla = B');
}else if(Bangla >= 40 && Bangla <= 49){
   document.write('Bangla = C');
}else if(Bangla >=33 && Bangla <= 39){
    document.write('Bangla = D');
} else{
   document.write('Bangla = Failed');
}

document.write('<br><br>')

var Ict = 62;
if(Ict >=80 && Ict <= 100) {
   document.write('Ict = A+');
}else if(Ict >= 70 && English <= 79){
   document.write('Ict = A');
}else if(Ict >= 60 && Ict <= 69){
   document.write('Ict = A-');
}else if(Ict >= 50 && Ict <= 59){
   document.write('Ict = B');
}else if( Ict >= 40 && Ict <= 49){
   document.write('Ict = C');
}else if(Ict >=33 && Ict <= 39){
    document.write('Ict = D');
} else{
   document.write('Ict = Failed');
}

document.write('<br><br>')

var General_Math = 32;
if(General_Math >=80 && General_Math <= 100) {
   document.write('General_Math = A+');
}else if(General_Math >= 70 && General_Math <= 79){
   document.write('General_Math = A');
}else if(General_Math >= 60 && General_Math <= 69){
   document.write('General_Math = A-');
}else if(General_Math >= 50 && General_Math <= 59){
   document.write('General_Math = B');
}else if(General_Math >= 40 && General_Math <= 49){
   document.write('General_Math = C');
}else if(General_Math >=33 && General_Math <= 39){
    document.write('General_Math = D');
} else{
   document.write('General_Math = Failed');
}

document.write('<br>');
/* Result Calculator End */

/* function Section Start */

document.write('<h2>HW:02_Function With Mathematical Operator:</h2><br>')

function sum(a,b,c){
    document.write(a+ b+ c+ "<br>");
}

sum(5,7,8)

function subtract(a,b){
    document.write(a- b + "<br>");
}

subtract(89,6)

function Multiplication(a,b) {
    document.write( a * b + "<br>");
}

Multiplication(6,5)

function division(a,b) {
    document.write( a / b + "<br>");
}

division(78,5)

function Modulus(a,b) {
    document.write( a % b + "<br>");
}

Modulus(535,4)

function increment(a) {
    document.write( ++a + "<br>");
}

increment(7)


function decrement(a) {
    document.write( --a + "<br>");
}

decrement(11)

/* Function Section End */

document.write('<br>');

/* Increment/Decrement Start */

document.write('<h2>HW:03_Increment & Decrement:</h2><br><h3>Increment 1-100</h3><br>')

for(let i = 1; i <= 100; i++){
    document.write(i+ '<br>');
}

document.write('<h3>Decrement_(100 - 1)</h3><br>')
for (let i = 100; i >= 1; i--){
    document.write(i+'<br>')
}
/* Increment/Decrement End */

/* Odd/Even Number Start */

document.write('<h2>HW:04_Odd & Even Number In 1 - 100:</h2><br><h3>Even Number:</h3>')
for (let i = 1; i<=100; i++){
    if(i % 2 == 0)
    document.write( i + ' Is Even' + '<br>');
}

document.write('<h3>Odd number:</h3><br>')

for (let i = 1; i<=100; i++){
    if(i % 2 !== 0)
    document.write( i + ' Is Odd' +'<br>');
}
/* Odd/Even Number End */


