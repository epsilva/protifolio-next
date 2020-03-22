import { produce } from 'immer';

const INITIAL_STATE = {
    title: '',
    color: '',
    work: {},
    view: false,
};

export default function actions(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@actions/SET_TITLE_HEADER': {
                draft.title = action.payload.data.title;
                draft.color = action.payload.data.color;
                break;
            }
            case '@actions/VIEW_DETAIL': {
                draft.work = action.payload.data.work;
                draft.view = action.payload.data.view;
                break;
            }

            default:
        }
    });
}
