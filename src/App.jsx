import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents.jsx';

//컴포넌트
import { Header, Footer, Background } from '@/components/common';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@/components/pages';

function App() {
    const [bgColor, setBgColor] = useState('purple');
    const [name, setName] = useState(''); //강아지 이름

    return (
        <C.Wrap>
            <Header bgColor={bgColor} />

            {bgColor === 'purple' && <Background />}

            <Routes>
                <Route path="/" element={<Main setName={setName} />}></Route>
                <Route path="/check" element={<Check setBgColor={setBgColor} />}></Route>
                <Route path="/result" element={<Result setBgColor={setBgColor} name={name} />}></Route>
                <Route path="/team_member" element={<TeamMember />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/source_license" element={<SourceLicense />}></Route>
            </Routes>

            <Footer />
        </C.Wrap>
    );
}

export default App;
