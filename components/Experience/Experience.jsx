import { experience } from "../../constants/images"
import Image from "next/image"
import { useState } from "react"
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
const Experience=()=>{
    
    const [exp,setExp]=useState({
        exp1:experience.experience1WithoutHover,
        exp2:experience.experience1WithoutHover,
        exp3:experience.experience1WithoutHover,
    })
    const Hover=(e)=>{
        const name=e.target.className.split(" ")[0]
        console.log(name)
        setExp((prevState)=>{
            return{
                ...prevState,
                [name]:experience.experience1WithHover
            }
        })
    }
    const removeHover=(e)=>{
        setExp({
            exp1:experience.experience1WithoutHover,
            exp2:experience.experience1WithoutHover,
            exp3:experience.experience1WithoutHover,
        })
    }
    return(
        <>
            <h1 className="text-3xl font-medium text-center mt-5">EXPERIENCE</h1>
            <div className="flex flex-wrap mt-5 mx-16 justify-around">

            <a className="mb-4" href="/ExperienceCerti/file1.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer">
            <div className="exp1 p-10 card rounded-md shadow-2xl">
                <div className="cardImage text-center hover:text-blue-500">
                    <DeveloperBoardIcon style={{ fontSize: 150 }}/>
                </div>
                <div className="cardBody">
                  <h1 className="text-center text-2xl font-semibold">WEB DEVELOPMENT <br/> INTERN</h1>
                  <h2 className="text-center text-base font-medium">(Glass code club)</h2> 
                </div>
            </div>

            </a>

            <a className="mb-4" href="/ExperienceCerti/file2.png"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer">
            <div className="exp2 p-10 card rounded-md shadow-2xl">
                <div className="cardImage text-center hover:text-blue-500">
                    <DeveloperBoardIcon style={{ fontSize: 150 }}/>
                </div>
                <div className="exp2 cardBody">
                    <h1 className="text-center text-2xl font-semibold">WEB DEVELOPMENT <br/> INTERN</h1>
                  <h2 className="text-center text-base font-medium">(The Sparks Foundation)</h2> 
                </div>
            </div>

            </a>
  
            </div>

            

            
        </>
    )
}
export default Experience