class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd() {
    //read value of number of cars at end line from the database
    var carsRef = database.ref('carsAtEnd');
    carsRef.on("value",(data)=>{
      this.rank = data.val();
    })
    //set rank of this car = number of cars at end line

  }

  updateCarsAtEnd(rank) {
    //update the number of cars at end line in the database
    database.ref('/').update(
      { carsAtEnd: rank }
    )
    /*
    var carsAtEndRef = database.ref('/');
    carsAtEndRef.update(
      { carsAtEnd: rank }
    )
  }
}
