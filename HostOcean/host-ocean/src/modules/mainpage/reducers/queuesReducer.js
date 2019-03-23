import { handleActions } from "redux-actions";

import * as actions from "../actions/queuesActions";

const initialState = {
};

export default handleActions(
    {
        [actions.getQueueRequest]: (state, action) => {
            const { queueId } = action.payload;

            const newState = { ...state };
            newState[queueId] = { ...newState[queueId], isLoading: true }

            return newState;
        },
        [actions.getQueueSuccess]: (state, action) => {
            const newState = { ...state };
            const newQueue = action.response.data;

            newState[newQueue.id] = {
                ...state[newQueue.id],
                ...newQueue,
                isLoading: false
            };

            return { ...newState }
        },

        [actions.removeUserFromQueue]: (state, action) => {
            const { queueId, userId } = action.payload;

            const newState = { ...state };
            let newUserQueue = [...newState[queueId].userQueues];
            newUserQueue = newUserQueue.filter(uq => uq.userId !== userId)
            newState[queueId] = { ...newState[queueId], userQueues: newUserQueue }

            return newState;
        },
        [actions.addUserToQueue]: (state, action) => {
            const data = action.payload;
            const {queueId, userId} = data;

            const newState = { ...state };
            let newUserQueue = newState[queueId].userQueues.filter(uq => uq.userId !== userId);
            newUserQueue.push(data);

            newState[queueId] = { ...newState[queueId], userQueues: newUserQueue }

            return newState;
        },
    },
    initialState
);