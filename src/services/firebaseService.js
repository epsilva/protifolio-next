import { firebaseDatabase, firebaseImpl } from '../utils/firebaseConfig';

function loginError(error) {
    if (error.code === 'auth/invalid-email') {
        alert.error("Formato do E-mail Inválido \n O e-mail informado não é válido. Exemplo: exemplo@exemplo.com");
    }
    if (error.code === 'auth/user-not-found') {
        alert.error("E-mail não cadastrado \n Registre-se antes de inicar no App.");
    }
    if (error.code === 'auth/wrong-password') {
        alert.error("Dados incorretos \n E-mail e/ou senha incorretos.");
    }
    if (error.code === 'auth/weak-password') {
        alert.error("Senha Fraca \n Senha deve conter no mínimo 6 caracteres.");
    }
    if (error.code === 'auth/email-already-in-use') {
        alert.error("E-mail em uso \n Este e-mail já está sendo usado.");
    }
}

export default class FirebaseService {
    
    static pushData = (node, child, objToSubmit) => {
        const data = firebaseDatabase.ref(node).child(child).set(objToSubmit);
        return data;
    };

}