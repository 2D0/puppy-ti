import React, { useEffect, useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';
//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = () => {
    const footLeft = [3, 2, 1]; //아니다 점수
    const footRight = [1, 2, 3]; //그렇다 점수

    const [leftIdx, setLeftIdx] = useState(2); //아니다 index
    const [rightIdx, setRightIdx] = useState(-1); //그렇다 index
    const [footCenter, setFootCenter] = useState(false); //센터 선택 여부
    const { question } = questionData;

    const footState = (type, idx) => {
        //아니다, 그렇다 index 초기화 및 센터 무조건 선택
        setRightIdx(-1);
        setLeftIdx(2);
        setFootCenter(true);

        //아니다, 그렇다 선택할 경우 각 조건에 따라 index 선택한 위치 값으로 변경
        if (type === 'left') {
            setLeftIdx(idx);
        } else if (type === 'right') {
            setRightIdx(idx);
        }
    };
    return (
        <div>
            {question.map(item => (
                <A.CheckQABox key={item.id}>
                    <A.CheckQATop>
                        <A.CheckQATitL>아니다</A.CheckQATitL>
                        <A.CheckQATitR>그렇다</A.CheckQATitR>
                    </A.CheckQATop>
                    <A.CheckQACont>
                        <A.CheckQATxt>질문 들어갈 부분</A.CheckQATxt>
                        <A.CheckQABtns>
                            {footLeft.map((list, idx) => (
                                <A.CheckQABtn key={idx} onClick={() => footState('left', idx - 1)} type="button">
                                    <A.CheckFootLeft checkState={idx > leftIdx}>
                                        <Foot />
                                    </A.CheckFootLeft>
                                </A.CheckQABtn>
                            ))}

                            <A.CheckQABtn
                                onClick={() => {
                                    footState('center');
                                }}
                                type="button"
                            >
                                <A.CheckFootCenter footCenter={footCenter}>
                                    <Foot />
                                </A.CheckFootCenter>
                            </A.CheckQABtn>

                            {footRight.map((list, idx) => (
                                <A.CheckQABtn key={idx} onClick={() => footState('right', idx + 1)} type="button">
                                    <A.CheckFootRight checkState={idx < rightIdx}>
                                        <Foot />
                                    </A.CheckFootRight>
                                </A.CheckQABtn>
                            ))}
                        </A.CheckQABtns>
                    </A.CheckQACont>
                </A.CheckQABox>
            ))}
        </div>
    );
};
export default CheckQuestion;
