import React from 'react';
import { Link } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents';

//이미지
import { LogoBlack, LogoWhite } from '@/assets/img/logo';
import { TransEn, TransKo } from '@/assets/img/icons';

const Header = ({ setPurpleBg }) => {
    return (
        <C.HeaderCont>
            <C.HeaderInner>
                <C.HeaderLogo>
                    <Link to={'/'}>
                        <C.HeaderLogoImg src={setPurpleBg ? LogoBlack : LogoWhite} />
                    </Link>
                </C.HeaderLogo>
                <C.HeaderSwitch>
                    <C.HeaderSwitchIcon>
                        <C.HeaderSwitchImg src={TransEn} alt="영어" />
                    </C.HeaderSwitchIcon>
                    <C.HeaderSwitchIcon>
                        <C.HeaderSwitchImg src={TransKo} alt="한글" />
                    </C.HeaderSwitchIcon>
                </C.HeaderSwitch>
            </C.HeaderInner>
        </C.HeaderCont>
    );
};

export default Header;
