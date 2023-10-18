/*#############################################################
 _____ _     _           _    ___  ___          _            
|  _  | |   (_)         | |   |  \/  |         | |           
| | | | |__  _  ___  ___| |_  | .  . | __ _ ___| |_ ___ _ __ 
| | | | '_ \| |/ _ \/ __| __| | |\/| |/ _` / __| __/ _ \ '__|
\ \_/ / |_) | |  __/ (__| |_  | |  | | (_| \__ \ ||  __/ |   
 \___/|_.__/| |\___|\___|\__| \_|  |_/\__,_|___/\__\___|_|   
           _/ |                                              
          |__/                                 
Written By: Christina Torres
Questions By: Coding Dojo
See README for a Notion version and notes
#############################################################*/


/*#################################################################################
                    Object.freeze([]) == Imutable Object
#################################################################################*/
const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

/*#################################################################################
     an array of pokémon objects where the id is evenly divisible by 3
#################################################################################*/
let result = pokemon.filter( e => e.id % 3 == 0 )


/*#################################################################################
an array of pokémon objects that are "fire" type
#################################################################################*/
result = pokemon.filter( e => e.types.includes("fire"))


/*#################################################################################
an array of pokémon objects that have more than one type
#################################################################################*/
result = pokemon.filter( e => e.types.length > 1 )


/*#################################################################################
     an array with just the names of the pokémon
#################################################################################*/
// an array with just the names of the pokémon
result = pokemon.map( e => e.name)


/*#################################################################################
an array with just the names of pokémon with an id greater than 99
#################################################################################*/
result = pokemon.filter( e => e.id > 99 )
                .map( e => e.name )

/*#################################################################################
an array with just the names of the pokémon whose only type is poison
#################################################################################*/
result = pokemon.filter( e => e.types.length < 2 && e.types[0] == "poison" )
                .map(e => e.name)


/*#######################################################################################
an array containing just the first type of all the pokémon whose second type is "flying"
#######################################################################################*/
result = pokemon.filter( e=> e.types[1] === "flying" )
                .map( e => e.types[0] )


/*#################################################################################
a count of the number of pokémon that are "normal" type
#################################################################################*/
result = pokemon.filter( e => e.types.includes("normal")).length

/*#################################################################################
 an array with all pokemon except the pokemon with the id of 148
#################################################################################*/
result = pokemon.filter( e => e.id != 148)


/*#################################################################################
 an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
#################################################################################*/
result = pokemon.map( i => 
    // 1) CHECK IF THE ID MATCHES
    (i.id === 35) ?
        // 2) CHANGE THE MATCHED TYPE
        // 2a) the rest of the object 
        {...i, 
            // 2b) change the type
            // replace if normal
            // stays the same if not normal
            types: i.types.map( j => j === "normal" ? "fairy" : j)
        }
        :
        // 3 ) KEEP THE UNMATCHED OBJECT WHOLE
        i)
// ONE LINER
result = pokemon.map( i => (i.id===35) ? {... i, types: i.types.map(j=>(j=="normal") ? "fairy": j)}: i )

console.log(result)





/*#######################################################################################
                          JUST FOR FUNSIES -- NOT ON ASSIGNMENT
#######################################################################################*/
// ================================
//     SHORT CIRCUIT PRATICE
// ================================
// let obj = {
//     id:1234, 
//     userName : "", 
//     message :"I'm Just Here for the Pumpkin Pie."} 


// let obj = {
//     id:1234, 
//     userName : "fallYall", 
//     message :"I'm Just Here for the Pumpkin Pie."} 

// if (obj.userName) {
//     console.log(obj.message)
// } 

// console.log( obj.userName &&  obj.message )


// // ================================
// //     IMMUTABLE OBJECTS FUN
// // ================================
// const destinations = Object.freeze([
//     {where:"Alaska", hasVisited:false},
//     {where:"Ireland", hasVisited:false},
//     {where:"Maine", hasVisited:false},
// ])
//                     // destructure array + add new object
// const destructured = [...destinations, {where:"Greenland", hasVisited:false}]
// // OR
// // concat COMBINES to ARRAYS
// const concatinated = destinations.concat( [{where:"Greenland", hasVisited:false}] )
// // console.log(destinations)
// // console.log(concatinated)
// // [
// //     { where: 'Alaska', hasVisited: false },
// //     { where: 'Ireland', hasVisited: false },
// //     { where: 'Maine', hasVisited: false },
// //     { where: 'Greenland', hasVisited: false }
// //   ]

// const updated = destinations.map(e=> e.where === "Alaska" ? {...e, hasVisited:!e.hasVisited} : e)
//                     // inclusinve, exlusive       // inclusive to end
// // [
// //     { where: 'Alaska', hasVisited: true },
// //     { where: 'Ireland', hasVisited: false },
// //     { where: 'Maine', hasVisited: false },
// //     { where: 'Greenland', hasVisited: false }
// //   ]
// let sliced = [...destructured.slice(0,1), ...destructured.slice(2)]
//                                    // skips 1
// // console.log(sliced)
// // [
// //     { where: 'Alaska', hasVisited: false },
// //     { where: 'Maine', hasVisited: false },
// //     { where: 'Greenland', hasVisited: false }
// // ]
// // 


// // ================================
// //     SORTED FUN
// // ================================
// const arr = [
//     { where: 'Maine', hasVisited: false },
//     { where: 'Ireland', hasVisited: false },
//     { where: 'Greenland', hasVisited: false },
//     { where: 'Alaska', hasVisited: false },
//     { where: 'Maine', hasVisited: true },
//   ]

// // SORTING FROM LOW LENGTH TO HIGH
// arr.sort( (x, y) => 
//         // if it is the same
//         (x.where.length === y.where.length) ?  
//             0 : 
//                 // if x is less than y -> swap
//                 (x.where.length < y.where.length) ? 
//                     -1 :  
//             // if y is less than x -> keep
//             1
//         )
// // console.log(arr)
// // [
// //     { where: 'Maine', hasVisited: false },
// //     { where: 'Maine', hasVisited: true },
// //     { where: 'Alaska', hasVisited: false },
// //     { where: 'Ireland', hasVisited: false },
// //     { where: 'Greenland', hasVisited: false }
// // ]
          

// // SORTING ALPHABETICALY
// arr.sort( (x, y) => 
//     // if it is the same
//     (x.where === y.where) ?  
//         0 : 
//             // if x is less than y -> swap
//             (x.where < y.where) ? 
//                 -1 :  
//         // ELSE y is less than x -> keep
//         1
//     )
            
// // console.log(arr)
// // [
// //     { where: 'Alaska', hasVisited: false },
// //     { where: 'Greenland', hasVisited: false },
// //     { where: 'Ireland', hasVisited: false },
// //     { where: 'Maine', hasVisited: false },
// //     { where: 'Maine', hasVisited: true }
// //   ]