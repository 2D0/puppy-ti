import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';
import ShareCont from '@components/atoms/ShareCont.jsx';

const Result = ({ setPurpleBg }) => {
    useEffect(() => {
        setPurpleBg(false);

        return () => {
            setPurpleBg(true);
        };
    }, []);
    return (
        <C.Content>
            <S.ResultCont>
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
