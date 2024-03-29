import React from 'react';

//스타일
import * as C from '@/style/CommonContents';
import * as A from '@components/atoms/atoms.style';

//이미지
import { FireWorkGreen, FireWorkRed, FireWorkStar, PercentChar } from '@/assets/img/icons';

const CheckHead = ({ percent }) => {
    console.log("CheckHead")
    console.log(percent)
    return (
        <A.CheckTop percent={percent}>
            <A.CheckTopInner>
                <A.CheckTopChar>
                    <A.CheckTopRight>
                        <A.CheckTopFireGreen src={FireWorkGreen} />
                        <A.CheckTopFireRed src={FireWorkRed} />
                        <A.CheckTopStarR1 src={FireWorkStar} />
                        <A.CheckTopStarR2 src={FireWorkStar} />
                        <A.CheckTopStarR3 src={FireWorkStar} />
                        <A.CheckTopStarR4 src={FireWorkStar} />
                    </A.CheckTopRight>
                    <A.CheckTopLeft>
                        <A.CheckTopStarL1 src={FireWorkStar} />
                        <A.CheckTopStarL2 src={FireWorkStar} />
                        <A.CheckTopStarL3 src={FireWorkStar} />
                    </A.CheckTopLeft>
                    <A.CheckTopCharImg src={PercentChar} />
                </A.CheckTopChar>
                <A.CheckTopBar>
                    <C.PercentBar percent={percent}>
                        <C.PercentBarFill>
                            <C.A11yHidden>{percent}%</C.A11yHidden>
                        </C.PercentBarFill>
                    </C.PercentBar>
                </A.CheckTopBar>
            </A.CheckTopInner>
        </A.CheckTop>
    );
};

export default CheckHead;
