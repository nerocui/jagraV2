import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { FetchOrganizationById } from '../../action';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import UserList from '../components/UserList';
import TaskList from '../components/TaskList';
import InvitationPane from '../components/InvitationPane';
import useStyle from '../../style/organizationDetail';
import { useMediaQuery } from 'react-responsive';


const OrganizationDetailPage = (props: any) => {
    props.FetchOrganizationById(props.match.params.id);
    const classes = useStyle();
    const isTablet = useMediaQuery({
		query: '(max-width: 1199px)',
	});
    const isPhone = useMediaQuery({
		query: '(max-width: 650px)',
    });
    if (isPhone) {
        return (
            <Fabric className={classes.root}>
                <Pivot>
                    <PivotItem headerText="Tasks">
                        <div className={classes.taskListPhone}>
                            <TaskList />
                        </div>
                    </PivotItem>
                    <PivotItem headerText="Users">
                        <div className={classes.userListMobile}>
                            <UserList />
                        </div>
                    </PivotItem>
                    <PivotItem headerText="Invitations">
                        <div className={classes.invitationPaneMobile}>
                            <InvitationPane />
                        </div>
                    </PivotItem>
                </Pivot>
            </Fabric>
        );
    }
    if (isTablet) {
        return (
            <Stack horizontal className={classes.root}>
                <div className={classes.pivotTablet}>
                    <Pivot>
                        <PivotItem headerText="Users">
                            <div className={classes.userListMobile}>
                                <UserList />
                            </div>
                        </PivotItem>
                        <PivotItem headerText="Invitations">
                            <div className={classes.invitationPaneMobile}>
                                <InvitationPane />
                            </div>
                        </PivotItem>
                    </Pivot>
                </div>
                <div className={classes.taskListTablet}>
                    <TaskList />
                </div>
            </Stack>
        );
    }
    return (
        <Stack horizontal className={classes.root}>
            <div className={classes.userList}>
                <UserList />
            </div>
            <div className={classes.taskList}>
                <TaskList />
            </div>
            <div className={classes.invitationPane}>
                <InvitationPane />
            </div>
        </Stack>
    );
};

const ConnectedOrganizationDetailPage = connect(null, {FetchOrganizationById})(OrganizationDetailPage);

export default withRouter(ConnectedOrganizationDetailPage);
