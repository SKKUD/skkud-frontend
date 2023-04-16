import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URI = 'http://localhost:8000';

export const useUserPostDetailApi = (index) => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + `/posts/${index}`);
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
            const res = await axios.get(BASE_URI + `/users/${index}`);
            setSkills(res.data.data.user.skills);
        };
        fetchEvents();
    }, []);
    return [skills];
};

export const useUsersApi = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + '/users');
            setUsers(res.data.data.users);
        };
        fetchEvents();
    }, []);

    return [users];
};
