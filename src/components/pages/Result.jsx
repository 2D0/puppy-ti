import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';
import ShareCont from '@components/atoms/ShareCont.jsx';

const Result = ({ resultProps }) => {
    useEffect(() => {
        resultProps.setPurpleBg(false); //페이지 마운트시 배경 off
        return () => {
            resultProps.setPurpleBg(true); //페이지 언마운트시 배경 on
        };
    }, []);
    return (
        <C.Content>
            <S.ResultCont>
                <h2>{resultProps.name}</h2>
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
