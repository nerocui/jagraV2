import React from 'react';
import useStyle from '../../style/organizationCard';
import { hexToRgb } from '../../utils/StringUtils';

const OrganizationCard = (props: any) => {
    let { color } = props;
    if (!color) {
        color = '03b1fc';
    }
    const colorObj: any = hexToRgb('#'+color);
    const backgroundColor: string = 'rgb(' + colorObj.r.toString() + ',' + colorObj.g.toString() + ',' + colorObj.b.toString() + ')';
    //**background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    const gradient: any = {
        r: colorObj.r-100,
        g: colorObj.g-100,
        b: colorObj.b-100,
    };
    const gradientString: string = 'linear-gradient(90deg, rgba(' +colorObj.r.toString() + ',' + colorObj.g.toString() + ',' + colorObj.b.toString() + ', 1) 0%, rgba(' + gradient.r.toString() + ',' + gradient.g.toString() + ',' + gradient.b.toString() + ', 1) 100%)';
    const classes = useStyle({backgroundColor, gradientString});
    return (
        <div className={classes.root}>
            <h2>{props.name}</h2>
        </div>
    );
};

export default OrganizationCard;
