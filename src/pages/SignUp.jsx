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
    min-height: calc(100vh - 155px);
    padding-top: 70px;
    margin-bottom: 30px;

    @media (min-width: 1024px) {
        width: 500px;
        min-height: 600px;
        padding: 30px;
        padding-bottom: 60px;
        margin: 100px auto 50px;
        border-radius: 25px;
        background-color: #292929;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
    }
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
