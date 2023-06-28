import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URI = () => {
    if (process.env.REACT_APP_ENV === 'production') return process.env.REACT_APP_PROD_URI;
    else return process.env.REACT_APP_DEV_URI;
}

export const useApplierApi = () => {
    const [appliers, setAppliers] = useState({ title: '', introduction: '', questions: [] });

    const fetchApplier = async () => {
        const data = await axios.get(BASE_URI() + '/applies/appliers');
        setAppliers(data.data.data[0]);
    };

    const updateApplier = () => {
        axios
            .patch(BASE_URI() + '/applies/appliers/', appliers)
            .then(() => {
                fetchApplier();
                window.location.reload();
            })
            .catch((error) => {
                alert('응애');
                alert(error.response.data.error);
            });
    };

    useEffect(() => {
        fetchApplier();
    }, []);

    return [appliers, setAppliers, updateApplier];
};
