import React from 'react';
import { Route, Routes } from 'react-router-dom';

//스타일
import * as S from '@/style/CommonContents.jsx';
import * as SM from '@components/main/main.style.jsx';

//컴포넌트
import { Header, Footer, Background } from '@/components/common';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@/components/pages';

//이미지
import { Intj } from '@/assets/img/mbti';

function App() {
    //더미 데이터
    const BackOn = true;

    return (
        <S.Wrap>
            <Header />
            {BackOn && (
                <>
                    <Background /> <SM.MainTopImg src={Intj} alt="퍼피티아이 캐릭터" />
                </>
            )}

            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/check" element={<Check />}></Route>
                <Route path="/result" element={<Result />}></Route>
                <Route path="/team_member" element={<TeamMember />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/source_license" element={<SourceLicense />}></Route>
            </Routes>
            <Footer />
        </S.Wrap>
    );
}

export default App;
