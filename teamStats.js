const team = {
  _players: [
    { firstName: "John", lastName: "Lucas", age: 45 },
    { firstName: "Luke", lastName: "Jobs", age: 50 },
    { firstName: "Mark", lastName: "Musk", age: 55 },
  ],
  _games: [
    { opponent: "Gunners", teamPoints: 13, opponentPoints: 16 },
    { opponent: "lakers", teamPoints: 23, opponentPoints: 14 },
    { opponent: "Moon", teamPoints: 20, opponentPoints: 12 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);

team.addGame("Titans", 100, 98);
console.log(team.games);
