import { useEffect, useState } from "react"
import { Input } from "./components/Input"
import { someColors } from "./data"
import { getColors } from "./lib/chroma"
import { ContainerColor } from "./components/ContainerColor"
import { Toaster } from "react-hot-toast"

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
    if(primaryColor != "" && secondaryColor != "" && primaryColor.length == 7 && secondaryColor.length == 7){
      const data = getColors(primaryColor, secondaryColor)
      setColors(data)
    }
  },[primaryColor, secondaryColor])
  
  return (
    <>
      <header>
        <nav className="px-12 py-4 border-b-2 border-cGray">
          <div className="flex items-center gap-4">
            <img 
              className="w-8 h-8 rounded-full aspect-square object-cover
              object-center" 
              src="/colorkit.webp" 
              alt="icon colorkit" 
             />
           <h1 className="text-2xl font-semibold"><a  href="/">ColorKit</a></h1>
          </div>
        </nav>
        <section className="text-center mt-8 w-80 mx-auto">
            <h1 className="text-4xl font-semibold leading-snug">Tailwind CSS Color Generator</h1>
            <p className="mt-4 text-xl">Generate the best color palettes for your projects with Tailwind</p>
        </section>
      </header>
      <main className="mt-12">
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
        <section className="flex justify-center flex-wrap items-center gap-8 mt-16">
          {
            colors?.map((color, index) => (
              <ContainerColor index={index} key={index} color={color}/>
            ))
          }
        </section>
      </main>
      <Toaster/>
    </>
  )
}

export default App
