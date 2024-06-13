import { useEffect, useState } from "react"
import { Input } from "./components/Input"
import { someColors } from "./data"
import { getColors } from "./lib/chroma"
import { ContainerColor } from "./components/ContainerColor"
import { Toaster } from "react-hot-toast"
import { Background } from "./components/Backgraund" 
import { copyToClipboard } from "./utils/clipboard"

function App() {

  useEffect(() => {
    const randomNumber = (): number => Math.floor(Math.random() * (someColors.length))
    const randomColor = someColors[randomNumber()] 
    setPrimaryColor(randomColor.colorPrimary)
    setSecondaryColor(randomColor.colorSecondary)
  },[])
  
  const [primaryColor, setPrimaryColor] = useState("")
  const [secondaryColor, setSecondaryColor] = useState("")
  const [colors, setColors] = useState<string[]>()


  useEffect(()=>{
    if(primaryColor != "" && 
      secondaryColor != "" && 
      primaryColor.length == 7 && 
      secondaryColor.length == 7 &&
      primaryColor[0] == "#" &&
      secondaryColor[0] == "#"
    ){
      const data = getColors(primaryColor, secondaryColor)
      setColors(data)
    }
  },[primaryColor, secondaryColor])
  
  return (
    <>
    <Background/>
      <header>
        <nav className="p-4 border-b border-cGray">
           <h1 className="text-xl font-medium"><a  href="/">ColorKit</a></h1>
        </nav>
        <section className="text-center mt-16 w-80 mx-auto">
            <h1 className="text-4xl font-semibold leading-snug">Tailwind CSS Color Generator</h1>
            <p className="mt-4 text-xl">Generate the best color palettes for your projects with Tailwind</p>
        </section>
      </header>
      <main className="my-24 flex flex-col items-center">
        <section className="flex justify-center flex-wrap gap-x-24 gap-y-12">
          <div className="space-y-4 text-xl font-medium text-neutral-500">
            <span>Color Primary</span>
            <Input color={primaryColor} setColor={setPrimaryColor}/>
          </div>
          <div className="space-y-4 text-xl font-medium text-neutral-500">
            <span>Color Secondary</span>
            <Input color={secondaryColor} setColor={setSecondaryColor}/>
          </div>
        </section>
        <section className="flex justify-center flex-wrap items-center mt-16 gap-y-12 gap-x-8">
          {
            colors?.map((color, index) => (
              <ContainerColor index={index} key={index} color={color}/>
            ))
          }
        </section>
        <section className="mt-16 flex justify-center">
            <button onClick={() => copyToClipboard(`${colors}`)} className="bg-cyan-950 font-medium text-xl px-8 py-2 rounded-md hover:scale-105 transition-transform">
              Export to taiwlind
            </button>
        </section>
      </main>
      <Toaster/>
    </>
  )
}

export default App
