import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//컴포넌트
import CheckHead from '@/components/atoms/CheckHead.jsx';

//스타일
import * as C from '@/style/CommonContents';

//이미지
import { LogoBlack, LogoWhite } from '@/assets/img/logo';
import { TransEn, TransKo } from '@/assets/img/icons';

const Header = ({ location, percent, scrollHeader }) => {
    const [logoColor, setLogoColor] = useState(null); //로고 컬러 상태

    //배경 색상에 따른 로고 색상 변경 스위치
    const switchColor = () => {
        switch (location) {
            case '/check':
            case '/result':
                percent === 100 ? setLogoColor(LogoWhite) : setLogoColor(LogoBlack);
                break;
            default:
                setLogoColor(LogoWhite);
                break;
        }
    };

    //배경 색상 변경 감지
    useEffect(() => {
        switchColor();
    }, [percent || location]);

    return (
        <C.HeaderCont scrollHeader={scrollHeader} location={location} percent={percent}>
            <C.HeaderInner>
                <C.HeaderLogo>
                    <Link to={'/'}>
                        <C.HeaderLogoImg src={logoColor} />
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

            {location === '/check' && <CheckHead percent={percent} />}
        </C.HeaderCont>
    );
};

export default Header;
