//Arrays

//Divisions
const teamsEast = '[{"Name":"New York Empire", "Wins":15, "Losses":0, "PlusMinus":155, "id":0}, {"Name":"DC Breeze", "Wins":11, "Losses":3, "PlusMinus":55, "id":1}, {"Name":"Philadelphia Pheonix", "Wins":6, "Losses":7, "PlusMinus":5, "id":2}, {"Name":"Boston Glory", "Wins":4, "Losses":8, "PlusMinus":-16, "id":3}, {"Name":"Montreal Royal", "Wins":4, "Losses":8, "PlusMinus":-41, "id":4}, {"Name":"Toronto Rush", "Wins":4, "Losses":8, "PlusMinus":-58, "id":5}, {"Name":"Ottawa Outlaws", "Wins":2, "Losses":10, "PlusMinus":-42, "id":6}]';
const teamsCentral = '[{"Name":"Chicago Union", "Wins":13, "Losses":2, "PlusMinus":65, "id":7}, {"Name":"Minnesota Wind Chill", "Wins":10, "Losses":4, "PlusMinus":69, "id":8}, {"Name":"Indianapolis AlleyCats", "Wins":6, "Losses":7, "PlusMinus":5, "id":9}, {"Name":"Madison Radicals", "Wins":6, "Losses":6, "PlusMinus":-2, "id":10}, {"Name":"Pittsburgh Thunderbirds", "Wins":4, "Losses":8, "PlusMinus":-24, "id":11}, {"Name":"Detroit Mechanix", "Wins":0, "Losses":12, "PlusMinus":-111, "id":12}]';
const teamsWest = '[{"Name":"Carolina Flyers", "Wins":12, "Losses":2, "PlusMinus":56, "id":13}, {"Name":"Austin Sol", "Wins":9, "Losses":4, "PlusMinus":40, "id":14}, {"Name":"Atlanta Hustle", "Wins":8, "Losses":4, "PlusMinus":36, "id":15}, {"Name":"Dallas Legion", "Wins":1, "Losses":11, "PlusMinus":-56, "id":16}, {"Name":"Tampa Bay Cannons", "Wins":1, "Losses":11, "PlusMinus":-88, "id":17}]';
const teamsSouth = '[{"Name":"Colorado Summit", "Wins":12, "Losses":2, "PlusMinus":63, "id":18}, {"Name":"Salt Lake Shred", "Wins":11, "Losses":3, "PlusMinus":59, "id":19}, {"Name":"San Diego Growlers", "Wins":9, "Losses":4, "PlusMinus":14, "id":20}, {"Name":"Oakland Spiders", "Wins":4, "Losses":8, "PlusMinus":-11, "id":21}, {"Name":"LA Aviators", "Wins":4, "Losses":8, "PlusMinus":-36, "id":22}, {"Name":"Seattle Cascades", "Wins":2, "Losses":10, "PlusMinus":-24, "id":23}, {"Name":"Portland Nitro", "Wins":2, "Losses":10, "PlusMinus":-70, "id":24}]';
const allTeams = '[{"Name":"New York Empire", "Wins":15, "Losses":0, "PlusMinus":155, "id":0}, {"Name":"DC Breeze", "Wins":11, "Losses":3, "PlusMinus":55, "id":1}, {"Name":"Philadelphia Pheonix", "Wins":6, "Losses":7, "PlusMinus":5, "id":2}, {"Name":"Boston Glory", "Wins":4, "Losses":8, "PlusMinus":-16, "id":3}, {"Name":"Montreal Royal", "Wins":4, "Losses":8, "PlusMinus":-41, "id":4}, {"Name":"Toronto Rush", "Wins":4, "Losses":8, "PlusMinus":-58, "id":5}, {"Name":"Ottawa Outlaws", "Wins":2, "Losses":10, "PlusMinus":-42, "id":6}, {"Name":"Chicago Union", "Wins":13, "Losses":2, "PlusMinus":65, "id":7}, {"Name":"Minnesota Wind Chill", "Wins":10, "Losses":4, "PlusMinus":69, "id":8}, {"Name":"Indianapolis AlleyCats", "Wins":6, "Losses":7, "PlusMinus":5, "id":9}, {"Name":"Madison Radicals", "Wins":6, "Losses":6, "PlusMinus":-2, "id":10}, {"Name":"Pittsburgh Thunderbirds", "Wins":4, "Losses":8, "PlusMinus":-24, "id":11}, {"Name":"Detroit Mechanix", "Wins":0, "Losses":12, "PlusMinus":-111, "id":12}, {"Name":"Carolina Flyers", "Wins":12, "Losses":2, "PlusMinus":56, "id":13}, {"Name":"Austin Sol", "Wins":9, "Losses":4, "PlusMinus":40, "id":14}, {"Name":"Atlanta Hustle", "Wins":8, "Losses":4, "PlusMinus":36, "id":15}, {"Name":"Dallas Legion", "Wins":1, "Losses":11, "PlusMinus":-56, "id":16}, {"Name":"Tampa Bay Cannons", "Wins":1, "Losses":11, "PlusMinus":-88, "id":17}, {"Name":"Colorado Summit", "Wins":12, "Losses":2, "PlusMinus":63, "id":18}, {"Name":"Salt Lake Shred", "Wins":11, "Losses":3, "PlusMinus":59, "id":19}, {"Name":"San Diego Growlers", "Wins":9, "Losses":4, "PlusMinus":14, "id":20}, {"Name":"Oakland Spiders", "Wins":4, "Losses":8, "PlusMinus":-11, "id":21}, {"Name":"LA Aviators", "Wins":4, "Losses":8, "PlusMinus":-36, "id":22}, {"Name":"Seattle Cascades", "Wins":2, "Losses":10, "PlusMinus":-24, "id":23}, {"Name":"Portland Nitro", "Wins":2, "Losses":10, "PlusMinus":-70, "id":24}]';

