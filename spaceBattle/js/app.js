
const playerShip = {
    name: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: .7
}

console.log(playerShip)

class alienShip {
    constructor(alienName) {
        this.hull = Math.floor(Math.random() * (6 - 3) + 3);
        this.firepower = Math.floor(Math.random() * (4 - 2) + 2);
        this.accuracy = Math.floor(Math.random() * (8 - 6) + 6) / 10;
        this.name = alienName
    }
}

const game = {
        aliensArr: [],
        start() {
            const alien1 = new alienShip('Alien1')
            game.aliensArr.push(alien1);
            const alien2 = new alienShip('Alien2')
            game.aliensArr.push(alien2)
            const alien3 = new alienShip('Alien3')
            game.aliensArr.push(alien3)
            const alien4 = new alienShip('Alien4')
            game.aliensArr.push(alien4)
            const alien5 = new alienShip('Alien5')
            game.aliensArr.push(alien5)
            const alien6 = new alienShip('Alien6')
            game.aliensArr.push(alien6)
        },
        //battle function will choose first alien array to battle player object
        attack() {
          let isDestroyed = false;
            while (playerShip.hull > 0 && game.aliensArr[0].hull > 0) {
                if (Math.random() < playerShip.accuracy) {
                    console.log(playerShip.name + ' attacks alien ship with 5 damage')
                    game.aliensArr[0].hull -= playerShip.firepower;
                } else if (game.aliensArr[0].hull > 0) {
                    playerShip.hull -= game.aliensArr[0].firepower
                    console.log('remaining alien ship health is ', game.aliensArr[0].hull)
                    console.log(game.aliensArr[0].name, ' attacks the player ship')
                    console.log('remaining playerShip hull health', playerShip.hull)
                } else if(aliensArr[0].hull = 0)
                	console.log("alien ship destroyed");
                  isDestroyed = true;
            }
        }
        // if (isDestroyed) {
        //   doContinue = prompt('Do you want to keep playing(Yes/No)?','Yes')
        //
        //   if (doContinue = 'Yes')
        //      prompt
        // }

}
  game.start();
  console.log(game.aliensArr)
  game.attack();
