import React from 'react';
import { useNavigate } from 'react-router-dom';

//컴포넌트
import CheckQuestion from '@/components/atoms/CheckQuestion.jsx';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/check/Check.style.jsx';

const Check = ({
    percent,
    setPercent,
    setPercentEnergy,
    setPercentInformation,
    setPercentIDecisions,
    setPercentLifestyle,
    setScoreI,
    setScoreE,
    setScoreS,
    setScoreN,
    setScoreT,
    setScoreF,
    setScoreJ,
    setScoreP,
}) => {
    const navigate = useNavigate(); //react router 페이지 핸들링하는 함수

    return (
        <S.CheckCont percent={percent}>
            <S.CheckQACont>
                <CheckQuestion
                    setPercent={setPercent}
                    setPercentEnergy={setPercentEnergy}
                    setPercentInformation={setPercentInformation}
                    setPercentIDecisions={setPercentIDecisions}
                    setPercentLifestyle={setPercentLifestyle}
                    setScoreI={setScoreI}
                    setScoreE={setScoreE}
                    setScoreS={setScoreS}
                    setScoreN={setScoreN}
                    setScoreT={setScoreT}
                    setScoreF={setScoreF}
                    setScoreJ={setScoreJ}
                    setScoreP={setScoreP}
                />
            </S.CheckQACont>
            <S.CheckBtn>
                <C.CommonBtn
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
