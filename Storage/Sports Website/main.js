//Arrays of each division
const teamsEast = '[{"Name":"New York Empire", "Wins":15, "Losses":0, "PlusMinus":155}, {"Name":"DC Breeze", "Wins":11, "Losses":3, "PlusMinus":55}, {"Name":"Philadelphia Pheonix", "Wins":6, "Losses":7, "PlusMinus":5}, {"Name":"Boston Glory", "Wins":4, "Losses":8, "PlusMinus":-16}, {"Name":"Montreal Royal", "Wins":4, "Losses":8, "PlusMinus":-41}, {"Name":"Toronto Rush", "Wins":4, "Losses":8, "PlusMinus":-58}, {"Name":"Ottawa Outlaws", "Wins":2, "Losses":10, "PlusMinus":-42}]';
const teamsCentral = '[{"Name":"Chicago Union", "Wins":13, "Losses":2, "PlusMinus":65}, {"Name":"Minnesota Wind Chill", "Wins":10, "Losses":4, "PlusMinus":69}, {"Name":"Indianapolis AlleyCats", "Wins":6, "Losses":7, "PlusMinus":5}, {"Name":"Madison Radicals", "Wins":6, "Losses":6, "PlusMinus":-2}, {"Name":"Pittsburgh Thunderbirds", "Wins":4, "Losses":8, "PlusMinus":-24}, {"Name":"Detroit Mechanix", "Wins":0, "Losses":12, "PlusMinus":-111}]';
const teamsWest = '[{"Name":"Carolina Flyers", "Wins":12, "Losses":2, "PlusMinus":56}, {"Name":"Austin Sol", "Wins":9, "Losses":4, "PlusMinus":40}, {"Name":"Atlanta Hustle", "Wins":8, "Losses":4, "PlusMinus":36}, {"Name":"Dallas Legion", "Wins":1, "Losses":11, "PlusMinus":-56}, {"Name":"Tampa Bay Cannons", "Wins":1, "Losses":11, "PlusMinus":-88}]';
const teamsSouth = '[{"Name":"Colorado Summit", "Wins":12, "Losses":2, "PlusMinus":63}, {"Name":"Salt Lake Shred", "Wins":11, "Losses":3, "PlusMinus":59}, {"Name":"San Diego Growlers", "Wins":9, "Losses":4, "PlusMinus":14}, {"Name":"Oakland Spiders", "Wins":4, "Losses":8, "PlusMinus":-11}, {"Name":"LA Aviators", "Wins":4, "Losses":8, "PlusMinus":-36}, {"Name":"Seattle Cascades", "Wins":2, "Losses":10, "PlusMinus":-24}, {"Name":"Portland Nitro", "Wins":2, "Losses":10, "PlusMinus":-70}]';

//Arrays of each game (this was rlly tedious btw)
const games = '[{}]'

//Parsed arrays
let eastDiv = JSON.parse(teamsEast);
let centralDiv = JSON.parse(teamsCentral);
let westDiv = JSON.parse(teamsWest);
let southDiv = JSON.parse(teamsSouth);

//Table Bodies

//Main Bodies
const eastBody = document.querySelector('#east-standings tbody');
const centralBody = document.querySelector('#central-standings tbody');
const westBody = document.querySelector('#west-standings tbody');
const southBody = document.querySelector('#south-standings tbody');

//Mini Bodies
const miniEastBody = document.querySelector('#east-scores');
const miniCentralBody = document.querySelector('#central-scores');
const miniWestBody = document.querySelector('#west-scores');
const miniSouthBody = document.querySelector('#south-scores');
const miniEastBody2 = document.querySelector('#east-scores-sp');
const miniCentralBody2 = document.querySelector('#central-scores-sp');
const miniWestBody2 = document.querySelector('#west-scores-sp');
const miniSouthBody2 = document.querySelector('#south-scores-sp');

//Ascending/Descending buttons
const ascendingButton = document.querySelector('#ascending');
const descendingButton = document.querySelector('#descending');

//Sorting buttons
const nameButton = document.querySelector('#sort-name');
const winsButton = document.querySelector('#sort-wins');
const lossButton = document.querySelector('#sort-losses');
const pmButton = document.querySelector('#sort-pm');

//Verifiers
let ascending = true;
let sortedN = false;
let sortedW = false;
let sortedL = false;
let sortedPM = false;

