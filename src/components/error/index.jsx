import React from 'react';
import { Row, Col, Button } from 'react-materialize';
import error404 from '../../assets/images/error-404.svg';

export default function ErrorPage() {
    return (
        <>
            <Row>           
                <Col m={12} s={12}>               
                    <img src={error404} alt="Page Not Found" id="img-error" />                    
                </Col>                   
            </Row>   
            <Row>
                <Col m={12} s={12}>
                    <Button waves='light' className="center-align light-blue darken-4" id="btn-return" node='a' href='/'>Home</Button>
                </Col>
            </Row>
        </>
    );
}