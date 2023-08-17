import React, { forwardRef, useState, useImperativeHandle, useEffect } from 'react';
import { Link } from 'react-router-dom';

//컴포넌트
import CheckHead from '@components/atoms/CheckHead.jsx';

//스타일
import * as C from '@/style/CommonContents.jsx';

//이미지
import { TransEn, TransKo } from '@/assets/img/icons/index.js';

const Header = forwardRef(({ scrollHeader, logoColor, bgColor }, ref) => {
    const [percent, setPercent] = useState(0);
    useImperativeHandle(ref, () => ({
        setPercent(value) {
            setPercent(value)
        },
        percent
    }));

    return (
        <C.HeaderCont scrollHeader={scrollHeader} percent={percent} bgColor={bgColor}>
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
            {location.pathname === '/check' && <CheckHead percent={percent} />}
        </C.HeaderCont>
    );
});

export default  Header;