//Games per week
const week1 = '[{"Teams":"ATL vs CAR", "Scoreline":"14-16", "DT":"4/29 7:00PM EDT"}, {"Teams":"SLC vs SAN", "Scoreline":"24-22", "DT":"4/29 7:00PM PDT"}, {"Teams":"NY vs DC", "Scoreline":"22-19", "DT":"4/30 7:00PM PDT"}, {"Teams":"PIT vs DET", "Scoreline":"17-13", "DT":"4/30 7:00PM EDT"}, {"Teams":"PHI vs BOS", "Scoreline":"24-25", "DT":"4/30 7:00PM EDT"}, {"Teams":"MON vs TOR", "Scoreline":"26-19" , "DT":"4/30 7:00PM EDT"}, {"Teams":"TAM vs ATL", "Scoreline":"12-24", "DT":"4/30 7:30PM EDT"}, {"Teams":"AUS vs DAL", "Scoreline":"20-17", "DT":"4/30 7:00PM CDT"}, {"Teams":"SLC vs LA", "Scoreline":"25-22", "DT":"4/30 6:00PM PDT"}, {"Teams":"PIT vs CHI", "Scoreline":"8-19", "DT":"5/1 2:00PM CDT"}, {"Teams":"SEA vs POR", "Scoreline":"24-29", "DT":"5/1 4:00PM PDT"}]';
const week2 = '[{"Teams":"BOS vs OTT", "Scoreline":"19-21", "DT":"5/6 7:00PM EDT"}, {"Teams":"BOS vs MON", "Scoreline":"17-21", "DT":"5/7 1:00PM EDT"}, {"Teams":"CAR vs TAM", "Scoreline":"19-13", "DT":"5/7 6:00PM EDT"}, {"Teams":"PHI vs NY", "Scoreline":"15-17", "DT":"5/7 7:00PM EDT"}, {"Teams":"CHI vs MIN", "Scoreline":"24-21", "DT":"5/7 6:00PM CDT"}, {"Teams":"PIT vs MAD", "Scoreline":"16-18", "DT":"5/7 6:00PM CDT"}, {"Teams":"DET vs IND", "Scoreline":"22-33", "DT":"5/7 7:30PM EDT"}, {"Teams":"COL vs SEA", "Scoreline":"19-16", "DT":"5/7 5:00PM PDT"}, {"Teams":"SAN vs OAK", "Scoreline":"18-16", "DT":"5/7 6:00PM PDT"}, {"Teams":"COR vs POR", "Scoreline":"24-23", "DT":"5/8 4:00PM PDT"}]';
const week3 = '[{"Teams":"MON vs PHI", "Scoreline":"18-17", "DT":"5/13 7:00PM EDT"}, {"Teams":"DAL vs AUS", "Scoreline":"17-24", "DT":"5/13 7:00PM CDT"}, {"Teams":"SEA vs SLC", "Scoreline":"21-23", "DT":"5/13 7:00PM MDT"}, {"Teams":"LA vs SAN", "Scoreline":"17-22", "DT":"5/14 1:00PM PDT"}, {"Teams":"TAM vs CAR", "Scoreline":"18-24", "DT":"5/14 6:00PM EDT"}, {"Teams":"MON vs DC", "Scoreline":"17-27", "DT":"5/14 7:00PM EDT"}, {"Teams":"NY vs BOS", "Scoreline":"23-19", "DT":"5/14 7:00PM EDT"}, {"Teams":"OTT vs TOR", "Scoreline":"26-29", "DT":"5/14 7:00PM EDT"}, {"Teams":"MAD vs IND", "Scoreline":"23-22", "DT":"5/14 7:30PM EDT"}, {"Teams":"MIN vs DAL", "Scoreline":"20-14", "DT":"5/14 7:00PM CDT"}]';
const week4 = '[{"Teams":"AUS vs CAR", "Scoreline":"24-27", "DT":"5/20 7:00PM EDT"}, {"Teams":"PHI vs MON", "Scoreline":"19-13", "DT":"5/20 8:00PM EDT"}, {"Teams":"SEA vs SAN", "Scoreline":"20-22", "DT":"5/21 3:00PM PDT"}, {"Teams":"IND vs PIT", "Scoreline":"20-16", "DT":"5/21 6:00PM EDT"}, {"Teams":"TOR vs NY", "Scoreline":"17-31", "DT":"5/21 7:00PM EDT"}, {"Teams":"MAD vs DET", "Scoreline":"27-18", "DT":"5/21 7:00PM EDT"}, {"Teams":"PHI vs OTT", "Scoreline":"23-22", "DT":"5/21 7:00PM EDT"}, {"Teams":"AUS vs ATL", "Scoreline":"21-26", "DT":"5/21 7:30PM EDT"}, {"Teams":"POR vs OAK", "Scoreline":"26-22", "DT":"5/21 6:00PM PDT"}, {"Teams":"SEA vs LA", "Scoreline":"18-19", "DT":"5/22 1:00PM PDT"}]';
const week5 = '[{"Teams":"NY vs MON", "Scoreline":"22-18", "DT":"5/27 7:00PM EDT"}, {"Teams":"IND vs DET", "Scoreline":"23-19", "DT":"5/28 7:00PM EDT"}, {"Teams":"PIT vs TAM", "Scoreline":"24-19", "DT":"5/28 7:00PM EDT"}, {"Teams":"NY vs OTT", "Scoreline":"30-18", "DT":"5/28 7:00PM EDT"}, {"Teams":"DC vs TOR", "Scoreline":"27-26", "DT":"5/28 7:00PM EDT"}, {"Teams":"POR vs SEA", "Scoreline":"18-26", "DT":"5/28 5:00PM PDT"}, {"Teams":"MIN vs MAD", "Scoreline":"19-16", "DT":"5/28 7:00PM CDT"}, {"Teams":"SLC vs COL", "Scoreline":"20-21", "DT":"5/28 7:00PM MDT"}]';
const week6 = '[{"Teams":"MON vs OTT", "Scoreline":"24-21", "DT":"6/1 8:00PM EDT"}, {"Teams":"BOS vs DC", "Scoreline":"20-25", "DT":"6/3 7:00PM EDT"}, {"Teams":"MAD vs PIT", "Scoreline":"20-19", "DT":"6/3 7:00PM EDT"}, {"Teams":"CAR vs DAL", "Scoreline":"26-18", "DT":"6/3 7:00PM CDT"}, {"Teams":"OAK vs SLC", "Scoreline":"21-30", "DT":"6/3 7:00PM MDT"}, {"Teams":"ATL vs TAM", "Scoreline":"18/16", "DT":"6/4 6:00PM EDT"}, {"Teams":"BOS vs PHI", "Scoreline":"22-24", "DT":"6w/4 6:00PM EDT"}, {"Teams":"CHI vs DET", "Scoreline":"28-20", "DT":"6/4 7:00PM EDT"}, {"Teams":"IND vs MIN", "Scoreline":"13-28", "DT":"6/4 6:00PM CDT"}, {"Teams":"NY vs TOR", "Scoreline":"25-8", "DT":"6/4 7:00PM EDT"}, {"Teams":"CAR vs AUS", "Scoreline":"20-21", "DT":"6/4 7:00PM CDT"}, {"Teams":"LA vs POR", "Scoreline":"21-20", "DT":"6/4 6:00PM PDT"}, {"Teams":"OAK vs COL", "Scoreline":"16-22", "DT":"6/4 7:00PM MDT"}, {"Teams":"LA vs SEA", "Scoreline":"14-23", "DT":"6/5 11:00AM PDT"}]';
const week7 = '[{"Teams":"DC vs NY", "Scoreline":"21-26", "DT":"6/10 7:00PM EDT"}, {"Teams":"MAD vs CHI", "Scoreline":"21-22", "DT":"6/10 6:30PM CDT"}, {"Teams":"COL vs SLC", "Scoreline":"25-20", "DT":"6/10 7:00PM MDT"}, {"Teams":"POR vs LA", "Scoreline":"16-17", "DT":"6/10 7:30PM PDT"}, {"Teams":"TAM vs ATL", "Scoreline":"18-23", "DT":"6/11 3:00PM EDT"}, {"Teams":"DAL vs CAR", "Scoreline":"15-23", "DT":"6/11 6:00PM EDT"}, {"Teams":"TOR vs MON", "Scoreline":"21-20", "DT":"6/11 6:30PM EDT"}, {"Teams":"PIT vs MIN", "Scoreline":"14-20", "DT":"6/11 6:00PM CDT"}, {"Teams":"DET vs IND", "Scoreline":"18-32", "DT":"6/11 7:30PM EDT"}, {"Teams":"POR vs SAN", "Scoreline":"18-20", "DT":"6/11 5:00PM PDT"}, {"Teams":"COL vs OAK", "Scoreline":"29-24", "DT":"6/11 6:00PM PDT"}]';
const week8 = '[{"Teams":"TOR vs PHI", "Scoreline":"14-16", "DT":"6/17 7:00PM EDT"}, {"Teams":"OTT vs BOS", "Scoreline":"18-19", "DT":"6/17 7:00PM EDT"}, {"Teams":"CAR vs ATL", "Scoreline":"22-18", "DT":"6/17 7:30PM EDT"}, {"Teams":"AUS vs CHI", "Scoreline":"21-24", "DT":"6/17 6:30PM CDT"}, {"Teams":"SEA vs OAK", "Scoreline":"19-20", "DT":"6/17 7:00PM PDT"}, {"Teams":"SEA vs COL", "Scoreline":"14-22", "DT":"6/18 4:00PM MDT"}, {"Teams":"DET vs PIT", "Scoreline":"21-24", "DT":"6/18 6:00PM EDT"}, {"Teams":"OTT vs NY", "Scoreline":"16-21", "DT":"6/18 7:00PM EDT"}, {"Teams":"TOR vs DC", "Scoreline":"16-26", "DT":"6/18 7:00PM EDT"}, {"Teams":"AUS vs MAD", "Scoreline":"19-18", "DT":"6/18 6:00PM CDT"}, {"Teams":"SAN vs LA", "Scoreline":"20-19", "DT":"6/18 6:00PM PDT"}]';
const week9 = '[{"Teams":"SAN vs SLC", "Scoreline":"18-23", "DT":"6/24 7:00PM MDT"}, {"Teams":"CAR vs TAM", "Scoreline":"23-15", "DT":"6/25 6:00PM EDT"}, {"Teams":"MAD vs MIN", "Scoreline":"11-22", "DT":"6/25 6:00PM CDT"}, {"Teams":"BOS vs TOR", "Scoreline":"23-25", "DT":"6/25 7:00PM EDT"}, {"Teams":"CHI vs IND", "Scoreline":"24-23", "DT":"6/25 7:30PM EDT"}, {"Teams":"DAL vs AUS", "Scoreline":"20-26", "DT":"6/25 7:00PM CDT"}, {"Teams":"OAK vs SEA", "Scoreline":"22-17", "DT":"6/25 5:00PM PDT"}, {"Teams":"SAN vs COL", "Scoreline":"21-27", "DT":"6/25 7:00PM MDT"}, {"Teams":"OAK vs POR", "Scoreline":"36-21", "DT":"6/26 4:00PM PDT"}]';
const week10 = '[{"Teams":"MON vs NY", "Scoreline":"14-29", "DT":"7/1 7:00PM EDT"}, {"Teams":"MIN vs CHI", "Scoreline":"25-22", "DT":"7/1 6:30PM CDT"}, {"Teams":"MIN vs DET", "Scoreline":"33-19", "DT":"7/2 3:30PM EDT"}, {"Teams":"DC vs PHI", "Scoreline":"22-21", "DT":"7/2 6:00PM EDT"}, {"Teams":"ATL vs CAR", "Scoreline":"16-18", "DT":"7/2 7:00PM EDT"}, {"Teams":"TOR vs OTT", "Scoreline":"21-20", "DT":"7/2 7:00PM EDT"}, {"Teams":"MON vs BOS", "Scoreline":"16-23", "DT":"7/2 7:00PM EDT"}, {"Teams":"PIT vs IND", "Scoreline":"26-28", "DT":"7/2 7:30PM EDT"}, {"Teams":"AUS vs DAL", "Scoreline":"26-16", "DT":"7/2 7:00PM CDT"}, {"Teams":"LA vs COL", "Scoreline":"15-24", "DT":"7/2 7:00PM MDT"}]';
const week11 = '[{"Teams":"OTT vs MON", "Scoreline":"23-20", "DT":"7/7 7:00PM EDT"}, {"Teams":"PHI vs DC", "Scoreline":"24-25", "DT":"7/8 7:00PM EDT"}, {"Teams":"ATL vs DAL", "Scoreline":"17-14", "DT":"7/8 7:00PM CDT"}, {"Teams":"SLC vs SEA", "Scoreline":"25-24", "DT":"7/8 7:00PM PDT"}, {"Teams":"TAM vs CAR", "Scoreline":"11-20", "DT":"7/9 6:00PM EDT"}, {"Teams":"DET vs PIT", "Scoreline":"19-22", "DT":"7/9 6:00PM EDT"}, {"Teams":"BOS vs NY", "Scoreline":"18-32", "DT":"7/9 7:00PM EDT"}, {"Teams":"IND vs CHI", "Scoreline":"15-23", "DT":"7/9 6:00PM CDT"}, {"Teams":"ATL vs AUS", "Scoreline":"17-18", "DT":"7/9 7:00PM CDT"}, {"Teams":"SLC vs POR", "Scoreline":"28-14", "DT":"7/9 6:30PM PDT"}, {"Teams":"MIN vs MAD", "Scoreline":"18-21", "DT":"7/10 5:00PM CDT"}]';
const week12 = '[{"Teams":"DC vs MON", "Scoreline":"24-14", "DT":"7/15 7:00PM EDT"}, {"Teams":"IND vs MAD", "Scoreline":"19/17", "DT":"7/15 7:00PM CDT"}, {"Teams":"COL vs SAN", "Scoreline":"20-23", "DT":"7/15 7:00PM PDT"}, {"Teams":"ATL vs TAM", "Scoreline":"26-17", "DT":"7/16 6:00PM EDT"}, {"Teams":"CAR vs PIT", "Scoreline":"27-22", "DT":"7/16 6:00PM EDT"}, {"Teams":"MAD vs DET", "Scoreline":"25-18", "DT":"7/16 7:00PM EDT"}, {"Teams":"DC vs OTT", "Scoreline":"24-17", "DT":"7/16 7:00PM EDT"}, {"Teams":"CHI vs MIN", "Scoreline":"27-25", "DT":"7/16 6:00PM CDT"}, {"Teams":"PHI vs TOR", "Scoreline":"25-23", "DT":"7/16 7:00PM EDT"}, {"Teams":"DAL vs AUS", "Scoreline":"22-26", "DT":"7/16 7:00PM CDT"}, {"Teams":"SLC vs OAK", "Scoreline":"22-19", "DT":"7/16 5:00PM PDT"}, {"Teams":"COL vs LA", "Scoreline":"27-21", "DT":"7/16 6:00PM PDT"}]';
const week13 = '[{"Teams":"NY vs PHI", "Scoreline":"24-19", "DT":"7/22 7:00PM EDT"}, {"Teams":"DAL vs ATL", "Scoreline":"20-27", "DT":"7/22 7:30PM EDT"}, {"Teams":"LA vs SLC", "Scoreline":"16-19", "DT":"7/22 7:00PM MDT"}, {"Teams":"DC vs BOS", "Scoreline":"23-21", "DT":"7/23 1:00PM EDT"}, {"Teams":"MIN vs IND", "Scoreline":"24-21", "DT":"7/23 2:00PM CDT"}, {"Teams":"DAL vs TAM", "Scoreline":"15-17", "DT":"7/23 6:00PM EDT"}, {"Teams":"CHI vs PIT", "Scoreline":"25-17", "DT":"7/23 6:00PM EDT"}, {"Teams":"SAN vs SEA", "Scoreline":"22-18", "DT":"7/23 5:00PM PDT"}, {"Teams":"LA vs OAK", "Scoreline":"18-22", "DT":"7/23 5:00PM PDT"}, {"Teams":"SAN VS POR", "Scoreline":"23-18", "DT":"7/24 4:15PM PDT"}]';
const week14 = '[{"Teams":"OTT vs DC", "Scoreline":"17-24", "DT":"7/29 7:00PM EDT"}, {"Teams":"TAM vs AUS", "Scoreline":"10-30", "DT":"7/29 7:00PM CDT"}, {"Teams":"CHI vs MAD", "Scoreline":"21-15", "DT":"7/29 7:00PM CDT"}, {"Teams":"POR vs SLC", "Scoreline":"16-32", "DT":"7/29 7:00PM MDT"}, {"Teams":"OAK vs LA", "Scoreline":"24-25", "DT":"7/29 7:30PM PDT"}, {"Teams":"OTT vs PHI", "Scoreline":"19-25", "DT":"7/30 6:00PM EDT"}, {"Teams":"DET vs CHI", "Scoreline":"18-33", "DT":"7/30 6:00PM PDT"}, {"Teams":"IND vs ATL", "Scoreline":"21-23", "DT":"7/30 7:30PM EDT"}, {"Teams":"TAM vs DAL", "Scoreline":"16-24", "DT":"7/30 7:00PM EDT"}, {"Teams":"POR vs COL", "Scoreline":"18-34", "DT":"7/30 7:00PM MDT"}, {"Teams":"OAK vs SAN", "Scoreline":"18-24", "DT":"7/30 6:00PM PDT"}, {"Teams":"DET vs MIN", "Scoreline":"9-26", "DT":"7/31 5:00PM CDT"}]';
const playoffs = '[{"Teams":"PHI vs DC", "Scoreline":"18-23", "DT":"8/13 7:00PM EDT"}, {"Teams":"IND vs MIN", "Scoreline":"18-20", "DT":"8/13 6:00PM CDT"}, {"Teams":"SAN vs SLC", "Scoreline":"16-19", "DT":"8/13 7:00PM MDT"}, {"Teams":"AUS vs CAR", "Scoreline":"20-22", "DT":"8/20 6:30PM EDT"}, {"Teams":"DC vs NY", "Scoreline":"18-19", "DT":"8/20 7:00PM EDT"}, {"Teams":"SLC vs COL", "Scoreline":"21-26", "DT":"8/20 6:30PM MDT"}, {"Teams":"MIN vs CHI", "Scoreline":"16-21", "DT":"8/21 4:00PM CDT"}]';
const championships = '[{"Teams":"CHI vs COL", "Scoreline":"19-14", "DT":"8/26 5:00PM CDT"}, {"Teams":"CAR vs NY", "Scoreline":"16-22", "DT":"8/26 7:30PM CDT"}, {"Teams":"CHI vs NY", "Scoreline":"14-22", "DT":"8/27 7:00PM CDT"}]';
const allstars = '[{"Teams":"E/C vs W/S", "Scoreline":"42-24", "DT":"11/12 4:00PM PDT"}]';

