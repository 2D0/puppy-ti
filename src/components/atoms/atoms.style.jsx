import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import device from '@/style/Device.jsx';
import { BgPink, BgPurple, BgWhite, FontMediumSize, FontSmallSize, FontWhite, IconShadow, PhotoCenter } from '@/style/CommonContents.jsx';

// ********************* 공유하기 ********************
export const CommonShare = styled.div``;
export const CommonShareTit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 8px;
    margin-bottom: 15px;
`;
export const CommonShareIcon = styled.img`
    width: 20px;
    height: 20px;
`;
export const CommonShareTxt = styled.span``;
export const CommonSns = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 15px;
`;
export const CommonSnsIcon = styled.li``;
export const CommonSnsLink = styled(Link)`
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    ${IconShadow}
`;
export const CommonSnsIconImg = styled.img`
    border-radius: 50%;
    overflow: hidden;
    ${PhotoCenter}
`;

// ******************** 질문 박스 ********************
export const CheckQABox = styled.div``;
export const CheckQATop = styled.ul`
    display: flex;
    height: 40px;
`;
export const CheckQATit = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: inherit;
    ${FontMediumSize}
    ${FontWhite}
`;
export const CheckQATitL = styled(CheckQATit)`
    ${BgPink}
`;
export const CheckQATitR = styled(CheckQATit)`
    ${BgPurple}
`;
export const CheckQACont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px 0;
    padding: 30px 0;
    ${BgWhite}
`;
export const CheckQATxt = styled.span`
    ${FontSmallSize}
`;
export const CheckQABtns = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 45px;
`;
export const CheckQABtnList = styled.li``;
export const CheckQABtn = styled.button``;
export const CheckQABtnImg = styled.img``;
