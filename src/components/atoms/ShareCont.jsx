import React from 'react';

//스타일
import * as A from '@/components/atoms/atoms.style.jsx';

//이미지
import { Share, SnsF, SnsK, SnsL, SnsT } from '@/assets/img/icons/index.js';

const ShareCont = () => {
    return (
        <A.CommonShare>
            <A.CommonShareTit>
                <A.CommonShareIcon src={Share} alt="공유하기"></A.CommonShareIcon>
                <A.CommonShareTxt>공유하기</A.CommonShareTxt>
            </A.CommonShareTit>
            <A.CommonSns>
                <A.CommonSnsIcon>
                    <A.CommonSnsLink to="/">
                        <A.CommonSnsIconImg src={SnsF} alt="페이스북" />
                    </A.CommonSnsLink>
                </A.CommonSnsIcon>
                <A.CommonSnsIcon>
                    <A.CommonSnsLink to="/">
                        <A.CommonSnsIconImg src={SnsK} alt="카카오톡" />
                    </A.CommonSnsLink>
                </A.CommonSnsIcon>
                <A.CommonSnsIcon>
                    <A.CommonSnsLink to="/">
                        <A.CommonSnsIconImg src={SnsT} alt="트위터" />
                    </A.CommonSnsLink>
                </A.CommonSnsIcon>
                <A.CommonSnsIcon>
                    <A.CommonSnsLink to="/">
                        <A.CommonSnsIconImg src={SnsL} alt="링크" />
                    </A.CommonSnsLink>
                </A.CommonSnsIcon>
            </A.CommonSns>
        </A.CommonShare>
    );
};
export default ShareCont;
