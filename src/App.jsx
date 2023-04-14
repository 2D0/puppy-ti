import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents.jsx';

//컴포넌트
import { Header, Footer, Background } from '@/components/common';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@/components/pages';
import * as S from '@/style/CommonContents.jsx';
import { Lines } from '@/assets/img/background/index.js';

function App() {
    const location = useLocation(); //현재 주소
    const [scrollHeader, setScrollHeader] = useState(false); //스크롤 감지
    const [percent, setPercent] = useState(null); //문항 체크 퍼센트
    const [name, setName] = useState(''); //강아지 이름
    const [bgSwitch, setBgSwitch] = useState(false); //배경 on off

    //스크롤시 배경 on
    const handleScroll = () => {
        const scrollPosition = window.scrollY; //스크롤 위치
        scrollPosition > 50 ? setScrollHeader(true) : setScrollHeader(false);
    };
    const handleBackground = () => {
        switch (location.pathname) {
            case '/check':
            case '/result':
                setBgSwitch(false);
                break;
            default:
                setBgSwitch(true);
        }
    };
    //스크롤 이벤트 감지
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //현재 페이지에 따라 배경 on off
    useEffect(() => {
        handleBackground();
    }, [location]);

    return (
        <C.Wrap>
            <Header location={location.pathname} percent={percent} handleScroll={handleScroll} scrollHeader={scrollHeader} />

            {bgSwitch === true && <Background />}

            <Routes>
                <Route path="/" element={<Main setName={setName} />}></Route>
                <Route path="/check" element={<Check percent={percent} setPercent={setPercent} scrollHeader={scrollHeader} />}></Route>
                <Route path="/result" element={<Result name={name} />}></Route>
                <Route path="/team_member" element={<TeamMember />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/source_license" element={<SourceLicense />}></Route>
            </Routes>

            <S.BackImgLinesTop src={Lines} />
            <S.BackImgLinesBottom src={Lines} />
            <Footer />
        </C.Wrap>
    );
}

export default App;
