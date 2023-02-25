import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';
import ShareCont from '@components/atoms/ShareCont.jsx';

const Result = ({ setBgColor, name }) => {
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
