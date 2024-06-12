import toast from "react-hot-toast"

export const copyToClipboard = async (data: string) => {
    try{
        await navigator.clipboard.writeText(data)
        toast.success("Copied successfully")
    }catch(e){
        toast.error("An error occurred")
    }
}