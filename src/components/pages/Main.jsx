import React from 'react';
import { Wrap } from '@/style/CommonContents';
import { MainTopImg } from '@components/main/main.style.jsx';
import BackGround from '@components/common/BackGround.jsx';
import Char from '@/assets/img/mbti/intj.png';

function Main() {
    return (
        <Wrap>
            <MainTopImg src={Char} alt="퍼피티아이 캐릭터" />
            <BackGround />
        </Wrap>
    );
}

export default Main;
