import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUserPostDetailApi = (index) => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`https://api.skku.dev/posts/${index}`);
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
            const res = await axios.get(`https://api.skku.dev/users/${index}`);
            setSkills(res.data.data.user.skills);
        };
        fetchEvents();
    }, []);
    return [skills];
};
