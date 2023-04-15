import React, { useEffect, useState } from 'react';
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

    return (
        <div>
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
                                        console.log(score);
                                        console.log(score.length, score[scoreIdx]);
                                    }}
                                    type="button"
                                >
                                    <A.CheckFoot
                                        itemCount={item.id === itemIdx}
                                        itemIdx={itemIdx}
                                        score={score[scoreIdx].score}
                                        scoreIdx={scoreIdx}
                                        scoreCount={scoreItem.score}
                                        scoreType={item.state.type}
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
