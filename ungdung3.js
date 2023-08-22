// cách 1
function button1(){
    alert("học viện Rikkei");
};
//cách 2
let button2=document.getElementById("button2");
button2.onclick=function(){
    console.log("Chào mừng đến với ngôi nhà Rikkei");
};
// cách 3

let button3=document.getElementById("button3");
button3.addEventListener("click",function(){
    console.log(" Chao các bạn học viên Fukuoka");
});