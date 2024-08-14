import { ColorData } from '../types'
const isColorValid = (color: ColorData): boolean => {
    return color.r >= 0 && color.r <= 255 && color.g >= 0 && color.g <= 255 && color.b >= 0 && color.b <= 255;
};

const stringifyColor = (color: ColorData): string => {
    return `${color.r.toString().padStart(3, ' ')} ${color.g.toString().padStart(3, ' ')} ${color.b.toString().padStart(3, ' ')} ${color.name}`;
};

export {
    isColorValid,
    stringifyColor
}