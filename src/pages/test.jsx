import { useState } from "react"

export default function TestPage() {

    const[emotion,setEmotion]=useState("😀")

    //let emotion ="😀"

    return(
        <div className="w-full h-screen flex flex-col items-center justify-center bg-primary text-secondary">
            <div className="w-[300px] h-[300px] border-[6px] flex items-center justify-center text-5xl">
                {emotion}
            </div>

            <div className="w-[300px] flex flex-row justify-center"> 
                <button onClick={
                    ()=>{
                        setEmotion("😢")
                    }
                } className="bg-accent w-[70px] h-[30px] text-white border border-primary">  Sad</button>
                <button onClick={
                    ()=>{
                        setEmotion("😀")
                        
                    }
                } className="bg-accent w-[70px] h-[30px] text-white border border-primary">Happy</button>
                <button onClick={
                    ()=>{
                        setEmotion("😠")
                        
                    }
                } className="bg-accent w-[70px] h-[30px] text-white border border-primary">Angry</button> 
            </div>

            
        </div>
    )
} 