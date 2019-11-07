import {createUseStyles} from 'react-jss';
import { concatStyleSetsWithProps } from '@uifabric/styling';

const useStyles = createUseStyles({
	root: {
        height: '8rem',
        width: '14rem',
        borderRadius: '1rem',
        padding: '1rem',
        border: '1px solid black',
		margin: '1rem',
		backgroundColor: (props: any) => props.backgroundColor,
		background: (props: any) => props.gradientString,
	},
	title: {
		
	},
	gap: {
		marginTop: '1rem'
	},
});

export default useStyles;
