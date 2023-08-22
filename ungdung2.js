
//truy cập 
let divRa = document.getElementById("ra");
//tao thẻ mới
let form = document.createElement("form");
//thêm thuộc tính
form.setAttribute("action", "");
form.setAttribute("method", "post");
//add vào thẻ cha
divRa.appendChild(form);
//tao label 1
let label = document.createElement("label");
label.setAttribute("for", "userName");
label.innerText = "User Name";
form.appendChild(label);

//tạo input 1
let input = document.createElement("input");
input.setAttribute("type", "text")
input.setAttribute("name", "userName");
input.setAttribute("id", "userName");
form.appendChild(input);

// tap br 1
let br = document.createElement("br");
form.appendChild(br);

//tao label 2
let label2 = document.createElement("label");
label2.setAttribute("for", "password");
label2.innerText = "Password";
form.appendChild(label2);

//tao input 2
let input2 = document.createElement("input");
input2.setAttribute("type", "text")
input2.setAttribute("name", "password");
input2.setAttribute("id", "password");
form.appendChild(input2);

//tạo br 2
let br2 = document.createElement("br");
form.appendChild(br2);

//tao inpu 3
let input3 = document.createElement("input");
input3.setAttribute("type", "submit")
input3.setAttribute("value", "Login");
form.appendChild(input3);





