import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {
    BgPink,
    BgPurple,
    BgWhite,
    FontMediumSize,
    FontWhite,
    IconShadow,
    PhotoCover,
    flexCenter,
    FontSmallSize,
    FontLargeSize,
    flexItemCenter,
    subContMargin,
    FontExtraSize,
    FontFamilySub,
    FontDarkPurple,
    ContShadow,
    BgUnable,
    FontUnable,
} from '@/style/CommonContents.jsx';

// ********************* 공유하기 ********************
export const CommonShare = styled.div``;
export const CommonShareTit = styled.div`
    gap: 0 8px;
    margin-bottom: 15px;
    ${flexCenter}
`;
export const CommonShareIcon = styled.img`
    width: 22px;
    height: 22px;
`;
export const CommonShareTxt = styled.span`
    ${FontMediumSize}
`;
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
    ${PhotoCover}
`;

// ******************* 이름 커버 *******************
export const CoverName = styled.h2`
    ${subContMargin}
`;
export const CoverNameChar = styled.img`
    display: block;
    width: 125px;
    margin-left: auto;
`;
export const CoverNameTit = styled.span`
    display: block;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    ${FontExtraSize}
    ${FontFamilySub}
    ${FontWhite}
`;
export const CoverNameTitPoint = styled.span`
    ${FontFamilySub}
    ${FontDarkPurple}
`;

// ******************* 텍스트 박스 ******************
export const TextBox = styled.ul`
    width: 100%;
    height: 400px;
    flex-direction: column;
    ${flexCenter}
    ${ContShadow}
    ${BgWhite}
`;
export const TextBoxList = styled.li`
    width: 100%;
    height: fit-content;
    line-height: 2em;
    text-align: center;
    ${FontLargeSize}
`;
export const TextBoxWrite = styled.li`
    display: block;
    width: 100%;
    height: 100%;
`;
export const TextBoxinput = styled.textarea`
    display: block;
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    text-align: center;
    border: none;
    ${FontLargeSize}

    &::placeholder {
        ${FontUnable}
    }
`;
export const TextBoxTit = styled.span``;
export const TextBoxName = styled(TextBoxTit)``;

// ******************* 뒤로가기 버튼 ******************
export const CommonBackBtn = styled(Link)`
    padding: 10px;
    gap: 0 10px;
    ${flexItemCenter}
    ${FontLargeSize}
`;
export const CommonBackImg = styled.img`
    width: 25px;
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
    flex-direction: column;
    gap: 30px 0;
    padding: 30px 0;
    ${flexCenter}
    ${BgWhite}
`;
export const CheckQATxt = styled.span`
    width: 90%;
    white-space: break-spaces;
    text-align: center;
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
export const CheckFoot = styled.span`
    svg {
        ${CheckFootShape}
        > path {
            ${CheckFootBlank};

            //버튼 기본 디자인
            ${({ defaultState }) => {
                if (defaultState === 4) {
                    return css`
                        stroke: #999;
                    `;
                }
                if (defaultState <= 4) {
                    return css`
                        stroke: #7846d0;
                    `;
                }
                if (defaultState >= 2) {
                    return css`
                        stroke: #9e446f;
                    `;
                }
            }}

            ${({ scoreState, scoreBtnId, typeState, checkState, btnStateId, defaultState }) => {
                //console.log(scoreBtnId);
                switch (btnStateId) {
                    case 1:
                        scoreBtnId = 3;
                        break;
                    case 2:
                        scoreBtnId = 2;
                        break;
                    case 3:
                        scoreBtnId = 1;
                        break;
                    case 4:
                        scoreBtnId = 0;
                        break;
                    case 5:
                        scoreBtnId = 1;
                        break;
                    case 6:
                        scoreBtnId = 2;
                        break;
                    case 7:
                        scoreBtnId = 3;
                        break;
                    default:
                    //console.log('end');
                }
                if (checkState) {
                    switch (typeState) {
                        case 'yes':
                            if (scoreState >= scoreBtnId) {
                                console.log(scoreState, scoreBtnId);
                                return css`
                                    fill: #999;
                                `;
                            }
                            break;
                        case 'center':
                            if (scoreState === 0) {
                                return css`
                                    fill: #7846d0;
                                `;
                            }
                            break;
                        case 'no':
                            if (scoreState >= scoreBtnId) {
                                return css`
                                    fill: #9e446f;
                                `;
                            }
                            break;
                        default:
                            return false;
                    }
                }
            }}
        }
    }
`;