//Parsed arrays

//Teams
let eastDiv = JSON.parse(teamsEast);
let centralDiv = JSON.parse(teamsCentral);
let westDiv = JSON.parse(teamsWest);
let southDiv = JSON.parse(teamsSouth);
let allTeamsParsed = JSON.parse(allTeams);

//Games
let week1Parsed = JSON.parse(week1);
let week2Parsed = JSON.parse(week2);
let week3Parsed = JSON.parse(week3);
let week4Parsed = JSON.parse(week4);
let week5Parsed = JSON.parse(week5);
let week6Parsed = JSON.parse(week6);
let week7Parsed = JSON.parse(week7);
let week8Parsed = JSON.parse(week8);
let week9Parsed = JSON.parse(week9);
let week10Parsed = JSON.parse(week10);
let week11Parsed = JSON.parse(week11);
let week12Parsed = JSON.parse(week12);
let week13Parsed = JSON.parse(week13);
let week14Parsed = JSON.parse(week14);
let playoffsParsed = JSON.parse(playoffs);
let champsParsed = JSON.parse(championships);
let allstarsParsed = JSON.parse(allstars);


//Localstorage

//Teams
/*localStorage.setItem('eastDiv', JSON.stringify(eastDiv));
localStorage.setItem('centralDiv', JSON.stringify(centralDiv));
localStorage.setItem('westDiv', JSON.stringify(westDiv));
localStorage.setItem('southDiv', JSON.stringify(southDiv));
localStorage.setItem('allTeams', JSON.stringify(allTeamsParsed));

//Games
localStorage.setItem('week1', JSON.stringify(week1Parsed));
localStorage.setItem('week2', JSON.stringify(week2Parsed));
localStorage.setItem('week3', JSON.stringify(week3Parsed));
localStorage.setItem('week4', JSON.stringify(week4Parsed));
localStorage.setItem('week5', JSON.stringify(week5Parsed));
localStorage.setItem('week6', JSON.stringify(week6Parsed));
localStorage.setItem('week7', JSON.stringify(week7Parsed));
localStorage.setItem('week8', JSON.stringify(week8Parsed));
localStorage.setItem('week9', JSON.stringify(week9Parsed));
localStorage.setItem('week10', JSON.stringify(week10Parsed));
localStorage.setItem('week11', JSON.stringify(week11Parsed));
localStorage.setItem('week12', JSON.stringify(week12Parsed));
localStorage.setItem('week13', JSON.stringify(week13Parsed));
localStorage.setItem('week14', JSON.stringify(week14Parsed));
localStorage.setItem('playoffs', JSON.stringify(playoffsParsed));
localStorage.setItem('champs', JSON.stringify(champsParsed));
localStorage.setItem('allstars', JSON.stringify(allstarsParsed)); */

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
let isCardOne = true;
let currentPage;
let currentPageNum;
let loggedIn = sessionStorage.getItem('isLoggedIn');
const password = 'password';
let isOneThird = true;
let isTwoThirds = false;

