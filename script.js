let amount = 0  // initialization
// assignment
amount = 1000
// score = ' no score'

const pi = 3.14
var val = 10

console.log("Your bill amount is Rs." + amount);
console.log("Hello world");
// alert("hello");
document.write("<h1>hello world</h1>");
var a=("ENTER A STRING INFORMATION");
// var a=prompt ("ENTER A STRING INFORMATION");
console.log(a);
   //  console.log('hello') to write this message in chrome console page (ctrl+shift+J)
        // alert("hiii") to write this meassage in alert type of message showed. 
        // alert and console type of code is A line of code (statement)
//  multi line comments 
// variables - variables are stored in data ( ex: let,..) //
 


var a1;
var a2=8;
var a3="This is my webpage</br>";
var a4="Javascript tutorials</br>";
document.write(a3+a4);


var c1;
console.log(typeof c1);
var c2=15;
console.log(typeof c2);
var c3="Hello";
console.log(typeof c3);
var c4=true;
console.log(typeof c4);
var c5=null;
console.log(typeof c5);


var n1=23;
console.log(typeof n1);
var n2="hello";
console.log(typeof n2);
var n3=(n1+n2);
console.log(typeof n3);
var n4=("enter a value");
// var n4=prompt("enter a value");
console.log(typeof n4);
//before is implicit 
// after code is explicit
var n5=Number(15);
console.log(typeof n5);
var n6=Number("hello");
console.log(typeof n6);
var n7=String(18);
console.log(typeof n7);
var n8=Boolean("hii");
console.log(typeof n8);
var n9="youtube";
console.log(typeof parseInt(n9));
var n10="youtube";
console.log(typeof parseFloat(n10));

// functions- 4 types
// 1.Named function
// 2.Anonymous function
// 3.Constructor function
// 4.Self invoking function

// 1.Named function
function add(a,b)
{return a+b;}
console.log (add(3,5));

// 2. Anonymous function
var a=function(a,b){
return a+b;
}
console.log (a(5,5));
setTimeout(function (){console.log("this is anonymous function")},1000);
// Anonymous function does not have function name.

// 3.Constructor Function
var mul=new Function("a","b","c","return a*b*c;");
console.log(mul(2,3,6));

// 4.Self invoking Function
(function (a,b){
        console.log(a-b);

})(2,6);

// conditions in JavaScript
// 1.IF  2. IF ELSE  3.  IF ELSE IF ELSE  4. NESTED IF  5. SWITCH

// 1.if condition
var v=50;
if(v==50){
        console.log("true");
}


var v=50;
if(v/=50){
        console.log("false");

// console.log("true")  nothing shows in result.
}
       

// 2. if else condition
else{
        console.log("false");
        // nothing shows.
}

// 3. if else if else
//  when we check more than one conditions we use this.
 if(v==50){
        console.log("true");
}
else{
        console.log("else part");

}

// 4. nested if condition
// we check more than one condition we use this. (if(if))

var m=70;
if(m>35){
        if(m>80){
                console.log("a grade");
        }
        else{
                console.log("b grade");
        }
}
else{
        console.log("fail");
}


// 5.switch conditions
var v=parseInt(prompt("ENTER YOUR CHOICE"));
switch(v){
        case 1:
        console.log("case 1");
        break;
        case 2:
        console.log("case 2");
        break;
        default:
        console.log("wrong entry!");

}


console.log("ARITHMETIC OPERATOR");
console.log("add :"+(2+3));
console.log("sub :"+(2-3));
console.log("mul :"+(2*3));
console.log("div :"+(2/3));
console.log("mod :"+(2%3));

console.log("INCREMENT / DECREMENT OPERATOR");
var h1=2;
h1++; 
// h1=h1+1;
console.log(h1);
var h2=2;
h2--;
// h2=h2-1;
console.log(h2);

console.log("ASSIGNMENT OPERATOR");
// same as arithmetic operator
var j1=4;
j1+=5; 
// j1=j1+5;
console.log(j1);

var j2=4;
j2-=5;
// j2=j2-5;
console.log(j2);

var j3=4;
j3*=5;
// j3=j3*5;
console.log(j3);

var j4=4;
j4/=5;
// j4=j4/5;
console.log(j4);

var j5=4;
j5%=5;
// j5=j5%5;
console.log(j5);

// console.log("string oeprator") same as arithmetic operator. string(+) and operator (2+3) adding. this is string concadination oeprator.

console.log("comparison operator");
var k1=3;
var k2=5;
if(k1<k2){
        console.log("true");
}
else{
        console.log("false");
}

var k1=3;
var k2=5;
if(k1>k2){
        console.log("true");
}
else{
        console.log("false");
}


var k1=3;
var k2=5;
if(k1==k2){
        console.log("true");
}
else{
        console.log("false");
}
// not equal to
var k1=3;
var k2=5;
if(k1!=k2){
        console.log("true");
}
else{
        console.log("false");
}

var k1=5;
var k2=5;
//THE USES TO CHECK K1, K2 ARE SAME TYPE. (EX. BOTH IS NUMBER OR STRING,..)
if(k1===k2){
        console.log("true");
}
else{
        console.log("false");
}

var k1=5;
var k2="5";
 if(k1===k2){
        console.log("true");
}
else{
        console.log("false");
}

var k1=3;
var k2=5;
 if(k1<=k2){
        console.log("true");
}
else{
        console.log("false");
}

var k1=5;
var k2=5;
 if(k1>=k2){
        console.log("true");
}
else{
        console.log("false");
}

console.log("BOOLEAN OPERATOR");
var k1=5;
var k2=5;
 if(k1>=k2 && k1==k2){
        console.log("true");
}
else{
        console.log("false");
}
var k1=5;
var k2=5;
 if(k1>=k2 && k1!=k2){
        console.log("true");
}
else{
        console.log("false");
}

var k1=5;
var k2=3;
 if(k1>=k2 || k1!=k2){
        console.log("true");
}
else{
        console.log("false");
}

var k1=5;
var k2=5;
 if((k1>=k2) || (k1==k2));
        {
        console.log("true");
}
{
       console.log("false");
}


console.log("TERNERY OPERATOR");

console.log(2<3 ? true : false);
console.log(2>3 ? true : false);
console.log(2<3 ? 0 : 1);
console.log(2>3 ? 0 : 1);

// Bitwise Operator  
//  000000000000000000000000000010 = 2
//                         8421
//  000000000000000000000000000100 = 4

// 1. Bitwise & operator
console.log(2&4);
// 0-0=0,0-1=0,1-0=0, 1-1=1
 
// 2. or operator
console.log(2|4);
// 0-0=0. 0-1=1,1-0=1, 1-1=1
// any one place having one value result is one

// 3. Exar operator
console.log(2^4);
// 0-0=0, 0-1=1, 1-0=1, 1-1=0.

//  4. Not operator
console.log(~2);
// ~ operators converys the value 0 are 1 and 1 are 0

// 5. Left shift Operator
console.log(2<<1);

