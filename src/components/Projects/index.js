import { Container, Card, Button } from "react-bootstrap";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GitHubIcon from '@material-ui/icons/GitHub';

import CAPNG from '../Projects/CAPNG.png';
import FEPNG from '../Projects/FEPNG.png';
import SAPNG from '../Projects/SAPNG.png';
import DPNG from '../Projects/DPNG.png';

const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            <Container>
                <Card>
                    <Card.Img variant="top" src={SAPNG} />
                    <Card.Body>
                        <Card.Text>
                            Has there ever been a situation where you were unsure how a sentence or paragraph is perceived by others? With the help of this app, Speech Audit, and IBM's Speech to Text and Tone Analyzer API, users are able to see what emotion others may perceive in your sentence!
                        </Card.Text>
                        <div className='links'>
                            <a href="https://speechaudit.netlify.app/" target="_blank">
                            <Button variant="dark" ><ExitToAppIcon/>To Deploy Link</Button>
                            </a>
                            <a href="https://github.com/trieule50/speech-audit-client" target="_blank">
                            <Button variant="dark"><GitHubIcon/>To GitHub</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Img variant="top" src={DPNG} />
                    <Card.Body>
                        <Card.Text>
                            A working, an interactive, full-stack application that receives data from a custom API that my team designed. DevOgraphy allows users to learn more about programming languages, their icons, their authors, and their creation date.
                        </Card.Text>
                        <div className='links'>
                            <a href="https://devography.netlify.app/" target="_blank">
                            <Button variant="dark"><ExitToAppIcon/>To Deploy Link</Button>
                            </a>
                            <a href="https://github.com/Devography" target="_blank">
                            <Button variant="dark"><GitHubIcon/>To GitHub</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Img variant="top" src={CAPNG} />
                    <Card.Body>
                        <Card.Text>
                            Cook Assistant is working, interactive, React application that received data from Edamam, the third-party API. The app allows users to find a recipe that fits their dietary needs and search for any key ingredient that the user wants in the recipe. Click on the link below and start cooking!
                        </Card.Text>
                        <div className='links'>
                            <a href="https://cook-assistant.netlify.app/" target="_blank">
                            <Button variant="dark"><ExitToAppIcon/>To Deploy Link</Button>
                            </a>
                            <a href="https://github.com/trieule50/nutritious-recipes-app" target="_blank">
                            <Button variant="dark"><GitHubIcon/>To GitHub</Button>  
                            </a>
                        </div>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Img variant="top" src={FEPNG} />
                    <Card.Body>
                        <Card.Text>
                            Snake was first launched in 1997 on the Nokia 6110 and became the second mobile game after Tetris. Frantic Engineer was inspired by the Snake game and my previous career. Frantic Engineer is an engineer who is getting ready to bid on a project. However, in order to submit the bid on time, all the proposal sheets will need to be collected. Can you help the engineer in submitting the bid proposal on time?
                        </Card.Text>
                        <div className='links'>
                            <a href="https://trieule50.github.io/frantic-engineer-project1/" target="_blank">
                            <Button variant="dark"><ExitToAppIcon/>To Deploy Link</Button> 
                            </a>
                            <a href="https://github.com/trieule50/frantic-engineer-project1" target="_blank">
                            <Button variant="dark"><GitHubIcon/>To GitHub</Button>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Projects;