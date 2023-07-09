import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URI = () => {
    if (process.env.REACT_APP_ENV === 'production') return process.env.REACT_APP_PROD_URI;
    else return process.env.REACT_APP_DEV_URI;
};

export const useUserPostDetailApi = (index) => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI() + `/posts/${index}`);
            setProject(res.data.data);
        };
        fetchEvents();
    }, []);
    return [project];
};

export const useUserApi = (id) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`${BASE_URI()}/users/${id}`);
            setUser(res.data.data.user);
        };
        fetchEvents();
    }, []);
    return [user, setUser];
};

export const useUserSkillsApi = (index) => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(BASE_URI() + `/users/${index}`);
            setSkills(res.data.data.user.skills);
        };
        fetchEvents();
    }, []);
    return [skills];
};

export const useUsersApi = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(BASE_URI() + '/users');
                setUsers(res.data.data.users);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return [users, loading]; // users와 loading 상태를 함께 반환
};

export const useMemberDeleteApi = () => {
    const logout = async () => {
        try {
            await axios.post(BASE_URI() + '/auth/logout');
        } catch (error) {
            console.log('Logout error:', error);
        }
    };

    const deleteUser = (id) => {
        axios
            .delete(`${BASE_URI()}/users/${id}`)
            .then((response) => console.log('delete', response));
    };

    return [logout, deleteUser];
};

export const useMemberCreateApi = () => {
    const postMemberdata = (formData) => {
        axios
            .post(`${BASE_URI()}/users`, formData)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return [postMemberdata];
};

export const useEditMemberApi = () => {
    const editUserINfo = (
        id,
        newname,
        newemail,
        newbio,
        newinsta,
        newlinks,
        newmajor,
        newskill,
        PreviewImg
    ) => {
        axios
            .patch(`${BASE_URI()}/users/${id}`, {
                username: newname,
                email: newemail,
                major: newmajor,
                otherLinks: newlinks,
                insta: newinsta,
                bio: newbio,
                skills: newskill,
                image: PreviewImg
            })
            .catch((error) => console.log(error));
    };
    const editUserIdPw = (id, newID, newpw) => {
        axios
            .patch(`${BASE_URI()}/users/${id}`, {
                userID: newID,
                passwd: newpw
            })
            .then((res) => console.log(res));
    };
    return [editUserINfo, editUserIdPw];
};
