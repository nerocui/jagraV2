import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import OrganizationCard from './OrganizationCard';
import { List } from 'office-ui-fabric-react/lib/List';
import useStyle from '../../style/organizationList';



const OrganizationList = (props: any) => {
    const classes = useStyle();
    const RenderCell = (item?: any, index?: number, isScrolling?: boolean) => {
        return (
            <OrganizationCard {...item} key={item.id}/>
        );
    };
    return (
        <List
            className={classes.root}
            items={props.organizations}
            getItemCountForPage={() => 100}
            getPageHeight={() => 100}
            renderedWindowsAhead={4}
            onRenderCell={RenderCell}
        />
    );
};

function mapStateToProps(state: State) {
    return {
        organizations: state.OrganizationState.organizations,
    };
}

export default connect(mapStateToProps)(OrganizationList);
