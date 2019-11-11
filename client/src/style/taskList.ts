import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        width: '100%',
    },
	taskItem: {
		width: '100%',
        height: '3rem',
        marginBottom: '.5rem',
        backgroundColor: (props: any) => props.theme === 'dark' ?  '#303030' : '#ededed',
        borderRadius: '.5rem',
        position: 'relative',
        '-webkit-box-shadow': (props: any) => props.theme === 'dark' ?  '0px 5px 13px 0px rgba(0,0,0,0.75)' : '0px 2px 8px 0px rgba(150,150,150,1)',
        '-moz-box-shadow': (props: any) => props.theme === 'dark' ?  '0px 5px 13px 0px rgba(0,0,0,0.75)' : '0px 2px 8px 0px rgba(150,150,150,1)',
        boxShadow: (props: any) => props.theme === 'dark' ?  '0px 5px 13px 0px rgba(0,0,0,0.75)' : '0px 2px 8px 0px rgba(150,150,150,1)',
    },
    plusButtonContainer: {
        position: 'relative',
        width: '100%',
        height: '3rem',
        border: (props: any) => props.theme === 'dark' ? '1px solid white' : '1px solid black',
        borderRadius: '.5rem',
        marginTop: '.5rem',
        marginBottom: '.5rem',
        transition: 'all 200ms',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.01)',
            backgroundColor: (props: any) => props.theme === 'dark' ? '#303030' : '#ededed',
        },
    },
    plusButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    add1: {
        width: '2rem',
        height: '.2rem',
        backgroundColor: (props: any) => props.theme === 'dark' ? 'white' : 'black',
    },
    add2: {
        width: '.2rem',
        height: '2rem',
        backgroundColor: (props: any) => props.theme === 'dark' ? 'white' : 'black',
    },
    content: {
        width: '100%',
        padding: '.5rem',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    }
});

export default useStyles;
