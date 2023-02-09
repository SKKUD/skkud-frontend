import { useState, useEffect } from 'react';
import axios from 'axios';
const BASE_URI = 'https://api.skku.dev';

export const useApplierApi = () => {
    const [appliers, setAppliers] = useState({});

    const fetchApplier = async () => {
        const data = await axios.get(BASE_URI + '/applies/appliers');
        setAppliers(data.data.data[0]);
    };

    const updateApplier = () => {
        axios
            .patch(BASE_URI + '/applies/appliers/', appliers)
            .then(() => fetchApplier())
            .catch((error) => {
                alert(error.response.data.error);
            });
    };

    useEffect(() => {
        fetchApplier();
    }, []);

    return [appliers, setAppliers, updateApplier];
};
