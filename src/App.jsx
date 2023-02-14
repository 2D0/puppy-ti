import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Wrap } from '@/style/CommonContents.jsx';
import { Main, Check, Inquiry } from '@/components/pages';

function App() {
    return (
        <Wrap>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/check" element={<Check />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
            </Routes>
        </Wrap>
    );
}

export default App;
