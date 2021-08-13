import { Container, Card, CardGroup } from 'react-bootstrap';

import JSICON from '../About/JSicon.png';
import PICON from '../About/Picon.png';
import ReactIcon from '../About/reacticon.png';
import CSSIcon from '../About/css3icon.png';
import HTMLIcon from '../About/htmlicon.png';
import DJIcon from '../About/djangoicon.png';
import POSTIcon from '../About/postgresql.png';
import MongoIcon from '../About/mongodb.png';
import AutoIcon from '../About/autocad.png';
import BimIcon from '../About/bim.png';
import NodeIcon from '../About/node-js.png';
import BootIcon from '../About/bootstrapicon.png';

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <p>I am a software engineer with a background in engineering. As a civil engineer, I enjoy solving problems in the most unorthodox way and creating projects that the general public uses everyday. During my time in project management, I became very passionate about technology more specifically, artificial intelligence in construction.  And on May 2021, I made a decision to study software engineering in hope to make a bigger impact on society.</p>
            <div>
                <h2>Skills</h2>
                <Container style={{display:"flex", flexWrap:"wrap"}}>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={JSICON} style={{height: "6rem", width: "6rem"}}/>
                        <Card.Body>
                            <Card.Title>JavaScript</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                                JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={PICON} style={{height: "6rem", width: "6rem"}}/>
                        <Card.Body>
                            <Card.Title>Python</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                                Python is a high level general-purpose programming language.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={DJIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>Django</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={POSTIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>PostgreSQL</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            PostgreSQL is a powerful, open source object-relational database system.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={MongoIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>MongoDB</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            Cloud-hosted MongoDB service on AWS, Azure and Google Cloud.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={NodeIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>Node.js</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={ReactIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={CSSIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>CSS</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={BootIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>Bootstrap</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            Bootstrap is a potent front-end framework used to create modern websites and web apps. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={HTMLIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>HTML</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            HTML (Hyper Text Markup Language) is the standard markup language for creating Web pages.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={AutoIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>AutoCAD</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            AutoCAD is computer-aided design (CAD) software that architects, engineers, and construction professionals rely on to create precise 2D and 3D drawings.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '10rem'}}>
                        <Card.Img variant="top" src={BimIcon} style={{height: "6rem", width: "6rem", padding: "5px", textAlign:'center'}}/>
                        <Card.Body>
                            <Card.Title>BIM</Card.Title>
                            <Card.Text style={{fontSize: ".60rem"}}>
                            Building Information Modeling (BIM) is the foundation of digital transformation in the architecture, engineering, and construction (AEC) industry.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default About;
