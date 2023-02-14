import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Wrap } from '@/style/CommonContents.jsx';
import { Main, Check, Result, TeamMember, Inquiry, SourceLicense } from '@/components/pages';

function App() {
    return (
        <Wrap>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/check" element={<Check />}></Route>
                <Route path="/result" element={<Result />}></Route>
                <Route path="/team_member" element={<TeamMember />}></Route>
                <Route path="/inquiry" element={<Inquiry />}></Route>
                <Route path="/source_license" element={<SourceLicense />}></Route>
            </Routes>
        </Wrap>
    );
}

export default App;
