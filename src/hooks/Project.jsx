import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BASE_URI = 'http://localhost:8000';

export const useProjectPostApi = () => {
    const [post, setPost] = useState({});

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + `/posts/${index}`);
            setPost(res.data.data);
        };
        fetchEvents();
    }, []);

    return [post];
};

export const useProjectListApi = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + '/posts');
            setPostList(res.data.data);
        };
        fetchEvents();
    }, []);
    return [postList, setPostList];
};

export const useProjectPostDetailApi = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [period, setPeriod] = useState('');
    const [link, setLink] = useState('');
    const [images, setImages] = useState([]);
    const [checked, setChecked] = useState([]);

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + `/posts/${index}`);
            return res.data.data;
        };
        fetchEvents().then((data) => {
            setTitle(data.title);
            setBody(data.body);
            setTags(data.tags);
            setPeriod(data.developPeriod);
            setLink(data.link);
            setImages(data.images);
            setChecked(data.users);
        });
    }, []);

    return [
        [title, setTitle],
        [body, setBody],
        [tags, setTags],
        [period, setPeriod],
        [link, setLink],
        [images, setImages],
        [checked, setChecked]
    ];
};

export const useProjectUserApi = () => {
    const [User, setUser] = useState([]);

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + `/users/byProject/${index}`);
            setUser(res.data.data);
        };
        fetchEvents();
    }, []);

    return [User];
};
