let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let highStockBooks = 0;
let normalStockBooks = 0;

while (true) {
  let continueCheck = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

  if (continueCheck === "không") {
    break;
  }

  if (continueCheck !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'");
    continue;
  }

  let bookCode = prompt("Nhập mã sách:");
  while (bookCode === "") {
    bookCode = prompt("Mã sách không được để trống, vui lòng nhập lại:");
  }

  let bookName = prompt("Nhập tên sách:");

  let quantity = Number(prompt("Nhập số lượng thực tế trong kho (>= 0):"));
  while (quantity < 0 || Number.isNaN(quantity)) {
    quantity = Number(prompt("Số lượng không hợp lệ, vui lòng nhập lại (>= 0):"));
  }

  let bookStatus = Number(
    prompt("Nhập tình trạng sách:\n1 - Bình thường\n2 - Mất")
  );
  while (bookStatus !== 1 && bookStatus !== 2) {
    bookStatus = Number(
      prompt("Tình trạng không hợp lệ, vui lòng nhập 1 hoặc 2:")
    );
  }

  totalBooks++;

  if (bookStatus === 2) {
    console.log("Sách mất");
    lostBooks++;
  } else if (bookStatus === 1 && quantity === 0) {
    console.log("Sách hết hàng");
    outOfStockBooks++;
  } else if (bookStatus === 1 && quantity >= 10) {
    console.log("Sách tồn kho nhiều");
    highStockBooks++;
  } else if (bookStatus === 1 && quantity >= 1 && quantity <= 9) {
    console.log("Sách tồn kho bình thường");
    normalStockBooks++;
  }
}

console.log(" BÁO CÁO KIỂM KÊ ");
console.log("Tổng số sách đã kiểm kê: " + totalBooks + " cuốn");
console.log("Số sách mất: " + lostBooks + " cuốn");
console.log("Số sách hết hàng: " + outOfStockBooks + " cuốn");
console.log("Số sách tồn kho nhiều: " + highStockBooks + " cuốn");
console.log("Số sách tồn kho bình thường: " + normalStockBooks + " cuốn");