//Pagination elements
const paginationLinks = document.querySelectorAll('.pagination-link');
const nextButton = document.querySelector('.pagination-next');
const prevButton = document.querySelector('.pagination-previous');
const IDweek1 = document.getElementById('week1');
const IDweek2 = document.getElementById('week2');
const IDweek3 = document.getElementById('week3');
const IDweek4 = document.getElementById('week4');
const IDweek5 = document.getElementById('week5');
const IDweek6 = document.getElementById('week6');
const IDweek7 = document.getElementById('week7');
const IDweek8 = document.getElementById('week8');
const IDweek9 = document.getElementById('week9');
const IDweek10 = document.getElementById('week10');
const IDweek11 = document.getElementById('week11');
const IDweek12 = document.getElementById('week12');
const IDweek13 = document.getElementById('week13');
const IDweek14 = document.getElementById('week14');
const IDplayoffs = document.getElementById('playoffs');
const IDchamps = document.getElementById('champs');
const IDallstars = document.getElementById('allstars'); 

const maxButtons = 9;

//Login funcitonality
const loginButton = document.getElementById('login');
const loginMenu = document.getElementById('login-menu');    
const input = document.getElementById('password');
const admin = document.getElementById('admin');

//Game Creator
const firstDropdownTxt = document.getElementById('drop1-text');
const secondDropdownTxt = document.getElementById('drop2-text');
const scoreInput = document.getElementById('scoreline-input');
const AMPMInput = document.getElementById('am-pm-text');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const timezoneText = document.getElementById('timezone-text');

