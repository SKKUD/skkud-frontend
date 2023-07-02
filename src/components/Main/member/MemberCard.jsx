import * as React from 'react';
import { useState } from 'react';
import MemberCardDetail from './MemberCardDetail';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const WebCardContainer = styled.div`
    @media (min-width: 1024px) {
        flex-basis: calc(50% - 10px);
        width: calc(50% - 10px);
    }
`;

const MemberCardWrapper = styled(ButtonBase)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`;

const MemberCardContainer = styled(Card)`
    max-width: 350px;
    margin-top: 13px;
    border-radius: 15px;
    padding: 20px 12px;
    @media (min-width: 1024px) {
        max-width: 97%;
        width: 97%;
        padding: 30px;
    }
`;

const MemberCardMedia = styled(CardMedia)`
    border-radius: 150px;
    width: 120px;
    height: 120px;
    margin-right: 10px;
    background-color: white;
    object-fit: cover;

    @media (min-width: 1024px) {
        width: 160px;
        height: 160px;
        margin-right: 40px;
    }
`;

const MemberCardName = styled(Typography)`
    font-weight: bold;
    @media (min-width: 1024px) {
        font-size: 21px;
    }
`;
const MemberCardEngName = styled(Typography)`
    font-weight: 300;
    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

const MemberCardCaption = styled.div`
    text-align: left;
    margin-left: 20px;
    margin-top: 12px;
`;

const MemberCardBio = styled.div`
    margin-bottom: 8px;
    font-size: 0.9rem;
    @media (min-width: 1024px) {
        font-size: 16px;
        margin-bottom: 16px;
    }
`;

const MemberCardGrid = styled(Grid)`
    flex-wrap: nowrap;
`;

const MemberCardBox = styled(Box)`
    flex-grow: 1;
    text-align: left;
`;

const MemberCardCaptionBold = styled.div`
    font-weight: bold;
    @media (min-width: 1024px) {
        font-size: 14px;
        opacity: 0.699999988079071;
        margin-bottom: 5px;
    }
`;

const MemberCaption = styled.div`
    @media (min-width: 1024px) {
        font-size: 14px;
        opacity: 0.699999988079071;
    }
`;
export default function MemberCard({
    id,
    name,
    bio,
    img,
    email,
    insta,
    engname,
    otherLinks,
    major,
    projects
}) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <WebCardContainer>
            <MemberCardWrapper onClick={() => setIsVisible(!isVisible)}>
                <MemberCardContainer key={id}>
                    <MemberCardGrid container spacing={1}>
                        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                            <MemberCardMedia component="img" image={img} alt={name} />
                        </Grid>
                        <Grid item xs={1} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <MemberCardCaption item xs>
                                    <Grid container spacing={1} columns={1} width={200}>
                                        <Grid item xs={12}>
                                            <MemberCardName
                                                gutterBottom
                                                variant="button"
                                                align="center"
                                            >
                                                {name}&nbsp;&nbsp;
                                            </MemberCardName>
                                            <MemberCardEngName
                                                gutterBottom
                                                variant="caption"
                                                align="left"
                                                // flex-wrap
                                            >
                                                | &nbsp;{engname}
                                            </MemberCardEngName>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <MemberCardBio>"{bio}"</MemberCardBio>
                                        </Grid>
                                    </Grid>

                                    <MemberCardBox>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <MemberCardCaptionBold variant="caption">
                                                    MAIL
                                                </MemberCardCaptionBold>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <MemberCaption variant="caption">
                                                    {email}
                                                </MemberCaption>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <MemberCardCaptionBold variant="caption">
                                                    WEB
                                                </MemberCardCaptionBold>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <MemberCaption variant="caption">
                                                    {otherLinks}
                                                </MemberCaption>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <MemberCardCaptionBold variant="caption">
                                                    MAJOR
                                                </MemberCardCaptionBold>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <MemberCaption variant="caption">
                                                    {major}
                                                </MemberCaption>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <MemberCardCaptionBold variant="caption">
                                                    INSTA
                                                </MemberCardCaptionBold>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <MemberCaption variant="caption">
                                                    {' '}
                                                    {insta}
                                                </MemberCaption>
                                            </Grid>
                                        </Grid>
                                    </MemberCardBox>
                                </MemberCardCaption>
                            </Grid>
                        </Grid>
                    </MemberCardGrid>
                </MemberCardContainer>
            </MemberCardWrapper>
            {isVisible ? <MemberCardDetail projects={projects} id={id} /> : null}
        </WebCardContainer>
    );
}

MemberCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    engname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    otherLinks: PropTypes.array.isRequired,
    insta: PropTypes.string.isRequired
};
