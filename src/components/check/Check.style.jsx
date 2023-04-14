import styled, { css } from 'styled-components';
import { Wrap } from '@/style/CommonContents.jsx';

// ******************** 컨텐츠 ********************
//컨텐츠
export const CheckCont = styled(Wrap)`
    padding-bottom: 95px;
    padding-top: 255px;
    box-shadow: none;
    transition: all 0.3s ease;

    ${({ percent }) =>
        percent === 100 &&
        css`
            background-color: #333;
        `}
`;

// ******************** 질문 박스 ********************
export const CheckQACont = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 90px 0;
    margin-bottom: 90px;
`;

// ******************** 하단 ********************
export const CheckBtn = styled.div`
    display: flex;
    justify-content: center;
`;
