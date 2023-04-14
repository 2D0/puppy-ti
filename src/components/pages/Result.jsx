import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import resultData from '@/assets/constants/result.json';

//컴포넌트
import ShareCont from '@components/atoms/ShareCont.jsx';
import ResultDetail from '@components/atoms/ResultDetail.jsx';

//스타일
import * as C from '@/style/CommonContents.jsx';
import * as S from '@components/result/Result.style.jsx';

//이미지
import { istj, istp, isfj, isfp, intj, intp, infj, infp, estj, estp, esfj, esfp, entj, entp, enfp, enfj } from '@/assets/img/mbti';

const Result = ({ name }) => {
    //mbti 이름
    const [mbtiName, setMbtiName] = useState(null);
    const [mbtiImg, setMbtiImg] = useState(null);

    //mbti 타입별(에너지, 인식, 판단, 이행) 고유 숫자
    const [energy, setEnergy] = useState(null);
    const [information, setInformation] = useState(null);
    const [decisions, setDecisions] = useState(null);
    const [lifestyle, setLifestyle] = useState(null);

    //mbti 왼쪽(내향형, 직관형, 사고형, 계획형) 퍼센트
    const [percentEnergy, setPercentEnergy] = useState(80);
    const [percentInformation, setPercentInformation] = useState(33);
    const [percentIDecisions, setPercentIDecisions] = useState(45);
    const [percentLifestyle, setPercentLifestyle] = useState(73);

    useEffect(() => {
        handlerMbtiName(); //mbti 결과 내용 핸들러
    }, [mbtiName]);

    const handlerMbtiName = () => {
        //내향형 or 외향형
        if (percentEnergy >= 100 - percentEnergy) {
            setEnergy('I');
        } else {
            setEnergy('E');
        }

        //직관형 or 감각형
        if (percentInformation >= 100 - percentInformation) {
            setInformation('S');
        } else {
            setInformation('N');
        }

        //사고형 & 감정형
        if (percentIDecisions >= 100 - percentIDecisions) {
            setDecisions('T');
        } else {
            setDecisions('F');
        }

        //계획형 & 탐색형
        if (percentLifestyle >= 100 - percentLifestyle) {
            setLifestyle('J');
        } else {
            setLifestyle('P');
        }

        //mbti 알파벳(string) 합치기
        setMbtiName(energy + information + decisions + lifestyle);

        //mbti 알파벳(string)에 따라 이미지 컴포넌트 할당
        switch (mbtiName) {
            case 'ISTJ':
                return setMbtiImg(istj);

            case 'ISTP':
                return setMbtiImg(istp);

            case 'ISFJ':
                return setMbtiImg(isfj);

            case 'ISFP':
                return setMbtiImg(isfp);

            case 'INTJ':
                return setMbtiImg(intj);

            case 'INTP':
                return setMbtiImg(intp);

            case 'INFJ':
                return setMbtiImg(infj);

            case 'INFP':
                return setMbtiImg(infp);

            case 'ESTJ':
                return setMbtiImg(estj);

            case 'ESTP':
                return setMbtiImg(estp);

            case 'ESFJ':
                return setMbtiImg(esfj);

            case 'ESFP':
                return setMbtiImg(esfp);

            case 'ENTJ':
                return setMbtiImg(entj);

            case 'ENTP':
                return setMbtiImg(entp);

            case 'ENFJ':
                return setMbtiImg(enfj);

            case 'ENFP':
                return setMbtiImg(enfp);
            default:
                return console.log('mbti error');
        }
    };
    return (
        <C.Content>
            {resultData.result.map(item => {
                if (item.mbti === mbtiName) {
                    return (
                        <S.ResultCont key={item.id}>
                            <S.ResultPuppyName>
                                <S.ResultPuppyNamePoint>
                                    &quot;<span>{name}</span>&quot;
                                </S.ResultPuppyNamePoint>
                                는(은)
                            </S.ResultPuppyName>
                            <S.ResultPercentCont>
                                <S.ResultCharBox>
                                    <S.ResultCharBoxInner>
                                        <S.ResultBoxMbtiName>{item.mbti}</S.ResultBoxMbtiName>
                                        <S.ResultBoxChar>
                                            <S.ResultBoxCharInner>
                                                <S.ResultBoxCharImg src={mbtiImg} />
                                            </S.ResultBoxCharInner>
                                        </S.ResultBoxChar>
                                    </S.ResultCharBoxInner>
                                </S.ResultCharBox>

                                <S.ResultPercentBox>
                                    {resultData.resultDetail.map(detailItem => (
                                        <ResultDetail
                                            key={detailItem.id}
                                            detailItem={detailItem}
                                            percentEnergy={percentEnergy}
                                            percentInformation={percentInformation}
                                            percentIDecisions={percentIDecisions}
                                            percentLifestyle={percentLifestyle}
                                        />
                                    ))}
                                </S.ResultPercentBox>
                                <S.ResultTxtBox>
                                    <S.ResultTxt>{item.msg.interpretation}</S.ResultTxt>
                                </S.ResultTxtBox>
                                <S.ResultTxtBox>
                                    <S.ResultTxt>{item.msg.advice}</S.ResultTxt>
                                </S.ResultTxtBox>
                            </S.ResultPercentCont>
                            <S.RestartBtn>
                                <C.CommonBtn as={Link} to={'/'}>
                                    다시하기
                                </C.CommonBtn>
                            </S.RestartBtn>
                        </S.ResultCont>
                    );
                }
            })}
            <ShareCont />
        </C.Content>
    );
};
export default Result;
