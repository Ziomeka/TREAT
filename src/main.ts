import 'virtual:uno.css'
import type { ColorData } from './colorData'
import { getColorsData, setColorsData } from './colorData'

const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const colorList = document.getElementById('colorList') as HTMLUListElement;
const saveButton = document.getElementById('saveButton') as HTMLUListElement;

let resultHeader: string[];
let resultColors: ColorData[];

fileInput.addEventListener('change', (event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const text = reader.result as string;
      try {
        ({ resultHeader, resultColors } = getColorsData(text));
      } catch (e) {
        alert(e)
        fileInput.value = ''
        return;
      }
      renderColors(resultColors);
    };
  }
});

function renderColors(colors: ColorData[]) {
  colorList.innerHTML = '';
  colors.forEach((color) => {
    const li = document.createElement('li');
    li.textContent = color.name;
    colorList.appendChild(li);
  });
}

saveButton.addEventListener('click', () => {
  const blob = new Blob([setColorsData(resultHeader, resultColors)], { type: 'application/x-gimp-palette' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sorted-data.gpl';
  a.click();
  URL.revokeObjectURL(url);
});
