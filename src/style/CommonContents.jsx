import styled from 'styled-components';

// **************** 컨텐츠 ****************
//이너
export const ContentsInner = styled.div`
    width: calc(100% - 30px);
    margin: 0 auto;
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

//원형
export const CircleBox = `
    border-radius: 50%;
    overflow: hidden;
`;

// **************** 버튼 ****************
export const CommonBox = `
    width: 100%;
    height: 60px;
    border-radius: 10px;
`;
export const CommonButton = `
    font-size: 22px;
    color: #fff;
`;

// **************** 그림자 ****************
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
    box-shadow: 
        2px 2px 7px rgba(39, 0, 121, 0.07),
        -1px -1px 9px #FFFFFF,
        8px 6px 15px rgba(0, 0, 0, 0.11);
`;
export const BackGroundShadow = `
    box-shadow: 
        4px 4px 11px rgba(39, 0, 121, 0.07), 
        -4px -4px 20px rgba(79, 0, 216, 0.3), 
        10px 2px 36px rgba(219, 206, 242, 0.3);
`;
