$("button#generate").on("click", async function() {
    let myAPIManager = new APIManager()
    await myAPIManager.fetchData()
    console.log(myAPIManager.data)
    let myRenderer = new Renderer()
    myRenderer.render(myAPIManager.data)
})