export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
}

export function signInSuccess(user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: user ,
    };
}

export function signUpRequest(data) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: data,
    };
}

export function signUpSuccess(user) {
    return {
        type: '@auth/SIGN_UP_SUCCESS',
        payload: user,
    };
}

export function signFailure() {
    return { type: '@auth/SIGN_FAILURE' };
}

export function signOutRequest() {
    return {
        type: '@auth/SIGN_OUT_REQUEST',
    };
}

export function signOutSuccess() {
    return {
        type: '@auth/SIGN_OUT_SUCCESS',
    };
}
