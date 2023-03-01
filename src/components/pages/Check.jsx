import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//컴포넌트
import CheckQuestion from '@/components/atoms/CheckQuestion.jsx';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/check/Check.style.jsx';

//이미지
import { FireWorkGreen, FireWorkRed, FireWorkStar, PercentChar } from '@/assets/img/icons';
import { CheckQACont } from '../check/Check.style.jsx';

const Check = ({ setBgColor, setPageName, scrollHeader }) => {
    const navigate = useNavigate(); //react router 페이지 핸들링하는 함수
    const [percent, setPercent] = useState(100); //문항 체크 퍼센트

    //기본 배경 보라색 없음
    useEffect(() => {
        setBgColor('noPurple'); //페이지 마운트시 배경 off
        setPageName('checkPage'); //체크 페이지 네임 전달
        return () => {
            setBgColor('purple'); //페이지 언마운트시 배경 on
            setPageName(''); //페이지 언마운트시 페이지 이름 리셋
        };
    }, []);

    //100%일 경우 배경 검정색
    useEffect(() => {
        percent === 100 && setBgColor('black');
        return () => {
            setBgColor('purple'); //페이지 언마운트시 배경 on
        };
    }, [percent]);

    return (
        <S.CheckCont percent={percent}>
            <S.CheckTop percent={percent} scrollHeader={scrollHeader}>
                <S.CheckTopInner>
                    <S.CheckTopChar percent={percent}>
                        <S.CheckTopRight>
                            <S.CheckTopFireGreen src={FireWorkGreen} percent={percent} />
                            <S.CheckTopFireRed src={FireWorkRed} percent={percent} />
                            <S.CheckTopStarR1 src={FireWorkStar} percent={percent} />
                            <S.CheckTopStarR2 src={FireWorkStar} percent={percent} />
                            <S.CheckTopStarR3 src={FireWorkStar} percent={percent} />
                            <S.CheckTopStarR4 src={FireWorkStar} percent={percent} />
                        </S.CheckTopRight>
                        <S.CheckTopLeft>
                            <S.CheckTopStarL1 src={FireWorkStar} percent={percent} />
                            <S.CheckTopStarL2 src={FireWorkStar} percent={percent} />
                            <S.CheckTopStarL3 src={FireWorkStar} percent={percent} />
                        </S.CheckTopLeft>
                        <S.CheckTopCharImg src={PercentChar} />
                    </S.CheckTopChar>
                    <S.CheckTopBar>
                        <C.PercentBar>
                            <C.PercentBarFill percent={percent}>
                                <C.A11yHidden>{percent}%</C.A11yHidden>
                            </C.PercentBarFill>
                        </C.PercentBar>
                    </S.CheckTopBar>
                </S.CheckTopInner>
            </S.CheckTop>
            <S.CheckQACont>
                <CheckQuestion setPercent={setPercent} />
            </S.CheckQACont>
            <S.CheckBtn>
                <C.CommonBtn
                    percent={percent}
                    onClick={() => {
                        navigate('/result');
                    }}
                    type="submit"
                >
                    결과보기
                </C.CommonBtn>
            </S.CheckBtn>
        </S.CheckCont>
    );
};

export default Check;
