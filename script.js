const root = document.documentElement;
const theme = document.getElementById('theme');
let currentColor = theme.value;

theme.addEventListener('change', () => {
  let newColor = theme.value;
  if (newColor != currentColor) {
    let bgColor = 'white';
    let textColor = 'black';

    currentColor = newColor;

    switch (newColor) {
      case 'night':
        bgColor = 'black';
        textColor = 'white';
        break;
      case 'ocean':
        bgColor = '#214682';
        textColor = '#fefefe';
        break;
      case 'fire':
        bgColor = '#f27c33';
        textColor = '#333';
        break;
    }
    root.style.setProperty('--bg', bgColor);
    root.style.setProperty('--text-color', textColor);
  }
});
