import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
        height: '8rem',
        width: '14rem',
        borderRadius: '1rem',
        padding: '1rem',
        margin: '1rem',
        color: 'white',
        position: 'relative',
		backgroundColor: (props: any) => props.backgroundColor,
        background: (props: any) => props.gradientString,
        transition: 'all 200ms',
        '&:hover': {
            '-webkit-box-shadow': '10px 10px 18px -4px rgba(0,0,0,0.75)',
            '-moz-box-shadow': '10px 10px 18px -4px rgba(0,0,0,0.75)',
            boxShadow: '10px 10px 18px -4px rgba(0,0,0,0.75)',
            transform: 'translateY(-1px)',
        },
        '&:active': {
            '-webkit-box-shadow': '10px 10px 18px -10px rgba(0,0,0,0.75)',
            '-moz-box-shadow': '10px 10px 18px -10px rgba(0,0,0,0.75)',
            boxShadow: '10px 10px 18px -10px rgba(0,0,0,0.75)',
            transform: 'translateY(0)',
        }
	},
	personas: {
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
    }
});

export default useStyles;
