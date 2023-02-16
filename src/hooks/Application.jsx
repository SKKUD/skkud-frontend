import { useEffect, useState } from 'react';
import axios from 'axios';

export const useApplicationFormApi = () => {
    const [form, setform] = useState({});

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/applies/appliers`);
            setform(res.data.data);
        };
        fetchEvents();
    }, []);

    return [form];
};

export const useAppliedUserApi = () => {
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/applies/appliedUsers`);
            setUsers(res.data.data);
        };
        fetchEvents();
    }, []);

    return [users];
};

export const useAppliedUserDetailApi = ({ id }) => {
    const [userDetail, setUser] = useState({});

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/applies/appliedUsers/:id`);
            setUser(res.data.data);
        };
        fetchEvents();
    }, []);

    return [userDetail];
};

export const useAppliedUserEditApi = (id, body) => {
    axios
        .patch(`http://localhost:8000/applies/appliedUsers/${id}`, body)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};

export const useApplicationFormDetailApi = () => {
    const [title, setTitle] = useState('');
    const [introduction, setIntro] = useState('');
    const [questions, setQuestions] = useState([]);
    const [_id, setId] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/applies/appliers`);
            return res.data.data;
        };
        fetchEvents().then((data) => {
            setTitle(data[0].title);
            setIntro(data[0].introduction);
            setQuestions(data[0].questions);
            setId(data[0]._id);
        });
    }, []);

    return { title, introduction, questions, _id };
};
