import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents.jsx';

//이미지
import { LogoWhite } from '@/assets/img/logo';

//컴포넌트
import { Header, Footer, Background } from '@/components/common';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@/components/pages';

function App() {
    const [bgColor, setBgColor] = useState('purple'); //전제 배경 색상
    const [scrollHeader, setScrollHeader] = useState(false); //헤더 배경 검정색인지 아닌지
    const [name, setName] = useState(''); //강아지 이름
    const [pageName, setPageName] = useState(''); //페이지 이름(체크 페이지일 경우 헤더 디자인 다르게 하는 용도)

    //스크롤시 배경 on
    const handleScroll = () => {
        const scrollPosition = window.scrollY; //스크롤 위치
        scrollPosition > 50 ? setScrollHeader(true) : setScrollHeader(false);
    };
    //스크롤 이벤트 감지
    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <C.Wrap>
            <Header bgColor={bgColor} pageName={pageName} handleScroll={handleScroll} scrollHeader={scrollHeader} />

            {bgColor === 'purple' && <Background />}

            <Routes>
                <Route path="/" element={<Main setName={setName} />}></Route>
                <Route
                    path="/check"
                    element={<Check setBgColor={setBgColor} setPageName={setPageName} scrollHeader={scrollHeader} />}
                ></Route>
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
