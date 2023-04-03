import React, { useEffect, useState } from 'react';

//스타일
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';
const ResultDetail = ({ detailItem, energyPercent, informationPercent, decisionsPercent, lifestylePercent }) => {
    const [typePercent, setTypePercent] = useState(null);
    const [typeLeft, setTypeLeft] = useState(null); //왼쪽 타입
    const [typeRight, setTypeRight] = useState(null); //오른쪽 타입
    useEffect(() => {
        mbtiType();
    }, []);
    const mbtiType = () => {
        switch (detailItem.id) {
            case 1:
                setTypeLeft('내향형');
                setTypeRight('외향형');
                setTypePercent(energyPercent);
                break;
            case 2:
                setTypeLeft('직관형');
                setTypeRight('감각형');
                setTypePercent(informationPercent);
                break;
            case 3:
                setTypeLeft('사고형');
                setTypeRight('감정형');
                setTypePercent(decisionsPercent);
                break;
            case 4:
                setTypeLeft('계획형');
                setTypeRight('탐색형');
                setTypePercent(lifestylePercent);
                break;
        }
    };
    return (
        <S.ResultPercentList>
            <S.ResultPercentInfo>
                <S.ResultPercentNames resultType={typePercent >= 100 - typePercent}>
                    <S.ResultPercentName>{typeLeft}</S.ResultPercentName>
                    <S.ResultPercentNum>{typePercent}%</S.ResultPercentNum>
                </S.ResultPercentNames>
                <S.ResultPercentNames resultType={typePercent < 100 - typePercent}>
                    <S.ResultPercentNum>{100 - typePercent}%</S.ResultPercentNum>
                    <S.ResultPercentName>{typeRight}</S.ResultPercentName>
                </S.ResultPercentNames>
            </S.ResultPercentInfo>
            <C.PercentBar>
                <C.PercentBarFill typePercent={typePercent}>
                    <C.A11yHidden>{typePercent}%</C.A11yHidden>
                </C.PercentBarFill>
            </C.PercentBar>
        </S.ResultPercentList>
    );
};
export default ResultDetail;
