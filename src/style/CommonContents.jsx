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

// ********************** 블럭 **********************
//기본 버튼, 인풋 블럭
export const CommonBox = `
    width: 65%;
    height: 60px;
    margin:0 auto;
    font-size: 20px;
    border-radius: 10px;
    text-align : center;
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
export const PhotoCenter = `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

//글자 자르기
export const Split = `
    display: block;
    height:fit-content;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow:hidden;
    text-overflow:ellipsis;
`;
export const SplitLine = `
    display: -webkit-box;
    height:fit-content;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    overflow:hidden;
    text-overflow:ellipsis;
`;

//기본 버튼
export const CommonButton = `
    font-size: 22px;
    ${FontWhite}
`;

// ********************* 폰트 ********************
export const FontSmallSize = `
    font-size: 17px;
`;
export const FontMediumSize = `
    font-size: 70px;
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
export const SmallIconShadow = `
    filter: 
        drop-shadow(2px 2px 7px rgba(39, 0, 121, 0.07))
        drop-shadow(-1px -1px 9px #FFFFFF)
        drop-shadow(8px 6px 15px rgba(0, 0, 0, 0.11));
`;
export const BackGroundShadow = `
    filter: drop-shadow(4px 4px 11px rgba(39, 0, 121, 0.07)) drop-shadow(-4px -4px 20px rgba(79, 0, 216, 0.3))
        drop-shadow(10px 2px 36px rgba(219, 206, 242, 0.3));
`;

// ******************** 컨텐츠 ********************
//컨텐츠
export const Wrap = styled.div`
    width: 100%;
    max-width: 750px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 85px 0 95px;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
    position: relative;
    ${BgCommon}

    @media ${device.MaxHeightS} {
        min-height: 1000px;
    }
`;
export const Content = styled.div`
    height: 100%;
`;
//컨텐츠 이너
export const ContentsInner = styled.div`
    width: calc(100% - 30px);
    margin: 0 auto;
    z-index: 3;
    position: relative;
`;

// ********************** 배경 **********************
//컨텐츠 상단 배경
export const ContentsBack = styled.div`
    width: 100%;
    height: calc(45vh - 250px);
    position: relative;
    z-index: 2;
    ${BgLightPurple}

    @media ${device.MaxHeightS} {
        height: 280px;
    }
`;
//배경 박스 이미지
export const BackImg = styled.img`
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
    display: flex;
    align-items: center;
    justify-content: center;
    ${FontWhite}
    ${CommonBox}
    ${CommonShadow}
    ${({ startActive }) =>
        startActive
            ? css`
                  ${BgLightPurple}
              `
            : css`
                  ${BgUnable}
              `}
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
    width: ${({ percent }) => percent}%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    ${BgLightPurple}
`;

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
        return () => {
            switch (bgColor) {
                case 'purple':
                    return BgLightPurple;
                case 'black':
                    return BgBlack;
                case 'noPurple':
                    return BgCommon;
            }
        };
    }}
    ${({ scrollHeader }) =>
        scrollHeader &&
        css`
            box-shadow: 0 0 7px #dcd5e8;
        `};
`;
export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: calc(100% - 30px);
    height: 100%;
    margin: 0 auto;
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
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 0 12px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95px;
    position: absolute;
    left: 0;
    bottom: 0;
    ${BgDarkPurple}
`;
export const FooterInfo = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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
