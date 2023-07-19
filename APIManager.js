//This is the class that will manage all your APIs

class APIManager {
    
    constructor() {
        this.data = {}
    }

    callAPIs() {
        let promiseUsers = $.get("https://randomuser.me/api/?results=7")
        let promiseQuote = $.get("https://api.kanye.rest/")
        let pokemonNumber = Math.floor(Math.random() * 950)
        let promisePokemon = $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        let promiseBacon = $.get("https://baconipsum.com/api/?type=all-meat&paras=1")
        return Promise.all([promiseUsers, promiseQuote, promisePokemon, promiseBacon])
    }

    fetchData() {
        return this.callAPIs().then((values) => {
                // add users
                this.data.users = values[0].results
                // add quote
                this.data.quote = values[1].quote
                // add pokemon
                this.data.pokemon = values[2]
                // add bacon
                this.data.bacon = values[3][0]

                this.data.friends = this.data.users
                    .filter((element, index) => {
                        return index > 0
                    })

                this.data.mainUser = this.data.users[0]
                    // TODO: ADD MAP HERE

        })
    }
}
