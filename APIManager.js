//This is the class that will manage all your APIs

class APIManager {
    
    constructor() {
        this.data = new Object
        this.data.mainUser = new Object
        this.data.pokemon = new Object
    }

    callAPIs() {
        let promiseUsers = $.get("https://randomuser.me/api/?results=7")
        let promiseQuote = $.get("https://api.kanye.rest/")
        let pokemonNumber = Math.floor(Math.random() * 950)
        let promisePokemon = $.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        let promiseBacon = $.get("https://baconipsum.com/api/?type=all-meat&paras=1")
        return Promise.all([promiseUsers, promiseQuote, promisePokemon, promiseBacon])
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
            name
        },
        meat: // string
    }
    */


    fetchData() {
        return this.callAPIs().then((values) => {
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
                return { "firstName": element.name.first, "lastName": element.name.last}
            })

            // quote
            this.data.quote = values[1].quote
                
            // pokemon
            this.data.pokemon.image = values[2].sprites.front_default
            this.data.pokemon.name = values[2].name
                
            // meat
            this.data.meat = values[3][0]

            
        })
    }
}
