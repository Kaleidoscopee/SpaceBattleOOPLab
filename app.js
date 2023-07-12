// make the games ships
    class USS {
        constructor(shipHealth, strengthOfBlast, accuracyOfFire) {
            this.shipHealth = shipHealth;
            this.strengthOfBlast = strengthOfBlast;
            this.accuracyOfFire = accuracyOfFire;
        }
    } 

    class alien {
        constructor(shipHealth, strengthOfBlast, accuracyOfFire) {
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy = accuracy;
        }
    } 


//game turn
    if playr 1 attack 
        measuer math of attack ( health = hull - attack ) 
            if hull<0 die else alien turn

    alien attack second
        measuer math of attack ( health = hull - attack ) 
            if hull<0 die else player turn

//endgame result
    if player.hull <= 0 
        "alien wins"

    if alien.hull <= 0 
        "player wins"

        play again
    