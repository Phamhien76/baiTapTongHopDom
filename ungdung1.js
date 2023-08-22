// bài tập ứng dụng
// 1. xây dựng from login gồm 2 thẻ input userName và password
let userName = document.getElementById("userName");
let password = document.getElementById("password");
// 2. truy cập vào 2 thẻ input userName và password và gán lại giá trị cho ô userName
// là rikkeiAkademy, password là "Để nông dân biết code"

userName.setAttribute("value", "rikkei Academy");
password.setAttribute("value", "Đenongdanbietcode")
//3. thay đổi cho giá trị userName là học viện rikkei
userName.value = "hocvienAkademy";
//4. Thay đổi giá trị cho password là 123456
password.value = "123456";
//5.style màu chữ cho userNam là màu đỏ
userName.style.color = "red";
//6.Không cho phép sửa giá trị o inputs password- readonlt
password.ariaReadOnly = true;
//7. Sử dung HTML xây dựng 1 đoạn văn có class là rikkei
//8.sử dung javescript để thêm nội dung text cho đoạn văn là "Học Viện Rikkei đào tạo CNTT chất lượng cao"-innerText
let rikkei = document.getElementsByClassName("rikkei");
rikkei[0].innerText = "Học Viện Rikkei đào tạo CNTT chất lượng cao."
//9. viết in nghiên nội dung thẻ p - innerHTML
rikkei[0].innerHTML = "<i>Học Viện Rikkei đào tạo CNTT chất lượng cao</i>"
//10.Đặt background cho thẻ p màu đen, chữ nàu đỏ - .style.backgroundColor, style.coloi
rikkei[0].style.backgrounColor = "black";
rikkei[0].style.color = "red";
