let index = 0;
//biến toàn cục để biết khi nào là thêm học viên mới học viên, cập nhật học viên
let action = "Create"
//tạo một bang ban dau
let arrhocVien = [];
function save(event) {
    //Lấy giá trị
    event.preventDefault();
    let id = document.getElementById("id");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let namVal = document.getElementById("nam").checked;;
    let errorName = document.getElementById("errorName")
    let errorEmail = document.getElementById("errorEmail");
    let errorPhone = document.getElementById("errorPhone");
    let errorAddress = document.getElementById("errorAddress");

    //cập nhật số thứ tự
    index += 1

    //Thực hiện validate dữ liệu đầu vào trong các chức năng
    let phonePattern = /^(0[1-9])+([0-9]{8,9})$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
        errorEmail.innerHTML = "định dạng email không đúng"
        return false;
    };

    if (!phonePattern.test(phone.value)) {
        errorPhone.innerHTML = "Đinh dạng phone không đúng"
        return false;
    };
    if (name.value === "") {
        errorName.innerHTML = "Chưa nhập tên"
        return false;
    };
    if (address.value === "") {
        errorAddress.innerHTML = ("Chưa nhập địa chỉ")
        return false;
    };


    //tao mang moi bằng opject
    let newArrhocVien = {
        id: id.value,
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        gender: namVal ? "Nam" : "Nữ"
    };
    //reset các giá trị có trong form
    id.value = "",
        name.value = "",
        email.value = "",
        phone.value = "",
        address.value = "",
        //gán cho mảng ban đầu
        arrhocVien.push(newArrhocVien);
    update(newArrhocVien, index);

}

//gán vào danh sách
function update(newArrhocVien, index) {
    let dongMoi = document.getElementById("dongMoi");
    // tạo dòng mới
    let tr = document.createElement("tr");
    tr.innerHTML += `
  <td>${index}</td>
  <td>${newArrhocVien.id}</td>
  <td>${newArrhocVien.name}</td>
  <td>${newArrhocVien.email}</td>
  <td>${newArrhocVien.phone}</td>
  <td>${newArrhocVien.address}</td>
  <td>${newArrhocVien.gender}</td>
  <td>
  <a href="javascript: edit(newArrhocVien)">edit</a>
  <a href="javascript: deleteDanhSach(newArrhocVien)">delete</a>
  </td>
  <td></td>
`
    //thêm dữ liệu vào danh sách
    dongMoi.appendChild(tr);
    edit(newArrhocVien)

}
// xóa khi nhấn delete
function deleteDanhSach (newArrhocVien){
    newArrhocVien.id="";
    newArrhocVien.name="";
    newArrhocVien.email="";
    newArrhocVien.phone="";
    newArrhocVien.address="";
   newArrhocVien.gender="";
}

//target: lấy được thông tin sinh viên cần cập nhật và hiển thị trên form
function edit(newArrhocVien) {
    //lấy thông tin sinh viên theo mã sinh viên
    // let indexUpdate=getIndexStudentById(id);
    //hiển thì tông tin người dùng lên form để chỉnh sửa
    // if(indexUpdate>=0){
    document.getElementById("id").value = newArrhocVien.id;
    document.getElementById("name").value = newArrhocVien.name;
    document.getElementById("email").value = newArrhocVien.email;
    document.getElementById("phone").value = newArrhocVien.phone;
    document.getElementById("address").value = newArrhocVien.address;
    document.getElementById("xex").checked = newArrhocVien.gender;
    // }
    //không cho phép sửa mã sinh viên trên form khi cập nhật-readonly
    // document.getElementById("id").readOnly=true;
    action = "Update";
    // getIndexStudentById(newArrhocVien,id)
}




