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
    let mbtiCountI = 0; //I & E 개수
    let mbtiCountScoreYesI0 = 0; //I & E 개수
    let mbtiCountScoreYesI1 = 0; //I & E 개수
    let mbtiCountScoreYesI2 = 0; //I & E 개수
    let mbtiCountScoreYesI3 = 0; //I & E 개수
    let mbtiCountScoreNoI0 = 0; //I & E 개수
    let mbtiCountScoreNoI1 = 0; //I & E 개수
    let mbtiCountScoreNoI2 = 0; //I & E 개수
    let mbtiCountScoreNoI3 = 0; //I & E 개수
    let mbtiCountE = 0; //I & E 개수
    let mbtiCountScoreYesE0 = 0; //I & E 개수
    let mbtiCountScoreYesE1 = 0; //I & E 개수
    let mbtiCountScoreYesE2 = 0; //I & E 개수
    let mbtiCountScoreYesE3 = 0; //I & E 개수
    let mbtiCountScoreNoE0 = 0; //I & E 개수
    let mbtiCountScoreNoE1 = 0; //I & E 개수
    let mbtiCountScoreNoE2 = 0; //I & E 개수
    let mbtiCountScoreNoE3 = 0; //I & E 개수
    let mbtiCountS = 0; //S & N 개수
    let mbtiCountScoreYesS0 = 0; //S & N 개수
    let mbtiCountScoreYesS1 = 0; //S & N 개수
    let mbtiCountScoreYesS2 = 0; //S & N 개수
    let mbtiCountScoreYesS3 = 0; //S & N 개수
    let mbtiCountScoreNoS0 = 0; //S & N 개수
    let mbtiCountScoreNoS1 = 0; //S & N 개수
    let mbtiCountScoreNoS2 = 0; //S & N 개수
    let mbtiCountScoreNoS3 = 0; //S & N 개수
    let mbtiCountN = 0; //S & N 개수
    let mbtiCountScoreYesN0 = 0; //S & N 개수
    let mbtiCountScoreYesN1 = 0; //S & N 개수
    let mbtiCountScoreYesN2 = 0; //S & N 개수
    let mbtiCountScoreYesN3 = 0; //S & N 개수
    let mbtiCountScoreNoN0 = 0; //S & N 개수
    let mbtiCountScoreNoN1 = 0; //S & N 개수
    let mbtiCountScoreNoN2 = 0; //S & N 개수
    let mbtiCountScoreNoN3 = 0; //S & N 개수
    let mbtiCountT = 0; //T & F 개수
    let mbtiCountScoreYesT0 = 0; //T & F 개수
    let mbtiCountScoreYesT1 = 0; //T & F 개수
    let mbtiCountScoreYesT2 = 0; //T & F 개수
    let mbtiCountScoreYesT3 = 0; //T & F 개수
    let mbtiCountScoreNoT0 = 0; //T & F 개수
    let mbtiCountScoreNoT1 = 0; //T & F 개수
    let mbtiCountScoreNoT2 = 0; //T & F 개수
    let mbtiCountScoreNoT3 = 0; //T & F 개수
    let mbtiCountF = 0; //T & F 개수
    let mbtiCountScoreYesF0 = 0; //T & F 개수
    let mbtiCountScoreYesF1 = 0; //T & F 개수
    let mbtiCountScoreYesF2 = 0; //T & F 개수
    let mbtiCountScoreYesF3 = 0; //T & F 개수
    let mbtiCountScoreNoF0 = 0; //T & F 개수
    let mbtiCountScoreNoF1 = 0; //T & F 개수
    let mbtiCountScoreNoF2 = 0; //T & F 개수
    let mbtiCountScoreNoF3 = 0; //T & F 개수
    let mbtiCountJ = 0; //J & P 개수
    let mbtiCountScoreYesJ0 = 0; //J & P 개수
    let mbtiCountScoreYesJ1 = 0; //J & P 개수
    let mbtiCountScoreYesJ2 = 0; //J & P 개수
    let mbtiCountScoreYesJ3 = 0; //J & P 개수
    let mbtiCountScoreNoJ0 = 0; //J & P 개수
    let mbtiCountScoreNoJ1 = 0; //J & P 개수
    let mbtiCountScoreNoJ2 = 0; //J & P 개수
    let mbtiCountScoreNoJ3 = 0; //J & P 개수
    let mbtiCountP = 0; //J & P 개수
    let mbtiCountScoreYesP0 = 0; //J & P 개수
    let mbtiCountScoreYesP1 = 0; //J & P 개수
    let mbtiCountScoreYesP2 = 0; //J & P 개수
    let mbtiCountScoreYesP3 = 0; //J & P 개수
    let mbtiCountScoreNoP0 = 0; //J & P 개수
    let mbtiCountScoreNoP1 = 0; //J & P 개수
    let mbtiCountScoreNoP2 = 0; //J & P 개수
    let mbtiCountScoreNoP3 = 0; //J & P 개수

    //선택한 문항의 점수가 null이 아닐 경우 checkCount 체크한 개수만큼 증가
    const questionFilterScore = item => {
        if (item.state.score !== null) {
            checkCount++;
        }
    };

    const questionAllScore = allScore => {
        if (Array.isArray(allScore)) {
            allScore.map(item => {
                switch (item.mbti) {
                    case 'I':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesI0++;
                                    case 1:
                                        return mbtiCountScoreYesI1++;
                                    case 2:
                                        return mbtiCountScoreYesI2++;
                                    case 3:
                                        return mbtiCountScoreYesI3++;
                                }
                                return (mbtiCountI = mbtiCountI += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoI0++;
                                    case 1:
                                        return mbtiCountScoreNoI1++;
                                    case 2:
                                        return mbtiCountScoreNoI2++;
                                    case 3:
                                        return mbtiCountScoreNoI3++;
                                }
                                return (mbtiCountE = mbtiCountE += item.state.score);
                            default:
                                return false;
                        }
                    case 'E':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesE0++;
                                    case 1:
                                        return mbtiCountScoreYesE1++;
                                    case 2:
                                        return mbtiCountScoreYesE2++;
                                    case 3:
                                        return mbtiCountScoreYesE3++;
                                }
                                return (mbtiCountE = mbtiCountE += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoE0++;
                                    case 1:
                                        return mbtiCountScoreNoE1++;
                                    case 2:
                                        return mbtiCountScoreNoE2++;
                                    case 3:
                                        return mbtiCountScoreNoE3++;
                                }
                                return (mbtiCountI = mbtiCountI += item.state.score);
                            default:
                                return false;
                        }
                    case 'S':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesS0++;
                                    case 1:
                                        return mbtiCountScoreYesS1++;
                                    case 2:
                                        return mbtiCountScoreYesS2++;
                                    case 3:
                                        return mbtiCountScoreYesS3++;
                                }
                                return (mbtiCountS = mbtiCountS += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoS0++;
                                    case 1:
                                        return mbtiCountScoreNoS1++;
                                    case 2:
                                        return mbtiCountScoreNoS2++;
                                    case 3:
                                        return mbtiCountScoreNoS3++;
                                }
                                return (mbtiCountN = mbtiCountN += item.state.score);
                            default:
                                return false;
                        }
                    case 'N':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesN0++;
                                    case 1:
                                        return mbtiCountScoreYesN1++;
                                    case 2:
                                        return mbtiCountScoreYesN2++;
                                    case 3:
                                        return mbtiCountScoreYesN3++;
                                }
                                return (mbtiCountN = mbtiCountN += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoN0++;
                                    case 1:
                                        return mbtiCountScoreNoN1++;
                                    case 2:
                                        return mbtiCountScoreNoN2++;
                                    case 3:
                                        return mbtiCountScoreNoN3++;
                                }
                                return (mbtiCountS = mbtiCountS += item.state.score);
                            default:
                                return false;
                        }
                    case 'T':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesT0++;
                                    case 1:
                                        return mbtiCountScoreYesT1++;
                                    case 2:
                                        return mbtiCountScoreYesT2++;
                                    case 3:
                                        return mbtiCountScoreYesT3++;
                                }
                                return (mbtiCountT = mbtiCountT += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoT0++;
                                    case 1:
                                        return mbtiCountScoreNoT1++;
                                    case 2:
                                        return mbtiCountScoreNoT2++;
                                    case 3:
                                        return mbtiCountScoreNoT3++;
                                }
                                return (mbtiCountF = mbtiCountF += item.state.score);
                            default:
                                return false;
                        }
                    case 'F':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesF0++;
                                    case 1:
                                        return mbtiCountScoreYesF1++;
                                    case 2:
                                        return mbtiCountScoreYesF2++;
                                    case 3:
                                        return mbtiCountScoreYesF3++;
                                }
                                return (mbtiCountF = mbtiCountF += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoF0++;
                                    case 1:
                                        return mbtiCountScoreNoF1++;
                                    case 2:
                                        return mbtiCountScoreNoF2++;
                                    case 3:
                                        return mbtiCountScoreNoF3++;
                                }
                                return (mbtiCountT = mbtiCountT += item.state.score);
                            default:
                                return false;
                        }
                    case 'J':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesJ0++;
                                    case 1:
                                        return mbtiCountScoreYesJ1++;
                                    case 2:
                                        return mbtiCountScoreYesJ2++;
                                    case 3:
                                        return mbtiCountScoreYesJ3++;
                                }
                                return (mbtiCountJ = mbtiCountJ += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoJ0++;
                                    case 1:
                                        return mbtiCountScoreNoJ1++;
                                    case 2:
                                        return mbtiCountScoreNoJ2++;
                                    case 3:
                                        return mbtiCountScoreNoJ3++;
                                }
                                return (mbtiCountP = mbtiCountP += item.state.score);
                            default:
                                return false;
                        }
                    case 'P':
                        switch (item.state.type) {
                            case 'yes':
                            case 'center':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreYesP0++;
                                    case 1:
                                        return mbtiCountScoreYesP1++;
                                    case 2:
                                        return mbtiCountScoreYesP2++;
                                    case 3:
                                        return mbtiCountScoreYesP3++;
                                }
                                return (mbtiCountP = mbtiCountP += item.state.score);
                            case 'no':
                                switch (item.state.score) {
                                    case 0:
                                        return mbtiCountScoreNoP0++;
                                    case 1:
                                        return mbtiCountScoreNoP1++;
                                    case 2:
                                        return mbtiCountScoreNoP2++;
                                    case 3:
                                        return mbtiCountScoreNoP3++;
                                }
                                return (mbtiCountJ = mbtiCountJ += item.state.score);
                            default:
                                return false;
                        }
                    default:
                        return false;
                }
            });

            console.log((100 / allScore.length) * (mbtiCountI + (score.length - 1) * 2));
        }
    };

    const questionOnePoint = 100 / question.length; //문항 1개의 점수
    const filterScore = question.filter(questionFilterScore); //선택한 문항만 추출
    // const filterScoreCount = scoreCount.filter(questionFilterScoreCount); //선택한 문항만 추출

    useEffect(() => {
        //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
        setCheckPercent(questionOnePoint * checkCount);
    }, [checkCount]);
    // useEffect(() => {
    //     //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
    //     console.log(mbtiCountScoreYesI3);
    //     console.log(mbtiCountScoreNoI3);
    //     console.log(mbtiCountScoreYesE3);
    //     console.log(mbtiCountScoreNoE3);
    //     console.log(mbtiCountScoreYesS3);
    //     console.log(mbtiCountScoreNoS3);
    //     console.log(mbtiCountScoreYesN3);
    //     console.log(mbtiCountScoreNoN3);
    //     console.log(mbtiCountScoreYesT3);
    //     console.log(mbtiCountScoreNoT3);
    //     console.log(mbtiCountScoreYesF3);
    //     console.log(mbtiCountScoreNoF3);
    //     console.log(mbtiCountScoreYesJ3);
    //     console.log(mbtiCountScoreNoJ3);
    //     console.log(mbtiCountScoreYesP3);
    //     console.log(mbtiCountScoreYesP3);
    // }, [mbtiCountI]);

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
        //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
        console.log(mbtiCountScoreYesI3);
        console.log(mbtiCountScoreNoI3);
        console.log(mbtiCountScoreYesE3);
        console.log(mbtiCountScoreNoE3);
        console.log(mbtiCountScoreYesS3);
        console.log(mbtiCountScoreNoS3);
        console.log(mbtiCountScoreYesN3);
        console.log(mbtiCountScoreNoN3);
        console.log(mbtiCountScoreYesT3);
        console.log(mbtiCountScoreNoT3);
        console.log(mbtiCountScoreYesF3);
        console.log(mbtiCountScoreNoF3);
        console.log(mbtiCountScoreYesJ3);
        console.log(mbtiCountScoreNoJ3);
        console.log(mbtiCountScoreYesP3);
        console.log(mbtiCountScoreYesP3);
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
