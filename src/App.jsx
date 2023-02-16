import React from 'react';
import { Route, Routes } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents.jsx';

//컴포넌트
import { Header, Footer, Background } from '@/components/common';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@/components/pages';

function App() {
    //더미 데이터
    const BackOn = true;

    return (
        <C.Wrap>
            <Header />
            {BackOn && (<Background />)}
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/check" element={<Check />}></Route>
                <Route path="/result" element={<Result />}></Route>
                <Route path="/team_member" element={<TeamMember />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/source_license" element={<SourceLicense />}></Route>
            </Routes>
            <Footer />
        </C.Wrap>
    );
}

export default App;
