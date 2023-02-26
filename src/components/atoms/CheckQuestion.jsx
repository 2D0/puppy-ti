import React, { useState } from 'react';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const CheckQuestion = () => {
    const foot = [1, 2, 3];
    const [footSelect, setFootSelect] = useState('center');
    //아이템 클릭할 때 index랑 타입을 넘김 실행 될 때 둘 다 -1로 바꿔줌
    //레드면 레드인덱스 넣어주고 퍼플이면 퍼블 넣어주고

    return (
        <A.CheckQABox>
            <A.CheckQATop>
                <A.CheckQATitL>아니다</A.CheckQATitL>
                <A.CheckQATitR>그렇다</A.CheckQATitR>
            </A.CheckQATop>
            <A.CheckQACont>
                <A.CheckQATxt>질문 들어갈 부분</A.CheckQATxt>
                <A.CheckQABtns>
                    {foot.map((list, idx) => (
                        <A.CheckQABtn
                            key={idx}
                            onClick={() => {
                                console.log(idx);
                                setFootSelect('left');
                            }}
                            type="button"
                        >
                            <A.CheckFootL />
                        </A.CheckQABtn>
                    ))}

                    <A.CheckQABtn onClick={() => setFootSelect('center')} type="button">
                        <A.CheckFootCenter />
                    </A.CheckQABtn>

                    {foot.map((list, idx) => (
                        <A.CheckQABtn
                            key={idx}
                            onClick={() => {
                                console.log(idx);
                                setFootSelect('right');
                            }}
                            type="button"
                        >
                            <A.CheckFootR />
                        </A.CheckQABtn>
                    ))}
                </A.CheckQABtns>
            </A.CheckQACont>
        </A.CheckQABox>
    );
};
export default CheckQuestion;
