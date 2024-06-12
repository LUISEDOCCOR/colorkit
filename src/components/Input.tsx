type Color = string

interface Props  {
    color: Color
    setColor: React.Dispatch<React.SetStateAction<Color>>
}



export const Input: React.FC<Props> = ({color, setColor}) => {
    return(
        <div className="border rounded-2xl border-cGray flex items-center p-3 bg-black gap-6 h-12">
            <input 
                type="color" 
                onChange={e => setColor(e.target.value)} 
                value={color} 
            />
            <input 
                className="w-full h-full outline-none text-2xl font-semibold bg-transparent font-mono" 
                onChange={e => setColor(e.target.value)} 
                type="text" 
                value={color}
                maxLength={7}
            />
            <span className="text-lg">HEX</span>
        </div>
    )
}