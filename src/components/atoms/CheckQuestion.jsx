import React, { useEffect, useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = ({ setPercent }) => {
    const [question, setQuestion] = useState(questionData.question); //질문 index
    const [btnStateId, setBtnStateId] = useState(null); //선택한 점수의 id
    const [typeState, setTypeState] = useState(''); //아니다 혹은 그렇다
    const [scoreState, setScoreState] = useState(null); //점수
    const [scoreBtnId, setScoreBtnId] = useState(null);
    const [questionId, setQuestionId] = useState(null);
    const [checkPercent, setCheckPercent] = useState(90);

    //배경 색상 변경 감지
    useEffect(() => {
        setPercent(checkPercent);
    }, [checkPercent]);
    const switchScore = () => {
        switch (btnStateId) {
            case 1:
                setTypeState('no');
                setScoreState(3);
                break;
            case 2:
                setTypeState('no');
                setScoreState(2);
                break;
            case 3:
                setTypeState('no');
                setScoreState(1);
                break;
            case 4:
                setTypeState('center');
                setScoreState(0);
                break;
            case 5:
                setTypeState('yes');
                setScoreState(1);
                break;
            case 6:
                setTypeState('yes');
                setScoreState(2);
                break;
            case 7:
                setTypeState('yes');
                setScoreState(3);
                break;
            default:
                return false;
        }

        setQuestion(
            question.map(item =>
                item.id === questionId
                    ? {
                          ...item,
                          state: {
                              type: typeState,
                              score: scoreState,
                          },
                      }
                    : item,
            ),
            /*question[questionId]({
                ...question,
                state: {
                    type: typeState,
                    score: scoreState,
                },
            }),*/
        );
    };

    useEffect(() => {
        question.id = questionId && switchScore();
    }, [btnStateId]);

    const checkState = (itemId, btnIdx, btnId) => {
        setQuestionId(itemId); //문항의 고유 아이디 값
        setScoreBtnId(btnIdx); //점수의 인덱스 값
        setBtnStateId(btnId); //점수의 고유 id 값

        //questionId === itemId && switchScore();
        switchScore();
    };

    return (
        <div>
            {`선택한 점수의 아이디 : ${btnStateId}, 점수 아이디 - 4 : ${btnStateId - 4}, 선택한 점수 : ${scoreState},`}
            {`문항 : ${question[questionId]}, 타입 : ${typeState}`}
            {question.map((item, itemIdx) => (
                <A.CheckQABox key={item.id}>
                    <A.CheckQATop>
                        <A.CheckQATitL>아니다</A.CheckQATitL>
                        <A.CheckQATitR>그렇다</A.CheckQATitR>
                    </A.CheckQATop>
                    <A.CheckQACont>
                        <A.CheckQATxt>
                            {questionId}번 째 /{typeState} {scoreState}점{item.text}
                        </A.CheckQATxt>
                        <A.CheckQABtns>
                            {questionData.scoreType.map((scoreBtn, scoreBtnIdx) => (
                                <A.CheckQABtn
                                    key={scoreBtn.id}
                                    onClick={() => {
                                        checkState(itemIdx, scoreBtnIdx, scoreBtn.id);
                                    }}
                                    type="button"
                                >
                                    scoreBtnIdx : {scoreBtnIdx}
                                    <br />
                                    scoreBtn.id : {scoreBtn.id}
                                    <br />
                                    btnStateId : {btnStateId}
                                    <br />
                                    scoreBtnId : {scoreBtnId}
                                    <br />
                                    scoreState : {scoreState}
                                    <A.CheckFoot
                                        defaultState={scoreBtn.id}
                                        scoreBtnId={scoreBtnId}
                                        btnId={scoreBtn.id === btnStateId}
                                        btnStateId={btnStateId}
                                        checkState={questionId === item.id}
                                        scoreState={scoreState}
                                        typeState={typeState}
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
