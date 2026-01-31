let soLanNhap = 0;
let dangNhapThanhCong = false;

while (soLanNhap < 3) {
  let matKhau = prompt("Nhập mật khẩu:");

  if (matKhau === "admin123") {
    console.log("Đăng nhập thành công");
    dangNhapThanhCong = true;
    break;
  } else {
    soLanNhap++;
    console.log("Mật khẩu sai");
  }
}

if (!dangNhapThanhCong) {
  console.log("Hệ thống bị khóa");
} else {
  while (true) {
    let luaChon = prompt(
      " MENU \n" +
      "1. Nhập lô sách mới\n" +
      "2. Vẽ sơ đồ kệ sách\n" +
      "3. Thoát\n" +
      "Nhập lựa chọn (1/2/3):"
    );

    if (luaChon === "1") {
      let soLuongSach = Number(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
      let tongGiaTri = 0;

      for (let i = 1; i <= soLuongSach; i++) {
        let giaTien = Number(prompt("Nhập giá tiền cuốn sách thứ " + i + ":"));

        if (giaTien <= 0 || isNaN(giaTien)) {
          console.log("Giá tiền không hợp lệ, bỏ qua cuốn này");
          continue;
        }

        tongGiaTri += giaTien;
      }

      console.log("Tổng giá trị nhập kho đợt này là: " + tongGiaTri);
    } 
    else if (luaChon === "2") {
      for (let khu = 1; khu <= 3; khu++) {
        for (let ke = 1; ke <= 5; ke++) {
          if (khu === 2 && ke === 3) {
            console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
            continue;
          }
          console.log("Khu vực " + khu + " - Kệ " + ke);
        }
      }
    } 
    else if (luaChon === "3") {
      console.log("Hẹn gặp lại!");
      break;
    } 
    else {
      console.log("Lựa chọn không hợp lệ");
    }
  }
}
