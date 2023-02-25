import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents.jsx';

//컴포넌트
import { Header, Footer, Background } from '@/components/common';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@/components/pages';

function App() {
    const [purpleBg, setPurpleBg] = useState(true); //보라색 배경 on off 상태
    const [name, setName] = useState(''); //강아지 이름
    const [blackBack, setBlackBack] = useState(false); //100%시 검정배경

    //헤더 프롭스 전달
    const headerProps = {
        setPurpleBg: setPurpleBg, //배경 On Off
        blackBack: blackBack, //배경 검정
    };

    //체크 페이지 프롭스 전달
    const checkProps = {
        setPurpleBg: setPurpleBg, //배경 On Off
        setBlackBack: setBlackBack, //100%시 검정배경
    };

    //결과 페이지 프롭스 전달
    const resultProps = {
        setPurpleBg: setPurpleBg, //배경 On Off
        name: name, //강아지 이름
    };

    return (
        <C.Wrap>
            <Header headerProps={headerProps} />

            {purpleBg && <Background />}

            <Routes>
                <Route path="/" element={<Main setName={setName} />}></Route>
                <Route path="/check" element={<Check checkProps={checkProps} />}></Route>
                <Route path="/result" element={<Result resultProps={resultProps} />}></Route>
                <Route path="/team_member" element={<TeamMember />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/source_license" element={<SourceLicense />}></Route>
            </Routes>

            <Footer />
        </C.Wrap>
    );
}

export default App;
