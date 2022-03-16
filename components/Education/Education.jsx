import { experience } from "../../constants/images"
import Image from "next/image"
import { useState } from "react"
import SchoolIcon from '@material-ui/icons/School';
const Education=()=>{
    
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
            <h1 className="text-3xl font-medium text-center mt-5">EDUCATION</h1>
            <div className="flex flex-wrap mt-5 mx-16 justify-around">

            <a className="mb-4" href="/ExperienceCerti/file1.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer">
            <div className="p-5 card rounded-md shadow-2xl" >
                <div className="cardImage text-center hover:text-blue-500">
                    <SchoolIcon className="exp1" style={{ fontSize: 150 }}/>
                </div>
                <div className="cardBody">
                  <h1 className="text-center text-2xl font-semibold">Delhi Technological <br/> University</h1>
                  <h2 className="text-center text-base font-medium ">BTECH Software Engineering</h2> 
                  <h2 className="text-center text-base font-medium ">(2019-2023)</h2>
                  <h2 className="text-center text-base font-medium ">GPA 9.2/10</h2> 
                </div>
            </div>

            </a>

            <a className="mb-4" href="/ExperienceCerti/class12.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer">
            <div className="p-5 card rounded-md shadow-2xl" >
                <div className="cardImage text-center">
                <div className="cardImage text-center hover:text-blue-500">
                    <SchoolIcon className="exp1" style={{ fontSize: 150 }}/>
                </div>
                </div>
                <div className="cardBody">
                    <h1 className="text-center text-2xl font-semibold">Columbia Foundation <br/> School</h1>
                    <h2 className="text-center text-base font-medium ">Class 12th 2018</h2>
                    <h2 className="text-center text-base font-medium ">percentage 88.2%</h2> 
                </div>
            </div>

            </a>
  
            </div>

            

            
        </>
    )
}
export default Education