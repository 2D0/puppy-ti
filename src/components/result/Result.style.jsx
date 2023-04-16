import styled, { css } from 'styled-components';
import {
    FontFamilySub,
    FontPurple,
    ContentsInner,
    FontSmallSize,
    Square,
    SquareInner,
    BgWhite,
    PhotoContain,
    CommonShadow,
    FontMediumSize,
    FontExtraSize,
    FontBigSize,
    defaultContMargin,
    subContMargin,
    FontDarkPurple,
    flexItemCenter,
    FontGray,
    PercentBarFill,
} from '@/style/CommonContents.jsx';
import device from '@/style/Device.jsx';

// ******************** 컨텐츠 ********************
//컨텐츠
export const ResultCont = styled.div`
    ${ContentsInner}
`;
export const ResultPuppyName = styled.h2`
    line-height: 1em;
    text-align: center;
    ${subContMargin}
    ${FontBigSize}
    ${FontFamilySub}
`;
export const ResultPuppyNamePoint = styled.span`
    display: inline-block;
    ${FontExtraSize}

    > span {
        line-height: 1em;
        ${FontPurple}
        ${FontFamilySub}
    }
`;
export const ResultCharBox = styled.div`
    border-radius: 20px;
    ${Square};
    ${defaultContMargin}
    ${BgWhite}

    &:before {
        padding-bottom: 80%;
    }
`;
export const ResultCharBoxInner = styled.div`
    ${SquareInner};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5%;
    text-align: center;
`;
export const ResultBoxMbtiName = styled.p`
    ${FontExtraSize}
`;
export const ResultBoxChar = styled.div`
    ${Square};
    width: 80%;
    margin: 0 auto;

    &:before {
        padding-bottom: 60%;
    }
`;
export const ResultBoxCharInner = styled.div`
    ${SquareInner};
`;
export const ResultBoxCharImg = styled.img`
    ${PhotoContain}
`;
export const ResultPercentCont = styled.div`
    ${defaultContMargin}
`;
export const ResultPercentBox = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
    ${defaultContMargin}
`;
export const ResultPercentList = styled.li`
    ${PercentBarFill} {
        ${({ percent }) =>
            percent >= 100 - percent
                ? css`
                      left: 0;
                      right: initial;
                      width: ${percent}%;
                  `
                : css`
                      left: initial;
                      right: 0;
                      width: ${100 - percent}%;
                  `};
    }
`;
export const ResultPercentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    position: relative;
    z-index: 2;
`;
export const ResultPercentNames = styled.div`
    gap: 0 10px;
    ${flexItemCenter}

    > span {
        ${FontGray}
        
        ${({ resultType }) =>
            resultType &&
            css`
                ${FontDarkPurple}
            `}
`;
export const ResultPercentName = styled.span`
    font-weight: 500;
    ${FontMediumSize}
`;
export const ResultPercentNum = styled.span`
    ${FontSmallSize}
`;
export const ResultTxtBox = styled.div`
    width: 100%;
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    ${subContMargin}
    ${CommonShadow};
`;
export const ResultTxt = styled.span`
    line-height: 1.8em;
    ${FontMediumSize}
`;
export const RestartBtn = styled.div`
    display: flex;
    justify-content: center;
    ${defaultContMargin}
`;
