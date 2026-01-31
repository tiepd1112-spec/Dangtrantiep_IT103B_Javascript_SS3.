let totalFeedback = 0;

let seriousComplaints = 0;
let mediumComplaints = 0;
let minorComplaints = 0;
let improvementSuggestions = 0;
let positiveFeedback = 0;

while (true) {
  let hasNewFeedback = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

  if (hasNewFeedback === "không") {
    break;
  }

  if (hasNewFeedback !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc:");
  while (readerName === "") {
    readerName = prompt("Tên bạn đọc không được để trống, vui lòng nhập lại:");
  }

  let readerCardId = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");

  let feedbackType = Number(
    prompt(
      "Nhập loại phản hồi:\n1 - Khiếu nại\n2 - Đề xuất cải thiện\n3 - Phản hồi tích cực"
    )
  );
  while (feedbackType !== 1 && feedbackType !== 2 && feedbackType !== 3) {
    feedbackType = Number(
      prompt("Loại phản hồi không hợp lệ, vui lòng nhập 1, 2 hoặc 3:")
    );
  }

  let severityLevel = 0;
  if (feedbackType === 1) {
    severityLevel = Number(
      prompt(
        "Nhập mức độ nghiêm trọng:\n1 - Nhẹ\n2 - Trung bình\n3 - Nghiêm trọng"
      )
    );
    while (
      severityLevel !== 1 &&
      severityLevel !== 2 &&
      severityLevel !== 3
    ) {
      severityLevel = Number(
        prompt("Mức độ không hợp lệ, vui lòng nhập 1, 2 hoặc 3:")
      );
    }
  }

  let content = prompt("Nhập nội dung ngắn gọn:");

  totalFeedback++;

  if (feedbackType === 1 && severityLevel === 3) {
    console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
    seriousComplaints++;
  } else if (feedbackType === 1 && severityLevel === 2) {
    console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
    mediumComplaints++;
  } else if (feedbackType === 1 && severityLevel === 1) {
    console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
    minorComplaints++;
  } else if (feedbackType === 2) {
    console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
    improvementSuggestions++;
  } else if (feedbackType === 3) {
    console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
    positiveFeedback++;
  }
}

console.log(" BÁO CÁO CUỐI CA");
console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + totalFeedback);
console.log("Số khiếu nại nghiêm trọng (mức 3): " + seriousComplaints);
console.log("Số khiếu nại trung bình (mức 2): " + mediumComplaints);
console.log("Số khiếu nại nhẹ (mức 1): " + minorComplaints);
console.log("Số đề xuất cải thiện: " + improvementSuggestions);
console.log("Số phản hồi tích cực: " + positiveFeedback);
