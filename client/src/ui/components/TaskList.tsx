import React, { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import useStyle from '../../style/taskList';
import TaskCreator from './TaskCreator';
import posed from 'react-pose';
import { tween } from "popmotion";

const Add1 = posed.div({
    normal:{rotate: 0, scale: 1, y: '.9rem', transition: (props: any) => tween({...props, duration:400})},
    rotate:{rotate: 45, scale: 1, transition: (props: any) => tween({...props, duration:400})}
});
  
const Add2 = posed.div({
    normal:{rotate: 0, scale: 1, y: '-.2rem', x: '.9rem', transition: (props: any) => tween({...props, duration:300})},
    rotate:{rotate: 45, scale: 1, transition: (props: any) => tween({...props, duration:300})}
});

const PosedTaskCreatorContainer = posed.div({
    closed: {
        height: 0,
        opacity: 0,
    },
    open: {
        height: 'auto',
        opacity: 1,
    },
});

const TaskList = (props: any) => {
    const classes = useStyle({theme: props.theme});
    const [creatorOpen, SetCreatorOpen] = useState(false);
    return (
        <div className={classes.root}>
            <div className={classes.plusButtonContainer} onClick={() => SetCreatorOpen(!creatorOpen)}>
                <div className={classes.plusButton}>
                    <Add1 className={classes.add1} pose={creatorOpen?"rotate":"normal"}/>
                    <Add2 className={classes.add2} pose={creatorOpen?"rotate":"normal"}/>
                </div>
            </div>
            {/* {creatorOpen && <TaskCreator />} */}
            <PosedTaskCreatorContainer pose={creatorOpen ? "open" : "closed"}>
                <TaskCreator />
            </PosedTaskCreatorContainer>
            {props.tasks.map((task: any) => {
                return (
                    <div key={task.id} className={classes.taskItem}>
                        <Stack horizontal horizontalAlign="space-between" className={classes.content}>
                            <h3>{task.title}</h3>
                            <Stack.Item>
                                {task.assignee.username}
                            </Stack.Item>
                        </Stack>
                    </div>
                );
            })}
        </div>
    );
};

function MapStateToProps(state: State) {
    return {
        tasks: state.OrganizationState.chosenOrganization.tasks,
        theme: state.ThemeState.theme,
    };
}

export default connect(MapStateToProps)(TaskList);
