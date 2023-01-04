import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MemberDeleteBtn from './MemberDeleteBtn';
import MemberEditBtn from './MemberEditBtn';
import { UserContext } from '../../../context/UserContext';

export default function MemberCard({ id, name, bio, img, email, insta, engname, otherLinks }) {
    const { user } = useContext(UserContext);
    return (
        <Card
            key={id}
            sx={{ maxWidth: 350 }}
            style={{ marginBottom: 10, borderRadius: 15, padding: 15 }}
        >
            <Stack direction="column">
                <div>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2}>
                            <Grid item xs={6}>
                                <Stack direction="row" spacing={1}>
                                    <Typography gutterBottom variant="p">
                                        {name}
                                    </Typography>
                                    <Divider
                                        orientation="vertical"
                                        variant="middle"
                                        flexItem
                                        textAlign="left"
                                    />
                                    <Typography gutterBottom variant="p">
                                        {engname}
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography gutterBottom variant="p">
                                    {bio}
                                </Typography>
                            </Grid>
                        </Stack>
                    </Grid>
                </div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={5}>
                        <CardMedia
                            sx={{ flexDirection: 'row' }}
                            component="img"
                            image={img}
                            alt={name}
                        />
                    </Grid>
                    <Grid item xs={7} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
                        <div>
                            <Grid item xs={6}>
                                <Typography variant="caption">{email}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                link1;<Typography variant="caption">{otherLinks}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                insta; <Typography variant="caption"> {insta}</Typography>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Stack>
            {user ? (
                <>
                    <MemberDeleteBtn _id={id} />
                    <MemberEditBtn _id={id} />
                </>
            ) : (
                <br />
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
    otherLinks: PropTypes.string.isRequired,
    insta: PropTypes.string.isRequired
};
