import React from 'react';

//스타일
import * as A from '@/components/atoms/atoms.style.jsx';

//이미지
import { Back } from '@/assets/img/icons/index.js';

const BackButton = () => {
    return (
        <A.CommonBackBtn to="/">
            <A.CommonBackImg src={Back} alt="메인으로 가기" />
            메인으로 가기
        </A.CommonBackBtn>
    );
};
export default BackButton;
