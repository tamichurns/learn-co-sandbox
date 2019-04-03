fetch('https://api.github.com/users/tamichurns')
.then((data) => {return data.json()}
.then((json) => {console.log(dataJson)})

/// fetch needs URL where you're getting the data from 

console.log('hi')

/// async(hronous) programming:
/// will kick off your 'fetch' without blocking the rest of the non-dependent page content or elements from loading. 
