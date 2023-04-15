import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URI = 'http://localhost:8000';

export const useApplicationFormApi = () => {
    const [form, setform] = useState({});

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + `/applies/appliers`);
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
            const res = await axios.get(BASE_URI + `/applies/appliedUsers`);
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
            const res = await axios.get(BASE_URI + `/applies/appliedUsers/:id`);
            setUser(res.data.data);
        };
        fetchEvents();
    }, []);

    return [userDetail];
};

export const useAppliedUserEditApi = (id, body) => {
    axios
        .patch(BASE_URI + `/applies/appliedUsers/${id}`, body)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};

export const useAppliedUserDeleteApi = () => {
    axios
        .delete(BASE_URI + `/applies/appliedUsers`)
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
            const res = await axios.get(BASE_URI + `/applies/appliers`);
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
