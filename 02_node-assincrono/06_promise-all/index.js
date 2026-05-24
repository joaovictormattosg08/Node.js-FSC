const loadProdutcs = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: "1", name: "MackBook", price: 1900 }])
        }, 3000);
    })
}

const loadCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: "1", name: "MackBook" }])
        }, 3000);
    })
}

const loadUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: "1", name: "João", age: 18 }])
        }, 3000);
    })
}

const init = async () => {
    const results = await Promise.allSettled([loadProdutcs(), loadCategories(), loadUsers()])

    console.log(results)
}

init()