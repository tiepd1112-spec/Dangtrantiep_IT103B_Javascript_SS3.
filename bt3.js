let successCount = 0;
let failCount = 0;

while (true) {
  let hasRequest = prompt("Có yêu cầu gia hạn mới không? (có/không)");

  if (hasRequest === "không") {
    break;
  }

  if (hasRequest !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc:");
  let bookName = prompt("Nhập tên sách:");

  let borrowedDays = Number(prompt("Nhập số ngày đã mượn hiện tại (>= 1):"));
  while (isNaN(borrowedDays) || borrowedDays < 1) {
    borrowedDays = Number(prompt("Số ngày đã mượn không hợp lệ, nhập lại (>= 1):"));
  }

  let extendDays = Number(prompt("Nhập số ngày muốn gia hạn thêm (>= 1):"));
  while (isNaN(extendDays) || extendDays < 1) {
    extendDays = Number(prompt("Số ngày gia hạn không hợp lệ, nhập lại (>= 1):"));
  }

  let totalDays = borrowedDays + extendDays;

  if (totalDays > 60) {
    console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
    failCount++;
  } else if (borrowedDays > 45) {
    console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
    failCount++;
  } else if (totalDays <= 30) {
    console.log("Gia hạn thành công");
    successCount++;
  } else {
    console.log("Không được gia hạn");
    failCount++;
  }
}
console.log(`Thống kê ca làm việc
    Số lần gia hạn thành công ${successCount}
    Số lần gia hạn không thành công ${failCount}

    `
)


console.log(" THỐNG KÊ CA LÀM VIỆC ");
console.log("Số lần gia hạn thành công: " + successCount);
console.log("Số lần gia hạn không thành công: " + failCount);
