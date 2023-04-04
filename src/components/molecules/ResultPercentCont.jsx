import React from 'react';

//스타일
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';

const ResultPercentCont = ({ item, percent }) => {
    return (
        <S.ResultPercentList>
            <S.ResultPercentInfo>
                <S.ResultPercentName>{item.name.nagative}</S.ResultPercentName>
                <S.ResultPercentNum>18%</S.ResultPercentNum>
            </S.ResultPercentInfo>
            <C.PercentBar>
                <C.PercentBarFill percent={percent}>
                    <C.A11yHidden>{percent}%</C.A11yHidden>
                </C.PercentBarFill>
            </C.PercentBar>
        </S.ResultPercentList>
    );
};
export default ResultPercentCont;
