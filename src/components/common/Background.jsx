import React from 'react';
import * as S from '@/style/CommonContents.jsx';
import Img from '@/assets/img/back/back-wave.svg';

const Background = () => {
    return (
        <S.BackCont>
            <S.ContentsBack />
            <S.BackImg src={Img} />
        </S.BackCont>
    );
};
export default Background;
