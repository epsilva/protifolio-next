import { takeLatest, call, put, all, eventChannel } from 'redux-saga/effects';
import { signUpSuccess, signFailure, signInSuccess, signOutSuccess } from './actions';
import { firebaseImpl, firebaseNo } from '../../../utils/firebaseConfig';
import { take, syncError } from 'redux-saga/effects'

function onAuthStateChanged() {
    return new Promise((resolve, reject) => {
      firebaseNo.auth().onAuthStateChanged((user) => {
        resolve(user);
      });
    });
  }

export function* signUp({ payload }) {
    try {
        const { email, password } = payload;

        const userAuth = yield call(firebaseImpl.auth.createUserWithEmailAndPassword, email, password);

        const dataSubmit = {
            name: payload.name,
            email: payload.email,
        }

        const key = yield call(firebaseImpl.database.create, `profile/${userAuth.user.uid}/user`, dataSubmit);
        const dataUser = yield call(firebaseImpl.database.read, `profile/${userAuth.user.uid}/user/${key}`);
        const user = {
            uid: userAuth.user.uid,
            name: dataUser.name,
            email: dataUser.email
        }

        yield put(signUpSuccess({ user }));
    } catch (err) {
        console.log(err);
        alert('Falha na autenticação, verifique seus dados.');
        yield call(firebaseImpl.auth.deleteProfile);
        yield put(signFailure());
    }
}

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        const channel = yield call(firebaseImpl.auth.channel);

        let userOn = yield call(onAuthStateChanged);

        let userLogado;
        let dataUser;

        if (userOn === null && (email === null && password === null)) {
            yield put(signFailure());
            return
        } else if (userOn === null && (email !== null && password !== null)) {
            const data = yield call(firebaseImpl.auth.signInWithEmailAndPassword, email, password);
            dataUser = yield call(firebaseImpl.database.read, `profile/${data.user.uid}/user`);
        } else {
            dataUser = yield call(firebaseImpl.database.read, `profile/${userOn.uid}/user`);
        }
        if (dataUser !== null) {
            Object.keys(dataUser).map((key, id) => (
                userLogado = {
                    uid: key,
                    name: dataUser[key].name,
                    email: dataUser[key].email
                }
            ));
            yield put(signInSuccess({ user: userLogado }));
        }


    } catch (err) {
        alert('Falha na autenticação, verifique seus dados.');
        console.log(err);
        yield put(signFailure());
    }
}

export function* signOut() {
    try {
        yield call(firebaseImpl.auth.signOut);
        yield put(signOutSuccess())
    } catch (err) {
        alert('Falha ao sair do sistema.');
        console.log(err);
        yield put(signFailure());
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
]);
