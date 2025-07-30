let data = [
  { id: 1102, khachhang: "Vũ Hoài An", nhanvien: "Mai Thục Anh", sotien: 250000, ngay: "06 Tháng 6 2024 9:00" },
  { id: 1199, khachhang: "Hoàng Thị Thắng", nhanvien: "Nguyễn Văn Hồng", sotien: 600000, ngay: "06 Tháng 6 2024 9:03" },
  { id: 1239, khachhang: "Nguyễn Huy Quang", nhanvien: "Nguyễn Văn Hồng", sotien: 934000, ngay: "06 Tháng 6 2024 9:10" },
  { id: 1677, khachhang: "Huỳnh Văn Nam", nhanvien: "Mai Thục Anh", sotien: 150000, ngay: "06 Tháng 6 2024 9:20" },
  { id: 1678, khachhang: "Nguyễn Minh Sinh", nhanvien: "Mai Thục Anh", sotien: 354000, ngay: "06 Tháng 6 2024 9:24" }
];

function renderTable() {
  const tbody = document.getElementById("dataBody");
  tbody.innerHTML = data.map((item, index) => `
    <tr>
      <td>
        <button class="btn btn-danger btn-sm">X</button>
        <button class="btn btn-warning btn-sm">✏</button>
        <button class="btn btn-info btn-sm">👁</button>
      </td>
      <td>${item.id}</td>
      <td>${item.khachhang}</td>
      <td>${item.nhanvien}</td>
      <td>${item.sotien.toLocaleString()} đ</td>
      <td>${item.ngay}</td>
    </tr>
  `).join("");
}

function showForm() {
  document.getElementById("popupForm").classList.add("show");
}

function closeForm() {
  document.getElementById("popupForm").classList.remove("show");
  clearForm();
}

function clearForm() {
  document.getElementById("khachhang").value = "";
  document.getElementById("nhanvien").value = "";
  document.getElementById("sotien").value = "";
  document.getElementById("errKhachhang").innerText = "";
  document.getElementById("errNhanvien").innerText = "";
}

function handleSubmit(e) {
  e.preventDefault();
  const kh = document.getElementById("khachhang").value.trim();
  const nv = document.getElementById("nhanvien").value.trim();
  const st = parseInt(document.getElementById("sotien").value.trim()) || 0;

  let valid = true;

  if (!kh) {
    document.getElementById("errKhachhang").innerText = "Khách hàng không được để trống";
    valid = false;
  } else if (kh.length > 30) {
    document.getElementById("errKhachhang").innerText = "Tên khách hàng không được vượt quá 30 ký tự";
    valid = false;
  } else {
    document.getElementById("errKhachhang").innerText = "";
  }

  if (!nv) {
    document.getElementById("errNhanvien").innerText = "Nhân viên không được để trống";
    valid = false;
  } else if (nv.length > 30) {
    document.getElementById("errNhanvien").innerText = "Tên nhân viên không được vượt quá 30 ký tự";
    valid = false;
  } else {
    document.getElementById("errNhanvien").innerText = "";
  }

  if (!valid) return false;

  const newId = Math.floor(1000 + Math.random() * 9000);
  const today = new Date().toLocaleString("vi-VN", { dateStyle: "long", timeStyle: "short" });

  data.push({ id: newId, khachhang: kh, nhanvien: nv, sotien: st, ngay: today });
  renderTable();
  closeForm();
  return false;
}

window.onload = renderTable;

