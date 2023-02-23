import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/check/Check.style.jsx';

const Check = ({ setPurpleBg }) => {
    useEffect(() => {
        setPurpleBg(false);

        return () => {
            setPurpleBg(true);
        };
    }, []);
    const navigate = useNavigate();
    return (
        <C.Content>
            <S.CheckCont>
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
        </C.Content>
    );
};

export default Check;