//Team Matches Page
const pageTitle = document.getElementById('team-match-header');
const titleBackground = document.getElementById('team-matches-bg');
const tmBody = document.getElementById('tm-body');
const tmOne = document.getElementById('tm-one-third');
const tmTwo = document.getElementById('tm-two-thirds');
const tmThree = document.getElementById('tm-three-thirds');

//Functions
function createTeamGame(games) {
    let tmOne = document.getElementById('tm-one-third');
    let tmTwo = document.getElementById('tm-two-thirds');
    let tmThree = document.getElementById('tm-three-thirds');

    tmOne.replaceChildren();
    tmTwo.replaceChildren();
    tmThree.replaceChildren();

    games.forEach((game) => {
        let team1 = game.Teams.substring(0, game.Teams.indexOf(' vs'));
        let team2 = game.Teams.substring(game.Teams.indexOf('s') + 2);
        let card = document.createElement('div');
        let cardContent = document.createElement('div');
        let content = document.createElement('div');
        let para = document.createElement('p');

        cardContent.classList.add('card-content');
        content.classList.add('content');

        para.textContent = game.Teams;
        content.appendChild(para);
        para.setAttribute('class', 'title is-size-3 teams');
        para = document.createElement('p');
        para.textContent = '(' + team1 + ') ' + game.Scoreline + ' (' + team2 + ')'; //Format should look like (team1) 00-00 (team2)
        content.appendChild(para);
        para.setAttribute('class', 'is-size-4 scoreline');
        para = document.createElement('p');
        para.textContent = game.DT;
        content.appendChild(para);
        para.setAttribute('class', 'is-size-5 game-dt');
        cardContent.appendChild(content);
        card.appendChild(cardContent);
        card.setAttribute('class', 'card game-card mb-5 mx-6');

        if(isOneThird && !isTwoThirds) {
            tmOne.appendChild(card);
            isOneThird = false;
            isTwoThirds = true;
        }else if(!isOneThird && isTwoThirds) {
            tmTwo.appendChild(card);
            isTwoThirds = false;
        }else {
            tmThree.appendChild(card);
            isOneThird = true;
        }
    });
}

function createTeamPage() {
    let teamsArr = JSON.parse(localStorage.getItem('allTeams'));
    let parameters = (new URL(document.location)).searchParams;

    let filtered = teamsArr.filter(team => team.id == parameters.get('id'));
    pageTitle.textContent = filtered[0].Name;

    let bgID = filtered[0].id;

    if(bgID < 7) {
        titleBackground.setAttribute('class', 'green-bg');
    }else if(bgID > 6 && bgID < 13) {
        titleBackground.setAttribute('class', 'blue-bg');
    }else if(bgID > 12 && bgID < 18) {
        titleBackground.setAttribute('class', 'red-bg') 
    }else {
        titleBackground.setAttribute('class', 'yellow-bg');
    }

    createTeamGame(findGames(abbreviateName(filtered[0].Name)))
}

function setTimezone(zone) {
    timezoneText.textContent = zone;
}

function setAMPM(time) {
    AMPMInput.textContent = time;
}

function addNewGame(teams, scoreline, dt) {
    let newObj = {Teams:teams, Scoreline:scoreline, DT:dt};
    allstarsParsed.push(newObj);
    localStorage.setItem('allstars', JSON.stringify(allstarsParsed));
}

function updateStats(team1, team2, scoreline) {
    let eastDiv1 = false;
    let centralDiv1 = false;
    let westDiv1 = false;
    let southDiv1 = false;
    let eastDiv2 = false;
    let centralDiv2 = false;
    let westDiv2 = false;
    let southDiv2 = false;
    team1 = reverseAbbreviateName(team1);
    team2 = reverseAbbreviateName(team2);

    let pmFin = parseInt(scoreline.substring(0, scoreline.indexOf('-'))) - parseInt(scoreline.substring(scoreline.indexOf('-') + 1));
    let index1;
    let index2;

    eastDiv.forEach((team) => {
        if(team1 === team.Name) {
            index1 = team.id;
            eastDiv1 = true;
        }
    });

    eastDiv.forEach((team) => {
        if(team2 === team.Name) {
            index2 = team.id;
            eastDiv2 = true;
        }
    });

    centralDiv.forEach((team) => {
        if(team1 === team.Name) {
            index1 = team.id;
            centralDiv1 = true;
        }
    });

    centralDiv.forEach((team) => {
        if(team2 === team.Name) {
            index2 = team.id;
            centralDiv2 = true;
        }
    });

    westDiv.forEach((team) => {
        if(team1 === team.Name) {
            index1 = team.id;
            westDiv1 = true;
        }
    });

    westDiv.forEach((team) => {
        if(team2 === team.Name) {
            index2 = team.id;
            westDiv2 = true;
        }
    });

    southDiv.forEach((team) => {
        if(team1 === team.Name) {
            index1 = team.id;
            southDiv1 = true;
        }
    });

    southDiv.forEach((team) => {
        if(team2 === team.Name) {
            index2 = team.id;
            southDiv2 = true;
        }
    });

    console.log(index1);
    console.log(index2);
}

