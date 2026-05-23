const loginUser = (email, password) => {
    //Retorne uma Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false

            if (error) {
                return reject("Não foi possivel se conectar com o banco de dados")
            }

            console.log("Conectado ao banco de dados")
            resolve({ email, password })
        }, 3000);
    })
}

const getUserVideos = () => {
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if (error) {
                return reject("Videos não encontrados")
            }

            resolve(["video_1", "video_2", "video_3"])
        }, 2000);
    })
}

const user = loginUser("teste@gmail.com", "password1234").then((user) => {
    console.log("Usuario logado com sucesso!")
    console.log("Dados do usuario", user)
    getUserVideos().then((userVideos) => {
        console.log("Videos recuperados com sucesso: " + userVideos)
    }).catch((erroMessage) => {
        console.log(erroMessage)
    })
}).catch((erroMessage) => {
    console.log(erroMessage)
})