//This is the class that will manage all your APIs

class APIManager {

    constructor() {
        this.data = new Object
        this.data.mainUser = new Object
        this.data.pokemon = new Object

        this.giphyAPIKey = "PU0XtDcjYCqbvG5RWWLrLxDmwasWXxiZ"
    }

    callAPIs() {
        let promiseUsers = $.get("https://randomuser.me/api/?results=7")
        let promiseQuote = $.get("https://api.kanye.rest/")
        let pokemonNumber = Math.floor(Math.random() * 950)
        let promisePokemon = $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        let promiseBacon = $.get("https://baconipsum.com/api/?type=all-meat&paras=1")
        return Promise.all([promiseUsers, promiseQuote, promisePokemon, promiseBacon])
    }

    getPokemonGif() {
        let query = `https://api.giphy.com/v1/gifs/search?api_key=${this.giphyAPIKey}&q=${this.data.pokemon.name}`
        return $.get(query)
    }


    /* Data Structure

    data: {
        mainUser: {
            picture,
            firstName,
            lastName,
            city,
            state
        },
        friends: [
            {
                firstName,
                lastName
            }
        ],
        quote: // string
        pokemon: {
            image,
            name,
            giffile
        },
        meat: // string
    }
    */


    fetchData() {
        return this.callAPIs()
            .then((values) => {
                // main user
                this.data.mainUser.picture = values[0].results[0].picture.large
                this.data.mainUser.firstName = values[0].results[0].name.first
                this.data.mainUser.lastName = values[0].results[0].name.last
                this.data.mainUser.city = values[0].results[0].location.city
                this.data.mainUser.state = values[0].results[0].location.state

                // friends
                this.data.friends = values[0].results
                    .filter((element, index) => {
                        return index > 0
                    })
                    .map((element, index) => {
                        return { "firstName": element.name.first, "lastName": element.name.last }
                    })

                // quote
                this.data.quote = values[1].quote

                // pokemon
                this.data.pokemon.image = values[2].sprites.front_default
                this.data.pokemon.name = values[2].name

                // pokemon gif

                //this.data.pokemon.gifURL = "https://giphy.com/embed/nrsTrLkdflYn6rqM1L"

                // meat
                this.data.meat = values[3][0]

                return this.getPokemonGif()

            })
            
            .then((values) => {
                this.data.pokemon.giffile = values.data[0].embed_url
            })
    }
}
