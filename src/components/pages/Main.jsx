import React from 'react';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/main/main.style.jsx';

//이미지
import { Intj } from '@/assets/img/mbti';
import { Share, SnsF, SnsK, SnsT, SnsL } from '@/assets/img/icons';

function Main() {
    return(
        <C.Wrap>
            <C.ContentsInner>
                <S.MainTop>
                    <S.MainChar src={Intj} alt="퍼피티아이 캐릭터" />
                    <S.MainTxt>나의 반려견은 어떤 성향일까?</S.MainTxt>
                    <S.MainTit>퍼피티아이</S.MainTit>
                </S.MainTop>
                <S.MainCont>
                    <C.CommonInput type="text" placeholder="반려견 이름을 적어주세요."/>
                    <C.CommonBtn>시작하기</C.CommonBtn>
                </S.MainCont>
                <S.MainBottom>
                    <S.MainPlayCount>
                        <S.MainCountTit>참여 횟수</S.MainCountTit>
                        <S.MainCount>
                            <S.MainCountNum>1,563</S.MainCountNum> 회
                        </S.MainCount>
                    </S.MainPlayCount>
                    <C.CommonShare>
                        <C.CommonShareTit>
                            <C.CommonShareIcon src={Share} alt="공유하기"></C.CommonShareIcon>
                            <C.CommonSharetxt>공유하기</C.CommonSharetxt>
                        </C.CommonShareTit>
                        <C.CommonSns>
                            <C.CommonSnsIcon>
                                <C.CommonSnsLink to='/'>
                                    <C.CommonSnsIconImg src={Share} alt="공유하기" />
                                </C.CommonSnsLink>
                            </C.CommonSnsIcon>
                        </C.CommonSns>
                    </C.CommonShare>
                </S.MainBottom>
            </C.ContentsInner>
        </C.Wrap>
    )
}

export default Main;
