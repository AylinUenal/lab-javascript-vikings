
// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
    return this.strength;
    }
    
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
    }

}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
}


    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        let name = this.name;
        if (this.health > 0) {
            return `${name} has received ${damage} points of damage`;
            
        } return `${name} has died in act of combat`;
        
    }

    battleCry() {
        return 'Odin Owns You All!';
}

}


// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } return `A Saxon has died in combat`;
     }
 }


// War
class War {

constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

    addViking(viking) {
        this.viking = viking;
        this.vikingArmy.push(viking);
    }
    
    addSaxon(saxon) {
        this.saxon = saxon;
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack() {

        // not finished yet

        // random soldier from army 
        const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const saxon = this.saxonArmy[saxonIndex];
        const viking = this.vikingArmy[vikingIndex];

        // remove dead saxon
        if (saxon.health === 0) {
        this.saxonArmy.splice(saxon, 1);
        }
        

    }
    
    saxonAttack() {
    
    }
    
    showStatus() {
    
        // does not work yet

        if (this.vikingArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.saxonArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...';
        } else if (this.saxonArmy.length === 0 && this.vikingArmy.length === 0) {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }

    
}
