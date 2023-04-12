import React, { useState } from 'react';
import inquiry from '@/assets/constants/inquiry.json';

//컴포넌트
import NameCover from '@components/atoms/NameCover.jsx';
import TextBox from '@components/atoms/TextBox.jsx';
import BackBtn from '@/components/atoms/BackBtn.jsx';

//스타일
import * as C from '@/style/CommonContents';
import * as S from '@components/inquiry/Inquiry.style.jsx';

const TeamMember = () => {
    const [pageName, setPageName] = useState('팀원 소개');
    const [inquiryData, setInquiryData] = useState(inquiry.teamMember);
    return (
        <C.Content>
            <S.InquiryCont>
                <NameCover pageName={pageName} />
                <TextBox inquiryData={inquiryData} />
                <BackBtn />
            </S.InquiryCont>
        </C.Content>
    );
};
export default TeamMember;
