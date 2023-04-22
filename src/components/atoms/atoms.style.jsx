import styled, { css, keyframes } from 'styled-components';
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
    FontLargeSize,
    flexItemCenter,
    subContMargin,
    FontExtraSize,
    FontFamilySub,
    FontDarkPurple,
    ContShadow,
    FontUnable,
    ContentsInner,
    BoxCenterRow,
    BoxCenterCol,
} from '@/style/CommonContents.jsx';

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

// **************** 상단 퍼센트 헤드 ****************
export const CheckTopInner = styled.div`
    ${ContentsInner}
`;

//애니메이션
export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    25%{
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    75%{
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;
const fadeOption = (duration, delay) => css`
    display: block;
    animation: ${FadeIn} ${duration}s ${delay}s infinite linear alternate;
`;

//폭죽 모양
export const CheckTopFirework = `
    display: none;
    width: 55%;
    height: auto;
    position: absolute;
`;
//별 모양
export const CheckTopStarShape = `
    display: none;
    width: 16%;
    height: auto;
    position: absolute;
`;
export const CheckTopStarLShape = `
    ${CheckTopStarShape}
    width: 40%;
`;
//상단 퍼센트 바
export const CheckTopBar = styled.div``;

export const CheckTopCharImg = styled.img`
    width: 66%;
    height: auto;
    bottom: 0;
    ${BoxCenterRow}
`;

//산책 캐릭터
export const CheckTopChar = styled.div`
    width: 185px;
    height: 185px;
    position: absolute;
    bottom: 50px;
    transition: all 0.5s ease;
    z-index: 1;
`;

//오른쪽 폭죽
export const CheckTopRight = styled.div`
    width: 93px;
    height: 93px;
    position: absolute;
    top: 0;
    right: 0;
`;
export const CheckTopFireGreen = styled.img`
    top: 0;
    left: 0;
    ${CheckTopFirework}
`;
export const CheckTopFireRed = styled.img`
    bottom: 0;
    right: 0;
    ${CheckTopFirework}
`;

//오른쪽 별
export const CheckTopStarR1 = styled.img`
    bottom: 18%;
    left: 0;
    ${CheckTopStarShape}
`;
export const CheckTopStarR2 = styled.img`
    bottom: 0;
    left: 21%;
    ${CheckTopStarShape}
`;
export const CheckTopStarR3 = styled.img`
    top: 10%;
    right: 20%;
    ${CheckTopStarShape}
`;
export const CheckTopStarR4 = styled.img`
    top: 27%;
    right: 0;
    ${CheckTopStarShape}
`;

//왼쪽 별
export const CheckTopLeft = styled.div`
    width: 37px;
    height: 73px;
    left: 0;
    ${BoxCenterCol}
`;
export const CheckTopStarL1 = styled.img`
    top: 0;
    right: 0;
    ${CheckTopStarLShape}
`;
export const CheckTopStarL2 = styled.img`
    left: 0;
    ${BoxCenterCol}
    ${CheckTopStarLShape}
`;
export const CheckTopStarL3 = styled.img`
    bottom: 0;
    right: 0;
    ${CheckTopStarLShape}
`;

//체크 탑
export const CheckTop = styled.article`
    width: 100%;
    max-width: 750px;
    padding-bottom: 20px;
    padding-top: 185px;
    overflow: hidden;

    ${CheckTopChar} {
        left: ${({ percent }) => percent - 28}%;
    }
    // 폭죽 별
    ${CheckTopFireGreen} {
        ${({ percent }) => percent === 100 && fadeOption(5, 0)};
    }
    ${CheckTopFireRed} {
        ${({ percent }) => percent === 100 && fadeOption(5, 2)};
    }
    ${CheckTopStarL1},
    ${CheckTopStarR1} {
        ${({ percent }) => percent === 100 && fadeOption(3, 0)};
    }
    ${CheckTopStarL2},
    ${CheckTopStarR2} {
        ${({ percent }) => percent === 100 && fadeOption(5, 3)};
    }
    ${CheckTopStarL3},
    ${CheckTopStarR3} {
        ${({ percent }) => percent === 100 && fadeOption(4, 0)};
    }
    ${CheckTopStarR4} {
        ${({ percent }) => percent === 100 && fadeOption(3, 2)};
    }
`;

// ******************** 질문 박스 ********************
export const CheckQABoxs = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px 0;
`;
export const CheckQABoxList = styled.li``;
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
        ${({ scoreIdx }) =>
            scoreIdx === 3 &&
            css`
                height: 60px;
            `};
        > path {
            ${CheckFootBlank};

            //버튼 기본 디자인
            ${({ scoreIdx }) => {
                if (scoreIdx === 3) {
                    return css`
                        stroke: #999;
                    `;
                }
                if (scoreIdx <= 3) {
                    return css`
                        stroke: #7846d0;
                    `;
                }
                if (scoreIdx >= 3) {
                    return css`
                        stroke: #9e446f;
                    `;
                }
            }}

            ${({ questionItem, questionIdx, score }) => {
                /*if (questionItem.id === questionIdx) {
                    for (let i = 0; questionItem.state.type !== 'center' && i <= questionItem.state.score; i++) {
                        console.log(score[i]);
                        if (questionItem.state.type === 'center' && score.type === 'center') {
                            console.log(i);
                            return css`
                                fill: #999;
                            `;
                        } else if (
                            questionItem.state.type === 'no' &&
                            score[i].type === 'no' &&
                            questionItem.state.score === score[i].score
                        ) {
                            console.log(i);
                            return css`
                                fill: #7846d0;
                            `;
                        } else if (questionItem.state.type === 'yes' && score[i].type === 'yes' && score[i].score <= 3) {
                            console.log(i);
                            return css`
                                fill: #9e446f;
                            `;
                        }
                    }
                }*/
            }}
            
            
                            ${({ questionItem, questionIdx, scoreCount, scoreIdx }) => {
                                if (questionItem.id === questionIdx && questionItem.state.score === scoreCount) {
                                    if (questionItem.state.type === 'center' && scoreIdx === 3) {
                                        // console.log(item.state.type === 'center');
                                        return css`
                                            fill: #999;
                                        `;
                                    } else if (questionItem.state.type === 'no' && scoreIdx <= 3) {
                                        // console.log(scoreIdx);
                                        return css`
                                            fill: #7846d0;
                                        `;
                                    } else if (questionItem.state.type === 'yes' && scoreIdx >= 3) {
                                        // console.log(scoreIdx);
                                        return css`
                                            fill: #9e446f;
                                        `;
                                    }
                                }
                            }}
`;
