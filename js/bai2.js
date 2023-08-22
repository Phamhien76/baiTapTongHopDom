
// function hien() {    
//     document.getElementById("listSearch").innerHTML =     
//     `    <br id="br2">
//         <select name="loai" id="loai">
//             <option value="quanAo">Quần áo</option>
//             <option value="giayDep">Giày dép</option>
//             <option value="myPham">Mỹ phẩm</option>
//         </select>`
//     document.getElementById("showListSearch").style.display ="none" ;
//     document.getElementById("hideListSearch").style.display ="inline-block" ;
// }
// function an(){
//     document.getElementById("showListSearch").style.display="inline-block";
//     document.getElementById("hideListSearch").style.display="none";
//     document.getElementById("listSearch").innerHTML="";

function hien(tex) {
    if (tex === `showListSearch`) {
        document.getElementById("listSearch").innerHTML =
            `    <br id="br2">
            <select name="loai" id="loai">
                 <option value="quanAo">Quần áo</option>
                 <option value="giayDep">Giày dép</option>
                 <option value="myPham">Mỹ phẩm</option>
             </select>`
        document.getElementById("showListSearch").style.display = "none";
        document.getElementById("hideListSearch").style.display = "inline-block";
    } else {
        document.getElementById("showListSearch").style.display = "inline-block";
        document.getElementById("hideListSearch").style.display = "none";
        document.getElementById("listSearch").innerHTML = "";
    }
}