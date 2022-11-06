const teamsEast = '[{"Name":"New York Empire", "Wins":15, "Losses":0, "PlusMinus":155}, {"Name":"DC Breeze", "Wins":11, "Losses":3, "PlusMinus":55}, {"Name":"Philadelphia Pheonix", "Wins":6, "Losses":7, "PlusMinus":5}, {"Name":"Boston Glory", "Wins":4, "Losses":8, "PlusMinus":-16}, {"Name":"Montreal Royal", "Wins":4, "Losses":8, "PlusMinus":-41}, {"Name":"Toronto Rush", "Wins":4, "Losses":8, "PlusMinus":-58}, {"Name":"Ottawa Outlaws", "Wins":2, "Losses":10, "PlusMinus":-42}]';
const teamsCentral = '[{"Name":"Chicago Union", "Wins":13, "Losses":2, "PlusMinus":65}, {"Name":"Minnesota Wind Chill", "Wins":10, "Losses":4, "PlusMinus":69}, {"Name":"Indianapolis AlleyCats", "Wins":6, "Losses":7, "PlusMinus":5}, {"Name":"Madison Radicals", "Wins":6, "Losses":6, "PlusMinus":-2}, {"Name":"Pittsburgh Thunderbirds", "Wins":4, "Losses":8, "PlusMinus":-24}, {"Name":"Detroit Mechanix", "Wins":0, "Losses":12, "PlusMinus":-111}]';
const teamsWest = '[{"Name":"Carolina Flyers", "Wins":12, "Losses":2, "PlusMinus":56}, {"Name":"Austin Sol", "Wins":9, "Losses":4, "PlusMinus":40}, {"Name":"Atlanta Hustle", "Wins":8, "Losses":4, "PlusMinus":36}, {"Name":"Dallas Legion", "Wins":1, "Losses":11, "PlusMinus":-56}, {"Name":"Tampa Bay Cannons", "Wins":1, "Losses":11, "PlusMinus":-88}]';
const teamsSouth = '[{"Name":"Colorado Summit", "Wins":12, "Losses":2, "PlusMinus":63}, {"Name":"Salt Lake Shred", "Wins":11, "Losses":3, "PlusMinus":59}, {"Name":"San Diego Growlers", "Wins":9, "Losses":4, "PlusMinus":14}, {"Name":"Oakland Spiders", "Wins":4, "Losses":8, "PlusMinus":-11}, {"Name":"LA Aviators", "Wins":4, "Losses":8, "PlusMinus":-36}, {"Name":"Seattle Cascades", "Wins":2, "Losses":10, "PlusMinus":-24}, {"Name":"Portland Nitro", "Wins":2, "Losses":10, "PlusMinus":-70}]';

const eastBody = document.querySelector('#east-standings tbody');
const centralBody = document.querySelector('#central-standings tbody');
const westBody = document.querySelector('#west-standings tbody');
const southBody = document.querySelector('#south-standings tbody');

console.log(teamsEast);
console.log(teamsCentral);
console.log(teamsWest);
console.log(teamsSouth);

let eastDiv = JSON.parse(teamsEast);
let centralDiv = JSON.parse(teamsCentral);
let westDiv = JSON.parse(teamsWest);
let southDiv = JSON.parse(teamsSouth);

buildTable(eastDiv, eastBody);
buildTable(centralDiv, centralBody);
buildTable(westDiv, westBody);
buildTable(southDiv, southBody);

function buildTable(teams, table) {
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

function sort(field, division, body) {
    if (field === 'Name') {
        teams = teams.sort((teamA, teamB) => {
            return (teamA.Name < teamB.Name) ? -1 : 1;
        });
    }else if (field === 'PlusMinus') {
        teams = teams.sort((teamA, teamB) => teamA.PlusMinus - teamB.PlusMinus);
    }else if (field === 'Wins') {
        teams = teams.sort((teamA, teamB) => teamA.Wins - teamB.Wins);
    }else if (field === 'Losses') {
        teams = teams.sort((teamA, teamB) => teamA.Losses - teamB.Losses);
    }

    createTable(division, body);
}
