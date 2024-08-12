import 'virtual:uno.css'
import type { ColorData } from './getColorsData'
import getColorsData from './getColorsData'

const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const colorList = document.getElementById('colorList') as HTMLUListElement;

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
              ({resultHeader, resultColors} = getColorsData(text));
            } catch(e) {
              alert(e)
              fileInput.value = ''
              return;
            }
            renderColors(resultColors);
            console.log(resultHeader)
        };
    }
});

function renderColors(colors:ColorData[] ) {
  colorList.innerHTML = '';
    colors.forEach((color) => {
        const li = document.createElement('li');
        li.textContent = color.name;
        colorList.appendChild(li);
    });
}
