import React from 'react';
import * as C from '@/style/CommonContents.jsx';
import { Share, SnsF, SnsK, SnsL, SnsT } from '@/assets/img/icons/index.js';

const ShareCont = () => {
    return (
        <C.CommonShare>
            <C.CommonShareTit>
                <C.CommonShareIcon src={Share} alt="공유하기"></C.CommonShareIcon>
                <C.CommonSharetxt>공유하기</C.CommonSharetxt>
            </C.CommonShareTit>
            <C.CommonSns>
                <C.CommonSnsIcon>
                    <C.CommonSnsLink to="/">
                        <C.CommonSnsIconImg src={SnsF} alt="페이스북" />
                    </C.CommonSnsLink>
                </C.CommonSnsIcon>
                <C.CommonSnsIcon>
                    <C.CommonSnsLink to="/">
                        <C.CommonSnsIconImg src={SnsK} alt="카카오톡" />
                    </C.CommonSnsLink>
                </C.CommonSnsIcon>
                <C.CommonSnsIcon>
                    <C.CommonSnsLink to="/">
                        <C.CommonSnsIconImg src={SnsT} alt="트위터" />
                    </C.CommonSnsLink>
                </C.CommonSnsIcon>
                <C.CommonSnsIcon>
                    <C.CommonSnsLink to="/">
                        <C.CommonSnsIconImg src={SnsL} alt="링크" />
                    </C.CommonSnsLink>
                </C.CommonSnsIcon>
            </C.CommonSns>
        </C.CommonShare>
    );
};
export default ShareCont;
