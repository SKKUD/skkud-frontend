import * as React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function MemberCard({
    name,
    position,
    role,
    desc,
    img,
    email,
    link1,
    insta,
    link2
}) {
    return (
        <Card sx={{ maxWidth: 350 }} style={{ marginBottom: 10 }}>
            <CardMedia component="img" image={img} alt={name} />
            <CardContent style={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5">
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {role}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {position}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {desc}
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography variant="caption">{email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption">{link1}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption"> {insta}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="caption">{link2}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
=======
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
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
        </Card>
    );
}

MemberCard.propTypes = {
<<<<<<< HEAD
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    link1: PropTypes.string.isRequired,
    insta: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired
=======
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    engname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    otherLinks: PropTypes.string.isRequired,
    insta: PropTypes.string.isRequired
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
};
