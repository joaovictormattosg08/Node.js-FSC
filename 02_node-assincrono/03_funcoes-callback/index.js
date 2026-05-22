const loginUser = (email, password, onSucess, onError) => {
    // chamar db para verificar os dados do usuário
    const error = false;

    setTimeout(() => {
        if (error) {
            onError("DB connections failed");
            return;
        }
        console.log("Usuário verificado no banco de dados!")
        onSucess({ email });
    }, 3000);
};

const getUserVideos = (onSucess, onError) => {
    //Chamar o banco para pegar os videos
    const error = false;
    setTimeout(() => {
        if (error) {
            return onError("Fail to get user videos")
        }
        onSucess(['video_1', 'video_2', 'video_3'])
    }, 2000);
}

const user = loginUser('joao@gmail.com', '251088Ca@', (user) => {
    console.log(user);
    const userVideos = getUserVideos((userVideos) => {
        console.log(userVideos)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
}

);