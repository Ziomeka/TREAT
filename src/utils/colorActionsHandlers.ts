import debounce from './debounce';
import type { ColorData, ColorArrayMethods } from '../types'

const handleDragStart = (e: DragEvent, index: number) => {
    const draggedColorSwatch = (e.target as HTMLElement)
    e.dataTransfer?.setData('text/plain', index.toString());
    setTimeout(() => {
        draggedColorSwatch.classList.add('hidden')
    }, 0);
}

const handleDragEnd = (e: DragEvent) => {
    const draggedColorSwatch = (e.target as HTMLElement)
    draggedColorSwatch.classList.remove('hidden')
}

const handleDragOver = debounce((e: DragEvent) => {
    const hoveredColorSwatch = (e.target as HTMLElement).closest('li');
    const colorList = document.getElementById('colorList') as HTMLUListElement;
    if (hoveredColorSwatch) {
        const allColors = colorList.querySelectorAll('li');
        allColors.forEach((colorSwatch) => {
            colorSwatch.classList.remove('pt-10');
        });
        hoveredColorSwatch.classList.add('pt-10');
    }
}, 20)

const handleDrop = (e: DragEvent, render: () => void, colorMethod: ColorArrayMethods, ...colorMethodRest: [ColorData[], ...number[]]) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer?.getData('text/plain') || '');
    colorMethod(...colorMethodRest, draggedIndex);
    render();
}


export {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop
}