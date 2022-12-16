import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudyGroupsApi = () => {
    const [studyGroups, setStudyGroups] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/study/studyGroups').then(({ data: { data } }) => {
            console.log(data);
            setStudyGroups(data);
        });
    }, []);

    return [studyGroups, setStudyGroups];
};

export const useStudiesApi = () => {
    const [studies, setStudies] = useState([
        { title: 'abc', groupId: '636dece13ee7782e84583cee' },
        { title: 'abc', groupId: 'abcdddd' }
    ]);

    const getData = () => {
        axios
            .get('http://localhost:8000/study/studies')
            .then(({ data: { data } }) => setStudies(data));
    };

    useEffect(() => {
        getData();
    }, []);

    return [studies, setStudies];
};
