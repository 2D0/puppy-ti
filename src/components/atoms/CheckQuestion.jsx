import React, { useEffect, useState } from 'react';
import questionData from '@/assets/constants/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const scoreType = [
    {"id" : 0, "type": "no"    , "score": -3},
    {"id" : 1, "type": "no"    , "score": -2},
    {"id" : 2, "type": "no"    , "score": -1},
    {"id" : 3, "type": "center", "score": 0},
    {"id" : 4, "type": "yes"   , "score": 1},
    {"id" : 5, "type": "yes"   , "score": 2},
    {"id" : 6, "type": "yes"   , "score": 3},
]

const CheckBtnsSet = ({itemIdx, setScoreSheet}) => {
    const [socre, setScore] = useState(null);

    return (
        <>
            {
                scoreType.map((scoreItem, scoreIdx) => { 
                    return (
                        <A.CheckQABtn
                            key={scoreItem.id}
                            onClick={() => {
                                setScoreSheet(itemIdx, scoreItem.score)
                                setScore(scoreItem.score)
                            }}
                            type="button"
                        >
                            <A.CheckFoot
                                scoreIdx = {scoreIdx}
                                score={socre}
                            >
                                <Foot />
                            </A.CheckFoot>
                        </A.CheckQABtn>
                    )
                })
            }
        </>
    )
}
const CheckQuestion = ({
    setScoreSheet
}) => {

  
    
    return (
        <A.CheckQABoxs>
            {questionData.map((item, itemIdx) => (
                <A.CheckQABoxList key={item.id}>
                    <A.CheckQATop>
                        <A.CheckQATitL>아니다</A.CheckQATitL>
                        <A.CheckQATitR>그렇다</A.CheckQATitR>
                    </A.CheckQATop>
                    <A.CheckQACont>
                        <A.CheckQATxt>{item.text}</A.CheckQATxt>
                        <A.CheckQABtns>
                            <CheckBtnsSet
                                itemIdx       = {itemIdx}
                                setScoreSheet = {setScoreSheet}
                            />
                        </A.CheckQABtns>
                    </A.CheckQACont>
                </A.CheckQABoxList>
            ))}
        </A.CheckQABoxs>
    );
};
export default CheckQuestion;
