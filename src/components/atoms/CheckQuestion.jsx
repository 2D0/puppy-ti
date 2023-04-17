import React, { useEffect, useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = ({
    setPercent,
    setPercentEnergy,
    setPercentInformation,
    setPercentIDecisions,
    setPercentLifestyle,
    setScoreI,
    setScoreE,
    setScoreS,
    setScoreN,
    setScoreT,
    setScoreF,
    setScoreJ,
    setScoreP,
    scoreI,
    scoreE,
    scoreS,
    scoreN,
    scoreT,
    scoreF,
    scoreJ,
    scoreP,
}) => {
    const [checkPercent, setCheckPercent] = useState(null); //문항 체크 진도율
    const [question, setQuestion] = useState(questionData.question); //질문 데이터
    const [score, setScore] = useState(questionData.scoreType);
    const [scoreCount, setScoreCount] = useState(questionData.scoreCount);

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
    let mbtiCountI = 1; //I & E 개수
    let mbtiCountS = 0; //S & N 개수
    let mbtiCountT = 0; //T & F 개수
    let mbtiCountJ = 0; //J & P 개수
    let mbtiCountE = 0; //I & E 개수
    let mbtiCountN = 0; //S & N 개수
    let mbtiCountF = 0; //T & F 개수
    let mbtiCountP = 0; //J & P 개수

    //선택한 문항의 점수가 null이 아닐 경우 checkCount 체크한 개수만큼 증가
    const questionFilterScore = item => {
        if (item.state.score !== null) {
            checkCount++;
        }
    };
    const questionFilterScoreCount = item => {
        switch (item.name) {
            case 'energy':
                switch (item.mbti.name) {
                    case 'i':
                        switch (item.mbti.type.name) {
                            case 'no':
                                item.mbti.score.score0 = mbtiCountI++;
                        }
                }
        }
    };

    const questionAllScore = allScore => {
        if (Array.isArray(allScore)) {
            let sumI = 0;
            let sumE = 0;
            let sumS = 0;
            let sumN = 0;
            let sumT = 0;
            let sumF = 0;
            let sumJ = 0;
            let sumP = 0;
            // let score0 = 0;
            // let score1 = 0;
            // let score2 = 0;
            // let score3 = 0;

            allScore.map(item => {
                // let item.state.score = item.state.score;
                switch (item.mbti) {
                    case 'I':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountI = mbtiCountI += item.state.score);

                            // switch (item.state.score) {
                            //     case 0:
                            //         return (score0 = score0++);
                            //     case 1:
                            //         return (score1 = score1++);
                            //     case 2:
                            //         return (score2 = score2++);
                            //     case 3:
                            //         return (score3 = score3++);
                            //     default:
                            //         return false;
                            // }
                            case 'no':
                                return (mbtiCountE = mbtiCountE += item.state.score);
                            default:
                                return false;
                        }
                    case 'E':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountE = mbtiCountE += item.state.score);
                            case 'no':
                                return (mbtiCountI = mbtiCountI += item.state.score);
                            default:
                                return false;
                        }
                    case 'S':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountS = mbtiCountS += item.state.score);
                            case 'no':
                                return (mbtiCountN = mbtiCountN += item.state.score);
                            default:
                                return false;
                        }
                    case 'N':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountN = mbtiCountN += item.state.score);
                            case 'no':
                                return (mbtiCountS = mbtiCountS += item.state.score);
                            default:
                                return false;
                        }
                    case 'T':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountT = mbtiCountT += item.state.score);
                            case 'no':
                                return (mbtiCountF = mbtiCountF += item.state.score);
                            default:
                                return false;
                        }
                    case 'F':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountF = mbtiCountF += item.state.score);
                            case 'no':
                                return (mbtiCountT = mbtiCountT += item.state.score);
                            default:
                                return false;
                        }
                    case 'J':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountJ = mbtiCountJ += item.state.score);
                            case 'no':
                                return (mbtiCountP = mbtiCountP += item.state.score);
                            default:
                                return false;
                        }
                    case 'P':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                return (mbtiCountP = mbtiCountP += item.state.score);
                            case 'no':
                                return (mbtiCountJ = mbtiCountJ += item.state.score);
                            default:
                                return false;
                        }
                    default:
                        return false;
                }
            });
        }
    };

    const questionOnePoint = 100 / question.length; //문항 1개의 점수
    const filterScore = question.filter(questionFilterScore); //선택한 문항만 추출
    const filterScoreCount = scoreCount.filter(questionFilterScoreCount); //선택한 문항만 추출

    useEffect(() => {
        //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
        setCheckPercent(questionOnePoint * checkCount);
    }, [checkCount]);
    useEffect(() => {
        //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
        console.log(mbtiCountI);
    }, [mbtiCountI]);

    useEffect(() => {
        questionAllScore(question);
    }, [question]);

    useEffect(() => {
        setScoreI(mbtiCountI);
        setScoreE(mbtiCountE);
        setScoreS(mbtiCountS);
        setScoreN(mbtiCountN);
        setScoreT(mbtiCountT);
        setScoreF(mbtiCountF);
        setScoreJ(mbtiCountJ);
        setScoreP(mbtiCountP);
    }, [question]);

    return (
        <A.CheckQABoxs>
            <h1>
                I:{scoreI} &nbsp; E:{scoreE} &nbsp; S:{scoreS} &nbsp; N:{scoreN} &nbsp; T:{scoreT} &nbsp; F:{scoreF} &nbsp; J:{scoreJ}{' '}
                &nbsp; P:{scoreP}
            </h1>
            i,e:{mbtiEnergy}, s,n:{mbtiInformation}, t,f:{mbtiDecisions}, j,p:{mbtiLifestyle}
            {question.map((item, itemIdx) => (
                <A.CheckQABoxList key={item.id}>
                    <A.CheckQATop>
                        <A.CheckQATitL>아니다</A.CheckQATitL>
                        <A.CheckQATitR>그렇다</A.CheckQATitR>
                    </A.CheckQATop>
                    <A.CheckQACont>
                        <A.CheckQATxt>
                            {item.mbti} {item.state.score}점 <br />
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
                </A.CheckQABoxList>
            ))}
        </A.CheckQABoxs>
    );
};
export default CheckQuestion;
