import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		width: '100%',
		height: 'calc(100% - 44px)',
    },
    userList: {
        width: '20%',
        border: '1px solid white',
    },
    userListMobile: {
        width: '100%',
        border: '1px solid white',
    },
    taskList: {
        width: '60%',
        border: '1px solid white',
    },
    taskListTablet: {
        width: '80%',
        border: '1px solid white',
    },
    taskListPhone: {
        width: '100%',
        border: '1px solid white',
    },
    invitationPane: {
        width: '20%',
        border: '1px solid white',
    },
    invitationPaneMobile: {
        width: '100%',
        border: '1px solid white',
    },
    pivotTablet: {
        width: '20%',
        border: '1px solid white',
    },
});

export default useStyles;
