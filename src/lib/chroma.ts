import chroma from 'chroma-js';

const COLORS_TO_GENERATE = 11


export const getColors = (colorPrimary :string, colorSecundary:string ) :string[] => {
    const colorPrimaryFormat = colorPrimary.replace("#", "")
    const colorSecundaryFormat = colorSecundary.replace("#", "")
    const colors = chroma.scale([colorPrimaryFormat, colorSecundaryFormat]).mode("lch").colors(COLORS_TO_GENERATE)
    return colors
}


export const isDark = (color: string) :boolean => {
    const isDark = chroma(color).luminance() < 0.5
    return isDark
}