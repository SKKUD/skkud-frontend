import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteBtn from '../../../components/Main/project/DeleteBtn';
import EditBtn from '../../../components/Main/project/EditBtn';
// import { UserContext } from '../../../context/UserContext';
import { useProjectPostApi } from '../../../hooks/Project';

export default function ProjectDetail() {
    // const { user } = useContext(UserContext);
    const [post] = useProjectPostApi();

    const { title, body, images, mainimage, tags, language, _id } = post;

    // chip

    const StyledChip = styled((props) => <Chip {...props} />)(() => ({
        border: '1.5px solid #00FFB0',
        '& span': {
            fontWeight: 200,
            color: '#FFF'
        }
    }));

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end', mb: '15px' }}>
                <Link
                    to={`/maintab/editproject/${_id}`}
                    style={{
                        textDecoration: 'none',
                        display: 'contents',
                        width: '100%'
                    }}
                    state={{ title, body, images, mainimage, language, tags, _id }}
                >
                    <EditBtn />
                </Link>
                <DeleteBtn state={_id} />
            </Box>
            <img
                src={mainimage}
                alt={title}
                style={{ width: '100vw', overflow: 'visible', marginLeft: '-24px' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
                <Box sx={{ lineHeight: '36.5px', ml: '5px', fontWeight: 900, fontSize: '2.5em' }}>
                    {title}
                </Box>
                <Chip
                    key={language}
                    label={`# ${language}`}
                    color="primary"
                    sx={{ fontWeight: 400 }}
                />
            </Box>
            <Box mt="10px">
                <Container sx={{ padding: '0', ml: '5px' }}> {body}</Container>
                <Container
                    sx={{
                        padding: '10px',
                        margin: '10px 0 20px',
                        verticalAlign: 'middle',
                        backgroundColor: '#545454',
                        borderRadius: '5px'
                    }}
                >
                    <Stack direction="row" spacing={1.5} sx={{ backgroundColor: 'neutral' }}>
                        {tags &&
                            tags.map((tag) => (
                                <StyledChip
                                    key={tag}
                                    label={`# ${tag}`}
                                    variant="outlined"
                                    color="primary"
                                    sx={{ color: '#FFF' }}
                                />
                            ))}
                    </Stack>
                </Container>
                {images &&
                    images.map((img) => (
                        <img
                            src={img}
                            alt={title}
                            key={img}
                            style={{ width: '100vw', overflow: 'visible', marginLeft: '-24px' }}
                        />
                    ))}
            </Box>
        </>
    );
}
