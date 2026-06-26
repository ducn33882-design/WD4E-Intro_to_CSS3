function upDate(previewPic){
    // 1) Thay đổi hình nền của khung to bằng link ảnh đang di chuột qua
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 2) Thay đổi chữ bên trong khung to thành nội dung thẻ alt của ảnh đó
    document.getElementById('image').innerHTML = previewPic.alt;
}

function undo(){
    // 1) Xóa hình nền của khung to (đưa về trống)
    document.getElementById('image').style.backgroundImage = "url('')";
    
    // 2) Trả lại dòng chữ hướng dẫn gốc ban đầu
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
