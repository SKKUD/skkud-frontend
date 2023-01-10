import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useUserPostDetailApi = (index) => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/posts/${index}`);
            setProject(res.data.data);
        };
        fetchEvents();
    }, []);
    return [project];
};
