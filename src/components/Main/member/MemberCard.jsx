import * as React from 'react';
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
        </Card>
    );
}

MemberCard.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    link1: PropTypes.string.isRequired,
    insta: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired
};
