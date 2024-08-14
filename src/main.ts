import './reset.css'
import 'virtual:uno.css'
import { handleDragStart, handleDragEnd, handleDragOver, handleDrop } from './utils/colorActionsHandlers'
import { moveColorBeforeIndex } from './utils/colorArrayMethods'
import { readFile, saveFile } from './utils/fileHandlers'
import type { PaletteData } from './types'


const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const colorList = document.getElementById('colorList') as HTMLUListElement;
const saveButton = document.getElementById('saveButton') as HTMLUListElement;

let paletteData = { } as PaletteData

fileInput.addEventListener('change', async (e) => {
  paletteData = await readFile(e)
  renderColors()
})

saveButton.addEventListener('click', () => saveFile(paletteData));

colorList.addEventListener('dragover', (e) => {
  e.preventDefault();
  handleDragOver(e)
});

const renderColors = () => {
  colorList.innerHTML = '';
  paletteData.resultColors.forEach((color, index) => {
    const li = document.createElement('li');
    li.className = 'cursor-pointer mb-1';
    li.draggable = true;
    li.innerHTML = `
      <div style="background-color: rgb(${color.r},${color.g},${color.b} );" class="flex p-4 pt-1 gap-4 rounded-lg">
        <div class="bg-white bg-op-40 p-2 rounded-lg min-w-20 text-center">${color.name}</div>
        <div class="bg-white bg-op-20 p-2 rounded-lg text-center grow-1">rgb( ${color.r}, ${color.g}, ${color.b} )</div>
      </div>
    `

    li.addEventListener('dragstart', (e) => handleDragStart(e, index));
    li.addEventListener('dragend', handleDragEnd);
    li.addEventListener('drop', (e) => handleDrop(e, renderColors, moveColorBeforeIndex, paletteData.resultColors, index))
    colorList.appendChild(li);
  });

  if (paletteData.resultColors.length) {
    saveButton.removeAttribute("disabled");
  } else {
    saveButton.setAttribute("disabled", "");
  }
}
