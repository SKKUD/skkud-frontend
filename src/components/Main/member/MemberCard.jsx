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
import { MemberEditBtn } from './MemberEditBtn';
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
            style={{
                marginTop: 13,
                borderRadius: 20,
                paddingTop: '20px',
                paddingBottom: '20px',
                paddingLeft: '8px',
                paddingRight: '8px',
                backgroundColor: '#3A3A3A'
            }}
        >
            {cookies.id ? (
                <div style={{ textAlign: 'right' }}>
                    <MemberDeleteBtn _id={id} />
                    <MemberEditBtn _id={id} />
                </div>
            ) : (
                <div></div>
            )}
            <Grid container spacing={1}>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                    <ButtonBase sx={{ width: 130, height: 140 }}>
                        <CardMedia
                            sx={{ flexDirection: 'row' }}
                            component="img"
                            image={img}
                            alt={name}
                            style={{
                                borderRadius: '150px',
                                width: '120px',
                                height: '120px'
                            }}
                        />
                        {/* <img src={img} alt={name} /> */}
                    </ButtonBase>
                </Grid>
                <Grid item xs={1} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
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
