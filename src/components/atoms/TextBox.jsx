import React from 'react';

//스타일
import * as A from '@components/atoms/atoms.style.jsx';

const TextBox = ({ inquiryData }) => {
    return (
        <A.TextBox>
            {inquiryData === null ? (
                <A.TextBoxWrite>
                    <A.TextBoxinput placeholder="문의하실 내용을 입력해주세요."></A.TextBoxinput>
                </A.TextBoxWrite>
            ) : (
                inquiryData.map(item => (
                    <A.TextBoxList key={item.id}>
                        <A.TextBoxTit>{item.tit}</A.TextBoxTit> : <A.TextBoxName>{item.name}</A.TextBoxName>
                    </A.TextBoxList>
                ))
            )}
        </A.TextBox>
    );
};
export default TextBox;
