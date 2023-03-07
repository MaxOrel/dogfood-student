export const pokemonData = [
    {
        id: "UG9rZW1vbjowMDE=",
        number: "001",
        name: "Bulbasaur",
        image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        classification: "Seed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
                {
                    name: "Vine Whip",
                    type: "Grass",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Power Whip",
                    type: "Grass",
                    damage: 70,
                },
                {
                    name: "Seed Bomb",
                    type: "Grass",
                    damage: 40,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.1,
        maxCP: 951,
        maxHP: 1071,
        evolutions: [
            {
                name: "Ivysaur",
            },
            {
                name: "Venusaur",
            },
        ],
        evolutionRequirements: {
            name: "Bulbasaur candies",
            amount: 25,
        },
        weight: {
            minimum: "6.04kg",
            maximum: "7.76kg",
        },
        height: {
            minimum: "0.61m",
            maximum: "0.79m",
        },
    },
    {
        id: "UG9rZW1vbjowMDI=",
        number: "002",
        name: "Ivysaur",
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
        classification: "Seed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Razor Leaf",
                    type: "Grass",
                    damage: 15,
                },
                {
                    name: "Vine Whip",
                    type: "Grass",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Power Whip",
                    type: "Grass",
                    damage: 70,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.07,
        maxCP: 1483,
        maxHP: 1632,
        evolutions: [
            {
                name: "Venusaur",
            },
        ],
        evolutionRequirements: {
            name: "Bulbasaur candies",
            amount: 100,
        },
        weight: {
            minimum: "11.38kg",
            maximum: "14.63kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowMDM=",
        number: "003",
        name: "Venusaur",
        image: "https://img.pokemondb.net/artwork/venusaur.jpg",
        classification: "Seed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Razor Leaf",
                    type: "Grass",
                    damage: 15,
                },
                {
                    name: "Vine Whip",
                    type: "Grass",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Petal Blizzard",
                    type: "Grass",
                    damage: 65,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.05,
        maxCP: 2392,
        maxHP: 2580,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "87.5kg",
            maximum: "112.5kg",
        },
        height: {
            minimum: "1.75m",
            maximum: "2.25m",
        },
    },
    {
        id: "UG9rZW1vbjowMDQ=",
        number: "004",
        name: "Charmander",
        image: "https://img.pokemondb.net/artwork/charmander.jpg",
        classification: "Lizard Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Flame Burst",
                    type: "Fire",
                    damage: 30,
                },
                {
                    name: "Flame Charge",
                    type: "Fire",
                    damage: 25,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.1,
        maxCP: 841,
        maxHP: 955,
        evolutions: [
            {
                name: "Charmeleon",
            },
            {
                name: "Charizard",
            },
        ],
        evolutionRequirements: {
            name: "Charmander candies",
            amount: 25,
        },
        weight: {
            minimum: "7.44kg",
            maximum: "9.56kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjowMDU=",
        number: "005",
        name: "Charmeleon",
        image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
        classification: "Flame Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Fire Punch",
                    type: "Fire",
                    damage: 40,
                },
                {
                    name: "Flame Burst",
                    type: "Fire",
                    damage: 30,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.07,
        maxCP: 1411,
        maxHP: 1557,
        evolutions: [
            {
                name: "Charizard",
            },
        ],
        evolutionRequirements: {
            name: "Charmander candies",
            amount: 100,
        },
        weight: {
            minimum: "16.63kg",
            maximum: "21.38kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjowMDY=",
        number: "006",
        name: "Charizard",
        image: "https://img.pokemondb.net/artwork/charizard.jpg",
        classification: "Flame Pokémon",
        types: ["Fire", "Flying"],
        resistant: ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Wing Attack",
                    type: "Flying",
                    damage: 9,
                },
            ],
            special: [
                {
                    name: "Dragon Claw",
                    type: "Dragon",
                    damage: 35,
                },
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Water", "Electric", "Rock"],
        fleeRate: 0.05,
        maxCP: 2413,
        maxHP: 2602,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "79.19kg",
            maximum: "101.81kg",
        },
        height: {
            minimum: "1.49m",
            maximum: "1.91m",
        },
    },
    {
        id: "UG9rZW1vbjowMDc=",
        number: "007",
        name: "Squirtle",
        image: "https://img.pokemondb.net/artwork/squirtle.jpg",
        classification: "Tiny Turtle Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bubble",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Aqua Jet",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Aqua Tail",
                    type: "Water",
                    damage: 45,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.1,
        maxCP: 891,
        maxHP: 1008,
        evolutions: [
            {
                name: "Wartortle",
            },
            {
                name: "Blastoise",
            },
        ],
        evolutionRequirements: {
            name: "Squirtle candies",
            amount: 25,
        },
        weight: {
            minimum: "7.88kg",
            maximum: "10.13kg",
        },
        height: {
            minimum: "0.44m",
            maximum: "0.56m",
        },
    },
    {
        id: "UG9rZW1vbjowMDg=",
        number: "008",
        name: "Wartortle",
        image: "https://img.pokemondb.net/artwork/wartortle.jpg",
        classification: "Turtle Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Aqua Jet",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Gunk Shot",
                    type: "Poison",
                    damage: 65,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Ice Beam",
                    type: "Ice",
                    damage: 65,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.07,
        maxCP: 1435,
        maxHP: 1582,
        evolutions: [
            {
                name: "Blastoise",
            },
        ],
        evolutionRequirements: {
            name: "Squirtle candies",
            amount: 100,
        },
        weight: {
            minimum: "19.69kg",
            maximum: "25.31kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowMDk=",
        number: "009",
        name: "Blastoise",
        image: "https://img.pokemondb.net/artwork/blastoise.jpg",
        classification: "Shellfish Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Flash Cannon",
                    type: "Steel",
                    damage: 60,
                },
                {
                    name: "Gunk Shot",
                    type: "Poison",
                    damage: 65,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Ice Beam",
                    type: "Ice",
                    damage: 65,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.05,
        maxCP: 2355,
        maxHP: 2542,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "74.81kg",
            maximum: "96.19kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjowMTA=",
        number: "010",
        name: "Caterpie",
        image: "https://img.pokemondb.net/artwork/caterpie.jpg",
        classification: "Worm Pokémon",
        types: ["Bug"],
        resistant: ["Grass", "Fighting", "Ground"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Struggle",
                    type: "Normal",
                    damage: 15,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Rock"],
        fleeRate: 0.2,
        maxCP: 367,
        maxHP: 443,
        evolutions: [
            {
                name: "Metapod",
            },
            {
                name: "Butterfree",
            },
        ],
        evolutionRequirements: {
            name: "Caterpie candies",
            amount: 12,
        },
        weight: {
            minimum: "2.54kg",
            maximum: "3.26kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowMTE=",
        number: "011",
        name: "Metapod",
        image: "https://img.pokemondb.net/artwork/metapod.jpg",
        classification: "Cocoon Pokémon",
        types: ["Bug"],
        resistant: ["Grass", "Fighting", "Ground"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Struggle",
                    type: "Normal",
                    damage: 15,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Rock"],
        fleeRate: 0.09,
        maxCP: 397,
        maxHP: 477,
        evolutions: [
            {
                name: "Butterfree",
            },
        ],
        evolutionRequirements: {
            name: "Caterpie candies",
            amount: 50,
        },
        weight: {
            minimum: "8.66kg",
            maximum: "11.14kg",
        },
        height: {
            minimum: "0.61m",
            maximum: "0.79m",
        },
    },
    {
        id: "UG9rZW1vbjowMTI=",
        number: "012",
        name: "Butterfree",
        image: "https://img.pokemondb.net/artwork/butterfree.jpg",
        classification: "Butterfly Pokémon",
        types: ["Bug", "Flying"],
        resistant: ["Grass", "Fighting", "Ground", "Bug"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Bug Buzz",
                    type: "Bug",
                    damage: 75,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Signal Beam",
                    type: "Bug",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
        fleeRate: 0.06,
        maxCP: 1315,
        maxHP: 1454,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "28kg",
            maximum: "36kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjowMTM=",
        number: "013",
        name: "Weedle",
        image: "https://img.pokemondb.net/artwork/weedle.jpg",
        classification: "Hairy Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Poison Sting",
                    type: "Poison",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Struggle",
                    type: "Normal",
                    damage: 15,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.2,
        maxCP: 372,
        maxHP: 449,
        evolutions: [
            {
                name: "Kakuna",
            },
            {
                name: "Beedrill",
            },
        ],
        evolutionRequirements: {
            name: "Weedle candies",
            amount: 12,
        },
        weight: {
            minimum: "2.8kg",
            maximum: "3.6kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowMTQ=",
        number: "014",
        name: "Kakuna",
        image: "https://img.pokemondb.net/artwork/kakuna.jpg",
        classification: "Cocoon Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Poison Sting",
                    type: "Poison",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Struggle",
                    type: "Normal",
                    damage: 15,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.09,
        maxCP: 405,
        maxHP: 485,
        evolutions: [
            {
                name: "Beedrill",
            },
        ],
        evolutionRequirements: {
            name: "Weedle candies",
            amount: 50,
        },
        weight: {
            minimum: "8.75kg",
            maximum: "11.25kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjowMTU=",
        number: "015",
        name: "Beedrill",
        image: "https://img.pokemondb.net/artwork/beedrill.jpg",
        classification: "Poison Bee Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Poison Jab",
                    type: "Poison",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
                {
                    name: "X Scissor",
                    type: "Bug",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.06,
        maxCP: 1301,
        maxHP: 1439,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "25.81kg",
            maximum: "33.19kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowMTY=",
        number: "016",
        name: "Pidgey",
        image: "https://img.pokemondb.net/artwork/pidgey.jpg",
        classification: "Tiny Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Air Cutter",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Twister",
                    type: "Dragon",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.2,
        maxCP: 585,
        maxHP: 679,
        evolutions: [
            {
                name: "Pidgeotto",
            },
            {
                name: "Pidgeot",
            },
        ],
        evolutionRequirements: {
            name: "Pidgey candies",
            amount: 12,
        },
        weight: {
            minimum: "1.57kg",
            maximum: "2.02kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowMTc=",
        number: "017",
        name: "Pidgeotto",
        image: "https://img.pokemondb.net/artwork/pidgeotto.jpg",
        classification: "Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: "Steel Wing",
                    type: "Steel",
                    damage: 15,
                },
                {
                    name: "Wing Attack",
                    type: "Flying",
                    damage: 9,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Air Cutter",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Twister",
                    type: "Dragon",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.09,
        maxCP: 1096,
        maxHP: 1223,
        evolutions: [
            {
                name: "Pidgeot",
            },
        ],
        evolutionRequirements: {
            name: "Pidgey candies",
            amount: 50,
        },
        weight: {
            minimum: "26.25kg",
            maximum: "33.75kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjowMTg=",
        number: "018",
        name: "Pidgeot",
        image: "https://img.pokemondb.net/artwork/pidgeot.jpg",
        classification: "Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: "Steel Wing",
                    type: "Steel",
                    damage: 15,
                },
                {
                    name: "Wing Attack",
                    type: "Flying",
                    damage: 9,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Air Cutter",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Hurricane",
                    type: "Flying",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.06,
        maxCP: 1923,
        maxHP: 2091,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "34.56kg",
            maximum: "44.44kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjowMTk=",
        number: "019",
        name: "Rattata",
        image: "https://img.pokemondb.net/artwork/rattata.jpg",
        classification: "Mouse Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Hyper Fang",
                    type: "Normal",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.2,
        maxCP: 493,
        maxHP: 581,
        evolutions: [
            {
                name: "Raticate",
            },
        ],
        evolutionRequirements: {
            name: "Rattata candies",
            amount: 25,
        },
        weight: {
            minimum: "3.06kg",
            maximum: "3.94kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowMjA=",
        number: "020",
        name: "Raticate",
        image: "https://img.pokemondb.net/artwork/raticate.jpg",
        classification: "Mouse Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
                {
                    name: "Hyper Fang",
                    type: "Normal",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.07,
        maxCP: 1304,
        maxHP: 1444,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "16.19kg",
            maximum: "20.81kg",
        },
        height: {
            minimum: "0.61m",
            maximum: "0.79m",
        },
    },
    {
        id: "UG9rZW1vbjowMjE=",
        number: "021",
        name: "Spearow",
        image: "https://img.pokemondb.net/artwork/spearow.jpg",
        classification: "Tiny Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: "Peck",
                    type: "Flying",
                    damage: 10,
                },
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Drill Peck",
                    type: "Flying",
                    damage: 40,
                },
                {
                    name: "Twister",
                    type: "Dragon",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.15,
        maxCP: 591,
        maxHP: 686,
        evolutions: [
            {
                name: "Fearow",
            },
        ],
        evolutionRequirements: {
            name: "Spearow candies",
            amount: 50,
        },
        weight: {
            minimum: "1.75kg",
            maximum: "2.25kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowMjI=",
        number: "022",
        name: "Fearow",
        image: "https://img.pokemondb.net/artwork/fearow.jpg",
        classification: "Beak Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: "Peck",
                    type: "Flying",
                    damage: 10,
                },
                {
                    name: "Steel Wing",
                    type: "Steel",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Drill Run",
                    type: "Ground",
                    damage: 50,
                },
                {
                    name: "Twister",
                    type: "Dragon",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.07,
        maxCP: 1592,
        maxHP: 1746,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "33.25kg",
            maximum: "42.75kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjowMjM=",
        number: "023",
        name: "Ekans",
        image: "https://img.pokemondb.net/artwork/ekans.jpg",
        classification: "Snake Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Poison Sting",
                    type: "Poison",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Gunk Shot",
                    type: "Poison",
                    damage: 65,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
                {
                    name: "Wrap",
                    type: "Normal",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.15,
        maxCP: 718,
        maxHP: 824,
        evolutions: [
            {
                name: "Arbok",
            },
        ],
        evolutionRequirements: {
            name: "Ekans candies",
            amount: 50,
        },
        weight: {
            minimum: "6.04kg",
            maximum: "7.76kg",
        },
        height: {
            minimum: "1.75m",
            maximum: "2.25m",
        },
    },
    {
        id: "UG9rZW1vbjowMjQ=",
        number: "024",
        name: "Arbok",
        image: "https://img.pokemondb.net/artwork/arbok.jpg",
        classification: "Cobra Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Gunk Shot",
                    type: "Poison",
                    damage: 65,
                },
                {
                    name: "Sludge Wave",
                    type: "Poison",
                    damage: 70,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.07,
        maxCP: 1611,
        maxHP: 1767,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "56.88kg",
            maximum: "73.13kg",
        },
        height: {
            minimum: "3.06m",
            maximum: "3.94m",
        },
    },
    {
        id: "UG9rZW1vbjowMjU=",
        number: "025",
        name: "Pikachu",
        image: "https://img.pokemondb.net/artwork/pikachu.jpg",
        classification: "Mouse Pokémon",
        types: ["Electric"],
        resistant: ["Electric", "Flying", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
                {
                    name: "Thunder Shock",
                    type: "Electric",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Thunder",
                    type: "Electric",
                    damage: 100,
                },
                {
                    name: "Thunderbolt",
                    type: "Electric",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground"],
        fleeRate: 0.1,
        maxCP: 777,
        maxHP: 887,
        evolutions: [
            {
                name: "Raichu",
            },
        ],
        evolutionRequirements: {
            name: "Pikachu candies",
            amount: 50,
        },
        weight: {
            minimum: "5.25kg",
            maximum: "6.75kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjowMjY=",
        number: "026",
        name: "Raichu",
        image: "https://img.pokemondb.net/artwork/raichu.jpg",
        classification: "Mouse Pokémon",
        types: ["Electric"],
        resistant: ["Electric", "Flying", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Spark",
                    type: "Electric",
                    damage: 7,
                },
                {
                    name: "Thunder Shock",
                    type: "Electric",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Brick Break",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Thunder",
                    type: "Electric",
                    damage: 100,
                },
                {
                    name: "Thunder Punch",
                    type: "Electric",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Ground"],
        fleeRate: 0.06,
        maxCP: 1859,
        maxHP: 2028,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "26.25kg",
            maximum: "33.75kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjowMjc=",
        number: "027",
        name: "Sandshrew",
        image: "https://img.pokemondb.net/artwork/sandshrew.jpg",
        classification: "Mouse Pokémon",
        types: ["Ground"],
        resistant: ["Electric", "Poison", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Rock Slide",
                    type: "Rock",
                    damage: 50,
                },
                {
                    name: "Rock Tomb",
                    type: "Rock",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice"],
        fleeRate: 0.1,
        maxCP: 695,
        maxHP: 798,
        evolutions: [
            {
                name: "Sandslash",
            },
        ],
        evolutionRequirements: {
            name: "Sandshrew candies",
            amount: 50,
        },
        weight: {
            minimum: "10.5kg",
            maximum: "13.5kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjowMjg=",
        number: "028",
        name: "Sandslash",
        image: "https://img.pokemondb.net/artwork/sandslash.jpg",
        classification: "Mouse Pokémon",
        types: ["Ground"],
        resistant: ["Electric", "Poison", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Metal Claw",
                    type: "Steel",
                    damage: 8,
                },
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Bulldoze",
                    type: "Ground",
                    damage: 35,
                },
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Rock Tomb",
                    type: "Rock",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice"],
        fleeRate: 0.06,
        maxCP: 1654,
        maxHP: 1810,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "25.81kg",
            maximum: "33.19kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowMjk=",
        number: "029",
        name: "Nidoran-F",
        image: "https://img.pokemondb.net/artwork/nidoran-f.jpg",
        classification: "Poison Pin Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Poison Sting",
                    type: "Poison",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Poison Fang",
                    type: "Poison",
                    damage: 25,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.15,
        maxCP: 768,
        maxHP: 876,
        evolutions: [
            {
                name: "Nidorina",
            },
            {
                name: "Nidoqueen",
            },
        ],
        evolutionRequirements: {
            name: "Nidoran♀ candies",
            amount: 25,
        },
        weight: {
            minimum: "6.13kg",
            maximum: "7.88kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjowMzA=",
        number: "030",
        name: "Nidorina",
        image: "https://img.pokemondb.net/artwork/nidorina.jpg",
        classification: "Poison Pin Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Poison Sting",
                    type: "Poison",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Poison Fang",
                    type: "Poison",
                    damage: 25,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.07,
        maxCP: 1267,
        maxHP: 1404,
        evolutions: [
            {
                name: "Nidoqueen",
            },
        ],
        evolutionRequirements: {
            name: "Nidoran♀ candies",
            amount: 100,
        },
        weight: {
            minimum: "17.5kg",
            maximum: "22.5kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjowMzE=",
        number: "031",
        name: "Nidoqueen",
        image: "https://img.pokemondb.net/artwork/nidoqueen.jpg",
        classification: "Drill Pokémon",
        types: ["Poison", "Ground"],
        resistant: ["Electric", "Fighting", "Poison", "Bug", "Rock", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Poison Jab",
                    type: "Poison",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Sludge Wave",
                    type: "Poison",
                    damage: 70,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Ice", "Ground", "Psychic"],
        fleeRate: 0.05,
        maxCP: 2301,
        maxHP: 2485,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "52.5kg",
            maximum: "67.5kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjowMzI=",
        number: "032",
        name: "Nidoran-M",
        image: "https://img.pokemondb.net/artwork/nidoran-m.jpg",
        classification: "Poison Pin Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Peck",
                    type: "Flying",
                    damage: 10,
                },
                {
                    name: "Poison Sting",
                    type: "Poison",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Horn Attack",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.15,
        maxCP: 737,
        maxHP: 843,
        evolutions: [
            {
                name: "Nidorino",
            },
            {
                name: "Nidoking",
            },
        ],
        evolutionRequirements: {
            name: "Nidoran-M candies",
            amount: 25,
        },
        weight: {
            minimum: "7.88kg",
            maximum: "10.13kg",
        },
        height: {
            minimum: "0.44m",
            maximum: "0.56m",
        },
    },
    {
        id: "UG9rZW1vbjowMzM=",
        number: "033",
        name: "Nidorino",
        image: "https://img.pokemondb.net/artwork/nidorino.jpg",
        classification: "Poison Pin Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Poison Jab",
                    type: "Poison",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Horn Attack",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.07,
        maxCP: 1236,
        maxHP: 1372,
        evolutions: [
            {
                name: "Nidoking",
            },
        ],
        evolutionRequirements: {
            name: "Nidoran-M candies",
            amount: 100,
        },
        weight: {
            minimum: "17.06kg",
            maximum: "21.94kg",
        },
        height: {
            minimum: "0.79m",
            maximum: "1.01m",
        },
    },
    {
        id: "UG9rZW1vbjowMzQ=",
        number: "034",
        name: "Nidoking",
        image: "https://img.pokemondb.net/artwork/nidoking.jpg",
        classification: "Drill Pokémon",
        types: ["Poison", "Ground"],
        resistant: ["Electric", "Fighting", "Poison", "Bug", "Rock", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Fury Cutter",
                    type: "Bug",
                    damage: 3,
                },
                {
                    name: "Poison Jab",
                    type: "Poison",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Megahorn",
                    type: "Bug",
                    damage: 80,
                },
                {
                    name: "Sludge Wave",
                    type: "Poison",
                    damage: 70,
                },
            ],
        },
        weaknesses: ["Water", "Ice", "Ground", "Psychic"],
        fleeRate: 0.05,
        maxCP: 2291,
        maxHP: 2475,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "54.25kg",
            maximum: "69.75kg",
        },
        height: {
            minimum: "1.22m",
            maximum: "1.57m",
        },
    },
    {
        id: "UG9rZW1vbjowMzU=",
        number: "035",
        name: "Clefairy",
        image: "https://img.pokemondb.net/artwork/clefairy.jpg",
        classification: "Fairy Pokémon",
        types: ["Fairy"],
        resistant: ["Fighting", "Bug", "Dragon", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Disarming Voice",
                    type: "Fairy",
                    damage: 25,
                },
                {
                    name: "Moonblast",
                    type: "Fairy",
                    damage: 85,
                },
            ],
        },
        weaknesses: ["Poison", "Steel"],
        fleeRate: 0.1,
        maxCP: 1074,
        maxHP: 1200,
        evolutions: [
            {
                name: "Clefable",
            },
        ],
        evolutionRequirements: {
            name: "Clefairy candies",
            amount: 50,
        },
        weight: {
            minimum: "6.56kg",
            maximum: "8.44kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjowMzY=",
        number: "036",
        name: "Clefable",
        image: "https://img.pokemondb.net/artwork/clefable.jpg",
        classification: "Fairy Pokémon",
        types: ["Fairy"],
        resistant: ["Fighting", "Bug", "Dragon", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dazzling Gleam",
                    type: "Fairy",
                    damage: 55,
                },
                {
                    name: "Moonblast",
                    type: "Fairy",
                    damage: 85,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Poison", "Steel"],
        fleeRate: 0.06,
        maxCP: 2217,
        maxHP: 2397,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "35kg",
            maximum: "45kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjowMzc=",
        number: "037",
        name: "Vulpix",
        image: "https://img.pokemondb.net/artwork/vulpix.jpg",
        classification: "Fox Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Flame Charge",
                    type: "Fire",
                    damage: 25,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.1,
        maxCP: 725,
        maxHP: 831,
        evolutions: [
            {
                name: "Ninetales",
            },
        ],
        evolutionRequirements: {
            name: "Vulpi",
            amount: 50,
        },
        weight: {
            minimum: "8.66kg",
            maximum: "11.14kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjowMzg=",
        number: "038",
        name: "Ninetales",
        image: "https://img.pokemondb.net/artwork/ninetales.jpg",
        classification: "Fox Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
                {
                    name: "Heat Wave",
                    type: "Fire",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.06,
        maxCP: 2015,
        maxHP: 2188,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "17.41kg",
            maximum: "22.39kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjowMzk=",
        number: "039",
        name: "Jigglypuff",
        image: "https://img.pokemondb.net/artwork/jigglypuff.jpg",
        classification: "Balloon Pokémon",
        types: ["Normal", "Fairy"],
        resistant: ["Bug", "Ghost", "Dragon", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Feint Attack",
                    type: "Dark",
                    damage: 12,
                },
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Disarming Voice",
                    type: "Fairy",
                    damage: 25,
                },
                {
                    name: "Play Rough",
                    type: "Fairy",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Poison", "Steel"],
        fleeRate: 0.1,
        maxCP: 796,
        maxHP: 917,
        evolutions: [
            {
                name: "Jigglypuff",
            },
        ],
        evolutionRequirements: {
            name: "Jigglypuff candies",
            amount: 50,
        },
        weight: {
            minimum: "4.81kg",
            maximum: "6.19kg",
        },
        height: {
            minimum: "0.44m",
            maximum: "0.56m",
        },
    },
    {
        id: "UG9rZW1vbjowNDA=",
        number: "040",
        name: "Wigglytuff",
        image: "https://img.pokemondb.net/artwork/wigglytuff.jpg",
        classification: "Balloon Pokémon",
        types: ["Normal", "Fairy"],
        resistant: ["Bug", "Ghost", "Dragon", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Feint Attack",
                    type: "Dark",
                    damage: 12,
                },
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Dazzling Gleam",
                    type: "Fairy",
                    damage: 55,
                },
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
                {
                    name: "Play Rough",
                    type: "Fairy",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Poison", "Steel"],
        fleeRate: 0.06,
        maxCP: 1997,
        maxHP: 2177,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "10.5kg",
            maximum: "13.5kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNDE=",
        number: "041",
        name: "Zubat",
        image: "https://img.pokemondb.net/artwork/zubat.jpg",
        classification: "Bat Pokémon",
        types: ["Poison", "Flying"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Air Cutter",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Poison Fang",
                    type: "Poison",
                    damage: 25,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
        fleeRate: 0.2,
        maxCP: 550,
        maxHP: 642,
        evolutions: [
            {
                name: "Golbat",
            },
        ],
        evolutionRequirements: {
            name: "Zubat candies",
            amount: 50,
        },
        weight: {
            minimum: "6.56kg",
            maximum: "8.44kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjowNDI=",
        number: "042",
        name: "Golbat",
        image: "https://img.pokemondb.net/artwork/golbat.jpg",
        classification: "Bat Pokémon",
        types: ["Poison", "Flying"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Wing Attack",
                    type: "Flying",
                    damage: 9,
                },
            ],
            special: [
                {
                    name: "Air Cutter",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Ominous Wind",
                    type: "Ghost",
                    damage: 30,
                },
                {
                    name: "Poison Fang",
                    type: "Poison",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Psychic", "Rock"],
        fleeRate: 0.07,
        maxCP: 1760,
        maxHP: 1921,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "48.13kg",
            maximum: "61.88kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjowNDM=",
        number: "043",
        name: "Oddish",
        image: "https://img.pokemondb.net/artwork/oddish.jpg",
        classification: "Weed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Razor Leaf",
                    type: "Grass",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Moonblast",
                    type: "Fairy",
                    damage: 85,
                },
                {
                    name: "Seed Bomb",
                    type: "Grass",
                    damage: 40,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.15,
        maxCP: 1023,
        maxHP: 1148,
        evolutions: [
            {
                name: "Gloom",
            },
            {
                name: "Vileplume",
            },
        ],
        evolutionRequirements: {
            name: "Oddish candies",
            amount: 25,
        },
        weight: {
            minimum: "4.73kg",
            maximum: "6.08kg",
        },
        height: {
            minimum: "0.44m",
            maximum: "0.56m",
        },
    },
    {
        id: "UG9rZW1vbjowNDQ=",
        number: "044",
        name: "Gloom",
        image: "https://img.pokemondb.net/artwork/gloom.jpg",
        classification: "Weed Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Razor Leaf",
                    type: "Grass",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Moonblast",
                    type: "Fairy",
                    damage: 85,
                },
                {
                    name: "Petal Blizzard",
                    type: "Grass",
                    damage: 65,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.07,
        maxCP: 1537,
        maxHP: 1689,
        evolutions: [
            {
                name: "Vileplume",
            },
        ],
        evolutionRequirements: {
            name: "Oddish candies",
            amount: 100,
        },
        weight: {
            minimum: "7.53kg",
            maximum: "9.68kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjowNDU=",
        number: "045",
        name: "Vileplume",
        image: "https://img.pokemondb.net/artwork/vileplume.jpg",
        classification: "Flower Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Razor Leaf",
                    type: "Grass",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Moonblast",
                    type: "Fairy",
                    damage: 85,
                },
                {
                    name: "Petal Blizzard",
                    type: "Grass",
                    damage: 65,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.05,
        maxCP: 2307,
        maxHP: 2492,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "16.28kg",
            maximum: "20.93kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjowNDY=",
        number: "046",
        name: "Paras",
        image: "https://img.pokemondb.net/artwork/paras.jpg",
        classification: "Mushroom Pokémon",
        types: ["Bug", "Grass"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Ground"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Cross Poison",
                    type: "Poison",
                    damage: 25,
                },
                {
                    name: "Seed Bomb",
                    type: "Grass",
                    damage: 40,
                },
                {
                    name: "X Scissor",
                    type: "Bug",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
        fleeRate: 0.15,
        maxCP: 804,
        maxHP: 916,
        evolutions: [
            {
                name: "Parasect",
            },
        ],
        evolutionRequirements: {
            name: "Paras candies",
            amount: 50,
        },
        weight: {
            minimum: "4.73kg",
            maximum: "6.08kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowNDc=",
        number: "047",
        name: "Parasect",
        image: "https://img.pokemondb.net/artwork/parasect.jpg",
        classification: "Mushroom Pokémon",
        types: ["Bug", "Grass"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Ground"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Fury Cutter",
                    type: "Bug",
                    damage: 3,
                },
            ],
            special: [
                {
                    name: "Cross Poison",
                    type: "Poison",
                    damage: 25,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
                {
                    name: "X Scissor",
                    type: "Bug",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"],
        fleeRate: 0.07,
        maxCP: 1592,
        maxHP: 1747,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "25.81kg",
            maximum: "33.19kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNDg=",
        number: "048",
        name: "Venonat",
        image: "https://img.pokemondb.net/artwork/venonat.jpg",
        classification: "Insect Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Poison Fang",
                    type: "Poison",
                    damage: 25,
                },
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Signal Beam",
                    type: "Bug",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.15,
        maxCP: 912,
        maxHP: 1029,
        evolutions: [
            {
                name: "Venomoth",
            },
        ],
        evolutionRequirements: {
            name: "Venonat candies",
            amount: 50,
        },
        weight: {
            minimum: "26.25kg",
            maximum: "33.75kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNDk=",
        number: "049",
        name: "Venomoth",
        image: "https://img.pokemondb.net/artwork/venomoth.jpg",
        classification: "Poison Moth Pokémon",
        types: ["Bug", "Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bug Bite",
                    type: "Bug",
                    damage: 5,
                },
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Bug Buzz",
                    type: "Bug",
                    damage: 75,
                },
                {
                    name: "Poison Fang",
                    type: "Poison",
                    damage: 25,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Psychic", "Rock"],
        fleeRate: 0.07,
        maxCP: 1730,
        maxHP: 1890,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "10.94kg",
            maximum: "14.06kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjowNTA=",
        number: "050",
        name: "Diglett",
        image: "https://img.pokemondb.net/artwork/diglett.jpg",
        classification: "Mole Pokémon",
        types: ["Ground"],
        resistant: ["Electric", "Poison", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Mud Bomb",
                    type: "Ground",
                    damage: 30,
                },
                {
                    name: "Rock Tomb",
                    type: "Rock",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice"],
        fleeRate: 0.1,
        maxCP: 365,
        maxHP: 456,
        evolutions: [
            {
                name: "Dugtrio",
            },
        ],
        evolutionRequirements: {
            name: "Diglett candies",
            amount: 50,
        },
        weight: {
            minimum: "0.7kg",
            maximum: "0.9kg",
        },
        height: {
            minimum: "0.18m",
            maximum: "0.23m",
        },
    },
    {
        id: "UG9rZW1vbjowNTE=",
        number: "051",
        name: "Dugtrio",
        image: "https://img.pokemondb.net/artwork/dugtrio.jpg",
        classification: "Mole Pokémon",
        types: ["Ground"],
        resistant: ["Electric", "Poison", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Sucker Punch",
                    type: "Dark",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Mud Bomb",
                    type: "Ground",
                    damage: 30,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice"],
        fleeRate: 0.06,
        maxCP: 1038,
        maxHP: 1168,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "29.14kg",
            maximum: "37.46kg",
        },
        height: {
            minimum: "0.61m",
            maximum: "0.79m",
        },
    },
    {
        id: "UG9rZW1vbjowNTI=",
        number: "052",
        name: "Meowth",
        image: "https://img.pokemondb.net/artwork/meowth.jpg",
        classification: "Scratch Cat Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Night Slash",
                    type: "Dark",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.15,
        maxCP: 656,
        maxHP: 756,
        evolutions: [
            {
                name: "Persian",
            },
        ],
        evolutionRequirements: {
            name: "Meowth candies",
            amount: 50,
        },
        weight: {
            minimum: "3.67kg",
            maximum: "4.72kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjowNTM=",
        number: "053",
        name: "Persian",
        image: "https://img.pokemondb.net/artwork/persian.jpg",
        classification: "Classy Cat Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Feint Attack",
                    type: "Dark",
                    damage: 12,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Night Slash",
                    type: "Dark",
                    damage: 30,
                },
                {
                    name: "Play Rough",
                    type: "Fairy",
                    damage: 55,
                },
                {
                    name: "Power Gem",
                    type: "Rock",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.07,
        maxCP: 1483,
        maxHP: 1631,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "28kg",
            maximum: "36kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNTQ=",
        number: "054",
        name: "Psyduck",
        image: "https://img.pokemondb.net/artwork/psyduck.jpg",
        classification: "Duck Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Aqua Tail",
                    type: "Water",
                    damage: 45,
                },
                {
                    name: "Cross Chop",
                    type: "Fighting",
                    damage: 60,
                },
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.1,
        maxCP: 987,
        maxHP: 1109,
        evolutions: [
            {
                name: "Golduck",
            },
        ],
        evolutionRequirements: {
            name: "Psyduck candies",
            amount: 50,
        },
        weight: {
            minimum: "17.15kg",
            maximum: "22.05kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjowNTU=",
        number: "055",
        name: "Golduck",
        image: "https://img.pokemondb.net/artwork/golduck.jpg",
        classification: "Duck Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Gunk Shot",
                    type: "Poison",
                    damage: 65,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Ice Beam",
                    type: "Ice",
                    damage: 65,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.06,
        maxCP: 2206,
        maxHP: 2386,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "67.02kg",
            maximum: "86.17kg",
        },
        height: {
            minimum: "1.49m",
            maximum: "1.91m",
        },
    },
    {
        id: "UG9rZW1vbjowNTY=",
        number: "056",
        name: "Mankey",
        image: "https://img.pokemondb.net/artwork/mankey.jpg",
        classification: "Pig Monkey Pokémon",
        types: ["Fighting"],
        resistant: ["Bug", "Rock", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Karate Chop",
                    type: "Fighting",
                    damage: 6,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Brick Break",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Cross Chop",
                    type: "Fighting",
                    damage: 60,
                },
                {
                    name: "Low Sweep",
                    type: "Fighting",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Flying", "Psychic", "Fairy"],
        fleeRate: 0.1,
        maxCP: 769,
        maxHP: 878,
        evolutions: [
            {
                name: "Primeape",
            },
        ],
        evolutionRequirements: {
            name: "Mankey candies",
            amount: 50,
        },
        weight: {
            minimum: "24.5kg",
            maximum: "31.5kg",
        },
        height: {
            minimum: "0.44m",
            maximum: "0.56m",
        },
    },
    {
        id: "UG9rZW1vbjowNTc=",
        number: "057",
        name: "Primeape",
        image: "https://img.pokemondb.net/artwork/primeape.jpg",
        classification: "Pig Monkey Pokémon",
        types: ["Fighting"],
        resistant: ["Bug", "Rock", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Karate Chop",
                    type: "Fighting",
                    damage: 6,
                },
                {
                    name: "Low Kick",
                    type: "Fighting",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Cross Chop",
                    type: "Fighting",
                    damage: 60,
                },
                {
                    name: "Low Sweep",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Night Slash",
                    type: "Dark",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Flying", "Psychic", "Fairy"],
        fleeRate: 0.06,
        maxCP: 1704,
        maxHP: 1864,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "28kg",
            maximum: "36kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNTg=",
        number: "058",
        name: "Growlithe",
        image: "https://img.pokemondb.net/artwork/growlithe.jpg",
        classification: "Puppy Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Flame Wheel",
                    type: "Fire",
                    damage: 40,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.1,
        maxCP: 1199,
        maxHP: 1335,
        evolutions: [
            {
                name: "Arcanine",
            },
        ],
        evolutionRequirements: {
            name: "Growlithe candies",
            amount: 50,
        },
        weight: {
            minimum: "16.63kg",
            maximum: "21.38kg",
        },
        height: {
            minimum: "0.61m",
            maximum: "0.79m",
        },
    },
    {
        id: "UG9rZW1vbjowNTk=",
        number: "059",
        name: "Arcanine",
        image: "https://img.pokemondb.net/artwork/arcanine.jpg",
        classification: "Legendary Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Fire Fang",
                    type: "Fire",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Bulldoze",
                    type: "Ground",
                    damage: 35,
                },
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.06,
        maxCP: 2781,
        maxHP: 2983,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "135.63kg",
            maximum: "174.38kg",
        },
        height: {
            minimum: "1.66m",
            maximum: "2.14m",
        },
    },
    {
        id: "UG9rZW1vbjowNjA=",
        number: "060",
        name: "Poliwag",
        image: "https://img.pokemondb.net/artwork/poliwag.jpg",
        classification: "Tadpole Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bubble",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Bubble Beam",
                    type: "Water",
                    damage: 30,
                },
                {
                    name: "Mud Bomb",
                    type: "Ground",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.15,
        maxCP: 693,
        maxHP: 795,
        evolutions: [
            {
                name: "Poliwhirl",
            },
            {
                name: "Poliwrath",
            },
        ],
        evolutionRequirements: {
            name: "Poliwag candies",
            amount: 25,
        },
        weight: {
            minimum: "10.85kg",
            maximum: "13.95kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjowNjE=",
        number: "061",
        name: "Poliwhirl",
        image: "https://img.pokemondb.net/artwork/poliwhirl.jpg",
        classification: "Tadpole Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bubble",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Bubble Beam",
                    type: "Water",
                    damage: 30,
                },
                {
                    name: "Mud Bomb",
                    type: "Ground",
                    damage: 30,
                },
                {
                    name: "Scald",
                    type: "Water",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.07,
        maxCP: 1206,
        maxHP: 1340,
        evolutions: [
            {
                name: "Poliwrath",
            },
        ],
        evolutionRequirements: {
            name: "Poliwag candies",
            amount: 100,
        },
        weight: {
            minimum: "17.5kg",
            maximum: "22.5kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNjI=",
        number: "062",
        name: "Poliwrath",
        image: "https://img.pokemondb.net/artwork/poliwrath.jpg",
        classification: "Tadpole Pokémon",
        types: ["Water", "Fighting"],
        resistant: ["Fire", "Water", "Ice", "Bug", "Rock", "Dark", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bubble",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Ice Punch",
                    type: "Ice",
                    damage: 45,
                },
                {
                    name: "Submission",
                    type: "Fighting",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Flying", "Psychic", "Fairy"],
        fleeRate: 0.05,
        maxCP: 2321,
        maxHP: 2505,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "47.25kg",
            maximum: "60.75kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjowNjM=",
        number: "063",
        name: "Abra",
        image: "https://img.pokemondb.net/artwork/abra.jpg",
        classification: "Psi Pokémon",
        types: ["Psychic"],
        resistant: ["Fighting", "Psychic"],
        attacks: {
            fast: [
                {
                    name: null,
                    type: null,
                    damage: null,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Psyshock",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
                {
                    name: "Signal Beam",
                    type: "Bug",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Bug", "Ghost", "Dark"],
        fleeRate: 0.99,
        maxCP: 508,
        maxHP: 600,
        evolutions: [
            {
                name: "Kadabra",
            },
            {
                name: "Alakazam",
            },
        ],
        evolutionRequirements: {
            name: "Abra candies",
            amount: 25,
        },
        weight: {
            minimum: "17.06kg",
            maximum: "21.94kg",
        },
        height: {
            minimum: "0.79m",
            maximum: "1.01m",
        },
    },
    {
        id: "UG9rZW1vbjowNjQ=",
        number: "064",
        name: "Kadabra",
        image: "https://img.pokemondb.net/artwork/kadabra.jpg",
        classification: "Psi Pokémon",
        types: ["Psychic"],
        resistant: ["Fighting", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Psycho Cut",
                    type: "Psychic",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Dazzling Gleam",
                    type: "Fairy",
                    damage: 55,
                },
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Bug", "Ghost", "Dark"],
        fleeRate: 0.07,
        maxCP: 1005,
        maxHP: 1131,
        evolutions: [
            {
                name: "Alakazam",
            },
        ],
        evolutionRequirements: {
            name: "Abra candies",
            amount: 100,
        },
        weight: {
            minimum: "49.44kg",
            maximum: "63.56kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjowNjU=",
        number: "065",
        name: "Alakazam",
        image: "https://img.pokemondb.net/artwork/alakazam.jpg",
        classification: "Psi Pokémon",
        types: ["Psychic"],
        resistant: ["Fighting", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Psycho Cut",
                    type: "Psychic",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Dazzling Gleam",
                    type: "Fairy",
                    damage: 55,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Bug", "Ghost", "Dark"],
        fleeRate: 0.05,
        maxCP: 1654,
        maxHP: 1813,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "42kg",
            maximum: "54kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjowNjY=",
        number: "066",
        name: "Machop",
        image: "https://img.pokemondb.net/artwork/machop.jpg",
        classification: "Superpower Pokémon",
        types: ["Fighting"],
        resistant: ["Bug", "Rock", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Karate Chop",
                    type: "Fighting",
                    damage: 6,
                },
                {
                    name: "Low Kick",
                    type: "Fighting",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Brick Break",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Cross Chop",
                    type: "Fighting",
                    damage: 60,
                },
                {
                    name: "Low Sweep",
                    type: "Fighting",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Flying", "Psychic", "Fairy"],
        fleeRate: 0.1,
        maxCP: 968,
        maxHP: 1089,
        evolutions: [
            {
                name: "Machoke",
            },
            {
                name: "Machamp",
            },
        ],
        evolutionRequirements: {
            name: "Machop candies",
            amount: 25,
        },
        weight: {
            minimum: "17.06kg",
            maximum: "21.94kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjowNjc=",
        number: "067",
        name: "Machoke",
        image: "https://img.pokemondb.net/artwork/machoke.jpg",
        classification: "Superpower Pokémon",
        types: ["Fighting"],
        resistant: ["Bug", "Rock", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Karate Chop",
                    type: "Fighting",
                    damage: 6,
                },
                {
                    name: "Low Kick",
                    type: "Fighting",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Brick Break",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Cross Chop",
                    type: "Fighting",
                    damage: 60,
                },
                {
                    name: "Submission",
                    type: "Fighting",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Flying", "Psychic", "Fairy"],
        fleeRate: 0.07,
        maxCP: 1606,
        maxHP: 1760,
        evolutions: [
            {
                name: "Machamp",
            },
        ],
        evolutionRequirements: {
            name: "Machop candies",
            amount: 100,
        },
        weight: {
            minimum: "61.69kg",
            maximum: "79.31kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjowNjg=",
        number: "068",
        name: "Machamp",
        image: "https://img.pokemondb.net/artwork/machamp.jpg",
        classification: "Superpower Pokémon",
        types: ["Fighting"],
        resistant: ["Bug", "Rock", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Bullet Punch",
                    type: "Steel",
                    damage: 10,
                },
                {
                    name: "Karate Chop",
                    type: "Fighting",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Cross Chop",
                    type: "Fighting",
                    damage: 60,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
                {
                    name: "Submission",
                    type: "Fighting",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Flying", "Psychic", "Fairy"],
        fleeRate: 0.05,
        maxCP: 2406,
        maxHP: 2594,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "113.75kg",
            maximum: "146.25kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjowNjk=",
        number: "069",
        name: "Bellsprout",
        image: "https://img.pokemondb.net/artwork/bellsprout.jpg",
        classification: "Flower Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Vine Whip",
                    type: "Grass",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Power Whip",
                    type: "Grass",
                    damage: 70,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
                {
                    name: "Wrap",
                    type: "Normal",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.15,
        maxCP: 990,
        maxHP: 1117,
        evolutions: [
            {
                name: "Weepinbell",
            },
            {
                name: "Victreebel",
            },
        ],
        evolutionRequirements: {
            name: "Bellsprout candies",
            amount: 25,
        },
        weight: {
            minimum: "3.5kg",
            maximum: "4.5kg",
        },
        height: {
            minimum: "0.61m",
            maximum: "0.79m",
        },
    },
    {
        id: "UG9rZW1vbjowNzA=",
        number: "070",
        name: "Weepinbell",
        image: "https://img.pokemondb.net/artwork/weepinbell.jpg",
        classification: "Flycatcher Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Razor Leaf",
                    type: "Grass",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Power Whip",
                    type: "Grass",
                    damage: 70,
                },
                {
                    name: "Seed Bomb",
                    type: "Grass",
                    damage: 40,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.07,
        maxCP: 1567,
        maxHP: 1723,
        evolutions: [
            {
                name: "Victreebel",
            },
        ],
        evolutionRequirements: {
            name: "Bellsprout candies",
            amount: 100,
        },
        weight: {
            minimum: "5.6kg",
            maximum: "7.2kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNzE=",
        number: "071",
        name: "Victreebel",
        image: "https://img.pokemondb.net/artwork/victreebel.jpg",
        classification: "Flycatcher Pokémon",
        types: ["Grass", "Poison"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Razor Leaf",
                    type: "Grass",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Leaf Blade",
                    type: "Grass",
                    damage: 55,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        fleeRate: 0.05,
        maxCP: 2342,
        maxHP: 2530,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "13.56kg",
            maximum: "17.44kg",
        },
        height: {
            minimum: "1.49m",
            maximum: "1.91m",
        },
    },
    {
        id: "UG9rZW1vbjowNzI=",
        number: "072",
        name: "Tentacool",
        image: "https://img.pokemondb.net/artwork/tentacool.jpg",
        classification: "Jellyfish Pokémon",
        types: ["Water", "Poison"],
        resistant: [
            "Fire",
            "Water",
            "Ice",
            "Fighting",
            "Poison",
            "Bug",
            "Steel",
            "Fairy",
        ],
        attacks: {
            fast: [
                {
                    name: "Bubble",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Poison Sting",
                    type: "Poison",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Bubble Beam",
                    type: "Water",
                    damage: 30,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
                {
                    name: "Wrap",
                    type: "Normal",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Ground", "Psychic"],
        fleeRate: 0.15,
        maxCP: 794,
        maxHP: 905,
        evolutions: [
            {
                name: "Tentacruel",
            },
        ],
        evolutionRequirements: {
            name: "Tentacool candies",
            amount: 50,
        },
        weight: {
            minimum: "39.81kg",
            maximum: "51.19kg",
        },
        height: {
            minimum: "0.79m",
            maximum: "1.01m",
        },
    },
    {
        id: "UG9rZW1vbjowNzM=",
        number: "073",
        name: "Tentacruel",
        image: "https://img.pokemondb.net/artwork/tentacruel.jpg",
        classification: "Jellyfish Pokémon",
        types: ["Water", "Poison"],
        resistant: [
            "Fire",
            "Water",
            "Ice",
            "Fighting",
            "Poison",
            "Bug",
            "Steel",
            "Fairy",
        ],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Poison Jab",
                    type: "Poison",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Blizzard",
                    type: "Ice",
                    damage: 100,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Sludge Wave",
                    type: "Poison",
                    damage: 70,
                },
            ],
        },
        weaknesses: ["Electric", "Ground", "Psychic"],
        fleeRate: 0.07,
        maxCP: 2046,
        maxHP: 2220,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "48.13kg",
            maximum: "61.88kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjowNzQ=",
        number: "074",
        name: "Geodude",
        image: "https://img.pokemondb.net/artwork/geodude.jpg",
        classification: "Rock Pokémon",
        types: ["Rock", "Ground"],
        resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Rock Throw",
                    type: "Rock",
                    damage: 12,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Rock Slide",
                    type: "Rock",
                    damage: 50,
                },
                {
                    name: "Rock Tomb",
                    type: "Rock",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        fleeRate: 0.1,
        maxCP: 742,
        maxHP: 849,
        evolutions: [
            {
                name: "Graveler",
            },
            {
                name: "Golem",
            },
        ],
        evolutionRequirements: {
            name: "Geodude candies",
            amount: 25,
        },
        weight: {
            minimum: "17.5kg",
            maximum: "22.5kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjowNzU=",
        number: "075",
        name: "Graveler",
        image: "https://img.pokemondb.net/artwork/graveler.jpg",
        classification: "Rock Pokémon",
        types: ["Rock", "Ground"],
        resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Rock Throw",
                    type: "Rock",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Rock Slide",
                    type: "Rock",
                    damage: 50,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        fleeRate: 0.07,
        maxCP: 1294,
        maxHP: 1433,
        evolutions: [
            {
                name: "Golem",
            },
        ],
        evolutionRequirements: {
            name: "Geodude candies",
            amount: 100,
        },
        weight: {
            minimum: "91.88kg",
            maximum: "118.13kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNzY=",
        number: "076",
        name: "Golem",
        image: "https://img.pokemondb.net/artwork/golem.jpg",
        classification: "Megaton Pokémon",
        types: ["Rock", "Ground"],
        resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Rock Throw",
                    type: "Rock",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Ancient Power",
                    type: "Rock",
                    damage: 35,
                },
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        fleeRate: 0.05,
        maxCP: 2126,
        maxHP: 2303,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "262.5kg",
            maximum: "337.5kg",
        },
        height: {
            minimum: "1.22m",
            maximum: "1.57m",
        },
    },
    {
        id: "UG9rZW1vbjowNzc=",
        number: "077",
        name: "Ponyta",
        image: "https://img.pokemondb.net/artwork/ponyta.jpg",
        classification: "Fire Horse Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Flame Charge",
                    type: "Fire",
                    damage: 25,
                },
                {
                    name: "Flame Wheel",
                    type: "Fire",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.1,
        maxCP: 1370,
        maxHP: 1516,
        evolutions: [
            {
                name: "Rapidash",
            },
        ],
        evolutionRequirements: {
            name: "Ponyta candies",
            amount: 50,
        },
        weight: {
            minimum: "26.25kg",
            maximum: "33.75kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowNzg=",
        number: "078",
        name: "Rapidash",
        image: "https://img.pokemondb.net/artwork/rapidash.jpg",
        classification: "Fire Horse Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Low Kick",
                    type: "Fighting",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Drill Run",
                    type: "Ground",
                    damage: 50,
                },
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Heat Wave",
                    type: "Fire",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.06,
        maxCP: 2024,
        maxHP: 2199,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "83.13kg",
            maximum: "106.88kg",
        },
        height: {
            minimum: "1.49m",
            maximum: "1.91m",
        },
    },
    {
        id: "UG9rZW1vbjowNzk=",
        number: "079",
        name: "Slowpoke",
        image: "https://img.pokemondb.net/artwork/slowpoke.jpg",
        classification: "Dopey Pokémon",
        types: ["Water", "Psychic"],
        resistant: ["Fire", "Water", "Ice", "Fighting", "Psychic", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Psyshock",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
        fleeRate: 0.1,
        maxCP: 1089,
        maxHP: 1218,
        evolutions: [
            {
                name: "Slowbro",
            },
        ],
        evolutionRequirements: {
            name: "Slowpoke candies",
            amount: 50,
        },
        weight: {
            minimum: "31.5kg",
            maximum: "40.5kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjowODA=",
        number: "080",
        name: "Slowbro",
        image: "https://img.pokemondb.net/artwork/slowbro.jpg",
        classification: "Hermit Crab Pokémon",
        types: ["Water", "Psychic"],
        resistant: ["Fire", "Water", "Ice", "Fighting", "Psychic", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Ice Beam",
                    type: "Ice",
                    damage: 65,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
        fleeRate: 0.06,
        maxCP: 2409,
        maxHP: 2597,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "68.69kg",
            maximum: "88.31kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjowODE=",
        number: "081",
        name: "Magnemite",
        image: "https://img.pokemondb.net/artwork/magnemite.jpg",
        classification: "Magnet Pokémon",
        types: ["Electric", "Steel"],
        resistant: [
            "Normal",
            "Electric",
            "Grass",
            "Ice",
            "Poison",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Dragon",
            "Steel",
            "Fairy",
        ],
        attacks: {
            fast: [
                {
                    name: "Spark",
                    type: "Electric",
                    damage: 7,
                },
                {
                    name: "Thunder Shock",
                    type: "Electric",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Magnet Bomb",
                    type: "Steel",
                    damage: 30,
                },
                {
                    name: "Thunderbolt",
                    type: "Electric",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Fire", "Fighting", "Ground"],
        fleeRate: 0.1,
        maxCP: 774,
        maxHP: 890,
        evolutions: [
            {
                name: "Magneton",
            },
        ],
        evolutionRequirements: {
            name: "Magnemite candies",
            amount: 50,
        },
        weight: {
            minimum: "5.25kg",
            maximum: "6.75kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowODI=",
        number: "082",
        name: "Magneton",
        image: "https://img.pokemondb.net/artwork/magneton.jpg",
        classification: "Magnet Pokémon",
        types: ["Electric", "Steel"],
        resistant: [
            "Normal",
            "Electric",
            "Grass",
            "Ice",
            "Poison",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Dragon",
            "Steel",
            "Fairy",
        ],
        attacks: {
            fast: [
                {
                    name: "Spark",
                    type: "Electric",
                    damage: 7,
                },
                {
                    name: "Thunder Shock",
                    type: "Electric",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Flash Cannon",
                    type: "Steel",
                    damage: 60,
                },
                {
                    name: "Magnet Bomb",
                    type: "Steel",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Fire", "Fighting", "Ground"],
        fleeRate: 0.06,
        maxCP: 1715,
        maxHP: 1879,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "52.5kg",
            maximum: "67.5kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowODM=",
        number: "083",
        name: "Farfetch'd",
        image: "https://img.pokemondb.net/artwork/farfetchd.jpg",
        classification: "Wild Duck Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: null,
                    type: null,
                    damage: null,
                },
                {
                    name: "Fury Cutter",
                    type: "Bug",
                    damage: 3,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Air Cutter",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Leaf Blade",
                    type: "Grass",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.09,
        maxCP: 1133,
        maxHP: 1263,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "13.13kg",
            maximum: "16.88kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjowODQ=",
        number: "084",
        name: "Doduo",
        image: "https://img.pokemondb.net/artwork/doduo.jpg",
        classification: "Twin Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: "Peck",
                    type: "Flying",
                    damage: 10,
                },
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Drill Peck",
                    type: "Flying",
                    damage: 40,
                },
                {
                    name: "Swift",
                    type: "Normal",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.1,
        maxCP: 746,
        maxHP: 855,
        evolutions: [
            {
                name: "Dodrio",
            },
        ],
        evolutionRequirements: {
            name: "Doduo candies",
            amount: 50,
        },
        weight: {
            minimum: "34.3kg",
            maximum: "44.1kg",
        },
        height: {
            minimum: "1.22m",
            maximum: "1.57m",
        },
    },
    {
        id: "UG9rZW1vbjowODU=",
        number: "085",
        name: "Dodrio",
        image: "https://img.pokemondb.net/artwork/dodrio.jpg",
        classification: "Triple Bird Pokémon",
        types: ["Normal", "Flying"],
        resistant: ["Grass", "Ground", "Bug", "Ghost"],
        attacks: {
            fast: [
                {
                    name: "Feint Attack",
                    type: "Dark",
                    damage: 12,
                },
                {
                    name: "Steel Wing",
                    type: "Steel",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Aerial Ace",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Air Cutter",
                    type: "Flying",
                    damage: 30,
                },
                {
                    name: "Drill Peck",
                    type: "Flying",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Electric", "Ice", "Rock"],
        fleeRate: 0.06,
        maxCP: 1677,
        maxHP: 1836,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "74.55kg",
            maximum: "95.85kg",
        },
        height: {
            minimum: "1.57m",
            maximum: "2.02m",
        },
    },
    {
        id: "UG9rZW1vbjowODY=",
        number: "086",
        name: "Seel",
        image: "https://img.pokemondb.net/artwork/seel.jpg",
        classification: "Sea Lion Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Ice Shard",
                    type: "Ice",
                    damage: 15,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Aqua Jet",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Aqua Tail",
                    type: "Water",
                    damage: 45,
                },
                {
                    name: "Icy Wind",
                    type: "Ice",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.09,
        maxCP: 985,
        maxHP: 1107,
        evolutions: [
            {
                name: "Dewgong",
            },
        ],
        evolutionRequirements: {
            name: "Seel candies",
            amount: 50,
        },
        weight: {
            minimum: "78.75kg",
            maximum: "101.25kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjowODc=",
        number: "087",
        name: "Dewgong",
        image: "https://img.pokemondb.net/artwork/dewgong.jpg",
        classification: "Sea Lion Pokémon",
        types: ["Water", "Ice"],
        resistant: ["Water", "Ice"],
        attacks: {
            fast: [
                {
                    name: "Frost Breath",
                    type: "Ice",
                    damage: 9,
                },
                {
                    name: "Ice Shard",
                    type: "Ice",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Aqua Jet",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Blizzard",
                    type: "Ice",
                    damage: 100,
                },
                {
                    name: "Icy Wind",
                    type: "Ice",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
        fleeRate: 0.06,
        maxCP: 1975,
        maxHP: 2145,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "105kg",
            maximum: "135kg",
        },
        height: {
            minimum: "1.49m",
            maximum: "1.91m",
        },
    },
    {
        id: "UG9rZW1vbjowODg=",
        number: "088",
        name: "Grimer",
        image: "https://img.pokemondb.net/artwork/grimer.jpg",
        classification: "Sludge Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Mud Slap",
                    type: "Ground",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Mud Bomb",
                    type: "Ground",
                    damage: 30,
                },
                {
                    name: "Sludge",
                    type: "Poison",
                    damage: 30,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.1,
        maxCP: 1152,
        maxHP: 1284,
        evolutions: [
            {
                name: "Muk",
            },
        ],
        evolutionRequirements: {
            name: "Grimer candies",
            amount: 50,
        },
        weight: {
            minimum: "26.25kg",
            maximum: "33.75kg",
        },
        height: {
            minimum: "0.79m",
            maximum: "1.01m",
        },
    },
    {
        id: "UG9rZW1vbjowODk=",
        number: "089",
        name: "Muk",
        image: "https://img.pokemondb.net/artwork/muk.jpg",
        classification: "Sludge Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Poison Jab",
                    type: "Poison",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Gunk Shot",
                    type: "Poison",
                    damage: 65,
                },
                {
                    name: "Sludge Wave",
                    type: "Poison",
                    damage: 70,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.06,
        maxCP: 2414,
        maxHP: 2602,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "26.25kg",
            maximum: "33.75kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjowOTA=",
        number: "090",
        name: "Shellder",
        image: "https://img.pokemondb.net/artwork/shellder.jpg",
        classification: "Bivalve Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Ice Shard",
                    type: "Ice",
                    damage: 15,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Bubble Beam",
                    type: "Water",
                    damage: 30,
                },
                {
                    name: "Icy Wind",
                    type: "Ice",
                    damage: 25,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.1,
        maxCP: 715,
        maxHP: 822,
        evolutions: [
            {
                name: "Cloyster",
            },
        ],
        evolutionRequirements: {
            name: "Shellder candies",
            amount: 50,
        },
        weight: {
            minimum: "3.5kg",
            maximum: "4.5kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjowOTE=",
        number: "091",
        name: "Cloyster",
        image: "https://img.pokemondb.net/artwork/cloyster.jpg",
        classification: "Bivalve Pokémon",
        types: ["Water", "Ice"],
        resistant: ["Water", "Ice"],
        attacks: {
            fast: [
                {
                    name: "Frost Breath",
                    type: "Ice",
                    damage: 9,
                },
                {
                    name: "Ice Shard",
                    type: "Ice",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Blizzard",
                    type: "Ice",
                    damage: 100,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Icy Wind",
                    type: "Ice",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
        fleeRate: 0.06,
        maxCP: 1879,
        maxHP: 2052,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "115.94kg",
            maximum: "149.06kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjowOTI=",
        number: "092",
        name: "Gastly",
        image: "https://img.pokemondb.net/artwork/gastly.jpg",
        classification: "Gas Pokémon",
        types: ["Ghost", "Poison"],
        resistant: ["Normal", "Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Lick",
                    type: "Ghost",
                    damage: 5,
                },
                {
                    name: "Sucker Punch",
                    type: "Dark",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Ominous Wind",
                    type: "Ghost",
                    damage: 30,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
        fleeRate: 0.1,
        maxCP: 696,
        maxHP: 804,
        evolutions: [
            {
                name: "Haunter",
            },
            {
                name: "Gengar",
            },
        ],
        evolutionRequirements: {
            name: "Gastly candies",
            amount: 25,
        },
        weight: {
            minimum: "0.09kg",
            maximum: "0.11kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjowOTM=",
        number: "093",
        name: "Haunter",
        image: "https://img.pokemondb.net/artwork/haunter.jpg",
        classification: "Gas Pokémon",
        types: ["Ghost", "Poison"],
        resistant: ["Normal", "Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Lick",
                    type: "Ghost",
                    damage: 5,
                },
                {
                    name: "Shadow Claw",
                    type: "Ghost",
                    damage: 11,
                },
            ],
            special: [
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
        fleeRate: 0.07,
        maxCP: 1240,
        maxHP: 1380,
        evolutions: [
            {
                name: "Gengar",
            },
        ],
        evolutionRequirements: {
            name: "Gastly candies",
            amount: 100,
        },
        weight: {
            minimum: "0.09kg",
            maximum: "0.11kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjowOTQ=",
        number: "094",
        name: "Gengar",
        image: "https://img.pokemondb.net/artwork/gengar.jpg",
        classification: "Shadow Pokémon",
        types: ["Ghost", "Poison"],
        resistant: ["Normal", "Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Shadow Claw",
                    type: "Ghost",
                    damage: 11,
                },
                {
                    name: "Sucker Punch",
                    type: "Dark",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
                {
                    name: "Sludge Wave",
                    type: "Poison",
                    damage: 70,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic", "Ghost", "Dark"],
        fleeRate: 0.05,
        maxCP: 1907,
        maxHP: 2078,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "35.44kg",
            maximum: "45.56kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjowOTU=",
        number: "095",
        name: "Onix",
        image: "https://img.pokemondb.net/artwork/onix.jpg",
        classification: "Rock Snake Pokémon",
        types: ["Rock", "Ground"],
        resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Rock Throw",
                    type: "Rock",
                    damage: 12,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Iron Head",
                    type: "Steel",
                    damage: 30,
                },
                {
                    name: "Rock Slide",
                    type: "Rock",
                    damage: 50,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        fleeRate: 0.09,
        maxCP: 745,
        maxHP: 857,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "183.75kg",
            maximum: "236.25kg",
        },
        height: {
            minimum: "7.7m",
            maximum: "9.9m",
        },
    },
    {
        id: "UG9rZW1vbjowOTY=",
        number: "096",
        name: "Drowzee",
        image: "https://img.pokemondb.net/artwork/drowzee.jpg",
        classification: "Hypnosis Pokémon",
        types: ["Psychic"],
        resistant: ["Fighting", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Psyshock",
                    type: "Psychic",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Bug", "Ghost", "Dark"],
        fleeRate: 0.1,
        maxCP: 955,
        maxHP: 1075,
        evolutions: [
            {
                name: "Hypno",
            },
        ],
        evolutionRequirements: {
            name: "Drowzee candies",
            amount: 50,
        },
        weight: {
            minimum: "28.35kg",
            maximum: "36.45kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjowOTc=",
        number: "097",
        name: "Hypno",
        image: "https://img.pokemondb.net/artwork/hypno.jpg",
        classification: "Hypnosis Pokémon",
        types: ["Psychic"],
        resistant: ["Fighting", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Psyshock",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Bug", "Ghost", "Dark"],
        fleeRate: 0.06,
        maxCP: 2012,
        maxHP: 2184,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "66.15kg",
            maximum: "85.05kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjowOTg=",
        number: "098",
        name: "Krabby",
        image: "https://img.pokemondb.net/artwork/krabby.jpg",
        classification: "River Crab Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bubble",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Bubble Beam",
                    type: "Water",
                    damage: 30,
                },
                {
                    name: "Vice Grip",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.15,
        maxCP: 686,
        maxHP: 792,
        evolutions: [
            {
                name: "Kingler",
            },
        ],
        evolutionRequirements: {
            name: "Krabby candies",
            amount: 50,
        },
        weight: {
            minimum: "5.69kg",
            maximum: "7.31kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjowOTk=",
        number: "099",
        name: "Kingler",
        image: "https://img.pokemondb.net/artwork/kingler.jpg",
        classification: "Pincer Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Metal Claw",
                    type: "Steel",
                    damage: 8,
                },
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Vice Grip",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
                {
                    name: "X Scissor",
                    type: "Bug",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.07,
        maxCP: 1663,
        maxHP: 1823,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "52.5kg",
            maximum: "67.5kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDA=",
        number: "100",
        name: "Voltorb",
        image: "https://img.pokemondb.net/artwork/voltorb.jpg",
        classification: "Ball Pokémon",
        types: ["Electric"],
        resistant: ["Electric", "Flying", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Spark",
                    type: "Electric",
                    damage: 7,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Signal Beam",
                    type: "Bug",
                    damage: 45,
                },
                {
                    name: "Thunderbolt",
                    type: "Electric",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground"],
        fleeRate: 0.1,
        maxCP: 733,
        maxHP: 839,
        evolutions: [
            {
                name: "Electrode",
            },
        ],
        evolutionRequirements: {
            name: "Voltorb candies",
            amount: 50,
        },
        weight: {
            minimum: "9.1kg",
            maximum: "11.7kg",
        },
        height: {
            minimum: "0.44m",
            maximum: "0.56m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDE=",
        number: "101",
        name: "Electrode",
        image: "https://img.pokemondb.net/artwork/electrode.jpg",
        classification: "Ball Pokémon",
        types: ["Electric"],
        resistant: ["Electric", "Flying", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Spark",
                    type: "Electric",
                    damage: 7,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
                {
                    name: "Thunderbolt",
                    type: "Electric",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground"],
        fleeRate: 0.06,
        maxCP: 1496,
        maxHP: 1646,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "58.27kg",
            maximum: "74.92kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDI=",
        number: "102",
        name: "Exeggcute",
        image: "https://img.pokemondb.net/artwork/exeggcute.jpg",
        classification: "Egg Pokémon",
        types: ["Grass", "Psychic"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Ground", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Ancient Power",
                    type: "Rock",
                    damage: 35,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Seed Bomb",
                    type: "Grass",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
        fleeRate: 0.1,
        maxCP: 978,
        maxHP: 1099,
        evolutions: [
            {
                name: "Exeggutor",
            },
        ],
        evolutionRequirements: {
            name: "E",
            amount: 50,
        },
        weight: {
            minimum: "2.19kg",
            maximum: "2.81kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDM=",
        number: "103",
        name: "Exeggutor",
        image: "https://img.pokemondb.net/artwork/exeggutor.jpg",
        classification: "Coconut Pokémon",
        types: ["Grass", "Psychic"],
        resistant: ["Water", "Electric", "Grass", "Fighting", "Ground", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Seed Bomb",
                    type: "Grass",
                    damage: 40,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
        fleeRate: 0.06,
        maxCP: 2752,
        maxHP: 2955,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "105kg",
            maximum: "135kg",
        },
        height: {
            minimum: "1.75m",
            maximum: "2.25m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDQ=",
        number: "104",
        name: "Cubone",
        image: "https://img.pokemondb.net/artwork/cubone.jpg",
        classification: "Lonely Pokémon",
        types: ["Ground"],
        resistant: ["Electric", "Poison", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Slap",
                    type: "Ground",
                    damage: 15,
                },
                {
                    name: "Rock Smash",
                    type: "Fighting",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Bulldoze",
                    type: "Ground",
                    damage: 35,
                },
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice"],
        fleeRate: 0.1,
        maxCP: 889,
        maxHP: 1006,
        evolutions: [
            {
                name: "Marowak",
            },
        ],
        evolutionRequirements: {
            name: "Cubone candies",
            amount: 50,
        },
        weight: {
            minimum: "5.69kg",
            maximum: "7.31kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDU=",
        number: "105",
        name: "Marowak",
        image: "https://img.pokemondb.net/artwork/marowak.jpg",
        classification: "Bone Keeper Pokémon",
        types: ["Ground"],
        resistant: ["Electric", "Poison", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Slap",
                    type: "Ground",
                    damage: 15,
                },
                {
                    name: "Rock Smash",
                    type: "Fighting",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Bone Club",
                    type: "Ground",
                    damage: 25,
                },
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice"],
        fleeRate: 0.06,
        maxCP: 1505,
        maxHP: 1656,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "39.38kg",
            maximum: "50.63kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDY=",
        number: "106",
        name: "Hitmonlee",
        image: "https://img.pokemondb.net/artwork/hitmonlee.jpg",
        classification: "Kicking Pokémon",
        types: ["Fighting"],
        resistant: ["Bug", "Rock", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Low Kick",
                    type: "Fighting",
                    damage: 5,
                },
                {
                    name: "Rock Smash",
                    type: "Fighting",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Low Sweep",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Stomp",
                    type: "Normal",
                    damage: 30,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Flying", "Psychic", "Fairy"],
        fleeRate: 0.09,
        maxCP: 1349,
        maxHP: 1492,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "43.57kg",
            maximum: "56.02kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDc=",
        number: "107",
        name: "Hitmonchan",
        image: "https://img.pokemondb.net/artwork/hitmonchan.jpg",
        classification: "Punching Pokémon",
        types: ["Fighting"],
        resistant: ["Bug", "Rock", "Dark"],
        attacks: {
            fast: [
                {
                    name: "Bullet Punch",
                    type: "Steel",
                    damage: 10,
                },
                {
                    name: "Rock Smash",
                    type: "Fighting",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Brick Break",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Fire Punch",
                    type: "Fire",
                    damage: 40,
                },
                {
                    name: "Ice Punch",
                    type: "Ice",
                    damage: 45,
                },
                {
                    name: "Thunder Punch",
                    type: "Electric",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Flying", "Psychic", "Fairy"],
        fleeRate: 0.09,
        maxCP: 1370,
        maxHP: 1516,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "43.93kg",
            maximum: "56.48kg",
        },
        height: {
            minimum: "1.22m",
            maximum: "1.57m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDg=",
        number: "108",
        name: "Lickitung",
        image: "https://img.pokemondb.net/artwork/lickitung.jpg",
        classification: "Licking Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Lick",
                    type: "Ghost",
                    damage: 5,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
                {
                    name: "Power Whip",
                    type: "Grass",
                    damage: 70,
                },
                {
                    name: "Stomp",
                    type: "Normal",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.09,
        maxCP: 1477,
        maxHP: 1626,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "57.31kg",
            maximum: "73.69kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjoxMDk=",
        number: "109",
        name: "Koffing",
        image: "https://img.pokemondb.net/artwork/koffing.jpg",
        classification: "Poison Gas Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Sludge",
                    type: "Poison",
                    damage: 30,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.1,
        maxCP: 1025,
        maxHP: 1151,
        evolutions: [
            {
                name: "Weezing",
            },
        ],
        evolutionRequirements: {
            name: "Koffing candies",
            amount: 50,
        },
        weight: {
            minimum: "0.88kg",
            maximum: "1.13kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTA=",
        number: "110",
        name: "Weezing",
        image: "https://img.pokemondb.net/artwork/weezing.jpg",
        classification: "Poison Gas Pokémon",
        types: ["Poison"],
        resistant: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Acid",
                    type: "Poison",
                    damage: 10,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dark Pulse",
                    type: "Dark",
                    damage: 45,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground", "Psychic"],
        fleeRate: 0.06,
        maxCP: 2073,
        maxHP: 2250,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "8.31kg",
            maximum: "10.69kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTE=",
        number: "111",
        name: "Rhyhorn",
        image: "https://img.pokemondb.net/artwork/rhyhorn.jpg",
        classification: "Spikes Pokémon",
        types: ["Ground", "Rock"],
        resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Slap",
                    type: "Ground",
                    damage: 15,
                },
                {
                    name: "Rock Smash",
                    type: "Fighting",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Bulldoze",
                    type: "Ground",
                    damage: 35,
                },
                {
                    name: "Horn Attack",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "Stomp",
                    type: "Normal",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        fleeRate: 0.1,
        maxCP: 1055,
        maxHP: 1182,
        evolutions: [
            {
                name: "Rhydon",
            },
        ],
        evolutionRequirements: {
            name: "Rhyhorn candies",
            amount: 50,
        },
        weight: {
            minimum: "100.63kg",
            maximum: "129.38kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTI=",
        number: "112",
        name: "Rhydon",
        image: "https://img.pokemondb.net/artwork/rhydon.jpg",
        classification: "Drill Pokémon",
        types: ["Ground", "Rock"],
        resistant: ["Normal", "Fire", "Electric", "Poison", "Flying", "Rock"],
        attacks: {
            fast: [
                {
                    name: "Mud Slap",
                    type: "Ground",
                    damage: 15,
                },
                {
                    name: "Rock Smash",
                    type: "Fighting",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Megahorn",
                    type: "Bug",
                    damage: 80,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        fleeRate: 0.06,
        maxCP: 2068,
        maxHP: 2243,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "105kg",
            maximum: "135kg",
        },
        height: {
            minimum: "1.66m",
            maximum: "2.14m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTM=",
        number: "113",
        name: "Chansey",
        image: "https://img.pokemondb.net/artwork/chansey.jpg",
        classification: "Egg Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Dazzling Gleam",
                    type: "Fairy",
                    damage: 55,
                },
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.09,
        maxCP: 549,
        maxHP: 675,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "30.27kg",
            maximum: "38.92kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTQ=",
        number: "114",
        name: "Tangela",
        image: "https://img.pokemondb.net/artwork/tangela.jpg",
        classification: "Vine Pokémon",
        types: ["Grass"],
        resistant: ["Water", "Electric", "Grass", "Ground"],
        attacks: {
            fast: [
                {
                    name: "Vine Whip",
                    type: "Grass",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Power Whip",
                    type: "Grass",
                    damage: 70,
                },
                {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug"],
        fleeRate: 0.09,
        maxCP: 1586,
        maxHP: 1739,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "30.63kg",
            maximum: "39.38kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTU=",
        number: "115",
        name: "Kangaskhan",
        image: "https://img.pokemondb.net/artwork/kangaskhan.jpg",
        classification: "Parent Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Low Kick",
                    type: "Fighting",
                    damage: 5,
                },
                {
                    name: "Mud Slap",
                    type: "Ground",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Brick Break",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Stomp",
                    type: "Normal",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.09,
        maxCP: 1875,
        maxHP: 2043,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "70kg",
            maximum: "90kg",
        },
        height: {
            minimum: "1.93m",
            maximum: "2.48m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTY=",
        number: "116",
        name: "Horsea",
        image: "https://img.pokemondb.net/artwork/horsea.jpg",
        classification: "Dragon Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bubble",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Bubble Beam",
                    type: "Water",
                    damage: 30,
                },
                {
                    name: "Dragon Pulse",
                    type: "Dragon",
                    damage: 65,
                },
                {
                    name: "Flash Cannon",
                    type: "Steel",
                    damage: 60,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.1,
        maxCP: 688,
        maxHP: 794,
        evolutions: [
            {
                name: "Seadra",
            },
        ],
        evolutionRequirements: {
            name: "Horsea candies",
            amount: 50,
        },
        weight: {
            minimum: "7kg",
            maximum: "9kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTc=",
        number: "117",
        name: "Seadra",
        image: "https://img.pokemondb.net/artwork/seadra.jpg",
        classification: "Dragon Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Dragon Breath",
                    type: "Dragon",
                    damage: 6,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Blizzard",
                    type: "Ice",
                    damage: 100,
                },
                {
                    name: "Dragon Pulse",
                    type: "Dragon",
                    damage: 65,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.06,
        maxCP: 1559,
        maxHP: 1713,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "21.88kg",
            maximum: "28.13kg",
        },
        height: {
            minimum: "1.05m",
            maximum: "1.35m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTg=",
        number: "118",
        name: "Goldeen",
        image: "https://img.pokemondb.net/artwork/goldeen.jpg",
        classification: "Goldfish Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Peck",
                    type: "Flying",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Aqua Tail",
                    type: "Water",
                    damage: 45,
                },
                {
                    name: "Horn Attack",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.15,
        maxCP: 851,
        maxHP: 965,
        evolutions: [
            {
                name: "Seaking",
            },
        ],
        evolutionRequirements: {
            name: "Goldeen candies",
            amount: 50,
        },
        weight: {
            minimum: "13.13kg",
            maximum: "16.88kg",
        },
        height: {
            minimum: "0.53m",
            maximum: "0.68m",
        },
    },
    {
        id: "UG9rZW1vbjoxMTk=",
        number: "119",
        name: "Seaking",
        image: "https://img.pokemondb.net/artwork/seaking.jpg",
        classification: "Goldfish Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Peck",
                    type: "Flying",
                    damage: 10,
                },
                {
                    name: "Poison Jab",
                    type: "Poison",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Drill Run",
                    type: "Ground",
                    damage: 50,
                },
                {
                    name: "Icy Wind",
                    type: "Ice",
                    damage: 25,
                },
                {
                    name: "Megahorn",
                    type: "Bug",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.07,
        maxCP: 1877,
        maxHP: 2043,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "34.13kg",
            maximum: "43.88kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjA=",
        number: "120",
        name: "Staryu",
        image: "https://img.pokemondb.net/artwork/staryu.jpg",
        classification: "Starshape Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Bubble Beam",
                    type: "Water",
                    damage: 30,
                },
                {
                    name: "Power Gem",
                    type: "Rock",
                    damage: 40,
                },
                {
                    name: "Swift",
                    type: "Normal",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.15,
        maxCP: 821,
        maxHP: 937,
        evolutions: [
            {
                name: "Starmie",
            },
        ],
        evolutionRequirements: {
            name: "Staryu candies",
            amount: 50,
        },
        weight: {
            minimum: "30.19kg",
            maximum: "38.81kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjE=",
        number: "121",
        name: "Starmie",
        image: "https://img.pokemondb.net/artwork/starmie.jpg",
        classification: "Mysterious Pokémon",
        types: ["Water", "Psychic"],
        resistant: ["Fire", "Water", "Ice", "Fighting", "Psychic", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Power Gem",
                    type: "Rock",
                    damage: 40,
                },
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"],
        fleeRate: 0.06,
        maxCP: 2007,
        maxHP: 2182,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "70kg",
            maximum: "90kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjI=",
        number: "122",
        name: "Mr. Mime",
        image: "https://img.pokemondb.net/artwork/mr-mime.jpg",
        classification: "Barrier Pokémon",
        types: ["Psychic", "Fairy"],
        resistant: ["Fighting", "Psychic", "Dragon"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Poison", "Ghost", "Steel"],
        fleeRate: 0.09,
        maxCP: 1345,
        maxHP: 1494,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "47.69kg",
            maximum: "61.31kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjM=",
        number: "123",
        name: "Scyther",
        image: "https://img.pokemondb.net/artwork/scyther.jpg",
        classification: "Mantis Pokémon",
        types: ["Bug", "Flying"],
        resistant: ["Grass", "Fighting", "Ground", "Bug"],
        attacks: {
            fast: [
                {
                    name: "Fury Cutter",
                    type: "Bug",
                    damage: 3,
                },
                {
                    name: "Steel Wing",
                    type: "Steel",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Bug Buzz",
                    type: "Bug",
                    damage: 75,
                },
                {
                    name: "Night Slash",
                    type: "Dark",
                    damage: 30,
                },
                {
                    name: "X Scissor",
                    type: "Bug",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"],
        fleeRate: 0.09,
        maxCP: 1905,
        maxHP: 2073,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "49kg",
            maximum: "63kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjQ=",
        number: "124",
        name: "Jynx",
        image: "https://img.pokemondb.net/artwork/jynx.jpg",
        classification: "Humanshape Pokémon",
        types: ["Ice", "Psychic"],
        resistant: ["Ice", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Frost Breath",
                    type: "Ice",
                    damage: 9,
                },
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Draining Kiss",
                    type: "Fairy",
                    damage: 25,
                },
                {
                    name: "Ice Punch",
                    type: "Ice",
                    damage: 45,
                },
                {
                    name: "Psyshock",
                    type: "Psychic",
                    damage: 40,
                },
            ],
        },
        weaknesses: ["Fire", "Bug", "Rock", "Ghost", "Dark", "Steel"],
        fleeRate: 0.09,
        maxCP: 1563,
        maxHP: 1716,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "35.52kg",
            maximum: "45.67kg",
        },
        height: {
            minimum: "1.22m",
            maximum: "1.57m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjU=",
        number: "125",
        name: "Electabuzz",
        image: "https://img.pokemondb.net/artwork/electabuzz.jpg",
        classification: "Electric Pokémon",
        types: ["Electric"],
        resistant: ["Electric", "Flying", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Low Kick",
                    type: "Fighting",
                    damage: 5,
                },
                {
                    name: "Thunder Shock",
                    type: "Electric",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Thunder",
                    type: "Electric",
                    damage: 100,
                },
                {
                    name: "Thunder Punch",
                    type: "Electric",
                    damage: 40,
                },
                {
                    name: "Thunderbolt",
                    type: "Electric",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground"],
        fleeRate: 0.09,
        maxCP: 1947,
        maxHP: 2119,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "26.25kg",
            maximum: "33.75kg",
        },
        height: {
            minimum: "0.96m",
            maximum: "1.24m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjY=",
        number: "126",
        name: "Magmar",
        image: "https://img.pokemondb.net/artwork/magmar.jpg",
        classification: "Spitfire Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
                {
                    name: "Karate Chop",
                    type: "Fighting",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Fire Punch",
                    type: "Fire",
                    damage: 40,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.09,
        maxCP: 2086,
        maxHP: 2265,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "38.94kg",
            maximum: "50.06kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjc=",
        number: "127",
        name: "Pinsir",
        image: "https://img.pokemondb.net/artwork/pinsir.jpg",
        classification: "Stagbeetle Pokémon",
        types: ["Bug"],
        resistant: ["Grass", "Fighting", "Ground"],
        attacks: {
            fast: [
                {
                    name: "Fury Cutter",
                    type: "Bug",
                    damage: 3,
                },
                {
                    name: "Rock Smash",
                    type: "Fighting",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Submission",
                    type: "Fighting",
                    damage: 30,
                },
                {
                    name: "Vice Grip",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "X Scissor",
                    type: "Bug",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Fire", "Flying", "Rock"],
        fleeRate: 0.09,
        maxCP: 1950,
        maxHP: 2121,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "48.13kg",
            maximum: "61.88kg",
        },
        height: {
            minimum: "1.31m",
            maximum: "1.69m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjg=",
        number: "128",
        name: "Tauros",
        image: "https://img.pokemondb.net/artwork/tauros.jpg",
        classification: "Wild Bull Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Horn Attack",
                    type: "Normal",
                    damage: 25,
                },
                {
                    name: "Iron Head",
                    type: "Steel",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.09,
        maxCP: 1686,
        maxHP: 1844,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "77.35kg",
            maximum: "99.45kg",
        },
        height: {
            minimum: "1.22m",
            maximum: "1.57m",
        },
    },
    {
        id: "UG9rZW1vbjoxMjk=",
        number: "129",
        name: "Magikarp",
        image: "https://img.pokemondb.net/artwork/magikarp.jpg",
        classification: "Fish Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Splash",
                    type: "Water",
                    damage: 0,
                },
            ],
            special: [
                {
                    name: "Struggle",
                    type: "Normal",
                    damage: 15,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.15,
        maxCP: 203,
        maxHP: 262,
        evolutions: [
            {
                name: "Gyarados",
            },
        ],
        evolutionRequirements: {
            name: "Magikarp candies",
            amount: 400,
        },
        weight: {
            minimum: "8.75kg",
            maximum: "11.25kg",
        },
        height: {
            minimum: "0.79m",
            maximum: "1.01m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzA=",
        number: "130",
        name: "Gyarados",
        image: "https://img.pokemondb.net/artwork/gyarados.jpg",
        classification: "Atrocious Pokémon",
        types: ["Water", "Flying"],
        resistant: ["Fire", "Water", "Fighting", "Ground", "Bug", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Dragon Breath",
                    type: "Dragon",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Dragon Pulse",
                    type: "Dragon",
                    damage: 65,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Twister",
                    type: "Dragon",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Electric", "Rock"],
        fleeRate: 0.07,
        maxCP: 2498,
        maxHP: 2688,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "205.63kg",
            maximum: "264.38kg",
        },
        height: {
            minimum: "5.69m",
            maximum: "7.31m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzE=",
        number: "131",
        name: "Lapras",
        image: "https://img.pokemondb.net/artwork/lapras.jpg",
        classification: "Transport Pokémon",
        types: ["Water", "Ice"],
        resistant: ["Water", "Ice"],
        attacks: {
            fast: [
                {
                    name: "Frost Breath",
                    type: "Ice",
                    damage: 9,
                },
                {
                    name: "Ice Shard",
                    type: "Ice",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Blizzard",
                    type: "Ice",
                    damage: 100,
                },
                {
                    name: "Dragon Pulse",
                    type: "Dragon",
                    damage: 65,
                },
                {
                    name: "Ice Beam",
                    type: "Ice",
                    damage: 65,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Fighting", "Rock"],
        fleeRate: 0.09,
        maxCP: 2777,
        maxHP: 2980,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "192.5kg",
            maximum: "247.5kg",
        },
        height: {
            minimum: "2.19m",
            maximum: "2.81m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzI=",
        number: "132",
        name: "Ditto",
        image: "https://img.pokemondb.net/artwork/ditto.jpg",
        classification: "Transform Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Struggle",
                    type: "Normal",
                    damage: 15,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.1,
        maxCP: 809,
        maxHP: 919,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "3.5kg",
            maximum: "4.5kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzM=",
        number: "133",
        name: "Eevee",
        image: "https://img.pokemondb.net/artwork/eevee.jpg",
        classification: "Evolution Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Dig",
                    type: "Ground",
                    damage: 70,
                },
                {
                    name: "Swift",
                    type: "Normal",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.1,
        maxCP: 957,
        maxHP: 1077,
        evolutions: [
            {
                name: "Vaporeon",
            },
            {
                name: "Jolteon",
            },
            {
                name: "Flareon",
            },
        ],
        evolutionRequirements: {
            name: "Eevee candies",
            amount: 25,
        },
        weight: {
            minimum: "5.69kg",
            maximum: "7.31kg",
        },
        height: {
            minimum: "0.26m",
            maximum: "0.34m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzQ=",
        number: "134",
        name: "Vaporeon",
        image: "https://img.pokemondb.net/artwork/vaporeon.jpg",
        classification: "Bubble Jet Pokémon",
        types: ["Water"],
        resistant: ["Fire", "Water", "Ice", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Aqua Tail",
                    type: "Water",
                    damage: 45,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass"],
        fleeRate: 0.06,
        maxCP: 2618,
        maxHP: 2816,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "25.38kg",
            maximum: "32.63kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzU=",
        number: "135",
        name: "Jolteon",
        image: "https://img.pokemondb.net/artwork/jolteon.jpg",
        classification: "Lightning Pokémon",
        types: ["Electric"],
        resistant: ["Electric", "Flying", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Thunder Shock",
                    type: "Electric",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Thunder",
                    type: "Electric",
                    damage: 100,
                },
                {
                    name: "Thunderbolt",
                    type: "Electric",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ground"],
        fleeRate: 0.06,
        maxCP: 1968,
        maxHP: 2140,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "21.44kg",
            maximum: "27.56kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzY=",
        number: "136",
        name: "Flareon",
        image: "https://img.pokemondb.net/artwork/flareon.jpg",
        classification: "Flame Pokémon",
        types: ["Fire"],
        resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
                {
                    name: "Heat Wave",
                    type: "Fire",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Ground", "Rock"],
        fleeRate: 0.06,
        maxCP: 2448,
        maxHP: 2643,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "21.88kg",
            maximum: "28.13kg",
        },
        height: {
            minimum: "0.79m",
            maximum: "1.01m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzc=",
        number: "137",
        name: "Porygon",
        image: "https://img.pokemondb.net/artwork/porygon.jpg",
        classification: "Virtual Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Quick Attack",
                    type: "Normal",
                    damage: 10,
                },
                {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Psybeam",
                    type: "Psychic",
                    damage: 40,
                },
                {
                    name: "Signal Beam",
                    type: "Bug",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.09,
        maxCP: 1540,
        maxHP: 1691,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "31.94kg",
            maximum: "41.06kg",
        },
        height: {
            minimum: "0.7m",
            maximum: "0.9m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzg=",
        number: "138",
        name: "Omanyte",
        image: "https://img.pokemondb.net/artwork/omanyte.jpg",
        classification: "Spiral Pokémon",
        types: ["Rock", "Water"],
        resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Ancient Power",
                    type: "Rock",
                    damage: 35,
                },
                {
                    name: "Brine",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Rock Tomb",
                    type: "Rock",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
        fleeRate: 0.09,
        maxCP: 992,
        maxHP: 1119,
        evolutions: [
            {
                name: "Omastar",
            },
        ],
        evolutionRequirements: {
            name: "Omanyte candies",
            amount: 50,
        },
        weight: {
            minimum: "6.56kg",
            maximum: "8.44kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
    {
        id: "UG9rZW1vbjoxMzk=",
        number: "139",
        name: "Omastar",
        image: "https://img.pokemondb.net/artwork/omastar.jpg",
        classification: "Spiral Pokémon",
        types: ["Rock", "Water"],
        resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
        attacks: {
            fast: [
                {
                    name: "Rock Throw",
                    type: "Rock",
                    damage: 12,
                },
                {
                    name: "Water Gun",
                    type: "Water",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Ancient Power",
                    type: "Rock",
                    damage: 35,
                },
                {
                    name: "Hydro Pump",
                    type: "Water",
                    damage: 90,
                },
                {
                    name: "Rock Slide",
                    type: "Rock",
                    damage: 50,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
        fleeRate: 0.05,
        maxCP: 2058,
        maxHP: 2233,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "30.63kg",
            maximum: "39.38kg",
        },
        height: {
            minimum: "0.88m",
            maximum: "1.13m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDA=",
        number: "140",
        name: "Kabuto",
        image: "https://img.pokemondb.net/artwork/kabuto.jpg",
        classification: "Shellfish Pokémon",
        types: ["Rock", "Water"],
        resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
        attacks: {
            fast: [
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
                {
                    name: "Scratch",
                    type: "Normal",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Ancient Power",
                    type: "Rock",
                    damage: 35,
                },
                {
                    name: "Aqua Jet",
                    type: "Water",
                    damage: 25,
                },
                {
                    name: "Rock Tomb",
                    type: "Rock",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
        fleeRate: 0.09,
        maxCP: 975,
        maxHP: 1104,
        evolutions: [
            {
                name: "Kabutops",
            },
        ],
        evolutionRequirements: {
            name: "Kabuto candies",
            amount: 50,
        },
        weight: {
            minimum: "10.06kg",
            maximum: "12.94kg",
        },
        height: {
            minimum: "0.44m",
            maximum: "0.56m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDE=",
        number: "141",
        name: "Kabutops",
        image: "https://img.pokemondb.net/artwork/kabutops.jpg",
        classification: "Shellfish Pokémon",
        types: ["Rock", "Water"],
        resistant: ["Normal", "Fire", "Ice", "Poison", "Flying"],
        attacks: {
            fast: [
                {
                    name: "Fury Cutter",
                    type: "Bug",
                    damage: 3,
                },
                {
                    name: "Mud Shot",
                    type: "Ground",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Ancient Power",
                    type: "Rock",
                    damage: 35,
                },
                {
                    name: "Stone Edge",
                    type: "Rock",
                    damage: 80,
                },
                {
                    name: "Water Pulse",
                    type: "Water",
                    damage: 35,
                },
            ],
        },
        weaknesses: ["Electric", "Grass", "Fighting", "Ground"],
        fleeRate: 0.05,
        maxCP: 1957,
        maxHP: 2130,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "35.44kg",
            maximum: "45.56kg",
        },
        height: {
            minimum: "1.14m",
            maximum: "1.46m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDI=",
        number: "142",
        name: "Aerodactyl",
        image: "https://img.pokemondb.net/artwork/aerodactyl.jpg",
        classification: "Fossil Pokémon",
        types: ["Rock", "Flying"],
        resistant: ["Normal", "Fire", "Poison", "Flying", "Bug"],
        attacks: {
            fast: [
                {
                    name: "Bite",
                    type: "Dark",
                    damage: 6,
                },
                {
                    name: "Steel Wing",
                    type: "Steel",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Ancient Power",
                    type: "Rock",
                    damage: 35,
                },
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
                {
                    name: "Iron Head",
                    type: "Steel",
                    damage: 30,
                },
            ],
        },
        weaknesses: ["Water", "Electric", "Ice", "Rock", "Steel"],
        fleeRate: 0.09,
        maxCP: 1994,
        maxHP: 2165,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "51.63kg",
            maximum: "66.38kg",
        },
        height: {
            minimum: "1.57m",
            maximum: "2.02m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDM=",
        number: "143",
        name: "Snorlax",
        image: "https://img.pokemondb.net/artwork/snorlax.jpg",
        classification: "Sleeping Pokémon",
        types: ["Normal"],
        resistant: ["Ghost"],
        attacks: {
            fast: [
                {
                    name: "Lick",
                    type: "Ghost",
                    damage: 5,
                },
                {
                    name: "Zen Headbutt",
                    type: "Psychic",
                    damage: 12,
                },
            ],
            special: [
                {
                    name: "Body Slam",
                    type: "Normal",
                    damage: 40,
                },
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Fighting"],
        fleeRate: 0.09,
        maxCP: 2901,
        maxHP: 3112,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "402.5kg",
            maximum: "517.5kg",
        },
        height: {
            minimum: "1.84m",
            maximum: "2.36m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDQ=",
        number: "144",
        name: "Articuno",
        image: "https://img.pokemondb.net/artwork/articuno.jpg",
        classification: "Freeze Pokémon",
        types: ["Ice", "Flying"],
        resistant: ["Grass", "Ground", "Bug"],
        attacks: {
            fast: [
                {
                    name: "Frost Breath",
                    type: "Ice",
                    damage: 9,
                },
            ],
            special: [
                {
                    name: "Blizzard",
                    type: "Ice",
                    damage: 100,
                },
                {
                    name: "Ice Beam",
                    type: "Ice",
                    damage: 65,
                },
                {
                    name: "Icy Wind",
                    type: "Ice",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Fire", "Electric", "Rock", "Steel"],
        fleeRate: 0.1,
        maxCP: 2776,
        maxHP: 2978,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "48.48kg",
            maximum: "62.33kg",
        },
        height: {
            minimum: "1.49m",
            maximum: "1.91m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDU=",
        number: "145",
        name: "Zapdos",
        image: "https://img.pokemondb.net/artwork/zapdos.jpg",
        classification: "Electric Pokémon",
        types: ["Electric", "Flying"],
        resistant: ["Grass", "Fighting", "Flying", "Bug", "Steel"],
        attacks: {
            fast: [
                {
                    name: "Thunder Shock",
                    type: "Electric",
                    damage: 5,
                },
            ],
            special: [
                {
                    name: "Discharge",
                    type: "Electric",
                    damage: 35,
                },
                {
                    name: "Thunder",
                    type: "Electric",
                    damage: 100,
                },
                {
                    name: "Thunderbolt",
                    type: "Electric",
                    damage: 55,
                },
            ],
        },
        weaknesses: ["Ice", "Rock"],
        fleeRate: 0.1,
        maxCP: 2907,
        maxHP: 3114,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "46.02kg",
            maximum: "59.17kg",
        },
        height: {
            minimum: "1.4m",
            maximum: "1.8m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDY=",
        number: "146",
        name: "Moltres",
        image: "https://img.pokemondb.net/artwork/moltres.jpg",
        classification: "Flame Pokémon",
        types: ["Fire", "Flying"],
        resistant: ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"],
        attacks: {
            fast: [
                {
                    name: "Ember",
                    type: "Fire",
                    damage: 10,
                },
            ],
            special: [
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Flamethrower",
                    type: "Fire",
                    damage: 55,
                },
                {
                    name: "Heat Wave",
                    type: "Fire",
                    damage: 80,
                },
            ],
        },
        weaknesses: ["Water", "Electric", "Rock"],
        fleeRate: 0.1,
        maxCP: 3028,
        maxHP: 3240,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "52.5kg",
            maximum: "67.5kg",
        },
        height: {
            minimum: "1.75m",
            maximum: "2.25m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDc=",
        number: "147",
        name: "Dratini",
        image: "https://img.pokemondb.net/artwork/dratini.jpg",
        classification: "Dragon Pokémon",
        types: ["Dragon"],
        resistant: ["Fire", "Water", "Electric", "Grass"],
        attacks: {
            fast: [
                {
                    name: "Dragon Breath",
                    type: "Dragon",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Aqua Tail",
                    type: "Water",
                    damage: 45,
                },
                {
                    name: "Twister",
                    type: "Dragon",
                    damage: 25,
                },
                {
                    name: "Wrap",
                    type: "Normal",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Ice", "Dragon", "Fairy"],
        fleeRate: 0.09,
        maxCP: 867,
        maxHP: 983,
        evolutions: [
            {
                name: "Dragonair",
            },
        ],
        evolutionRequirements: {
            name: "Dratini candies",
            amount: 25,
        },
        weight: {
            minimum: "2.89kg",
            maximum: "3.71kg",
        },
        height: {
            minimum: "1.57m",
            maximum: "2.02m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDg=",
        number: "148",
        name: "Dragonair",
        image: "https://img.pokemondb.net/artwork/dragonair.jpg",
        classification: "Dragon Pokémon",
        types: ["Dragon"],
        resistant: ["Fire", "Water", "Electric", "Grass"],
        attacks: {
            fast: [
                {
                    name: "Dragon Breath",
                    type: "Dragon",
                    damage: 6,
                },
            ],
            special: [
                {
                    name: "Aqua Tail",
                    type: "Water",
                    damage: 45,
                },
                {
                    name: "Dragon Pulse",
                    type: "Dragon",
                    damage: 65,
                },
                {
                    name: "Wrap",
                    type: "Normal",
                    damage: 25,
                },
            ],
        },
        weaknesses: ["Ice", "Dragon", "Fairy"],
        fleeRate: 0.06,
        maxCP: 1593,
        maxHP: 1747,
        evolutions: [
            {
                name: "Dragonite",
            },
        ],
        evolutionRequirements: {
            name: "Dratini candies",
            amount: 100,
        },
        weight: {
            minimum: "14.44kg",
            maximum: "18.56kg",
        },
        height: {
            minimum: "3.5m",
            maximum: "4.5m",
        },
    },
    {
        id: "UG9rZW1vbjoxNDk=",
        number: "149",
        name: "Dragonite",
        image: "https://img.pokemondb.net/artwork/dragonite.jpg",
        classification: "Dragon Pokémon",
        types: ["Dragon", "Flying"],
        resistant: ["Fire", "Water", "Grass", "Fighting", "Ground", "Bug"],
        attacks: {
            fast: [
                {
                    name: "Dragon Breath",
                    type: "Dragon",
                    damage: 6,
                },
                {
                    name: "Steel Wing",
                    type: "Steel",
                    damage: 15,
                },
            ],
            special: [
                {
                    name: "Dragon Claw",
                    type: "Dragon",
                    damage: 35,
                },
                {
                    name: "Dragon Pulse",
                    type: "Dragon",
                    damage: 65,
                },
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
            ],
        },
        weaknesses: ["Ice", "Rock", "Dragon", "Fairy"],
        fleeRate: 0.05,
        maxCP: 3280,
        maxHP: 3500,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "183.75kg",
            maximum: "236.25kg",
        },
        height: {
            minimum: "1.93m",
            maximum: "2.48m",
        },
    },
    {
        id: "UG9rZW1vbjoxNTA=",
        number: "150",
        name: "Mewtwo",
        image: "https://img.pokemondb.net/artwork/mewtwo.jpg",
        classification: "Genetic Pokémon",
        types: ["Psychic"],
        resistant: ["Fighting", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Confusion",
                    type: "Psychic",
                    damage: 15,
                },
                {
                    name: "Psycho Cut",
                    type: "Psychic",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Shadow Ball",
                    type: "Ghost",
                    damage: 45,
                },
            ],
        },
        weaknesses: ["Bug", "Ghost", "Dark"],
        fleeRate: 0.1,
        maxCP: 3904,
        maxHP: 4144,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "106.75kg",
            maximum: "137.25kg",
        },
        height: {
            minimum: "1.75m",
            maximum: "2.25m",
        },
    },
    {
        id: "UG9rZW1vbjoxNTE=",
        number: "151",
        name: "Mew",
        image: "https://img.pokemondb.net/artwork/mew.jpg",
        classification: "New Species Pokémon",
        types: ["Psychic"],
        resistant: ["Fighting", "Psychic"],
        attacks: {
            fast: [
                {
                    name: "Pound",
                    type: "Normal",
                    damage: 7,
                },
            ],
            special: [
                {
                    name: "Dragon Pulse",
                    type: "Dragon",
                    damage: 65,
                },
                {
                    name: "Earthquake",
                    type: "Ground",
                    damage: 100,
                },
                {
                    name: "Fire Blast",
                    type: "Fire",
                    damage: 100,
                },
                {
                    name: "Hurricane",
                    type: "Flying",
                    damage: 80,
                },
                {
                    name: "Hyper Beam",
                    type: "Normal",
                    damage: 120,
                },
                {
                    name: "Moonblast",
                    type: "Fairy",
                    damage: 85,
                },
                {
                    name: "Psychic",
                    type: "Psychic",
                    damage: 55,
                },
                {
                    name: "Solar Beam",
                    type: "Grass",
                    damage: 120,
                },
                {
                    name: "Thunder",
                    type: "Electric",
                    damage: 100,
                },
            ],
        },
        weaknesses: ["Bug", "Ghost", "Dark"],
        fleeRate: 0.1,
        maxCP: 3087,
        maxHP: 3299,
        evolutions: null,
        evolutionRequirements: null,
        weight: {
            minimum: "3.5kg",
            maximum: "4.5kg",
        },
        height: {
            minimum: "0.35m",
            maximum: "0.45m",
        },
    },
];