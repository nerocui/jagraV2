import React from 'react';
import useStyle from '../../style/organizationCard';
import { hexToRgb } from '../../utils/StringUtils';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { withRouter } from "react-router-dom";

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
    const OnClick = () => {
        props.history.push('/organization/' + props.id);
    };
    return (
        <div className={classes.root} onClick={OnClick}>
            <h2>{props.name}</h2>
            <div className={classes.personas}>
                {props.users.map((user: any) => <Persona hidePersonaDetails text={user.username} size={PersonaSize.size28} />)}
            </div>
        </div>
    );
};

export default withRouter(OrganizationCard);