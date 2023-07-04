const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
//returns all drivers that match the passed in name
//practicing arrow functions for callback functions
function findMatching(arr, query) {

    const result = arr.filter(el => el.toLowerCase() === query.toLowerCase())

    return result
}
//returns a driver if beginning provided letters match
function fuzzyMatch(arr, query) {

    const result = arr.filter(el => el.toLowerCase().substring(0, 1) === (query.toLowerCase().substring(0, 1)))

    return result
}
//accesses the data structure to check if name matches
function matchName(arr, query) {

    const results = arr.filter(el => el.name === query)
   
    return results
}






