import React, { useState } from 'react';

//컴포넌트
import NameCover from '@components/atoms/NameCover.jsx';
import TextBox from '@components/atoms/TextBox.jsx';
import BackBtn from '@/components/atoms/BackBtn.jsx';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/inquiry/Inquiry.style.jsx';

const Inquiry = () => {
    const [pageName, setPageName] = useState('광고 및 후원 문의');
    const [inquiryData, setInquiryData] = useState(null);

    return (
        <C.Content>
            <S.InquiryCont>
                <NameCover pageName={pageName} />
                <TextBox inquiryData={inquiryData} />
                <C.CommonBtn type="submit">전송하기</C.CommonBtn>
                <BackBtn />
            </S.InquiryCont>
        </C.Content>
    );
};
export default Inquiry;