//Pagination elements
const paginationNums = document.querySelector('.pagination-list');
const paginatedContent = document.querySelector('.pagination-container');
const contentItems = paginatedContent.querySelectorAll('li');
const nextButton = document.querySelector('.pagination-next');
const prevButton = document.querySelector('.pagination-previous');
const paginatedContentLimit = 10;
const pageCount = Math.ceil(contentItems.length / paginatedContentLimit); //Math.ceil() rounds up to the next largest integer
let currentPage;

//test
/*console.log(teamsEast);
console.log(teamsCentral);
console.log(teamsWest);
console.log(teamsSouth);*/

//Functions
function scheduleOnload() {
    buildMiniTable(eastDiv, miniEastBody2);
    buildMiniTable(centralDiv, miniCentralBody2);
    buildMiniTable(westDiv, miniWestBody2);
    buildMiniTable(southDiv, miniSouthBody2);
}

function standingsOnload() {
    buildTeamTable(eastDiv, eastBody);
    buildTeamTable(centralDiv, centralBody);
    buildTeamTable(westDiv, westBody);
    buildTeamTable(southDiv, southBody);

    buildMiniTable(eastDiv, miniEastBody);
    buildMiniTable(centralDiv, miniCentralBody);
    buildMiniTable(westDiv, miniWestBody);
    buildMiniTable(southDiv, miniSouthBody);
}

function setAscending(exp) {
    if(exp === 'false') {
        ascending = false;
    }else if(exp === 'true') {
        ascending = true;
    }

    if(ascending) {
        ascendingButton.setAttribute('class', 'button');
        descendingButton.setAttribute('class', 'button is-active');
    }else {
        descendingButton.setAttribute('class', 'button');
        ascendingButton.setAttribute('class', 'button is-active');
    }
    
    if(sortedN) {
        sortName();
    }else if(sortedW) {
        sortWins();
    }else if(sortedL) {
        sortLosses();
    }else if(sortedPM) {
        sortPlusMinus();
    }
    //console.log(ascending);
}

function buildTeamTable(teams, table) {
    table.replaceChildren();
    teams.forEach((team) => {
        const row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.textContent = team.Name;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.textContent = team.Wins;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.textContent = team.Losses;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.textContent = team.PlusMinus;
        row.appendChild(cell);
        table.appendChild(row);
    });
}

function buildMiniTable(teams, table) {
    teams.forEach((team) => {
        const row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.textContent = team.Name;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.textContent = team.Wins + '-' + team.Losses;
        row.appendChild(cell);
        table.appendChild(row);
    });
}

function sortName() {
    sortEast('Name');
    sortCentral('Name');
    sortWest('Name');
    sortSouth('Name');

    nameButton.setAttribute('class', 'button is-active');
    winsButton.setAttribute('class', 'button');
    lossButton.setAttribute('class', 'button');
    pmButton.setAttribute('class', 'button');

    sortedN = true;
    sortedW = false;
    sortedL = false;
    sortedPM = false;
}

//Wins and losses parameter swapped bc they go in descending order when done so, and I'm lazy
function sortWins() {
    sortEast('Losses');
    sortCentral('Losses');
    sortWest('Losses');
    sortSouth('Losses');

    nameButton.setAttribute('class', 'button');
    winsButton.setAttribute('class', 'button is-active');
    lossButton.setAttribute('class', 'button');
    pmButton.setAttribute('class', 'button');

    sortedN = false;
    sortedW = true;
    sortedL = false;
    sortedPM = false;
}

function sortLosses() {
    sortEast('Wins');
    sortCentral('Wins');
    sortWest('Wins');
    sortSouth('Wins');

    nameButton.setAttribute('class', 'button');
    winsButton.setAttribute('class', 'button');
    lossButton.setAttribute('class', 'button is-active');
    pmButton.setAttribute('class', 'button');

    sortedN = false;
    sortedW = false;
    sortedL = true;
    sortedPM = false;
}

function sortPlusMinus() {
    sortEast('PlusMinus');
    sortCentral('PlusMinus');
    sortWest('PlusMinus');
    sortSouth('PlusMinus');

    nameButton.setAttribute('class', 'button');
    winsButton.setAttribute('class', 'button');
    lossButton.setAttribute('class', 'button');
    pmButton.setAttribute('class', 'button is-active');

    sortedN = false;
    sortedW = false;
    sortedL = false;
    sortedPM = true;
}