function createGame() {
    let teams;
    let scoreline;
    let dt

    if(validateTeam(firstDropdownTxt.textContent, secondDropdownTxt.textContent) === 1) { //validate teams
        teams = firstDropdownTxt.textContent + ' vs ' + secondDropdownTxt.textContent;
    }else {
        alert('Invalid Teams Input');
        return; //* Return nothing in order to stop multiple alerts (annoying stuff)
    }

    if(validateScore(scoreInput.value) === 1) { //validate scoreline
        scoreline = scoreInput.value;
    }else {
        alert('Invalid Scoreline Input');
        return;
    }

    if(validateDateTime(dateInput.value, timeInput.value) === 1) { //validate date + time
        dt = dateInput.value + ' ' + timeInput.value + AMPMInput.textContent + ' ' + timezoneText.textContent;
    }else {
        alert('Invalid Date/Time Input');
        return;
    }

    updateStats(firstDropdownTxt, secondDropdownTxt, scoreline);
    addNewGame(teams, scoreline, dt);
}

function validateDateTime(input1, input2) {
    if(input1.match(/^\d\/\d{2}$/gm) || input1.match(/^\d{2}\/\d{2}$/gm) || input1.match(/^\d{2}\/\d$/gm) || input1.match(/^\d\/\d$/gm)) {
        if(input2.match(/^\d\:\d{2}$/gm) || input2.match(/^\d{2}\:\d{2}$/gm)) {
            return 1;
        }
    }

    return -1;
}

function validateScore(input) {
    if(input.match(/^\d{2}\-\d{2}/gm)) { //Pattern match: "^" match the front, \d an integer from 0-9, {2} match the previous parameter twice, \- match - literally, $ match the end
        return 1;
    }else if(input.match(/^\d\-\d{2}$/gm)) {
        return 1;
    }else if(input.match(/^\d{2}\-\d$/gm)) {
        return 1;
    }else if(input.match(/^\d\-\d$/gm)) {
        return 1;
    }

    return -1;
}

function validateTeam(input1, input2) {
    if(input1 === input2) {
        return -1;
    }else if(input1.match(/^[A-Z]{3}$/gm)) {
        return 1;
    }else if(input1.match(/^[A-Z]{2}$/gm)) {
        return 1;
    }

    return -1;
}

function assignTeam(team, button) {
    button.textContent = team;
}

function checkIfLoggedIn() {
    if(loggedIn === true) {
        loginButton.textContent = "Log out";
        loginMenu.classList.add('login-hidden');
    }else {
        sessionStorage.setItem('isLoggedIn', false);
    }

    console.log(loggedIn);
}

function login() {
    if(loginButton.textContent === 'Log in') {
        if(loginMenu.classList.contains('login-hidden')) {
            loginMenu.classList.remove('login-hidden');

            input.addEventListener('keyup', (event) => { //Happens when the enter key is released (keyup)
                if(event.keyCode === 13) { //13 is the keyCode for the 'Enter' key
                    if(input.value === 'Password') { //Checks the textarea to see if the it is the same as the correct password
                        loginButton.textContent = "Log out";
                        loginMenu.classList.add('login-hidden');
                        admin.classList.remove('admin-hidden');
                        sessionStorage.setItem('isLoggedIn', true);
                    }else {
                        alert('Incorrect password, the password is Password');
                        loginMenu.classList.add('login-hidden');
                    }
                }
            });
        }else    
            loginMenu.classList.add('login-hidden');
    }else {
        loginButton.textContent = "Log in";
        admin.classList.add('admin-hidden');
        sessionStorage.setItem('isLoggedIn', false);
    }
    input.value = ''; 
}

function findPageName(int) {
    if(int === 1) {
        return 'week1';
    }else if(int === 2) {
        return 'week2';
    }else if(int === 3) {
        return 'week3';
    }else if(int === 4) {
        return 'week4';
    }else if(int === 5) {
        return 'week5';
    }else if(int === 6) {
        return 'week6';
    }else if(int === 7) {
        return 'week7';
    }else if(int === 8) {
        return 'week8';
    }else if(int === 9) {
        return 'week9';
    }else if(int === 10) {
        return 'week10';
    }else if(int === 11) {
        return 'week11';
    }else if(int === 12) {
        return 'week12';
    }else if(int === 13) {
        return 'week13';
    }else if(int === 14) {
        return 'week14';
    }else if(int === 15) {
        return 'playoffs';
    }else if(int === 16) {
        return 'champs';
    }else if(int === 17) {
        return 'allstars';
    }
}

function findRequestedPage(int) {
    if(int === 1) {
        return week1Parsed;
    }else if(int === 2) {
        return week2Parsed;
    }else if(int === 3) {
        return week3Parsed;
    }else if(int === 4) {
        return week4Parsed;
    }else if(int === 5) {
        return week5Parsed;
    }else if(int === 6) {
        return week6Parsed;
    }else if(int === 7) {
        return week7Parsed;
    }else if(int === 8) {
        return week8Parsed;
    }else if(int === 9) {
        return week9Parsed;
    }else if(int === 10) {
        return week10Parsed;
    }else if(int === 11) {
        return week11Parsed;
    }else if(int === 12) {
        return week12Parsed;
    }else if(int === 13) {
        return week13Parsed;
    }else if(int === 14) {
        return week14Parsed;
    }
}

function prevButtonClicked() {
    let prevPageNum;
    let prevParsedNum;

    if(prevButton.hasAttribute('disabled')) {
        //*Do nothing when then button is disabled (when week1 is active)
    }else {
        if(currentPage === 'playoffs') {
            paginate('week14', week14Parsed);
            currentPage = 'week14';
            currentPageNum = 14;
        }else if(currentPage === 'champs') {
            paginate('playoffs', playoffsParsed);
            currentPage = 'playoffs';
            currentPageNum = 15;
        }else if(currentPage === 'allstars') {
            paginate('champs', champsParsed);
            currentPage = 'champs';
            currentPageNum = 16;
        }else {
            if(currentPage.length === 5) {
                prevPageNum = currentPage.substring(currentPage.length - 1);
            }else {
                prevPageNum = currentPage.substring(currentPage.length - 2);
            } 
    
            prevParsedNum = parseInt(prevPageNum);
            prevParsedNum -= 1;
            paginate('week' + prevParsedNum, findRequestedPage(prevParsedNum));
            currentPage = 'week' + prevParsedNum;
            currentPageNum = prevParsedNum;
        }
    }
}

