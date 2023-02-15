import React from 'react';

//컴포넌트
import * as S from '@/style/CommonContents';

//이미지
import { LogoBlack, LogoWhite } from '@/assets/img/logo';
import { TransEn, TransKo } from '@/assets/img/icons';

const Header = () => {
    //더미 데이터
    const BackOn = true;

    return (
        <S.HeaderCont>
            <S.HeaderLogo>
                <S.HeaderLogoImg src={BackOn ? LogoBlack : LogoWhite} />
            </S.HeaderLogo>
            <S.HeaderSwitch>
                <S.HeaderSwitchIcon>
                    <S.HeaderSwitchImg src={TransEn} alt="영어" />
                </S.HeaderSwitchIcon>
                <S.HeaderSwitchIcon>
                    <S.HeaderSwitchImg src={TransKo} alt="한글" />
                </S.HeaderSwitchIcon>
            </S.HeaderSwitch>
        </S.HeaderCont>
    );
};

export default Header;
