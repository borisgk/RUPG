
class Renderer {

    renderTemplates = ["user", "quote", "pokemon", "friends", "meat"]
    compiledTemplates = []

    constructor () {
        for (let renderTemplate of this.renderTemplates) {
            let source = $(`#${renderTemplate}-template`).html()
            let template = Handlebars.compile(source)
            // store compiled templates in an array as objects with name and the template itself
            this.compiledTemplates.push({"name": renderTemplate, "template": template})
        }
    }

    /* Newer optimized render method */
    advancedRender(data) {
        for (let template of this.compiledTemplates) {
            let myHTML = template.template(data)
            let container = $(`.${template.name}-container`)
            container.empty()
            container.append(myHTML)            
        }
    }
    
    /* This one is deprecated as suboptimal, not called anymore */
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
