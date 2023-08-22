function create() {
    //Lấy giá trị
    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("studentName").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;


    if (studentId.length !== 6) {
        console.log("Student ID phải gồm 6 ký tự.");
    }
    if (studentName == "" && studentName == null) {
        alert("StudentName không được để trống")
    }
    if (age < 18) {
        alert("Age phải có giá trị lớn hơn hoặc bằng 18")
    }
    let phonePattern = /^(0[1-9])+([0-9]{8,9})$/;
    let emailPattern = /^\S+@\S+\.\S+$/;
    if (!phonePattern.test(phone)) {
        alert("Phone phải có định dạng là số điện thoại ở VN")
    }
    if (!emailPattern.test(email)) {
        alert("Email phải có định dạng email")
    }
    document.getElementById("infoStudentId").textContent = studentId;
    document.getElementById("infoStudentName").textContent = studentName;
    document.getElementById("infoAge").textContent = age;
    document.getElementById("infoPhone").textContent = phone;
    document.getElementById("infoEmail").textContent = email;
    document.getElementById("studentInfo").style.display = "block";

};