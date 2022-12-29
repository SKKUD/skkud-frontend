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
    const [language, setLanguage] = useState('');
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
            setLanguage(data.language);
            setImages(data.images);
        });
    }, []);

    return [
        [title, setTitle],
        [body, setBody],
        [tags, setTags],
        [language, setLanguage],
        [images, setImages]
    ];
};
