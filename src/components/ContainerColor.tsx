import { isDark } from "../lib/chroma"
import { copyToClipboard } from "../utils/clipboard"

interface Props {
    color: string
}
export const ContainerColor: React.FC<Props> = ({color}) => {

    const dark = isDark(color)


    return (
        <div 
            onClick={() => copyToClipboard(color)} 
            className="flex flex-col items-center gap-4 cursor-pointer hover:scale-110 transition-transform"
        >
            <div 
                className={`${dark ? "border-cGray" : "border-transparent"} 
                border h-32 w-28 rounded-md grid place-content-center`} 
                style={{backgroundColor: color}}
            >
            </div>
            <span className="text-lg font-medium font-mono">{color}</span>
        </div>
    )
}