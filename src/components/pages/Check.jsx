import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/check/Check.style.jsx';

//이미지
import { FireWorkGreen, FireWorkRed, FireWorkStar, PercentChar } from '@/assets/img/icons';

const Check = ({ checkProps }) => {
    const navigate = useNavigate(); //react router 페이지 핸들링하는 함수
    const [percent, setPercent] = useState(90); //문항 체크 퍼센트

    useEffect(() => {
        checkProps.setPurpleBg(false); //페이지 마운트시 배경 off
        return () => {
            checkProps.setPurpleBg(true); //페이지 언마운트시 배경 on
        };
    }, []);

    useEffect(() => {
        console.log('backOn');
        checkProps.setBlackBack(true);
        return () => {
            checkProps.setBlackBack(false); //페이지 언마운트시 배경 on
        };
    }, [percent === 100]);
    return (
        <S.CheckCont percent={percent}>
            <S.CheckTop>
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
            <S.ResultBtn>
                <C.CommonBtn
                    onClick={() => {
                        setPercent(100); //효과 테스트용 임시 이벤트
                        //navigate('/result');
                    }}
                    type="submit"
                >
                    결과보기
                </C.CommonBtn>
            </S.ResultBtn>
        </S.CheckCont>
    );
};

export default Check;
