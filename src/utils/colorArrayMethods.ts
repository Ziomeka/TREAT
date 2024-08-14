
import { ColorArrayMethods } from '../types'

const moveColorBeforeIndex: ColorArrayMethods = (colors, index, currentIndex) => {
    const draggedItem = colors[currentIndex];
    colors.splice(currentIndex, 1);
    colors.splice(currentIndex > index ? index : index - 1, 0, draggedItem);
}

export {
    moveColorBeforeIndex
}