function nextButtonClicked() {
    let nextPageNum;
    let nextParsedNum;

    if(nextButton.hasAttribute('disabled')) {
        //*Do nothing (just like the prevButton function)
    }else {
        if(currentPage === 'week14') {
            paginate('playoffs', playoffsParsed);
            currentPage = 'playoffs';
            currentPageNum = 15;
        }else if(currentPage === 'playoffs') {
            paginate('champs', champsParsed);
            currentPage = 'champs';
            currentPageNum = 16;
        }else if(currentPage === 'champs') {
            paginate('allstars', allstarsParsed);
            currentPage = 'allstars';
            currentPageNum = 17;
        }else {
            if(currentPage.length === 5) {
                nextPageNum = currentPage.substring(currentPage.length - 1);
            }else {
                nextPageNum = currentPage.substring(currentPage.length - 2);
            }
    
            nextParsedNum = parseInt(nextPageNum);
            nextParsedNum += 1;
            paginate('week' + nextParsedNum, findRequestedPage(nextParsedNum));
            currentPage = 'week' + nextParsedNum;
            currentPageNum = nextParsedNum;
        }
    }
}

function getCurrentPage() {
    return currentPage;
}


function buildGameCard(games) {
    isCardOne = true;

    let cardOne = document.getElementById('half-one');
    let cardTwo = document.getElementById('half-two');

    cardOne.replaceChildren();
    cardTwo.replaceChildren();

    games.forEach((game) => {
        let team1 = game.Teams.substring(0, game.Teams.indexOf(' vs'));
        let team2 = game.Teams.substring(game.Teams.indexOf('s') + 2);
        let card = document.createElement('div');
        let cardContent = document.createElement('div');
        let content = document.createElement('div');
        let para = document.createElement('p');

        cardContent.classList.add('card-content');
        content.classList.add('content');

        para.textContent = game.Teams;
        content.appendChild(para);
        para.setAttribute('class', 'title is-size-3 teams');
        para = document.createElement('p');
        para.textContent = '(' + team1 + ') ' + game.Scoreline + ' (' + team2 + ')'; //Format should look like (team1) 00-00 (team2)
        content.appendChild(para);
        para.setAttribute('class', 'is-size-4 scoreline');
        para = document.createElement('p');
        para.textContent = game.DT;
        content.appendChild(para);
        para.setAttribute('class', 'is-size-5 game-dt');
        cardContent.appendChild(content);
        card.appendChild(cardContent);
        card.setAttribute('class', 'card game-card mb-5'); //Adding margin via Bulma

        if(isCardOne) {
            cardOne.appendChild(card);  
            isCardOne = false;
        }else {
            cardTwo.appendChild(card);
            isCardOne = true;
        }
    });
}

//!Function only to be used if my current scorecard design sucks :(
/*function getNamesAndScores(arr) {
    let team1;
    let team2;
    let score1;
    let score2;
    arr.forEach((game) => {
        team1 = arr.Teams.substring(0, arr.Teams.indexOf("v") - 1);
        team2 = arr.Teams.substring(arr.Teams.indexOf("s") + 2);
        score1 = arr.Scoreline.substring(0, arr.Scoreline.indexOf("-"));
        score2 = arr.Scoreline.substring(arr.Scoreline.indexOf("-") + 1);
    });
    console.log(team1);
    console.log(team2);
    console.log(score1);
    console.log(score2);

    return team1 + "-" + score1 + "-" + team2 + "-" + score2;
} */

function paginate(week, arr) {
    let active = document.getElementById(week);

    paginationLinks.forEach((element) => {
        element.classList.remove('is-active-week');
    });

    active.classList.add('is-active-week');

    if(week === "week1") {
        prevButton.setAttribute("disabled", ""); //Assign "disabled" html attribute to prevent users from interacting with the button
        nextButton.removeAttribute("disabled");
    }else if(week === "allstars") {
        prevButton.removeAttribute("disabled");
        nextButton.setAttribute("disabled", "");
    }else {
        prevButton.removeAttribute("disabled");
        nextButton.removeAttribute("disabled");
    }

    if(week === 'playoffs') {
        currentPageNum = 15;
    }else if(week === 'champs') {
        currentPageNum = 16;
    }else if(week === 'allstars') {
        currentPageNum = 17;
    }else {
        currentPageNum = parseInt(week.substring(week.indexOf('k') + 1));
    }

    currentPage = week;
    buildGameCard(arr);
}

function tmOnload() { 
    week1Parsed = JSON.parse(localStorage.getItem('week1'));
    week2Parsed = JSON.parse(localStorage.getItem('week2'));
    week3Parsed = JSON.parse(localStorage.getItem('week3'));
    week4Parsed = JSON.parse(localStorage.getItem('week4'));
    week5Parsed = JSON.parse(localStorage.getItem('week5'));
    week6Parsed = JSON.parse(localStorage.getItem('week6'));
    week7Parsed = JSON.parse(localStorage.getItem('week7'));
    week8Parsed = JSON.parse(localStorage.getItem('week8'));
    week9Parsed = JSON.parse(localStorage.getItem('week9'));
    week10Parsed = JSON.parse(localStorage.getItem('week10'));
    week11Parsed = JSON.parse(localStorage.getItem('week11'));
    week12Parsed = JSON.parse(localStorage.getItem('week12'));
    week13Parsed = JSON.parse(localStorage.getItem('week13'));
    week14Parsed = JSON.parse(localStorage.getItem('week14'));
    playoffsParsed = JSON.parse(localStorage.getItem('playoffs'));
    champsParsed = JSON.parse(localStorage.getItem('champs'));
    allstarsParsed = JSON.parse(localStorage.getItem('allstars'));

    createTeamPage();
}

function adminOnload() {
    AMPMInput.textContent = 'AM';
    timezoneText.textContent = 'EDT';

    week1Parsed = JSON.parse(localStorage.getItem('week1'));
    week2Parsed = JSON.parse(localStorage.getItem('week2'));
    week3Parsed = JSON.parse(localStorage.getItem('week3'));
    week4Parsed = JSON.parse(localStorage.getItem('week4'));
    week5Parsed = JSON.parse(localStorage.getItem('week5'));
    week6Parsed = JSON.parse(localStorage.getItem('week6'));
    week7Parsed = JSON.parse(localStorage.getItem('week7'));
    week8Parsed = JSON.parse(localStorage.getItem('week8'));
    week9Parsed = JSON.parse(localStorage.getItem('week9'));
    week10Parsed = JSON.parse(localStorage.getItem('week10'));
    week11Parsed = JSON.parse(localStorage.getItem('week11'));
    week12Parsed = JSON.parse(localStorage.getItem('week12'));
    week13Parsed = JSON.parse(localStorage.getItem('week13'));
    week14Parsed = JSON.parse(localStorage.getItem('week14'));
    playoffsParsed = JSON.parse(localStorage.getItem('playoffs'));
    champsParsed = JSON.parse(localStorage.getItem('champs'));
    allstarsParsed = JSON.parse(localStorage.getItem('allstars'));

    checkIfLoggedIn();
}

