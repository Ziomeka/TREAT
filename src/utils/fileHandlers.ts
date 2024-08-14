import { stringifyColor, isColorValid } from './colorMethods';
import type { ColorData, PaletteData } from '../types'
const getColorsData = (fileText: string) => {
    const data = fileText.split('\n');
    const resultColors: ColorData[] = [];
    let resultHeader: string[] = [];

    const error = new Error('File format is invalid. Please upload a GIMP palette file (.gpl)')
    if (data[0] !== 'GIMP Palette') {
        throw error
    }
    const start = data.indexOf('#')
    if (start < 0) {
        throw error
    } else {
        resultHeader = data.slice(0, start + 1);
        data.slice(start + 1, data.length - 1).forEach(line => {
            const colorData = line.trim().replace(/ {2,}/g, ' ').split(' ')
            if (colorData.length !== 4) throw error
            const [r, g, b, name] = colorData;
            const color: ColorData = {
                r: Number(r),
                g: Number(g),
                b: Number(b),
                name,
            };
            if (isColorValid(color)) {
                resultColors.push(color)
            } else {
                throw error
            }
        })
        return {
            resultHeader,
            resultColors
        }
    }
};

export const setColorsData = (resultHeader: string[], resultColors: ColorData[]) => {
    const stringifiedColors = resultColors.map((color) => stringifyColor(color))
    return `${resultHeader.join('\n')}\n${stringifiedColors.join('\n')}`
}


const readFile = (e: Event): Promise<{ fileName: string, resultHeader: string[], resultColors: ColorData[] }> => {
    const input = e.target as HTMLInputElement
    const file = input.files?.[0];
    return new Promise((resolve, reject) => {
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                const text = reader.result as string;
                try {
                    const { resultHeader, resultColors } = getColorsData(text);
                    resolve({ fileName: file.name, resultHeader, resultColors });
                } catch (e) {
                    alert(e)
                    input.value = ''
                    return;
                }
            }
            reader.onerror = () => {
                reject(new Error('Error reading file'));
            };
        }
    })
}

const saveFile = (paletteData: PaletteData) => {
    const blob = new Blob([setColorsData(paletteData.resultHeader, paletteData.resultColors)], { type: 'application/x-gimp-palette' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sorted-${paletteData.fileName}`;
    a.click();
    URL.revokeObjectURL(url);
}

export {
    readFile,
    saveFile
}