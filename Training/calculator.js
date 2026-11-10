const display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function appendNumber(number) {
  // Jika display masih 0 atau habis menekan '=', ganti nilainya
  if (currentInput === '0' || shouldResetDisplay) {
    currentInput = number;
    shouldResetDisplay = false;
  } else {
    // Mencegah titik desimal ganda dalam satu angka
    if (number === '.' && currentInput.split(/[\+\-\*\/]/).pop().includes('.')) return;
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (shouldResetDisplay) shouldResetDisplay = false;
  
  // Mengambil karakter terakhir untuk validasi
  const lastChar = currentInput.slice(-1);
  
  // Jika karakter terakhir adalah operator, ganti dengan operator baru
  if (['+', '-', '*', '/'].includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function calculate() {
  try {
    // eval() akan menghitung string seperti "2+3*5" menjadi 17
    let result = eval(currentInput);
    
    // Membatasi angka di belakang koma agar tidak terlalu panjang
    if (result % 1 !== 0) {
      result = parseFloat(result.toFixed(4));
    }
    
    currentInput = result.toString();
    shouldResetDisplay = true;
  } catch (error) {
    currentInput = 'Error';
    shouldResetDisplay = true;
  }
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}