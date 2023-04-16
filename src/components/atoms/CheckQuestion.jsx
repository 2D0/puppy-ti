import React, { useMemo, useEffect, useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = ({ setPercent }) => {
    const [checkPercent, setCheckPercent] = useState(90); //문항 체크 진도율
    const [question, setQuestion] = useState(questionData.question); //질문 데이터
    const [score, setScore] = useState(questionData.scoreType);

    //배경 색상 변경 감지
    useEffect(() => {
        setPercent(checkPercent);
    }, [checkPercent]);

    //현재 선택한 문항의 state 값 변경
    const checkState = (itemIdx, scoreId) => {
        //각 문항 속 점수 클릭 시 새로운 객체를 만들어 점수 데이터 변경
        setQuestion(
            question.map((item, itemId) => {
                if (itemIdx === itemId) {
                    return {
                        ...item,
                        state: {
                            type: questionData.scoreType[scoreId].type,
                            score: questionData.scoreType[scoreId].score,
                        },
                    };
                } else {
                    return item;
                }
            }),
        );
        setScore(
            score.map(item => {
                return { ...item };
            }),
        );
    };

    const [mbtiEnergy, setMbtiEnergy] = useState(null);
    const [mbtiInformation, setMbtiInformation] = useState(null);
    const [mbtiDecisions, setMbtiDecisions] = useState(null);
    const [mbtiLifestyle, setMbtiLifestyle] = useState(null);

    let checkCount = 0; //선택한 문항 개수
    let mbtiEnergyCount = 0; //I & E 개수
    let mbtiInformationCount = 0; //S & N 개수
    let mbtiDecisionsCount = 0; //T & F 개수
    let mbtiLifestyleCount = 0; //J & P 개수

    //선택한 문항의 점수가 null이 아닐 경우 checkCount 체크한 개수만큼 증가
    const questionFilterScore = item => {
        if (item.state.score !== null) {
            switch (item.mbti) {
                case 1:
                    switch (item.state.type) {
                        case 'yes':
                            mbtiEnergyCount++;
                            console.log(item);
                            console.log(item.state.score * mbtiEnergyCount);
                            checkCount++;
                            break;
                        case 'no':
                            mbtiEnergyCount++;
                            console.log(item);
                            console.log(item.state.score * mbtiEnergyCount);
                            checkCount++;
                            break;
                        case 'center':
                            mbtiEnergyCount++;
                            console.log(item);
                            console.log(item.state.score * mbtiEnergyCount);
                            checkCount++;
                            break;
                        default:
                            mbtiEnergyCount++;
                            console.log(item.state.score * mbtiEnergyCount);
                            checkCount++;
                            break;
                    }
                    break;
                case 2:
                    mbtiInformationCount++;
                    checkCount++;
                    switch (item.state.type) {
                        case 'yes':
                            console.log(item);
                            console.log(item.state.score * mbtiInformationCount);
                            break;
                        case 'no':
                            console.log(item);
                            console.log(item.state.score * mbtiInformationCount);
                            break;
                        case 'center':
                            console.log(item);
                            console.log(item.state.score * mbtiInformationCount);
                            break;
                        default:
                            console.log(item.state.score * mbtiInformationCount);
                            break;
                    }
                    break;
                case 3:
                    mbtiDecisionsCount++;
                    checkCount++;
                    switch (item.state.type) {
                        case 'yes':
                            console.log(item);
                            console.log(item.state.score * mbtiDecisionsCount);
                            break;
                        case 'no':
                            console.log(item);
                            console.log(item.state.score * mbtiDecisionsCount);
                            break;
                        case 'center':
                            console.log(item);
                            console.log(item.state.score * mbtiDecisionsCount);
                            break;
                        default:
                            console.log(item.state.score * mbtiDecisionsCount);
                            break;
                    }
                    break;
                case 4:
                    mbtiLifestyleCount++;
                    checkCount++;
                    switch (item.state.type) {
                        case 'yes':
                            console.log(item);
                            console.log(item.state.score * mbtiLifestyleCount);
                            break;
                        case 'no':
                            console.log(item);
                            console.log(item.state.score * mbtiLifestyleCount);
                            break;
                        case 'center':
                            console.log(item);
                            console.log(item.state.score * mbtiLifestyleCount);
                            break;
                        default:
                            console.log(item.state.score * mbtiLifestyleCount);
                            break;
                    }
                    break;
                default:
                    return false;
            }
            /*if (item.state.type === 'yes') {
                console.log(item.state.type);
                mbtiEnergyCount++;
                return checkCount++;
            } else {
                console.log(item.state.type);
                mbtiEnergyCount++;
                return checkCount++;
            }*/
        }
    };

    const questionOnePoint = 100 / question.length; //문항 1개의 점수
    const filterScore = question.filter(questionFilterScore); //선택한 문항만 추출

    useEffect(() => {
        //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
        setCheckPercent(questionOnePoint * checkCount);

        //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
        setMbtiEnergy(mbtiEnergyCount);
        setMbtiInformation(mbtiInformationCount);
        setMbtiDecisions(mbtiDecisionsCount);
        setMbtiLifestyle(mbtiLifestyleCount);
    }, [checkCount]);

    return (
        <div>
            i,e:{mbtiEnergy}, s,n:{mbtiInformation}, t,f:{mbtiDecisions}, j,p:{mbtiLifestyle}
            {question.map((item, itemIdx) => (
                <A.CheckQABox key={item.id}>
                    <A.CheckQATop>
                        <A.CheckQATitL>아니다</A.CheckQATitL>
                        <A.CheckQATitR>그렇다</A.CheckQATitR>
                    </A.CheckQATop>
                    <A.CheckQACont>
                        <A.CheckQATxt>
                            {item.state.type} {item.state.score}점 <br />
                            {item.text}
                        </A.CheckQATxt>
                        <A.CheckQABtns>
                            {questionData.scoreType.map((scoreItem, scoreIdx) => (
                                <A.CheckQABtn
                                    key={scoreItem.id}
                                    onClick={() => {
                                        checkState(item.id, scoreItem.id);
                                        // console.log(score.length, score[scoreIdx]);
                                    }}
                                    type="button"
                                >
                                    <A.CheckFoot
                                        item={item}
                                        itemIdx={itemIdx}
                                        score={score}
                                        scoreIdx={scoreIdx}
                                        scoreCount={scoreItem.score}
                                    >
                                        <Foot />
                                    </A.CheckFoot>
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
