export interface ColorData {
    r: number
    g: number
    b: number
    name: string
}

export interface PaletteData {
    resultHeader: string[]
    resultColors: ColorData[]
    fileName: string
}

export type ColorArrayMethods = (...args: [ColorData[], ...number[]]) => void;