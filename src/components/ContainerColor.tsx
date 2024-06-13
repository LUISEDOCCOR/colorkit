import { isDark } from "../lib/chroma"
import { copyToClipboard } from "../utils/clipboard"

interface Props {
    color: string
    index: number
}
export const ContainerColor: React.FC<Props> = ({color, index}) => {

    const dark = isDark(color)


    return (
        <div 
            onClick={() => copyToClipboard(color)} 
            className="flex flex-col items-center gap-4 cursor-pointer hover:scale-110 transition-transform"
        >
            <div className={`${dark ? "border-cGray" : "border-transparent"} border h-32 w-28 rounded-md grid place-content-center`} style={{backgroundColor: color}}>
                <span className={`${dark ? "text-white" : "text-cBlack"} text-lg font-semibold`}>
                    {index == 0 ? 50 : index == 10 ? 950 : index * 100}
                </span>
            </div>
            <span className="text-lg font-medium font-mono">{color}</span>
        </div>
    )
}