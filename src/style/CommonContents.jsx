import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import device from './Device.jsx';

// ********************** 색상 **********************
export const FontPurple = `
    color: #7846D0;
`;
export const FontLightPurple = `
    color: #C4A5FA;
`;
export const FontDarkPurple = `
    color: #1C0E35;
`;
export const FontWhite = `
    color: #fff;
`;
export const FontUnable = `
    color: #ccc;
`;
export const FontGray = `
    color: #888;
`;
export const BgCommon = `
    background-color: #f4eeff;
`;
export const BgWhite = `
    background-color: #fff;
`;
export const BgPurple = `
    background-color: #7846D0;
`;
export const BgLightPurple = `
    background-color: #C4A5FA;
`;
export const BgDarkPurple = `
    background-color: #1C0E35;
`;
export const BgUnable = `
    background-color: #ccc;
`;
export const BgBlack = `
    background-color: #333;
`;
export const BgPink = `
    background-color: #9E446F;
`;

// ********************* 폰트 ********************
export const FontFamilySub = `
    font-family: 'gugi';
`;
export const FontSmallSize = `
    font-size: 17px;
`;
export const FontMediumSize = `
    font-size: 20px;
`;
export const FontLargeSize = `
    font-size: 25px;
`;
export const FontBigSize = `
    font-size: 40px;
`;
export const FontExtraSize = `
    font-size: 60px;
`;
export const FontExBigSize = `
    font-size: 90px;
`;
//웹 접근성 : 텍스트 숨기기
export const A11yHidden = styled.span`
    display: block;
    width: 1px;
    height: 1px;
    margin-left: -1px;
    text-indent: -9999px;
    overflow: hidden;
    white-space: nowrap;
`;

// ********************** 블럭 **********************
//기본 버튼, 인풋 블럭
export const CommonBox = `
    width: 65%;
    height: 60px;
    margin:0 auto;
    border-radius: 10px;
    text-align : center;
    ${FontMediumSize}
`;

//동그라미 블럭
export const CircleBox = `
    border-radius: 50%;
    overflow: hidden;
`;

//반응형 정사각형
export const Square = `
    width: 100%;
    height: fit-content;
    position: relative;
    
    &:before {
        content: '';
        display:block;
        width: 100%;
        padding-bottom: 100%;
    }
`;
export const SquareInner = `
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

//중앙 정렬
export const BoxCenter = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const flexItemCenter = `
    display: flex;
    align-items: center;
`;
export const flexCenter = `
    ${flexItemCenter}
    justify-content: center;
`;

//가로 중앙 정렬
export const BoxCenterRow = `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

//세로 중앙 정렬
export const BoxCenterCol = `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

//사진 띄우기
export const PhotoCover = `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const PhotoContain = `
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

//글자 자르기
export const Split = `
    display: block;
    height: fit-content;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const SplitLine = `
    display: -webkit-box;
    height: fit-content;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
`;

//기본 버튼
export const CommonButton = `
    ${FontMediumSize}
    ${FontWhite}
`;

// ******************** 그림자 ********************
export const CommonShadow = `
    box-shadow: 
        4px 4px 7px rgba(0, 0, 255, 0.07), 
        5px 0px 29px #FFFFFF, 
        6px 6px 36px rgba(0, 0, 0, 0.06);
`;
export const IconShadow = `
    box-shadow: 
        2px 2px 7px rgba(39, 0, 121, 0.07),
        -2px -2px 9px #FFFFFF, 
        8px 6px 15px rgba(0, 0, 0, 0.11);
`;
export const ContShadow = `
        box-shadow: 10px 2px 36px 0px rgba(219, 206, 242, 0.3),
        10px 2px 36px 0px rgba(219, 206, 242, 0.3),
        4px 4px 11px 0px rgba(39, 0, 121, 0.07);
`;
export const SmallIconShadow = `
    filter: 
        drop-shadow(2px 2px 7px rgba(39, 0, 121, 0.07))
        drop-shadow(-1px -1px 9px #FFFFFF)
        drop-shadow(8px 6px 15px rgba(0, 0, 0, 0.11));
`;
export const BackGroundShadow = `
    filter: 
        drop-shadow(4px 4px 11px rgba(39, 0, 121, 0.07)) 
        drop-shadow(-4px -4px 20px rgba(79, 0, 216, 0.3))
        drop-shadow(10px 2px 36px rgba(219, 206, 242, 0.3));
`;

