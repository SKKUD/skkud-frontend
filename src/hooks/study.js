import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/';

export const useStudyGroupsApi = () => {
    const [studyGroups, setStudyGroups] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}study/studyGroups`).then(({ data: { data } }) => {
            setStudyGroups(data);
        });
    }, []);

    const createStudyGroup = (body) => {
        axios
            .post(`${BASE_URL}study/studyGroups`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const updateStudyGroup = (body, id) => {
        axios
            .patch(`${BASE_URL}study/studyGroups/${id}`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const deleteStudyGroup = (id) => {
        axios
            .delete(`${BASE_URL}study/studyGroups/${id}`)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return [studyGroups, setStudyGroups, createStudyGroup, updateStudyGroup, deleteStudyGroup];
};

export const useStudiesApi = () => {
    const [studies, setStudies] = useState();

    const getData = () => {
        axios.get(`${BASE_URL}study/studies`).then(({ data: { data } }) => setStudies(data));
    };

    const filterStudies = (key) => {
        const data = studies.filter((study) => String(study.groupId) === String(key));
        setStudies(data);
    };

    const createStudy = (body) => {
        axios
            .post(`${BASE_URL}study/studies`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const updateStudy = (body, id) => {
        axios
            .patch(`${BASE_URL}study/studies/${id}`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const deleteStudy = (id) => {
        axios
            .delete(`${BASE_URL}study/studies/${id}`)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getData();
    }, []);

    return [studies, filterStudies, createStudy, updateStudy, deleteStudy];
};
