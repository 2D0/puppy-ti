import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents';

//이미지
import { LogoBlack, LogoWhite } from '@/assets/img/logo';
import { TransEn, TransKo } from '@/assets/img/icons';

const Header = ({ bgColor }) => {
    const [headerBgOn, setHeaderBgOn] = useState(false); //헤더 배경 검정색인지 아닌지

    //스크롤시 배경 on
    const handleScroll = () => {
        const scrollPosition = window.scrollY; //스크롤 위치
        scrollPosition > 50 ? setHeaderBgOn(true) : setHeaderBgOn(false);
    };

    const switchBg = () => {
        switch (bgColor) {
            case 'purple':
            case 'black':
                return LogoWhite;
            case 'noPurple':
            default:
                return LogoBlack;
        }
    };
    //스크롤 이벤트 감지
    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <C.HeaderCont headerBgOn={headerBgOn} bgColor={bgColor}>
            <C.HeaderInner>
                <C.HeaderLogo>
                    <Link to={'/'}>
                        <C.HeaderLogoImg src={switchBg} />
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
