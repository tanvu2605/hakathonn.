let myProjects = []
myProjects.push(JSON.parse(localStorage.getItem("projects")))  
console.log(myProjects);
function render(){
    const tbody = document.getElementByIdBy("tbody")
    for(let i = 0; i < myProjects.length; i++){
        let tr = document.createElement("tr")
        tbody.appendChild(tr)
        for(i = 1; i <= 6; i++){
            const td = document.createElement("td")
            tr.appendChild(td)
        }
    }
}
render();
document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử
    var tbody = document.getElementById("tbody");
    var addButton = document.getElementById("button1");

    // Thêm lắng nghe sự kiện cho nút "Dự án mới"
    addButton.addEventListener("click", function () {
        // Gọi hàm để thêm dòng dự án mới
        themDuAnMoi();
    });

    // Thêm lắng nghe sự kiện cho bảng để xử lý sự kiện click nút
    tbody.addEventListener("click", function (e) {
        var target = e.target;

        // Kiểm tra xem phần tử được nhấp có class "btn-danger" (Nút Xóa) không
        if (target.classList.contains("btn-danger")) {
            // Nút Xóa được nhấp
            xoaDuAn(target);
        }

        // Kiểm tra xem phần tử được nhấp có class "btn-success" (Nút Cập nhật) không
        if (target.classList.contains("btn-success")) {
            // Nút Cập nhật được nhấp
            capNhatDuAn(target);
        }
    });

    // Hàm để thêm dòng dự án mới
    function themDuAnMoi() {
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td class="id">${tbody.children.length + 1}</td>
            <td class="projects">Dự án mới</td>
            <td class="imageUrls">URL hình mới</td>
            <td class="links"><a href="#">Liên kết mới</a></td>
            <td class="tags">Thẻ mới</td>
            <td class="actions">
                <button type="button" class="btn btn-danger">Xóa</button>
                <button type="button" class="btn btn-success">Cập nhật</button>
            </td>
        `;
        tbody.appendChild(newRow);
    }

    // Hàm để xóa dòng dự án
    function xoaDuAn(button) {
        var row = button.closest("tr");
        if (row) {
            row.remove();
        }
    }

    // Hàm để cập nhật dòng dự án
    function capNhatDuAn(button) {
        // Thực hiện logic của bạn để cập nhật dòng, ví dụ mở một modal để chỉnh sửa
        // Bạn có thể truy cập giá trị ô bằng cách sử dụng button.closest("tr").cells[index].textContent
        // Trong trường hợp này, chúng ta chỉ log thông tin dòng vào console
        var row = button.closest("tr");
        if (row) {
            console.log("Đã nhấp nút Cập nhật cho dòng:", row);
        }
    }
});
