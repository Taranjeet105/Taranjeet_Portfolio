import Image from "next/image"
import { projects } from "../../constants/images"
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import style from '../Projects/scroller.module.css'
const Projects=()=>{
    return(
        <>
            <h1 className="text-3xl font-medium text-center mt-5">PROJECTS</h1>
            <div className="flex-wrap flex mt-5 mx-10 justify-around">
            <div className={`${"card px-10 py-5 rounded-md mb-4 shadow-2xl h-[30rem] overflow-scroll"} ${style.scrollbar}`}>
                    <div className="cardImage text-center hover:text-blue-500">
                        <MenuBookIcon style={{ fontSize: 150 }} />
                    </div>
                    <div className="cardBody text-center">
                        <div className="mt-5 flex justify-around">
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://github.com/Taranjeet105/Study-Buddy"><GitHubIcon/></a>
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://www.linkedin.com/posts/taranjeet-singh-dtu_students-github-fullstack-activity-6861632687959097344-oBTX"><LinkedInIcon/></a>
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://studdy-buddyy.herokuapp.com/"><DirectionsRunIcon/></a>
                        </div>

                        <div className="details max-w-[17rem] mt-5">
                            <h1 className="font-semibold text-lg">Study Buddy</h1>
                            <h1 className="font-medium">
                            A website which provides facilities to the users to maintain their documents/study material in an organized way.
                            </h1>

                            <ul style={{ listStyleType:"disc" }} className="text-left mt-4 p-6">
                                <li>User can remotely access their documents or self-maintained notes.</li>
                                <li>User Friendly and responsive interface.</li>
                                <li>User data is secured with login credentials.</li>
                                <li>Upload PDF files.</li>
                                <li>Editor is provided for manual notes.</li>
                                <li>Reminders can be set to get notify through emails</li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className={`${"card px-10 py-5 rounded-md mb-4 shadow-2xl h-[30rem] overflow-scroll"} ${style.scrollbar}`}>
                    <div className="cardImage text-center hover:text-blue-500" >
                        <AddToHomeScreenIcon style={{ fontSize: 150}} />
                    </div>
                    <div className="cardBody text-center">
                        <div className="mt-5 flex justify-around">
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://github.com/glasscodeclub/lana"><GitHubIcon/></a>
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://www.linkedin.com/posts/taranjeet-singh-dtu_lana-whatsapp-chatbot-twilio-api-node-activity-6892111045918388224-CWDJ"><LinkedInIcon/></a>
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://www.linkedin.com/posts/taranjeet-singh-dtu_lana-whatsapp-chatbot-twilio-api-node-activity-6892111045918388224-CWDJ"><DirectionsRunIcon/></a>
                        </div>

                        <div className="details max-w-[17rem] mt-5">
                        <h1 className="font-semibold text-lg">LANA</h1>
                            <h1 className="font-medium">
                                It is an user friednly whatsapp bot.In the Era of online Education, most of us usually forget our schedules and pending works. LANA will help us to get our work done via WhatsApp messages, It is user-friendly and comes with a proper user guide
                            </h1>

                            <ul style={{ listStyleType:"disc" }} className="text-left mt-4 p-6">
                            <li>Set reminder: Reminds 15 minutes prior to the event.</li>
                                <li>Compile Code: Run c++, python, java, etc code in WhatsApp.</li>
                                <li>Get the details of Past, future, and Live Contest From various Competitive Coding Websites like Codeforces, CodeChef, LeetCode Hackerrank, Google.</li>
                                <li>Fetch Profile Details from Competitive coding websites with your handle.</li>
                                <li>Set reminders for contests.</li>
                                <li>CRUD: It supports create read update and delete features.</li>
                            </ul>
                        </div>
                    </div>


                </div>



                <div className={`${"card px-10 py-5 rounded-md mb-4 shadow-2xl h-[30rem] overflow-scroll"} ${style.scrollbar}`}>
                    <div className="cardImage text-center hover:text-blue-500" >
                        <DeveloperModeIcon style={{ fontSize: 150}} />
                    </div>
                    <div className="cardBody text-center">
                        <div className="mt-5 flex justify-around">
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://github.com/Taranjeet105/Coders-Compiler"><GitHubIcon/></a>
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href=""><LinkedInIcon/></a>
                            <a className="hover:text-blue-500" target="_blank" rel="noreferrer" href="https://coders-compiler.herokuapp.com/"><DirectionsRunIcon/></a>
                        </div>

                        <div className="details max-w-[17rem] mt-5">
                        <h1 className="font-semibold text-lg">Coders Compiler</h1>
                            <h1 className="font-medium">
                                It is an web application to practice programming with different languages.
                            </h1>

                            <ul style={{ listStyleType:"disc" }} className="text-left mt-4 p-6">
                            <li>User Friendly and responsive interface.</li>
                                <li>White board.</li>
                                <li>Attractive code Editor.</li>
                    
                            </ul>
                        </div>
                    </div>


                </div>


                <div className={`${"card px-10 py-5 rounded-md mb-4 shadow-2xl h-[30rem] overflow-scroll"} ${style.scrollbar}`}>
                    <div className="cardImage text-center hover:text-blue-500">
                        < MovieFilterOutlinedIcon style={{ fontSize: 150 }} />
                    </div>
                    <div className="cardBody text-center">
                        <div className="mt-5 flex justify-around">
                            <a className="hover:text-blue-500" href=""><GitHubIcon/></a>
                            <a className="hover:text-blue-500" href=""><LinkedInIcon/></a>
                            <a className="hover:text-blue-500" href=""><DirectionsRunIcon/></a>
                        </div>

                        <div className="details max-w-[17rem] mt-5">
                        <h1 className="font-semibold text-lg">Movie Recommendor</h1>
                            <ul style={{ listStyleType:"disc" }} className="text-left mt-4 p-6">
                                <li>select the movie</li>
                                <li>Get 5 movies related to the selected movie</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Projects