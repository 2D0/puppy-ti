import React, {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//컴포넌트
import CheckQuestion from '@/components/atoms/CheckQuestion.jsx';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/check/Check.style.jsx';

import { LogoBlack, LogoWhite } from '@/assets/img/logo/index.js';

import {  BgBlack, BgCommon } from '@/style/CommonContents.jsx';
import { Header, Footer, Background } from '@components/common';

const Check = ({
    finished,
    setScoreSheet,
    scrollHeader
}) => {
    const navigate = useNavigate(); //react router 페이지 핸들링하는 함수

    const headerRef = useRef(null);
    
    const setScoreSheetEvent = (index, value) => {
        setScoreSheet(index, value, headerRef)
    }
    
    return (
        <>
            <Header ref= {headerRef} location={'/check'} scrollHeader={scrollHeader} logoColor={LogoBlack} bgColor={finished ? BgBlack : BgCommon }/>
            <S.CheckCont finished={finished}>
                <S.CheckQACont>
                    <CheckQuestion
                        setScoreSheet = {setScoreSheetEvent}
                    />
                </S.CheckQACont>
                <S.CheckBtn>
                    <C.CommonBtn
                        onClick={() => {
                            navigate('/result');
                        }}
                        type="submit"
                        startActive={finished}
                    >
                        결과보기
                    </C.CommonBtn>
                </S.CheckBtn>
            </S.CheckCont>
        </>
    );
};

export default Check;
