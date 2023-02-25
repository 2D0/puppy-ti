import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents';

//이미지
import { LogoBlack, LogoWhite } from '@/assets/img/logo';
import { TransEn, TransKo } from '@/assets/img/icons';

const Header = ({ bgColor }) => {
    const [scrollHeader, setScrollHeader] = useState(false); //헤더 배경 검정색인지 아닌지
    const [logoColor, setLogoColor] = useState(LogoWhite);

    //배경 색상에 따른 로고 색상 변경 스위치
    const switchBg = () => {
        switch (bgColor) {
            case 'purple':
            case 'black':
                setLogoColor(LogoWhite);
                break;
            case 'noPurple':
                setLogoColor(LogoBlack);
                break;
            default:
        }
    };

    //스크롤시 배경 on
    const handleScroll = () => {
        const scrollPosition = window.scrollY; //스크롤 위치
        scrollPosition > 50 ? setScrollHeader(true) : setScrollHeader(false);
    };
    //배경 색상 변경 감지
    useEffect(() => {
        switchBg();
    }, [bgColor]);

    //스크롤 이벤트 감지
    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <C.HeaderCont scrollHeader={scrollHeader} setScrollHeader={setScrollHeader} bgColor={bgColor}>
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
        </C.HeaderCont>
    );
};

export default Header;
