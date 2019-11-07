import React from 'react';
import useStyle from '../../style/organizationCard';
import { hexToRgb } from '../../utils/StringUtils';

const OrganizationCard = (props: any) => {
    const color: any = hexToRgb('#'+props.color);
    const backgroundColor: string = 'rgb(' + color.r.toString() + ',' + color.g.toString() + ',' + color.b.toString + ')';
    //**background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    const gradient: any = {
        r: color.r-100,
        g: color.g-100,
        b: color.b-100,
    };
    const gradientString: string = 'linear-gradient(90deg, rgba(' +color.r.toString() + ',' + color.g.toString() + ',' + color.b.toString() + ', 1) 0%, rgba(' + gradient.r.toString() + ',' + gradient.g.toString() + ',' + gradient.b.toString() + ', 1) 100%)';
    const classes = useStyle({backgroundColor, gradientString});
    return (
        <div className={classes.root}>
            <h2>{props.name}</h2>
        </div>
    );
};

export default OrganizationCard;
