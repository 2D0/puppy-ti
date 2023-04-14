import React from 'react';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

//이미지
import { intj } from '@/assets/img/mbti/index.js';

const NameCover = ({ coverName }) => {
    return (
        <A.CoverName>
            <A.CoverNameTit>
                <A.CoverNameChar src={intj} alt="퍼피티아이" />
                <A.CoverNameTitPoint>퍼피</A.CoverNameTitPoint>티아이
            </A.CoverNameTit>
            <A.CoverNameTit>{coverName}</A.CoverNameTit>
        </A.CoverName>
    );
};
export default NameCover;
