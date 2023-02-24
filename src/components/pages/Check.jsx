import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/check/Check.style.jsx';

//이미지
import { FireWorkGreen, FireWorkRed, FireWorkStar, PercentChar } from '@/assets/img/icons';
import { CheckTopInner, CheckTopLeft, CheckTopRight } from '@components/check/Check.style.jsx';

const Check = ({ setPurpleBg }) => {
    const navigate = useNavigate(); //react router 페이지 핸들링하는 함수
    const [percent, setPercent] = useState(100); //문항 체크 퍼센트
    const percent100 = percent === 100;
    useEffect(() => {
        setPurpleBg(false); //페이지 마운트시 배경 off
        return () => {
            setPurpleBg(true); //페이지 언마운트시 배경 on
        };
    }, []);

    const [complete, setcomplete] = useState(false);
    useEffect(() => {
        setcomplete(percent === 100);
    }, [setcomplete]);
    return (
        <S.CheckCont percent={percent}>
            <S.CheckTop>
                <S.CheckTopInner>
                    <S.CheckTopChar percent={percent}>
                        <S.CheckTopRight>
                            {complete && <S.CheckTopFireGreen src={FireWorkGreen} />}
                            {complete && setTimeout(() => <S.CheckTopFireRed src={FireWorkRed} />, 1000)}
                            <S.CheckTopStarR1 src={FireWorkStar} />
                            <S.CheckTopStarR2 src={FireWorkStar} />
                            <S.CheckTopStarR3 src={FireWorkStar} />
                            <S.CheckTopStarR4 src={FireWorkStar} />
                        </S.CheckTopRight>
                        <S.CheckTopLeft>
                            <S.CheckTopStarL1 src={FireWorkStar} />
                            <S.CheckTopStarL2 src={FireWorkStar} />
                            <S.CheckTopStarL3 src={FireWorkStar} />
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
                        navigate('/result');
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
