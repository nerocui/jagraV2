import React, { useState } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { CreateTask } from '../../action';
import { connect } from 'react-redux';
import { State } from '../../models';
import useStyle from '../../style/taskCreator';

const TaskCreator = (props: any) => {
    const [title, SetTitle] = useState('');
    const [description, SetDescription] = useState('');
    const [assigneeId, SetAssignee] = useState('');
    const [organizationId, SetOrganization] = useState('');
    const OnSubmit = (e: any) => {
        e.preventDefault();
        if (title === '' || description === '' || assigneeId === '' || organizationId === '') {
            return;
        }
        props.CreateTask({
            title,
            description,
            assigneeId: parseInt(assigneeId),
            organizationId: parseInt(organizationId),
            creatorId: props.userId,
        });
        SetTitle('');
        SetDescription('');
        SetAssignee('');
        SetOrganization('');
    };
    const classes = useStyle();
    return (
        <form onSubmit={OnSubmit}>
            <Stack horizontal horizontalAlign="space-between">
                <Stack.Item>
                    <Label>Title</Label>
                    <TextField placeholder="Title" value={title} onChange={(e: any) => SetTitle(e.target.value)}/>
                </Stack.Item>
                <Stack.Item>
                    <Label>Assignee</Label>
                    <TextField placeholder="Assignee" value={assigneeId.toString()} onChange={(e: any) => SetAssignee(e.target.value)} />
                </Stack.Item>
                <Stack.Item>
                    <Label>Organization</Label>
                    <TextField placeholder="Organization" value={organizationId.toString()} onChange={(e: any) => SetOrganization(e.target.value)} />
                </Stack.Item>
            </Stack>
            <Label>Description</Label>
            <TextField placeholder="Description" value={description} onChange={(e: any) => SetDescription(e.target.value)} />
            <Stack horizontal reversed>
                <PrimaryButton className={classes.submitButton} type="submit">Create</PrimaryButton>
            </Stack>
        </form>
    );
};

function MapStateToProps(state: State) {
    return {
        userId: state.AuthState.id,
    };
}

export default connect(MapStateToProps, { CreateTask })(TaskCreator);
