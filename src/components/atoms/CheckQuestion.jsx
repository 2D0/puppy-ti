import React from 'react';

//컴포넌트
import CheckButton from '@/components/atoms/CheckButton.jsx';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = () => {
    return (
        <A.CheckQABox>
            <A.CheckQATop>
                <A.CheckQATitL>아니다</A.CheckQATitL>
                <A.CheckQATitR>그렇다</A.CheckQATitR>
            </A.CheckQATop>
            <A.CheckQACont>
                <A.CheckQATxt>질문 들어갈 부분</A.CheckQATxt>
                <A.CheckQABtns>
                    <A.CheckQABtnList>
                        <CheckButton />
                    </A.CheckQABtnList>
                </A.CheckQABtns>
            </A.CheckQACont>
        </A.CheckQABox>
    );
};
export default CheckQuestion;
