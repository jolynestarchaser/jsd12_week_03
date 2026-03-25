const readline = require("readline"); // เปลี่ยนจาก import มาใช้ require

// กำหนดอัตราแลกเปลี่ยน (สามารถเปลี่ยนตัวเลขนี้ให้เป็นปัจจุบันได้)
const EXCHANGE_RATE = 35.0; // 1 USD = 35 THB

// ฟังก์ชันแปลงเงินบาท (THB) เป็นดอลลาร์ (USD)
function thbToUsd(thb) {
  return thb / EXCHANGE_RATE;
}

// ฟังก์ชันแปลงเงินดอลลาร์ (USD) เป็นบาท (THB)
function usdToThb(usd) {
  return usd * EXCHANGE_RATE;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter amount: ", function (amountInput) {
  const amount = parseFloat(amountInput);

  // ดักจับกรณีผู้ใช้พิมพ์ตัวอักษรแทนตัวเลข
  if (isNaN(amount)) {
    console.log("Invalid amount! Please enter a valid number.");
    rl.close();
    return;
  }

  rl.question("Enter currency (THB or USD): ", function (currencyInput) {
    const currency = currencyInput.trim().toUpperCase();

    let result;

    // if statement ตรวจสอบสกุลเงิน
    if (currency === "THB") {
      result = thbToUsd(amount);
      console.log(`${amount} THB is ${result.toFixed(2)} USD`);
    } else if (currency === "USD") {
      result = usdToThb(amount);
      console.log(`${amount} USD is ${result.toFixed(2)} THB`);
    } else {
      console.log(`Invalid currency! Please enter THB or USD.`);
    }

    rl.close();
  });
});
