import React, { useEffect, useState } from 'react';

//스타일
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';
const ResultDetail = ({ detailItem, percentEnergy, percentInformation, percentIDecisions, percentLifestyle }) => {
    const [percent, setPercent] = useState(null); //문항 체크 퍼센트
    const [typeLeft, setTypeLeft] = useState(null); //왼쪽 타입
    const [typeRight, setTypeRight] = useState(null); //오른쪽 타입

    const mbtiType = () => {
        switch (detailItem.id) {
            case 1:
                setTypeLeft('내향형');
                setTypeRight('외향형');
                setPercent(percentEnergy);
                break;
            case 2:
                setTypeLeft('직관형');
                setTypeRight('감각형');
                setPercent(percentInformation);
                break;
            case 3:
                setTypeLeft('사고형');
                setTypeRight('감정형');
                setPercent(percentIDecisions);
                break;
            case 4:
                setTypeLeft('계획형');
                setTypeRight('탐색형');
                setPercent(percentLifestyle);
                break;
        }
    };

    useEffect(() => {
        mbtiType();
    }, []);

    return (
        <S.ResultPercentList>
            <S.ResultPercentInfo>
                <S.ResultPercentNames resultType={percent >= 100 - percent}>
                    <S.ResultPercentName>{typeLeft}</S.ResultPercentName>
                    <S.ResultPercentNum>{percent}%</S.ResultPercentNum>
                </S.ResultPercentNames>
                <S.ResultPercentNames resultType={percent < 100 - percent}>
                    <S.ResultPercentNum>{100 - percent}%</S.ResultPercentNum>
                    <S.ResultPercentName>{typeRight}</S.ResultPercentName>
                </S.ResultPercentNames>
            </S.ResultPercentInfo>
            <C.PercentBar>
                <C.PercentBarFill percent={percent}>
                    <C.A11yHidden>{percent}%</C.A11yHidden>
                </C.PercentBarFill>
            </C.PercentBar>
        </S.ResultPercentList>
    );
};
export default ResultDetail;
