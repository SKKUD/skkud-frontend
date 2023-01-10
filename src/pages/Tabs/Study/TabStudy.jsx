import * as React from 'react';
import { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useStudiesApi, useStudyGroupsApi } from '../../../hooks/Study.jsx';
import StudyCard from '../../../components/Main/study/StudyCard.jsx';

export default function TabStudy() {
    const [studyGroups] = useStudyGroupsApi();
    const [studies, filterStudies, study] = useStudiesApi();
    const [selectedGroup, setGroup] = useState('636dece13ee7782e84583cee');

    return (
        <>
            <ToggleButtonGroup
                color="mint"
                value={selectedGroup}
                exclusive
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginBottom: '21px'

                    // alignContent: 'space-between'
                }}
            >
                {studyGroups.map((group) => (
                    <ToggleButton
                        variant="outlined"
                        key={group._id}
                        value={group._id}
                        onClick={() => {
                            filterStudies(group._id);
                            setGroup(group._id);
                        }}
                        style={{
                            borderRadius: '33px',
                            border: '1px solid #00FFA8',
                            padding: '4px 10px',
                            height: '22px'
                        }}
                    >
                        {group.groupName}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <div style={{ marginBottom: '18px' }}>
                {study &&
                    study.map((item) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <StudyCard key={item._id} props={item} />
                    ))}
            </div>
        </>
    );
}

// return (
//     <Card sx={{ borderRadius: '25px', mb: 2 }} key={project.index}>
//         {cookies.id ? (
//             <Box sx={{ display: 'flex', justifyContent: 'end' }}>
//                 <Link
//                     to={`/maintab/editproject/${_id}`}
//                     style={{
//                         textDecoration: 'none',
//                         display: 'contents',
//                         width: '100%'
//                     }}
//                     state={{
//                         _id,
//                         body,
//                         title,
//                         images,
//                         mainimage,
//                         tags,
//                         developPeriod,
//                         link
//                     }}
//                 >
//                     <EditBtn />
//                 </Link>
//                 <DeleteBtn state={_id} />
//             </Box>
//         ) : (
//             ''
//         )}
//         <Link
//             to={`/maintab/projectdetail/${project._id}`}
//             style={{
//                 textDecoration: 'none',
//                 display: 'contents',
//                 width: '100%'
//             }}
//             key={project.index}
//             state={{ project }}
//         >
//             <ProjectCard project={project} />
//         </Link>
//     </Card>
// );