// cách 1 sử dụng suwk kiện input
let textInput = document.getElementById("textInput1");
let outInput1 = document.getElementById("outputDiv1");

textInput.addEventListener("input", () => {
    outInput1.textContent = textInput.value;
})

//cách 2
let input2 = document.getElementById("textInput2");
let outInput2 = document.getElementById("outputDiv2");

input2.oninput = function () {
    outInput2.textContent = input2.value;
}
//cách 3
let outInput3 = document.getElementById("outputDiv3");
let input3=document.getElementById("textInput3");
function textInput3() {
    outInput3.textContent =input3.value;
}
