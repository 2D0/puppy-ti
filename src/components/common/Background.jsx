import React, { useState, useEffect } from 'react';
import * as S from '@/style/CommonContents.jsx';
import Img from '@/assets/img/back/back-wave.svg';
import { useLocation } from 'react-router-dom';

const Background = () => {
    const [purpleBg, setPurpleBg] = useState(true);
    const locate = useLocation();
    const { pathname } = locate;

    useEffect(() => {
        if (pathname === '/check') setPurpleBg(false);
    }, [pathname]);
    return (
        <S.BackCont purpleBg={purpleBg}>
            <S.ContentsBack />
            <S.BackImg src={Img} />
        </S.BackCont>
    );
};
export default Background;
