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

const MemberCardWrapper = styled(ButtonBase)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MemberCardContainer = styled(Card)`
    max-width: 350px;
    margin-top: 13px;
    border-radius: 15px;
    padding: 20px 12px;
`;

const MemberCardMedia = styled(CardMedia)`
    border-radius: 150px;
    width: 120px;
    height: 120px;
    margin-right: 10px;
    background-color: white;
    object-fit: cover;
`;

const MemberCardName = styled(Typography)`
    font-weight: bold;
`;
const MemberCardEngName = styled(Typography)`
    font-weight: 300;
`;

const MemberCardCaption = styled(Typography)`
    text-align: left;
    margin-left: 20px;
    margin-top: 12px;
`;

const MemberCardBio = styled(Typography)`
    margin-bottom: 8px;
    font-size: 0.9rem;
`;

const MemberCardGrid = styled(Grid)`
    flex-wrap: nowrap;
`;

const MemberCardBox = styled(Box)`
    flex-grow: 1;
    text-align: left;
`;

const MemberCardCaptionBold = styled(Typography)`
    font-weight: bold;
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
        <>
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
                                                <Typography variant="caption">{email}</Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <MemberCardCaptionBold variant="caption">
                                                    WEB
                                                </MemberCardCaptionBold>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption">
                                                    {otherLinks}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <MemberCardCaptionBold variant="caption">
                                                    MAJOR
                                                </MemberCardCaptionBold>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption">{major}</Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <MemberCardCaptionBold variant="caption">
                                                    INSTA
                                                </MemberCardCaptionBold>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="caption"> {insta}</Typography>
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
        </>
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
