import { produce } from 'immer';

const INITIAL_STATE = {
    signed: false,
    loading: false,
    error: true,
    user: {},
    singout: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_REQUEST': {
                draft.loading = true;
                draft.error = true;
                break;
            }
            case '@auth/SIGN_IN_SUCCESS': {
                draft.signed = true;
                draft.loading = false;
                draft.error = false;
                draft.singout = false;
                draft.user = action.payload.user;
                break;
            }
            case '@auth/SIGN_UP_REQUEST': {
                draft.loading = true;
                draft.error = true;
                break;
            }
            case '@auth/SIGN_UP_SUCCESS': {
                draft.signed = true;
                draft.loading = false;
                draft.error = false;
                draft.singout = false;
                draft.user = action.payload.user;
                break;
            }
            case '@auth/SIGN_FAILURE': {
                draft.loading = false;
                draft.signed = false;
                draft.error = true;
                break;
            }
            case '@auth/SIGN_OUT_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@auth/SIGN_OUT_SUCCESS': {
                draft.loading = false;
                draft.signed = false;
                draft.error = true;
                draft.singout = true;
                draft.user = {};
                break;
            }
            default:
        }
    });
}
