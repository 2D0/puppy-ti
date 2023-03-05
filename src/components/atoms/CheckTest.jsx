import React, { useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = () => {
    const leftFoot = [1, 2, 3];
    const [question, setQuestion] = useState(questionData.question); //질문 index
    const [footCenter, setFootCenter] = useState(false); //센터 선택 여부
    //const [itemType, setItemType ] = useState('center');

    const idxToScore = {
        0: 3,
        1: 2,
        2: 1,
    };

    const scoreToIdx = {
        3: 0,
        2: 1,
        1: 2,
    };

    const footState = (type, itemIdx, idx) => {
        //아니다, 그렇다 index 초기화 및 센터 무조건 선택
        setFootCenter(true);
        //setItemType(type);
        //아니다, 그렇다 선택할 경우 각 조건에 따라 index 선택한 위치 값으로 변경
        setQuestion(
            question.map(item =>
                item.id === itemIdx
                    ? {
                          ...item,
                          state: {
                              type,
                              score: idxToScore[idx],
                          },
                      }
                    : item,
            ),
        );
    };
    return (
        <div>
            {question.map((item, itemIdx) => (
                <A.CheckQABox key={item.id}>
                    <A.CheckQATop>
                        <A.CheckQATitL>아니다</A.CheckQATitL>
                        <A.CheckQATitR>그렇다</A.CheckQATitR>
                    </A.CheckQATop>
                    <A.CheckQACont>
                        <A.CheckQATxt>질문 들어갈 부분 {item.id}</A.CheckQATxt>
                        <A.CheckQABtns>
                            {leftFoot.map((footItem, idx) => (
                                <A.CheckQABtn
                                    key={footItem}
                                    onClick={() => {
                                        footState('no', itemIdx, idx);
                                    }}
                                    type="button"
                                >
                                    <A.CheckFootLeft checkState={idx >= scoreToIdx[item.state.score]}>
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

                            {leftFoot.map((footItem, idx) => (
                                <A.CheckQABtn
                                    key={footItem}
                                    onClick={() => {
                                        footState('yes', itemIdx, idx);
                                    }}
                                    type="button"
                                >
                                    <A.CheckFootRight checkState={idx <= scoreToIdx[item.state.score]}>
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
