import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';

export default function ProjectCard(project) {
    const projectPosts = { ...project };
    const { title, body, mainimage, tags } = projectPosts.project;

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
                    <Stack direction="row" spacing={0.5} mt={1.5}>
                        {tags &&
                            tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={`# ${tag}`}
                                    variant="outlined"
                                    color="neutral"
                                />
                            ))}
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
