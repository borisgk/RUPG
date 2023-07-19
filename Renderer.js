
class Renderer {

    /* Newer optimized render method */
    advancedRender(data) {
        const renderTemplates = ["user", "quote", "pokemon", "friends", "meat"]

        for (let renderTemplate of renderTemplates) {
            let source = $(`#${renderTemplate}-template`).html()
            let template = Handlebars.compile(source)
            let myHTML = template(data)

            $(`.${renderTemplate}-container`).empty()
            $(`.${renderTemplate}-container`).append(myHTML)            
        }
    }
    
    /* This one is deprecated as suboptimal */
    render(data) {
        const userSource = $('#user-template').html()
        const userTemplate = Handlebars.compile(userSource)
        let userHTML = userTemplate(data)

        $(".user-container").empty()
        $(".user-container").append(userHTML)

        const quoteSource = $('#quote-template').html()
        const quoteTemplate = Handlebars.compile(quoteSource)
        let quoteHTML = quoteTemplate(data)

        $(".quote-container").empty()
        $(".quote-container").append(quoteHTML)

        const pokemonSource = $('#pokemon-template').html()
        const pokemonTemplate = Handlebars.compile(pokemonSource)
        let pokemonHTML = pokemonTemplate(data)

        $(".pokemon-container").empty()
        $(".pokemon-container").append(pokemonHTML)

        const friendsSource = $('#friends-template').html()
        const friendsTemplate = Handlebars.compile(friendsSource)
        let friendsHTML = friendsTemplate(data)

        $(".friends-container").empty()
        $(".friends-container").append(friendsHTML)

        const meatSource = $('#meat-template').html()
        const meatTemplate = Handlebars.compile(meatSource)
        let meatHTML = meatTemplate(data)

        $(".meat-container").empty()
        $(".meat-container").append(meatHTML)
    }

}

Handlebars.registerHelper('properCase', function (aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1)
})
