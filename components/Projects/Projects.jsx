import Image from "next/image"
import { projects } from "../../constants/images"
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import style from '../Projects/style.module.css'
import { projectsArray } from "../../constants/projects";
const Projects=()=>{
    return(
        <>
            <h1 className="text-3xl font-medium text-center mt-5">PROJECTS</h1>
            <div className={`${style.wrapperClass}`}>
            {
                projectsArray.map((project,idx)=>{
                    return(
                        <div className={`${style.customCard} ${style.scrollbar}`} key={idx}>
                    <div className={`${style.customCardImage}`}>
                        {project.icon}
                    </div>
                    <div className={`${style.customCardBody}`}>
                        <div className="mt-5 flex justify-around">
                         {project.github!=``?<a className="hover:text-blue-500" target="_blank" rel="noreferrer" href={project.github}><GitHubIcon/></a>:null}
                         {project.linkedIn!=``?<a className="hover:text-blue-500" target="_blank" rel="noreferrer" href={project.linkedIn}><LinkedInIcon/></a>:null} 
                          {project.run!=``?<a className="hover:text-blue-500" target="_blank" rel="noreferrer" href={project.run}><DirectionsRunIcon/></a>:null}
                        </div>

                        <div className="details max-w-[17rem] mt-5">
                            <h1 className="font-semibold text-lg">{project.name}</h1>
                            <h1 className="font-medium">
                            {project.info}
                          </h1>

                            <ul style={{ listStyleType:"disc" }} className="text-left mt-4 p-6">
                            {
                                project.feature.map((feature,fidx)=>{
                                    return(
                                        <li key={fidx}>{feature}</li>
                                    )
    
                                })
                            }
                               
                            </ul>
                        </div>
                    </div>
                        </div>
                    )
                })
  
            }

            </div>
        </>
    )
}
export default Projects