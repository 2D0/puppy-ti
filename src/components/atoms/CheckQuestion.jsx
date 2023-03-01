import React, { useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = () => {
    const { question } = questionData; //질문 데이터

    const [questionIdx, setQuestionIdx] = useState(0); //질문 index
    const [leftIdx, setLeftIdx] = useState(2); //아니다 index
    const [rightIdx, setRightIdx] = useState(-1); //그렇다 index
    const [footCenter, setFootCenter] = useState(false); //센터 선택 여부

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
                    {questionIdx}
                    <A.CheckQATop>
                        <A.CheckQATitL>아니다</A.CheckQATitL>
                        <A.CheckQATitR>그렇다</A.CheckQATitR>
                    </A.CheckQATop>
                    <A.CheckQACont>
                        <A.CheckQATxt>질문 들어갈 부분 {item.id}</A.CheckQATxt>
                        <A.CheckQABtns>
                            {[item.score].map((item, idx) => (
                                <A.CheckQABtn
                                    key={item}
                                    onClick={() => {
                                        footState('left', idx - 1);
                                    }}
                                    type="button"
                                >
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

                            {[item.score].map((item, idx) => (
                                <A.CheckQABtn
                                    key={item}
                                    onClick={() => {
                                        console.log(`low:${item.low}, middle:${item.middle}`);
                                        footState('right', idx + 1);
                                    }}
                                    type="button"
                                >
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
