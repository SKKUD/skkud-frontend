import * as React from 'react';
<<<<<<< HEAD
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
=======
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79

export default function ProjectCard(project) {
    const projectPosts = { ...project };
    const { title, body, mainimage, tags } = projectPosts.project;
<<<<<<< HEAD

    return (
        <Card sx={{ maxWidth: 345, borderRadius: '5%', mb: 2 }}>
            <CardActionArea>
                <CardMedia component="img" height="190" image={mainimage} alt={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
=======
    const Card2 = styled.div`
        height: 310px;
        border-radius: 25px;
        box-sizing: border-box;
        background-image: url(${mainimage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
    `;
    return (
        <Card sx={{ maxWidth: 345, borderRadius: '5%', mb: 2 }}>
            <Card2>
                {/* <CardMedia component="img" height="190" image={mainimage} alt={title} /> */}
                <div
                    style={{
                        width: '100%',
                        height: '37%',
                        alignSelf: 'end',
                        backgroundColor: '#222222ae',
                        paddingTop: '16px',
                        paddingLeft: '25px'
                    }}
                >
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 400 }}>{body}</div>
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
                    <Stack direction="row" spacing={0.5} mt={1.5}>
                        {tags &&
                            tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={`# ${tag}`}
                                    variant="outlined"
                                    color="neutral"
<<<<<<< HEAD
                                />
                            ))}
                    </Stack>
                </CardContent>
            </CardActionArea>
=======
                                    sx={{ height: '23px', fontSize: '0.75rem' }}
                                />
                            ))}
                    </Stack>
                </div>
            </Card2>
>>>>>>> d5c18b8e361e5977abcd8a0b5e7fa6c6c6e2be79
        </Card>
    );
}
