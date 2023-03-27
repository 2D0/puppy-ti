import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//컴포넌트
import ShareCont from '@components/atoms/ShareCont.jsx';

//스타일
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';

const Result = ({ setBgColor, name }) => {
    const [percent, setPercent] = useState(90); //문항 체크 퍼센트

    //기본 배경 보라색 없음
    useEffect(() => {
        setBgColor('noPurple'); //페이지 마운트시 배경 off
        return () => {
            setBgColor('purple'); //페이지 언마운트시 배경 on
        };
    }, []);

    return (
        <C.Content>
            <S.ResultCont>
                <h2>{name}</h2>
                <S.ResultPercentCont>
                    <S.ResultCharBox>
                        <S.ResultBoxName></S.ResultBoxName>
                        <S.ResultBoxChar>
                            <S.ResultBoxCharImg />
                        </S.ResultBoxChar>
                    </S.ResultCharBox>
                    <S.ResultPercentBox>
                        <S.ResultPercentList>
                            <S.ResultPercentInfo>
                                <S.ResultPercentName>내향형</S.ResultPercentName>
                                <S.ResultPercentNum>18%</S.ResultPercentNum>
                            </S.ResultPercentInfo>
                            <C.PercentBar>
                                <C.PercentBarFill percent={percent}>
                                    <C.A11yHidden>20%</C.A11yHidden>
                                </C.PercentBarFill>
                            </C.PercentBar>
                        </S.ResultPercentList>
                    </S.ResultPercentBox>
                    <S.ResultTxtBox>
                        <S.ResultTxt>결과</S.ResultTxt>
                    </S.ResultTxtBox>
                </S.ResultPercentCont>
                <S.RestartBtn>
                    <C.CommonBtn as={Link} to={'/'}>
                        다시하기
                    </C.CommonBtn>
                </S.RestartBtn>
            </S.ResultCont>
            <ShareCont />
        </C.Content>
    );
};
export default Result;
