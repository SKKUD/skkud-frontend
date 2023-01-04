import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MemberDeleteBtn from './MemberDeleteBtn';
import MemberEditBtn from './MemberEditBtn';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../../context/UserContext';

export default function MemberCard({
    id,
    name,
    bio,
    img,
    email,
    insta,
    engname,
    otherLinks,
    major
}) {
    const { user } = useContext(UserContext);
    const [cookies] = useCookies(['id']);

    return (
        <Card
            key={id}
            sx={{ maxWidth: 350 }}
            style={{ marginTop: 13, borderRadius: 20, padding: 8 }}
        >
            <Grid container spacing={1}>
                <Grid item>
                    <ButtonBase sx={{ width: 140, height: 157 }}>
                        <CardMedia
                            sx={{ flexDirection: 'row' }}
                            component="img"
                            image={img}
                            alt={name}
                        />
                    </ButtonBase>
                </Grid>
                <Grid item xs={1} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            {/* <Grid item xs={5} container direction="column"> */}
                            {/* <Stack direction="row" xs={5} spacing={2}>
                                  
                                    <Typography gutterBottom variant="p">
                                        {name}
                                    </Typography>
                                    <Divider
                                        orientation="vertical"
                                        variant="inset"
                                        flexItem
                                        textAlign="left"
                                        color="gray"
                                    />
                                    <Typography gutterBottom variant="p">
                                        박고은박고은
                                    </Typography>
                               
                                </Stack> */}
                            {/* <Grid item xs={6}>
                                    <Typography gutterBottom variant="p">
                                        {bio}
                                    </Typography>
                                </Grid>
                            </Grid> */}
                            <Grid container spacing={1} columns={14} width={200}>
                                <Grid item xs={12}>
                                    <Typography
                                        gutterBottom
                                        variant="button"
                                        align="center"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        {name}&nbsp;&nbsp;| &nbsp;
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="caption"
                                        align="left"
                                        flex-wrap
                                    >
                                        {engname}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="body2">
                                        "{bio}"
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography sx={{ fontWeight: 'bold' }} variant="caption">
                                            MAIL
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">{email}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{ fontWeight: 'bold' }} variant="caption">
                                            WEB
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">{otherLinks}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{ fontWeight: 'bold' }} variant="caption">
                                            MAJOR
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">{major}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{ fontWeight: 'bold' }} variant="caption">
                                            INSTA
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="caption"> {insta}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {cookies ? (
                <>
                    <MemberDeleteBtn _id={id} />
                    <MemberEditBtn _id={id} />
                </>
            ) : (
                <p></p>
            )}
        </Card>
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