function sortEast(field) {
    if(ascending) {
        if (field === 'Name') {
            eastDiv = eastDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? -1 : 1;
            });
        }else if (field === 'PlusMinus') {
            eastDiv = eastDiv.sort((teamA, teamB) => teamB.PlusMinus - teamA.PlusMinus);
        }else if (field === 'Wins') {
            eastDiv = eastDiv.sort((teamA, teamB) => teamA.Wins - teamB.Wins);
        }else if (field === 'Losses') {
            eastDiv = eastDiv.sort((teamA, teamB) => teamA.Losses - teamB.Losses);
        }
    }else {
        if (field === 'Name') {
            eastDiv = eastDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? 1 : -1;
            });
        }else if (field === 'PlusMinus') {
            eastDiv = eastDiv.sort((teamA, teamB) => teamA.PlusMinus - teamB.PlusMinus);
        }else if (field === 'Wins') {
            eastDiv = eastDiv.sort((teamA, teamB) => teamB.Wins - teamA.Wins);
        }else if (field === 'Losses') {
            eastDiv = eastDiv.sort((teamA, teamB) => teamB.Losses - teamA.Losses);
        }
    }
    

    buildTeamTable(eastDiv, eastBody);
}

function sortCentral(field) {
    if(ascending) {
        if (field === 'Name') {
            centralDiv = centralDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? -1 : 1;
            });
        }else if (field === 'PlusMinus') {
            centralDiv = centralDiv.sort((teamA, teamB) => teamB.PlusMinus - teamA.PlusMinus);
        }else if (field === 'Wins') {
            centralDiv = centralDiv.sort((teamA, teamB) => teamA.Wins - teamB.Wins);
        }else if (field === 'Losses') {
            centralDiv = centralDiv.sort((teamA, teamB) => teamA.Losses - teamB.Losses);
        }
    }else {
        if (field === 'Name') {
            centralDiv = centralDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? 1 : -1;
            });
        }else if (field === 'PlusMinus') {
            centralDiv = centralDiv.sort((teamA, teamB) => teamA.PlusMinus - teamB.PlusMinus);
        }else if (field === 'Wins') {
            centralDiv = centralDiv.sort((teamA, teamB) => teamB.Wins - teamA.Wins);
        }else if (field === 'Losses') {
            centralDiv = centralDiv.sort((teamA, teamB) => teamB.Losses - teamA.Losses);
        }
    }

    buildTeamTable(centralDiv, centralBody);
}

function sortWest(field) {
    if(ascending) {
        if (field === 'Name') {
            westDiv = westDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? -1 : 1;
            });
        }else if (field === 'PlusMinus') {
            westDiv = westDiv.sort((teamA, teamB) => teamB.PlusMinus - teamA.PlusMinus);
        }else if (field === 'Wins') {
            westDiv = westDiv.sort((teamA, teamB) => teamA.Wins - teamB.Wins);
        }else if (field === 'Losses') {
            westDiv = westDiv.sort((teamA, teamB) => teamA.Losses - teamB.Losses);
        }
    }else {
        if (field === 'Name') {
            westDiv = westDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? 1 : -1;
            });
        }else if (field === 'PlusMinus') {
            westDiv = westDiv.sort((teamA, teamB) => teamA.PlusMinus - teamB.PlusMinus);
        }else if (field === 'Wins') {
            westDiv = westDiv.sort((teamA, teamB) => teamB.Wins - teamA.Wins);
        }else if (field === 'Losses') {
            westDiv = westDiv.sort((teamA, teamB) => teamB.Losses - teamA.Losses);
        }
    }

    buildTeamTable(westDiv, westBody);
}

function sortSouth(field) {
    if(ascending) {
        if (field === 'Name') {
            southDiv = southDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? -1 : 1;
            });
        }else if (field === 'PlusMinus') {
            southDiv = southDiv.sort((teamA, teamB) => teamB.PlusMinus - teamA.PlusMinus);
        }else if (field === 'Wins') {
            southDiv = southDiv.sort((teamA, teamB) => teamA.Wins - teamB.Wins);
        }else if (field === 'Losses') {
            southDiv = southDiv.sort((teamA, teamB) => teamA.Losses - teamB.Losses);
        }
    }else {
        if (field === 'Name') {
            southDiv = southDiv.sort((teamA, teamB) => {
                return (teamA.Name < teamB.Name) ? 1 : -1;
            });
        }else if (field === 'PlusMinus') {
            southDiv = southDiv.sort((teamA, teamB) => teamA.PlusMinus - teamB.PlusMinus);
        }else if (field === 'Wins') {
            southDiv = southDiv.sort((teamA, teamB) => teamB.Wins - teamA.Wins);
        }else if (field === 'Losses') {
            southDiv = southDiv.sort((teamA, teamB) => teamB.Losses - teamA.Losses);
        }
    }

    buildTeamTable(southDiv, southBody);
}
