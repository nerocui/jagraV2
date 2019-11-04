import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		position: 'relative',
		width: '100%',
		height: 'calc(100% - 44px)',
	},
	formBox: {
		position: 'absolute',
		top: (props: any) => props.isMobile ? '30%' : '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		boxSizing: 'border-box',
		width: (props: any) => props.isMobile ? '90%' : '40rem',
		padding: '2rem',
		backgroundColor: (props: any) => props.theme === 'dark' ? 'black' : '#e0e0e0',
		borderRadius: '.4rem',
	},
	gap: {
		marginTop: '1rem'
	},
});

export default useStyles;
