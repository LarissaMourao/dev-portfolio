import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../../components/userProfile';
import Experience from '../../components/experience';
import soitic from '../../assets/images/soitic.jpg';
import soitechLogo from '../../assets/images/soitech_logo.png';

export default function Home() {
    return (
        <Row>
            <Col m="3" s="12">
                <UserProfile />
            </Col>
            <Col m="8" s="12">
                <h5 className="subtitle">About Me</h5>
                <Card>
                    <div>
                        <p><b>Lorem</b></p>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <br />
                        <p><b>Ipsum</b></p>
                        <p>"
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </Card>
                <h5 className="subtitle">Experiences</h5>
                <Experience
                    title=".NET Developer"
                    company="MedSystem S/V"
                    description=".NET Developer Full-Stack | C# | React.js | Vue.js | ASP.NET Core"
                    avatar={soitic}
                />                
                <Experience
                    title="Professor de Desenvolvimento Web"
                    company="SOITECH"
                    description="Ensina as seguintes tecnologias: C#, ASP.NET, HTML/CSS/JS, TS, React.js e Vue.js"
                    avatar={soitechLogo}
                />               
            </Col>
        </Row>
    );
}