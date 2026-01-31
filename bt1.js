let totalBorrowCount = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));

if (isNaN(totalBorrowCount) || totalBorrowCount <= 0) {
  console.log("Số lượt mượn không hợp lệ");
} else {
  for (let i = 1; i <= totalBorrowCount; i++) {
    console.log("Lượt mượn thứ " + i);

    let borrowerName = prompt("Nhập tên người mượn:");
    let bookName = prompt("Nhập tên sách:");
    let borrowDays = Number(prompt("Nhập số ngày mượn (1 - 30):"));

    if (isNaN(borrowDays) || borrowDays < 1 || borrowDays > 30) {
      console.log("Số ngày mượn không hợp lệ");
    } else if (borrowDays > 14) {
      console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
      console.log("Mượn thành công");
    }
  }

  console.log("Tổng số lượt mượn trong ngày: " + totalBorrowCount);
}