// ******************** 컨텐츠 ********************
//컨텐츠
export const Wrap = styled.div`
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding-top: 85px;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
    position: relative;
    overflow: hidden;
    ${BgCommon}
`;
export const Content = styled.div`
    height: calc(100vh - 85px);
    overflow: overlay;
    padding: 85px 0 95px;
    ${BgCommon}
`;
//컨텐츠 이너
export const ContentsInner = `
    width: calc(100% - 50px);
    margin: 0 auto;
    z-index: 3;
    position: relative;
`;
export const subContMargin = `
    margin-bottom: 40px;
`;
export const defaultContMargin = `
    margin-bottom: 80px;
`;

// ********************** 배경 **********************
//컨텐츠 상단 배경
export const ContentsBack = styled.div`
    width: 100%;
    height: calc(45vh - 250px);
    position: relative;
    z-index: 2;
    ${BgLightPurple} @media ${device.MaxHeightS} {
        height: 280px;
    }
`;
//배경 박스 이미지
export const BackImgLines = `
    width: 83%;
    position: absolute;
    z-index: 2;
`;
export const BackImgLinesTop = styled.img`
    top: -10%;
    right: -20%;
    ${BackImgLines}
`;
export const BackImgLinesBottom = styled.img`
    bottom: -10%;
    left: -20%;
    ${BackImgLines}
`;
export const BackImgWave = styled.img`
    width: 100%;
    margin-top: -1px;
    z-index: 1;
    position: relative;
    ${BackGroundShadow}
`;
//배경 박스 전체
export const BackCont = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;
//공통 input
export const CommonInput = styled.input.attrs({ maxLength: 6 })`
    ${CommonBox}
    ${CommonShadow}
`;
//공통 버튼
export const CommonBtn = styled.button`
    ${flexCenter}
    ${FontWhite}
    ${CommonBox}
    ${CommonShadow}

    ${({ startActive, percent }) => {
        return startActive || percent === 100
            ? css`
                  ${BgLightPurple}
              `
            : css`
                  ${BgUnable}
              `;
    }}
`;

// ********************* 퍼센트 바 ********************
export const PercentBar = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    ${CommonShadow}
    ${BgWhite}
`;
export const PercentBarFill = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s ease;
    ${BgLightPurple}

    ${({ typePercent }) =>
        typePercent >= 100 - typePercent
            ? css`
                  left: 0;
                  right: initial;
                  width: ${typePercent}%;
              `
            : css`
                  left: initial;
                  right: 0;
                  width: ${100 - typePercent}%;
              `};
`;

// ********************** 헤더 **********************
export const HeaderCont = styled.header`
    width: 100%;
    max-width: 750px;
    height: 85px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: 998;
    //padding-top: calc(env(safe-area-inset-bottom) + 10px);

    ${({ bgColor }) => {
        switch (bgColor) {
            case 'purple':
                return BgLightPurple;
            case 'black':
                return BgBlack;
            case 'noPurple':
                return BgCommon;
        }
    }}
    ${({ scrollHeader, pageName }) =>
        scrollHeader && pageName !== 'checkPage'
            ? css`
                  box-shadow: 0 0 7px #dcd5e8;
              `
            : css`
                  box-shadow: none;
              `};
`;
export const HeaderInner = styled.div`
    justify-content: flex-end;
    width: calc(100% - 30px);
    height: 100%;
    margin: 0 auto;
    ${flexItemCenter}
`;
export const HeaderLogo = styled.h1`
    width: auto;
    height: 60%;
    ${BoxCenter}
`;
export const HeaderLogoImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;
export const HeaderSwitch = styled.div`
    width: fit-content;
    gap: 0 12px;
    ${flexItemCenter}
`;
export const HeaderSwitchIcon = styled.button`
    width: 40px;
    height: 40px;
    position: relative;
`;
export const HeaderSwitchImg = styled.img`
    display: block;
    width: 35px;
    height: 35px;
    ${BoxCenter}
    ${SmallIconShadow}
`;

// ********************** 푸터 **********************
export const FooterTxt = `
    ${FontWhite}
    ${FontSmallSize}
`;
export const Footer = styled.footer`
    flex-direction: column;
    width: 100%;
    height: 95px;
    position: relative;
    z-index: 3;
    ${flexCenter}
    ${BgDarkPurple}
`;
export const FooterInfo = styled.ul`
    gap: 8px;
    ${flexCenter}
`;
export const FooterInfoList = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;

    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 14px;
        ${BgWhite}
    }

    &:last-child:after {
        display: none;
    }
`;
export const FooterInfoLink = styled(Link)`
    padding: 3px 2px;
    ${FooterTxt}
`;
export const FooterCopy = styled.div`
    ${FooterTxt}
`;
