const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2109-UNF-HY-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const data1 = '{"success":false,"error":{"name":"RouteNotFound","message":"API route not found!"},"data":null}'
/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

/*fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players')
    .then((res) => {
        console.log("RESOLVED!", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("ERROR", e);
    })
*/

const fetchAllPlayers = async () => {
    try {
        const res1 = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players");
        const data1 = await res1.json();
        console.log(data1);
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};
fetchAllPlayers();


const fetchSinglePlayer = async (playerId) => {
    try {
        const res3 = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/player`)
        console.log(res.data);
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};
fetchSinglePlayer(1);

const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const form = document.querySelector('#addPlayer');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.q.value;
    const res = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT${searchTerm}`);
    console.log(res.data)
})

const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {

    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {

    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();