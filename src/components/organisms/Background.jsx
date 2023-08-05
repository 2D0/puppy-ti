import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//스타일
import * as S from '@/style/CommonContents.jsx';

//이미지
import { Wave } from '@/assets/img/background/index.js';

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
            <S.BackImgWave src={Wave} />
        </S.BackCont>
    );
};
export default Background;
