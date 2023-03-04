import React, { useCallback, useEffect, useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = () => {
    const [question, setQuestion] = useState(questionData.question); //질문 index
    const [typeState, setTypeState] = useState('');
    const [scoreState, setScoreState] = useState(null);

    const stateEffect = useCallback(() => {
        switch (scoreState) {
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
            question.map(item => {
                return {
                    ...item,
                    state: {
                        type: typeState,
                        score: scoreState,
                    },
                };
            }),
        );
    }, []);
    useEffect(() => {
        stateEffect();
    }, [scoreState]);

    const checkState = (itemIdx, scoreId) => {
        setScoreState(scoreId);
        console.log(scoreState);
        //console.log('typeState:', typeState, 'scoreState:', scoreState);
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
                            {questionData.scoreType.map(score => (
                                <A.CheckQABtn
                                    key={score.id}
                                    onClick={() => {
                                        checkState(itemIdx, score.id);
                                    }}
                                    type="button"
                                >
                                    {score.id}
                                    <A.CheckFoot checkState={score.id}>
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
