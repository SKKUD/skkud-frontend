import * as React from 'react';
import { useState, useCallback, createContext } from 'react';
import Header from '../components/common/Header';
import CreateUser from '../components/Main/member/CreateUser';
import CreateUser2 from '../components/Main/member/CreateUser2';
import CreateUser3 from '../components/Main/member/CreateUser3';
import FinishCreateUser from '../components/Main/member/FinishCreateUser';
import styled from '@emotion/styled';
import Footer from '../components/common/Footer';

const SignupContainer = styled.div`
    min-height: calc(100vh - 71px);
    padding-top: 70px;
    margin-bottom: 30px;
`;

export const PageContext = createContext(null);

export default function SignUp() {
    const [page, setPage] = useState({ p: 1, state: null });
    const changePage = useCallback(
        (p) => {
            setPage(p);
        },
        [setPage]
    );

    return (
        <PageContext.Provider value={{ page, changePage }}>
            <Header />
            <SignupContainer>
                {page.p === 1 && <CreateUser />}
                {page.p === 2 && <CreateUser2 />}
                {page.p === 3 && <CreateUser3 />}
                {page.p === 4 && <FinishCreateUser />}
            </SignupContainer>
            <Footer />
        </PageContext.Provider>
    );
}
