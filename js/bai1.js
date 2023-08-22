// lấy giá trị div
let baitap1 = document.getElementById("baitap1");
//2. gán html của ra với template literal
baitap1.innerHTML =`
    <form action="" method="post" >
        <label for="search" > Nhập nội dung tìm kiếm </label >
        <input type="text" name="search" id="search" />
        <a href="#">Ẩn tìm kiếm nâng cao</a>
        <br>        
        <select name="loai" id="loai">
           <option value="quanAo">Quần áo</option>
           <option value="giayDep">Dày dép</option>
           <option value="myPham">Mỹ Phẩm</option>
        </select>
        <br>
        <br>
        <button onclick="timKiem()">Tìm kiếm</button>
    </form >
    `

//lưu file em ,em lưu file nhé ok thầy em hiểu chỗ sai của em rồi ạ
// lúc nayc cm copy cả div cho vào xong xóa mà ko để ý bên html 
// vẫn ko đc thày oiư emlưucode di em html kìa em chưa lưu ở html kìa dạ
//em cảm ơn thầy ạ


//em tét thử nhé ok thầy ko dc thầy ơi

