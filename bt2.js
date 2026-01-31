let totalReturnCount = Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
let lateReturnCount = 0;

if (isNaN(totalReturnCount) || totalReturnCount <= 0) {
  console.log("Số lượt trả sách không hợp lệ");
} else {
  for (let i = 1; i <= totalReturnCount; i++) {
    console.log("Lượt trả thứ " + i);

    let returnerName = prompt("Nhập tên người trả:");
    let bookName = prompt("Nhập tên sách:");

    let borrowedDays = Number(prompt("Nhập số ngày đã mượn thực tế (>= 1):"));

    while (isNaN(borrowedDays) || borrowedDays < 1) {
      borrowedDays = Number(
        prompt("Số ngày không hợp lệ, vui lòng nhập lại (>= 1):")
      );
    }

    if (borrowedDays <= 14) {
      console.log("Trả đúng hạn");
    } else if (borrowedDays >= 15 && borrowedDays <= 21) {
      console.log("Trả muộn nhẹ");
      console.log("Phạt nhắc nhở");
      lateReturnCount++;
    } else {
      console.log("Quá hạn nghiêm trọng");
      console.log("Cần ghi biên bản phạt");
      lateReturnCount++;
    }
  }

  console.log("THỐNG KÊ CUỐI NGÀY ");
  console.log("Tổng số lượt trả sách: " + totalReturnCount);
  console.log("Số lượt trả muộn (>= 15 ngày): " + lateReturnCount);
}
