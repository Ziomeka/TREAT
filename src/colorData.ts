export interface ColorData {
    r: number
    g: number
    b: number
    name: string
}

export const getColorsData = (fileText: string) => {
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
        data.slice(start + 1, data.length - 1).forEach(color => {
            const colorData = color.trim().replace(/ {2,}/g, ' ').split(' ')
            if (colorData.length !== 4) throw error
            const rgb: ColorData = {
                r: Number(colorData[0]),
                g: Number(colorData[1]),
                b: Number(colorData[2]),
                name: colorData[3]
            }
            if (rgb.r < 256 && rgb.r >= 0 &&
                rgb.g < 256 && rgb.g >= 0 &&
                rgb.b < 256 && rgb.b >= 0
            ) {
                resultColors.push(rgb)
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

const stringifyColor = (color: ColorData) => {
    const r = color.r.toString().padStart(3, ' ')
    const g = color.g.toString().padStart(3, ' ')
    const b = color.b.toString().padStart(3, ' ')

    return `${r} ${g} ${b} ${color.name}`
}

export const setColorsData = (resultHeader: string[], resultColors: ColorData[]) => {
    const stringifiedColors = resultColors.map((color) => stringifyColor(color))
    return `${resultHeader.join('\n')}\n${stringifiedColors.join('\n')}`
}
