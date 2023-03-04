import React, { useEffect, useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = () => {
    const leftFoot = [1, 2, 3];
    const [question, setQuestion] = useState(questionData.question); //질문 index
    const [scoreData, setScoreData] = useState(0);
    const [typeData, setTypeData] = useState('');
    const [idxData, setIdxData] = useState(null);

    const noIdxToScore = {
        0: 1,
        1: 2,
        2: 3,
    };
    const noScoreToIdx = {
        3: 0,
        2: 1,
        1: 2,
    };
    const yesIdxToScore = {
        0: 3,
        1: 2,
        2: 1,
    };
    const yesScoreToIdx = {
        3: 0,
        2: 1,
        1: 2,
    };

    useEffect(() => {
        if (idxData) {
            switch (typeData) {
                case 'yes':
                    setScoreData(yesIdxToScore[idxData]);
                    break;
                case 'no':
                    setScoreData(noIdxToScore[idxData]);
                    break;
                case 'center':
                    setScoreData(0);
                    break;
            }
        }
    }, [idxData]);

    useEffect(() => {
        if (typeData) {
            console.log(typeData);
        }
    }, [typeData]);

    useEffect(() => {
        if (!scoreData) return;
        //아니다, 그렇다 선택할 경우 각 조건에 따라 index 선택한 위치 값으로 변경
        setQuestion(
            question.map(item => {
                return {
                    ...item,
                    state: {
                        type: typeData,
                        score: scoreData,
                    },
                };
            }),
        );
    }, [scoreData]);

    const footState = (type, itemIdx, idx) => {
        /*console.log('type', type);
        console.log('itemIdx', itemIdx);
        console.log('idx', idx);*/

        setTypeData(type);
        setIdxData(idx);
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
                        <A.CheckQATxt>질문 들어갈 부분 {item.state.score}</A.CheckQATxt>
                        <A.CheckQABtns>
                            {leftFoot.map((footItem, idx) => (
                                <A.CheckQABtn
                                    key={footItem}
                                    onClick={() => {
                                        footState('no', itemIdx, idx);
                                    }}
                                    type="button"
                                >
                                    <A.CheckFootLeft checkState={typeData === 'no' && idx >= noScoreToIdx[item.state.score]}>
                                        <Foot />
                                    </A.CheckFootLeft>
                                </A.CheckQABtn>
                            ))}

                            <A.CheckQABtn
                                onClick={() => {
                                    footState('center', itemIdx, 0);
                                }}
                                type="button"
                            >
                                <A.CheckFootCenter checkState={0 === item.state.score}>
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
                                    <A.CheckFootRight checkState={typeData === 'yes' && idx <= yesScoreToIdx[item.state.score]}>
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
