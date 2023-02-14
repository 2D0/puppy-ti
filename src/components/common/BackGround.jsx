import React from 'react';
import { BackCont, BackImg, ContentsBack } from '@/style/CommonContents.jsx';
import Img from '@/assets/img/back/back-wave.svg';

const BackGround = () => {
    return (
        <div>
            <BackCont>
                <ContentsBack></ContentsBack>
                <BackImg src={Img} />
            </BackCont>
        </div>
    );
};
export default BackGround;
