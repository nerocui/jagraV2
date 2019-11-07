import React from 'react';
import useStyle from '../../style/organizationCard';

const OrganizationCard = (props: any) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <h2>{props.name}</h2>
        </div>
    );
};

export default OrganizationCard;
