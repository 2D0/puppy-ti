import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//컴포넌트
import ShareCont from '@components/atoms/ShareCont.jsx';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/main/main.style.jsx';

//이미지
import MainImg from '@/assets/img/main/mian-puppyti.png';
import { Header, Background } from '@components/common';

import { LogoWhite } from '@/assets/img/logo/index.js';

import {  BgLightPurple } from '@/style/CommonContents.jsx';


function Main({ setName, scrollHeader }) {
    const [dogName, setDogName] = useState(''); //input value
    const [active , setActive]  = useState(false);
    const navigate = useNavigate(); //react router 페이지 핸들링하는 함수

    //input에 글자가 1개 이상 입력될 경우 버튼 활성화
    const onNameChange = e => {
        const { value } = e.target;
        setDogName(value);
        setActive(value.replace(/(^\s*)|(\s*$)/g, "") !== '')
    };

    //시작하기 버튼 누르면 input 값 전달 및 check 페이지로 이동
    const passName = () => {
        setName(dogName);
        navigate('/check');
    };

    //스크롤시 배경 on
    return (
        <>
            <Header location={'/main'} percent={100} scrollHeader={scrollHeader} logoColor={LogoWhite} bgColor={BgLightPurple}/>
            <Background />
            <C.Content>
                <S.MainCont>
                    <S.MainCover>
                        <S.MainChar src={MainImg} alt="퍼피티아이" />
                        <S.MainTxt>나의 반려견은 어떤 성향일까?</S.MainTxt>
                        <S.MainTit>
                            <S.MainTitPoint as="span">퍼피</S.MainTitPoint>티아이
                        </S.MainTit>
                    </S.MainCover>
                    <S.MainStart>
                        <S.MainInput onChange={onNameChange} value={dogName} type="text" placeholder="반려견 이름을 적어주세요." />
                        <C.CommonBtn startActive={active} onClick={passName} type="submit">
                            시작하기
                        </C.CommonBtn>
                    </S.MainStart>
                    <S.MainPlayCount>
                        <S.MainCountTit>참여 횟수</S.MainCountTit>
                        <S.MainCount>
                            <S.MainCountNum>1,563</S.MainCountNum> 회
                        </S.MainCount>
                    </S.MainPlayCount>
                    <S.MainShare>
                        <ShareCont />
                    </S.MainShare>
                </S.MainCont>
            </C.Content>
        </>
    );
}
export default Main;
