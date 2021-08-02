const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()


// Using async dan await (asyncronous)
async function generateJoke(){ // kalo function pake async maka harus juga pake await
    const config ={
        headers:{
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config) // pake await karna function di define async
    const data = await res.json() // pake await karna function di define async
    console.log(data)
    jokeEl.innerHTML = data.joke
}

// Using .then()
// function generateJoke(){
//     const config = {
//         headers:{
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then( (res) => res.json())
//         .then( (data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }