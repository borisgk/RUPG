$("button#generate").on("click", async function() {
    let myAPIManager = new APIManager()
    await myAPIManager.fetchData()
    let myRenderer = new Renderer()
    // myRenderer.render(myAPIManager.data) // -- this is deprecated
    myRenderer.advancedRender(myAPIManager.data)
})