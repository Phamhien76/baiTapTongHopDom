

// giá trị rỗng sẻ có 2 cái 
//  null --> rỗng giá trị biến 
// "" --> chuỗi 

function add(){
    let iteminput=document.getElementById("item");
    let itemValue=iteminput.value;
    let DanhSachUl=document.getElementById("danhSach");
if(itemValue!=="" && itemValue!==null){
 
// tao li
    let newItem=document.createElement("li");
    newItem.textContent=itemValue;
    DanhSachUl.appendChild(newItem);
    iteminput.value="";
}else{

    iteminput.style.backgroundColor="#FFD700";
    
}
}