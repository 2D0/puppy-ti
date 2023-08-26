import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//스타일
import * as C from '@/style/CommonContents.jsx';

//컴포넌트
import { Header, Footer, Background } from '@components/common';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@pages';
import * as S from '@/style/CommonContents.jsx';
import { Lines } from '@/assets/img/background/index.js';
import './style/font.css'


const makeScoreSheet = () => {
    let scoreSheet = [
        {id: 0, mbti: 'N', score: null},
        {id: 1, mbti: 'E', score: null},
        {id: 2, mbti: 'P', score: null},
        {id: 3, mbti: 'T', score: null},
        {id: 4, mbti: 'E', score: null},
        {id: 5, mbti: 'S', score: null},
        {id: 6, mbti: 'T', score: null},
        {id: 7, mbti: 'J', score: null},
        {id: 8, mbti: 'I', score: null},
        {id: 9, mbti: 'S', score: null},
        {id: 10, mbti: 'F', score: null},
        {id: 11, mbti: 'N', score: null},
        {id: 12, mbti: 'I', score: null},
        {id: 13, mbti: 'P', score: null},
        {id: 14, mbti: 'F', score: null},
        {id: 15, mbti: 'E', score: null},
        {id: 16, mbti: 'N', score: null},
        {id: 17, mbti: 'T', score: null},
        {id: 18, mbti: 'J', score: null},
        {id: 19, mbti: 'I', score: null},
        {id: 20, mbti: 'S', score: null},
        {id: 21, mbti: 'F', score: null},
        {id: 22, mbti: 'P', score: null},
        {id: 23, mbti: 'F', score: null},
        {id: 24, mbti: 'S', score: null},
        {id: 25, mbti: 'J', score: null},
        {id: 26, mbti: 'I', score: null},
        {id: 27, mbti: 'J', score: null},
        {id: 28, mbti: 'N', score: null},
        {id: 29, mbti: 'T', score: null},
        {id: 30, mbti: 'E', score: null},
        {id: 31, mbti: 'P', score: null},
    ];

    return scoreSheet
}


function App() {
    const location = useLocation(); //현재 주소
    const [scrollHeader, setScrollHeader] = useState(false); //스크롤 감지
    const [name, setName] = useState(''); //강아지 이름
    const [bgSwitch, setBgSwitch] = useState(false); //배경 on off
    const [finished, setFinished] = useState(false);

    //mbti 왼쪽(내향형, 직관형, 사고형, 계획형) 퍼센트
    const [percentEnergy, setPercentEnergy] = useState(null);
    const [percentInformation, setPercentInformation] = useState(null);
    const [percentIDecisions, setPercentIDecisions] = useState(null);
    const [percentLifestyle, setPercentLifestyle] = useState(null);

    // const [percent, setPercent] = useState(null); //문항 체크 퍼센트
    const [scoreSheet  , setScoreSheet ]  = useState(makeScoreSheet());

    // useEffect(() => {
    //     if (percent === 100) {
    //         const addScore = (obj) => {
    //             let score = {
    //                 I : [0, 0, 'E'],
    //                 E : [0, 0, 'I'],
    //                 S : [0, 0, 'N'],
    //                 N : [0, 0, 'S'],
    //                 T : [0, 0, 'F'],
    //                 F : [0, 0, 'T'],
    //                 J : [0, 0, 'P'],
    //                 P : [0, 0, 'J']
    //             };
    
    //             for (let i = 0; i < obj.length; i++) {
    //                 let item = obj[i];
    //                 if (item.score !== null) {
    //                     if (item.score < 0) {
    //                         score[item.mbti][1] += item.score
    //                     } else {
    //                         score[item.mbti][0] += item.score
    //                     }
    //                 }
    //             }
    //             let finalScore = { I: 0, E: 0, S: 0, N: 0,  T: 0, F: 0, J: 0, P: 0}
    //             const keys = Object.keys(score);
    
    //             for (let i = 0; i < keys.length; i++) {
    //                 if (score[keys[i]][1] !== 0) {
    //                     finalScore[keys[i][2]] = finalScore[keys[i][2]] + score[keys[i]][1]
    //                 } 
    //                 finalScore[keys[i]] = finalScore[keys[i]] + score[keys[i]][0]
    //             }
    //             return finalScore
    //         }
    
    //         const finalScore = addScore(scoreSheet)
            
    //         setPercentEnergy     ((finalScore.E / 24 * 100).toFixed(0));
    //         setPercentInformation((finalScore.N / 24 * 100).toFixed(0));
    //         setPercentIDecisions ((finalScore.F / 24 * 100).toFixed(0));
    //         setPercentLifestyle  ((finalScore.P / 24 * 100).toFixed(0));
    //         setFinished(true)
    //     }

    // }, [percent]);

    //스크롤시 배경 on
    const handleScroll = () => {
        const scrollPosition = window.scrollY; //스크롤 위치
        scrollPosition > 50 ? setScrollHeader(true) : setScrollHeader(false);
    };

    const handleBackground = () => {
        switch (location.pathname) {
            case '/check':
            case '/result':
                setBgSwitch(false);
                break;
            default:
                setBgSwitch(true);
        }
    };
    //스크롤 이벤트 감지
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //현재 페이지에 따라 배경 on off
    useEffect(() => {
        handleBackground();

        // BgCommon, BgBlack, BgLightPurple

    }, [location]);
    
      // useEffect(() => {
    //     
    // }, [scoreSheet]);

    const setScoreSheetEvent = (index, value, headerRef) => {
        
        const newSheet = scoreSheet;

        newSheet[index].score = value;

        setScoreSheet(newSheet)
        headerRef.current.setPercent(((newSheet.length - newSheet.filter(item => item.score === null).length)/ newSheet.length) * 100)
   
    }

    return (
        <C.Wrap>
            <Routes>
                <Route path="/" element={<Main setName={setName} scrollHeader= { scrollHeader } />}></Route>
                <Route
                    path="/check"
                    element={
                        <Check
                            scrollHeader  = { scrollHeader }
                            setScoreSheet = { setScoreSheetEvent }
                            finished      = { finished }
                        />
                    }
                ></Route>
                <Route
                    path="/result"
                    element={
                        <Result
                            name={name}
                            location={location}
                            scrollHeader  = { scrollHeader }

                            percentEnergy={percentEnergy}
                            percentInformation={percentInformation}
                            percentIDecisions={percentIDecisions}
                            percentLifestyle={percentLifestyle}

                            scoreSheet = { scoreSheet }
                            // percent    = { percent }
                        />
                    }
                ></Route>
                <Route path="/team_member" element={<TeamMember />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/source_license" element={<SourceLicense />}></Route>
            </Routes>
            <S.BackImgLinesTop src={Lines} />
            <S.BackImgLinesBottom src={Lines} />
            <Footer />
        </C.Wrap>
    );
}

export default App;
