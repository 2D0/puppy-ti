import styled from 'styled-components';
import { FontSmallSize, BgWhite, ContShadow, BoxCenterRow, flexCenter, CommonBtn } from '@/style/CommonContents.jsx';
import device from '@/style/Device.jsx';
import { CommonBackBtn } from '@components/atoms/atoms.style.jsx';

// ******************** 컨텐츠 ********************
//컨텐츠
export const InquiryCont = styled.div`
    height: 100%;
    position: relative;
    z-index: 3;
    overflow: hidden;

    ${CommonBtn} {
        margin-top: 40px;
    }
    ${CommonBackBtn} {
        bottom: 0;
        ${BoxCenterRow}
    }
`;
