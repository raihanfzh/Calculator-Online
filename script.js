const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const themeToggle = document.getElementById('themeToggle');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else if (value === '⌫') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
  } else {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌙';
  }
});
