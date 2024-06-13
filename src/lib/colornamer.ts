import namer from "color-namer"

interface protoypeColor {
    [key: string]: string
}

export const getTailwindClases = (colors : string[])=> {
    var tailwindclases: protoypeColor = {}
    colors.map((color, index) :void => {
        const currentColor = namer(color)
        var nameColor = currentColor.ntc[0].name
        if(nameColor.includes(" ")){
            nameColor = nameColor.replace(" ", "")
        }

        tailwindclases[nameColor] = colors[index]
        
    })
    
    return JSON.stringify(tailwindclases)
}