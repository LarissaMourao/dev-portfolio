import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Contact from '../../pages/contact';
import ErrorPage from '../error';

import { Container } from 'react-materialize';

export default function Index() {
    return (
        <main>
            <Container>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Container>
        </main>
    );
}