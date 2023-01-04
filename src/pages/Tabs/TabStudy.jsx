import * as React from 'react';
import { Button } from '@mui/material';
import { useStudiesApi, useStudyGroupsApi } from '../../hooks/Study.jsx';

export default function TabStudy() {
    const [studyGroups] = useStudyGroupsApi();
    const [studies, filterStudies] = useStudiesApi();

    return (
        <>
            <div>
                {studyGroups.map((group) => (
                    <Button
                        variant="outlined"
                        // eslint-disable-next-line no-underscore-dangle
                        key={group._id}
                        // eslint-disable-next-line no-underscore-dangle
                        onClick={() => filterStudies(group._id)}
                    >
                        {group.groupName}
                    </Button>
                ))}
            </div>
            <div>
                {studies &&
                    studies.map((item) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <div key={item._id}>{item.title}</div>
                    ))}
            </div>
        </>
    );
}
