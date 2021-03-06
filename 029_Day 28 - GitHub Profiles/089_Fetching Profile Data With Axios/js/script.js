axios.APIURL = 'https://api.github.com/users/'

// getUser('bradtraversy')

/*
function getUser(username) {
    axios(APIURL + username)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}
*/

const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {

        const {
            data
        } = await axios(APIURL + username)
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.val

    if (user) {
        getUser(user) {

            search.value = ''
        }
    }
})