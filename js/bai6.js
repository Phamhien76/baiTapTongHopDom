//lấy tham chiêu các ô
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
let toal1 = document.getElementById("toal1");
let toal2 = document.getElementById("toal2");
let toal3 = document.getElementById("toal3");

console.log("số nhap vao là", number1);
// const number2 = (document.getElementById("number2").value);
// (document.getElementById("toal1"));

number1.addEventListener("input", () => {
    document.getElementById("toal1").textContent = number1.value;
})

//     let sum=number1+number2
//     document.getElementById("toal1").innerTextL=sum;


// textInput.addEventListener("input", () => {
//     outInput1.textContent = textInput.value;
// })


