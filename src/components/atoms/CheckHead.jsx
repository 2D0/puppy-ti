import React from 'react';

//스타일
import * as C from '@/style/CommonContents';
import * as A from '@components/atoms/atoms.style';

//이미지
import { FireWorkGreen, FireWorkRed, FireWorkStar, PercentChar } from '@/assets/img/icons';

const CheckHead = ({ percent }) => {
    return (
        <A.CheckTop percent={percent}>
            <A.CheckTopInner>
                <A.CheckTopChar percent={percent}>
                    <A.CheckTopRight>
                        <A.CheckTopFireGreen src={FireWorkGreen} percent={percent} />
                        <A.CheckTopFireRed src={FireWorkRed} percent={percent} />
                        <A.CheckTopStarR1 src={FireWorkStar} percent={percent} />
                        <A.CheckTopStarR2 src={FireWorkStar} percent={percent} />
                        <A.CheckTopStarR3 src={FireWorkStar} percent={percent} />
                        <A.CheckTopStarR4 src={FireWorkStar} percent={percent} />
                    </A.CheckTopRight>
                    <A.CheckTopLeft>
                        <A.CheckTopStarL1 src={FireWorkStar} percent={percent} />
                        <A.CheckTopStarL2 src={FireWorkStar} percent={percent} />
                        <A.CheckTopStarL3 src={FireWorkStar} percent={percent} />
                    </A.CheckTopLeft>
                    <A.CheckTopCharImg src={PercentChar} />
                </A.CheckTopChar>
                <A.CheckTopBar>
                    <C.PercentBar>
                        <C.PercentBarFill percent={percent}>
                            <C.A11yHidden>{percent}%</C.A11yHidden>
                        </C.PercentBarFill>
                    </C.PercentBar>
                </A.CheckTopBar>
            </A.CheckTopInner>
        </A.CheckTop>
    );
};

export default CheckHead;
