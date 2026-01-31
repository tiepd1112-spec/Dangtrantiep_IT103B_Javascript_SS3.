let totalRequests = 0;
let successRequests = 0;
let rejectedRequests = 0;
let pendingRequests = 0;

while (true) {
  let hasRequest = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

  if (hasRequest === "không") {
    break;
  }

  if (hasRequest !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc:");
  let bookCode = prompt("Nhập mã sách muốn đặt trước:");
  let bookName = prompt("Nhập tên sách:");
  
  let waitingDays = Number(prompt("Nhập số ngày dự kiến chờ (>= 1):"));
  while (isNaN(waitingDays) || waitingDays < 1) {
    waitingDays = prompt("Số ngày không hợp lệ, nhập lại (>= 1):");
    waitingDays = Number(waitingDays);
  }

  let priority = Number(
    prompt("Nhập mức ưu tiên (1 - Sinh viên, 2 - Giảng viên, 3 - Đặc cách):")
  );
  while (priority !== 1 && priority !== 2 && priority !== 3) {
    priority = Number(
      prompt("Ưu tiên không hợp lệ, nhập lại (1, 2 hoặc 3):")
    );
  }

  totalRequests++;

  if (waitingDays > 45) {
    console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
    rejectedRequests++;
  } else if (priority === 3) {
    console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
    successRequests++;
  } else if (priority === 2 && waitingDays <= 30) {
    console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    successRequests++;
  } else if (priority === 1 && waitingDays <= 21) {
    console.log("Đặt trước thành công");
    successRequests++;
  } else {
    console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
    pendingRequests++;
  }
}

console.log(" BÁO CÁO CUỐI CA ");
console.log("Tổng số yêu cầu đã xử lý: " + totalRequests);
console.log("Số yêu cầu đặt trước thành công: " + successRequests);
console.log("Số yêu cầu bị từ chối: " + rejectedRequests);
console.log("Số yêu cầu chờ xét duyệt: " + pendingRequests);
