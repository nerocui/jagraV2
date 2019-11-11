import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		width: '100%',
		height: 'calc(100% - 44px)',
    },
    userList: {
        width: '20%',
        borderRight: '1px solid white',
        padding: '.5rem',
    },
    userListMobile: {
        width: '100%',
        border: '1px solid white',
        padding: '.5rem',
    },
    taskList: {
        width: '60%',
        padding: '.5rem',
        borderRight: '1px solid white',
    },
    taskListTablet: {
        width: '75%',
        border: '1px solid white',
    },
    taskListPhone: {
        width: '100%',
        border: '1px solid white',
    },
    invitationPane: {
        width: '20%',
    },
    invitationPaneMobile: {
        width: '100%',
        border: '1px solid white',
    },
    pivotTablet: {
        width: '25%',
        border: '1px solid white',
    },
});

export default useStyles;
