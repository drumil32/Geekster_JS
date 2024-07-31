// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     console.log("from drag : " + ev.target.id);
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     console.log("from drop : " + data);
//     ev.target.appendChild(document.getElementById(data));
// }

// const divTag = document.getElementById("div1");
// const imgTag = document.getElementById("img1");

// divTag.addEventListener("drop", drop);
// divTag.addEventListener("dragover", allowDrop);
// imgTag.addEventListener("dragstart", drag);

// function is variable it self
var a = 1;
function b() {
    a = 10; return;
    // function a() { }
}
b();
console.log(a);

// after hoisting your code looks like this
// var a = 1;
// function b(){
//     function a(){}
//     console.log("from b")
//     console.log(a);
//     a = 10;
//     console.log(a);
//     return;
// }
// b();
// console.log(a);

// var c = function(){} // function expression
// function c(){} // function statement