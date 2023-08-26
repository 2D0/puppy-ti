import React from 'react';

//스타일
import * as C from '@/style/CommonContents.jsx';

const Footer = () => {
    return (
        <C.Footer>
            <C.FooterInfo>
                <C.FooterInfoList>
                    <C.FooterInfoLink to={'/team_member'}>팀원 소개</C.FooterInfoLink>
                </C.FooterInfoList>
                <C.FooterInfoList>
                    <C.FooterInfoLink to={'/inquiry'}>광고 및 후원 문의</C.FooterInfoLink>
                </C.FooterInfoList>
                <C.FooterInfoList>
                    <C.FooterInfoLink to={'/source_license'}>라이센스</C.FooterInfoLink>
                </C.FooterInfoList>
            </C.FooterInfo>
            <C.FooterCopy>ⓒ 2023. MAKETREE All rights reserved.</C.FooterCopy>
        </C.Footer>
    );
};
export default Footer;
