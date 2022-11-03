import { React, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Card, Input, Button, Icon } from 'react-materialize';
import UserProfile from '../../components/userProfile';

export default function Contact() {

    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const userId = import.meta.env.VITE_REACT_APP_USER_ID;    

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            userId,
        ).then((result) => {
            console.log(result.text);
            alert("E-mail enviado com sucesso. Mensagem: " + result.text);
        }, (error) => {
            console.log(error.text);
            alert(error.text);
        });       

        resetForm();
    }

    const [fromName, setFromName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [phone, setPhone] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const resetForm = () => {
        setFromName("");
        setUserEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
    }

    return (
        <Row>
            <Col m={3} s={12}>
                <UserProfile />
            </Col>
            <Col m={8} s={12}>
                <h5>Contact</h5>
                <Card>
                    <Row>
                        <form onSubmit={sendEmail} ref={form}>
                            <Input
                                type="text"
                                id="from_name"
                                label="Nome"
                                name="from_name"
                                s={12}
                                icon={<Icon>person</Icon>}   
                                value={fromName}                                
                            />

                            <Input
                                type="email"
                                id="user_email"
                                label="E-mail"
                                name="user_email"
                                s={12}
                                icon={<Icon>email</Icon>}
                                value={userEmail}
                            />

                            <Input
                                type="text"
                                id="phone"
                                label="Telefone"
                                name="phone"
                                s={12}
                                icon={<Icon>phone</Icon>}
                                value={phone}
                            />

                            <Input
                                type="text"
                                id="subject"
                                label="Assunto"
                                name="subject"
                                s={12}
                                icon={<Icon>archive</Icon>}
                                value={subject}
                            />

                            <Input
                                type="text"
                                id="message"
                                label="Message"
                                name="message"
                                s={12}
                                icon={<Icon>message</Icon>}
                                value={message}
                            />

                            <Col s={12} m={12}>
                                <Button waves="light" floating className="right  green accent-4" title="Enviar" node="button" type="submit">
                                    <Icon>send</Icon>
                                </Button>                            
                                <Button waves="light" floating className="right red accent-4" title="Cancelar" type="button" onClick={resetForm} style={{ marginRight: '5px' }}>
                                    <Icon>cancel</Icon>
                                </Button>
                            </Col>    
                        </form>           
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}