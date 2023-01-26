import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUserPostDetailApi = (index) => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://3.38.103.20:8000/posts/${index}`);
            setProject(res.data.data);
        };
        fetchEvents();
    }, []);
    return [project];
};

export const useUserSkillsApi = (index) => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://3.38.103.20:8000/users/${index}`);
            setSkills(res.data.data.user.skills);
        };
        fetchEvents();
    }, []);
    return [skills];
};
