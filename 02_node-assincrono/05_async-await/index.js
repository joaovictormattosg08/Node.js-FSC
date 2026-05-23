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
        const error = true;
        setTimeout(() => {
            if (error) {
                return reject("Videos não encontrados")
            }

            resolve(["video_1", "video_2", "video_3"])
        }, 2000);
    })
}

const getUserData = async () => {
    try {
        const user = await loginUser("Joao@gmail.com", "12345678")

        console.log(user)

        const userVideos = await getUserVideos();
        console.log(userVideos)
    } catch (error) {
        console.log(error)
    }
}

getUserData()