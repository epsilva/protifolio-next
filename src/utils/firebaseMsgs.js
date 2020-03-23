function loginError(error) {
    if (error.code === 'auth/invalid-email') {
        alert("Formato do E-mail Inválido \n O e-mail informado não é válido. Exemplo: exemplo@exemplo.com");
    }
    if (error.code === 'auth/user-not-found') {
        alert("E-mail não cadastrado \n Registre-se antes de inicar no App.");
    }
    if (error.code === 'auth/wrong-password') {
        alert("Dados incorretos \n E-mail e/ou senha incorretos.");
    }
    if (error.code === 'auth/weak-password') {
        alert("Senha Fraca \n Senha deve conter no mínimo 6 caracteres.");
    }
    if (error.code === 'auth/email-already-in-use') {
        alert("E-mail em uso \n Este e-mail já está sendo usado.");
    }
}

export default loginError;