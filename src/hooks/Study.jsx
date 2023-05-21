import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const BASE_URI = 'http://localhost:8000';

export const useStudyGroupsApi = () => {
    const [studyGroups, setStudyGroups] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URI}/study/studyGroups`).then(({ data: { data } }) => {
            setStudyGroups(data);
        });
    }, []);

    const createStudyGroup = (body) => {
        axios
            .post(`${BASE_URI}/study/studyGroups`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const updateStudyGroup = (body, id) => {
        axios
            .patch(`${BASE_URI}/study/studyGroups/${id}`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const deleteStudyGroup = (id) => {
        axios
            .delete(`${BASE_URI}/study/studyGroups/${id}`)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return [studyGroups, setStudyGroups, createStudyGroup, updateStudyGroup, deleteStudyGroup];
};

export const useStudiesApi = () => {
    const [studies, setStudies] = useState();
    const [study, setStudy] = useState();

    const getData = () => {
        axios.get(`${BASE_URI}/study/studies`).then(({ data: { data } }) => setStudies(data));
    };

    const filterStudies = (key) => {
        const data = studies.filter((study) => String(study.groupId) === String(key));
        setStudy(data);
    };

    const createStudy = (body, studyGroupId) => {
        axios
            .post(`${BASE_URI}/study/studies/${studyGroupId}`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const updateStudy = (body, id) => {
        axios
            .post(`${BASE_URI}/study/studies/revise/${id}`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const deleteStudy = (id) => {
        axios
            .delete(`${BASE_URI}/study/studies/${id}`)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getData();
    }, []);

    return [studies, filterStudies, study, createStudy, updateStudy, deleteStudy];
};

export const useStudyDetailApi = () => {
    const { index } = useParams();
    console.log(index);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const [attendance, setAtd] = useState([]);
    const [taskContents, setTaskContents] = useState([]);
    const [taskNames, setTaskNames] = useState([]);
    const [images, setImages] = useState([]);
    const [studyTimeStart, setStart] = useState(Date());
    const [studyTimeEnd, setEnd] = useState(Date());

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI + `/study/studies/${index}`);
            console.log(res);
            return res.data.data;
        };
        fetchEvents().then((data) => {
            console.log(data);
            setTitle(data.title);
            setContent(data.content);
            setLocation(data.location);
            setAtd(data.attendance);
            setTaskContents(data.taskContents);
            setTaskNames(data.taskNames);
            setImages(data.images);
            setStart(data.studyTimeStart);
            setEnd(data.studyTimeEnd);
        });
    }, []);

    return [
        [title, setTitle],
        [content, setContent],
        [location, setLocation],
        [attendance, setAtd],
        [taskContents, setTaskContents],
        [taskNames, setTaskNames],
        [images, setImages],
        [studyTimeEnd, setEnd],
        [studyTimeStart, setStart]
    ];
};
