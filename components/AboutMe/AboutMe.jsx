import Image from "next/image"
import {images, skills} from "../../constants/images"
const AboutMe=()=>{
    const skillArray=[{name:"Next js",src:skills.nextjs},{name:"Javascript",src:skills.javascript},{name:"Tailwind css",src:skills.tailwindcss},{name:"Node js",src:skills.nodejs},{name:"MongoDB",src:skills.mongodb},{name:"C++",src:skills.cpp},{name:"HTML",src:skills.html},{name:"Bootstrap",src:skills.bootstrap},{name:"CSS",src:skills.css}]
    return(
        <>
            <div className={`${"flex flex-wrap  justify-between px-10 py-2 mt-5 shadow-2xl mx-10"} `}>
                <div className="flex-col  sm:w-1/2 space-x-4">
                    <div className="flex flex-wrap space-x-4">  
                        <div className="relative h-80 w-80 sm:h-48 sm:w-48 mr-2 mt-5">
                        <Image className="rounded-md" src={images.profilePhoto} layout="fill"/>
                        </div>

                        <div className="mt-5">
                            <div className="mb-4"><span className="font-medium ">Name:</span><span>Taranjeet Singh</span></div>
                            <div><span className="font-medium">Email:</span><span>shantys502@gmail.com</span></div> 
                        </div>
                    </div>

                    <div>
                        <h1 className="text-1xl font-medium mt-5">Skills</h1>

                       <div className="grid grid-cols-3 space-x-2 space-y-2">
                       {
                           skillArray.map((skill,indx)=>{
                               return(
                                <div className="flex flex-wrap items-center ml-2" key={indx}>
                                <span>{skill.name}</span>
                                <img src={skill.src} height="25px" width="25px"/>
                            </div>
                               )
                           })
                       }
                           
                        </div>  

                    </div>
                </div>

                <div className="sm:w-1/2 px-4">
                <h1 className="text-3xl font-medium mt-5">ABOUT ME</h1>
                Innovative tech mind with 6 years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions, and managing databases. Valuable team member who has experience diagnosing problems and developing solutions. Talented leader with unique ideas and a history of successful contributions in the field.

                I work on hobbies that are based on computers and technology. I am a founder at a club that aims to bring web development skills for to low-income students. In my free time i like to read about new Innovations in Computer Science and Technology.
                About me 
                </div>

            </div>
            
        </>
    )
}
export default AboutMe