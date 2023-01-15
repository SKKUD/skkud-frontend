import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/';

export const useStudyGroupsApi = () => {
    const [studyGroups, setStudyGroups] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}study/studyGroups`).then(({ data: { data } }) => {
            // console.log(data);
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
    const [study, setStudy] = useState();

    const getData = () => {
        axios.get(`${BASE_URL}study/studies`).then(({ data: { data } }) => setStudies(data));
    };

    const filterStudies = (key) => {
        const data = studies.filter((study) => String(study.groupId) === String(key));
        setStudy(data);
    };

    const createStudy = (body, studyGroupId) => {
        axios
            .post(`${BASE_URL}study/studies/${studyGroupId}`, body)
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const updateStudy = (body, id) => {
        axios
            .post(`${BASE_URL}study/studies/revise/${id}`, body)
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

    return [studies, filterStudies, study, createStudy, updateStudy, deleteStudy];
};
