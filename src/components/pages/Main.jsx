import React from 'react';
import { Wrap, ContentsBack, BackImg } from '@/style/CommonContents';
import Img from '@/assets/img/back/back-wave.svg';

function Main() {
    return (
        <Wrap>
            <ContentsBack></ContentsBack>
            <BackImg src={Img} />
        </Wrap>
    );
}

export default Main;
