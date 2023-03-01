import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { BgPink, BgPurple, BgWhite, FontMediumSize, FontWhite, IconShadow, PhotoCenter, flexCenter } from '@/style/CommonContents.jsx';

// ********************* 공유하기 ********************
export const CommonShare = styled.div``;
export const CommonShareTit = styled.div`
    gap: 0 8px;
    margin-bottom: 15px;
    ${flexCenter}
`;
export const CommonShareIcon = styled.img`
    width: 20px;
    height: 20px;
`;
export const CommonShareTxt = styled.span``;
export const CommonSns = styled.ul`
    gap: 0 15px;
    ${flexCenter}
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
    width: 50%;
    height: inherit;
    ${flexCenter}
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
    ${FontMediumSize}
`;
export const CheckQABtns = styled.div`
    gap: 0 25px;
    ${flexCenter}
`;
export const CheckQABtn = styled.button``;
export const CheckFootShape = `
    display: block;
    width: auto;
    height: 70px;
    stroke-width: 4px;
    fill: transparent;

    > path {
        display: block;
        width: auto;
        height: 100%;
        fill: #9e446f;
        ${IconShadow}
    }
`;
export const CheckFootBlank = `
    stroke-width: 4px;
    fill: transparent;
`;
export const CheckFootLeft = styled.span`
    svg {
        ${CheckFootShape}
        > path {
            stroke: #9e446f;
            ${({ checkState }) =>
                checkState
                    ? css`
                          fill: #9e446f;
                      `
                    : css`
                          stroke: #9e446f;
                          ${CheckFootBlank}
                      `}
        }
    }
`;
export const CheckFootRight = styled.span`
    svg {
        ${CheckFootShape}
        > path {
            stroke: #7846d0;
            ${({ checkState }) =>
                checkState
                    ? css`
                          fill: #7846d0;
                      `
                    : css`
                          stroke: #7846d0;
                          ${CheckFootBlank}
                      `}
        }
    }
`;
export const CheckFootCenter = styled.span`
    svg {
        ${CheckFootShape};
        height: 55px;
        > path {
            stroke: #999;
            ${({ footCenter }) =>
                footCenter
                    ? css`
                          fill: #999;
                      `
                    : css`
                          stroke: #999;
                          ${CheckFootBlank}
                      `}
        }
    }
`;