function scheduleOnload() {
    buildMiniTable(eastDiv, miniEastBody2);
    buildMiniTable(centralDiv, miniCentralBody2);
    buildMiniTable(westDiv, miniWestBody2);
    buildMiniTable(southDiv, miniSouthBody2);

    week1Parsed = JSON.parse(localStorage.getItem('week1'));
    week2Parsed = JSON.parse(localStorage.getItem('week2'));
    week3Parsed = JSON.parse(localStorage.getItem('week3'));
    week4Parsed = JSON.parse(localStorage.getItem('week4'));
    week5Parsed = JSON.parse(localStorage.getItem('week5'));
    week6Parsed = JSON.parse(localStorage.getItem('week6'));
    week7Parsed = JSON.parse(localStorage.getItem('week7'));
    week8Parsed = JSON.parse(localStorage.getItem('week8'));
    week9Parsed = JSON.parse(localStorage.getItem('week9'));
    week10Parsed = JSON.parse(localStorage.getItem('week10'));
    week11Parsed = JSON.parse(localStorage.getItem('week11'));
    week12Parsed = JSON.parse(localStorage.getItem('week12'));
    week13Parsed = JSON.parse(localStorage.getItem('week13'));
    week14Parsed = JSON.parse(localStorage.getItem('week14'));
    playoffsParsed = JSON.parse(localStorage.getItem('playoffs'));
    champsParsed = JSON.parse(localStorage.getItem('champs'));
    allstarsParsed = JSON.parse(localStorage.getItem('allstars'));

    paginate('week1', week1Parsed);

    checkIfLoggedIn();
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

    checkIfLoggedIn();

    week1Parsed = JSON.parse(localStorage.getItem('week1'));
    week2Parsed = JSON.parse(localStorage.getItem('week2'));
    week3Parsed = JSON.parse(localStorage.getItem('week3'));
    week4Parsed = JSON.parse(localStorage.getItem('week4'));
    week5Parsed = JSON.parse(localStorage.getItem('week5'));
    week6Parsed = JSON.parse(localStorage.getItem('week6'));
    week7Parsed = JSON.parse(localStorage.getItem('week7'));
    week8Parsed = JSON.parse(localStorage.getItem('week8'));
    week9Parsed = JSON.parse(localStorage.getItem('week9'));
    week10Parsed = JSON.parse(localStorage.getItem('week10'));
    week11Parsed = JSON.parse(localStorage.getItem('week11'));
    week12Parsed = JSON.parse(localStorage.getItem('week12'));
    week13Parsed = JSON.parse(localStorage.getItem('week13'));
    week14Parsed = JSON.parse(localStorage.getItem('week14'));
    playoffsParsed = JSON.parse(localStorage.getItem('playoffs'));
    champsParsed = JSON.parse(localStorage.getItem('champs'));
    allstarsParsed = JSON.parse(localStorage.getItem('allstars'));
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
        let anchor = document.createElement('a');
        anchor.textContent = team.Name;
        //anchor.setAttribute('onclick', createTeamFunction(teams, team.Name));
        anchor.setAttribute('href', 'team-matches.html?id=' + team.id);
        anchor.setAttribute('class', 'has-text-dark');
        cell.appendChild(anchor);
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

function findGames(name) {
    let arr = [];

    week1Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });

    week2Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week3Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week4Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week5Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week6Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week7Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week8Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week9Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week10Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week11Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week12Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week13Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    week14Parsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    playoffsParsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    champsParsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });
    
    allstarsParsed.forEach((game) => {
        if(game.Teams.includes(name)) {
            arr.push(game);
        }
    });

    console.log(arr);
    return arr;
}

function abbreviateName(name) {
    if(name === 'New York Empire') {
        return 'NY';
    }else if(name === 'DC Breeze') {
        return 'DC';
    }else if(name == 'Salt Lake Shred') {
        return 'SLC';
    }else if(name === 'LA Aviators') {
        return 'LA';
    }else {
        return name.substring(0, 3).toUpperCase();
    }
}

function reverseAbbreviateName(str) {
    if(str === 'ATL') {
        return 'Atlanta Hustle';
    }else if (str === 'AUS') {
        return 'Austin Sol';
    }else if (str === 'BOS') {
        return 'Boston Glory';
    }else if (str === 'CAR') {
        return 'Carolina Flyers';
    }else if (str === 'CHI') {
        return 'Chicago Union';
    }else if (str === 'COL') {
        return 'Colorado Summit';
    }else if (str === 'DAL') {
        return 'Dallas Legion';
    }else if (str === 'DC') {
        return 'DC Breeze';
    }else if (str === 'DET') {
        return 'Detroit Mechanix';
    }else if (str === 'IND') {
        return 'Indianapolis AlleyCats';
    }else if (str === 'LA') {
        return 'LA Aviators';
    }else if (str === 'MAD') {
        return 'Madison Radicals';
    }else if (str === 'MIN') {
        return 'Minnesota Wind Chill';
    }else if (str === 'MON') {
        return 'Montreal Royal';
    }else if (str === 'NY') {
        return 'New York Empire';
    }else if (str === 'OAK') {
        return 'Oakland Spiders';
    }else if (str === 'OTT') {
        return 'Ottawa Outlaws';
    }else if (str === 'PHI') {
        return 'Philadelphia Phoenix';
    }else if (str === 'PIT') {
        return 'Pittsburgh Thunderbirds';
    }else if (str === 'POR') {
        return 'Portland Nitro';
    }else if (str === 'SLC') {
        return 'Salt Lake Shred';
    }else if (str === 'SAN') {
        return 'San Diego Growlers';
    }else if (str === 'SEA') {
        return 'Seattle Cascades';
    }else if (str === 'TAM') {
        return 'Tampa Bay Cannons';
    }else if (str === 'TOR') {
        return 'Toronto Rush';
    }
}

function findDiv(str) {
    if(str === 'NY' || str === 'BOS' || str === 'MON' || str === 'TOR' || str === 'DC' || str === 'DC' || str === 'OTT') {
        console.log(localStorage.getItem('eastDiv'));
        return localStorage.getItem('eastDiv');
    }else if(str === 'CHI' || str === 'MIN' || str === 'IND' || str === 'MAD' || str === 'PIT' || str === 'DET') {
        console.log(localStorage.getItem('centralDiv'));
        return localStorage.getItem('cemtralDiv');
    }else if(str === 'CAR' || str === 'AUS' || str === 'ATL' || str === 'DAL' || str === 'TAM') {
        console.log(localStorage.getItem('westDiv'));
        return localStorage.getItem('westDiv');
    }else if(str === 'COL' || str === 'SLC' || str === 'SAN' || str === 'MAD' || str === 'OAK' || str === 'LA' || str === 'SEA' || str === 'POR') {
        console.log(localStorage.getItem('southDiv'));
        return localStorage.getItem('southDiv');
    }
}