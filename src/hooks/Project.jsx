import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const useProjectPostApi = () => {
    const [post, setPost] = useState({});

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/posts/${index}`);
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
            const res = await axios.get('http://localhost:8000/posts');
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

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/posts/${index}`);
            return res.data.data;
        };
        fetchEvents().then((data) => {
            setTitle(data.title);
            setBody(data.body);
            setTags(data.tags);
            setPeriod(data.developPeriod);
            setLink(data.link);
            setImages(data.images);
        });
    }, []);

    return [
        [title, setTitle],
        [body, setBody],
        [tags, setTags],
        [period, setPeriod],
        [link, setLink],
        [images, setImages]
    ];
};

export const useProjectUserApi = () => {
    const [User, setUser] = useState([]);

    // :id 파라미터
    const { index } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`http://localhost:8000/users/byProject/${index}`);
            // console.log('res', res.data.data.users.skills);
            setUser(res.data.data);
        };
        fetchEvents();
    }, []);

    return [User];
};
