import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
	root: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},
	formBox: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		boxSizing: 'border-box',
		width: '40rem',
		padding: '2rem',
		backgroundColor: 'black',
		borderRadius: '.4rem',
	},
	gap: {
		marginTop: '1rem'
	},
});

export default useStyles;
