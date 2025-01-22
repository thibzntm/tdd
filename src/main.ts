import { Rover } from "./Models/Rover";

const plateau = { width: 5, height: 5 }; // Dimensions du plateau

// Création d'un rover
const rover = new Rover(1, 2, "N");
console.log("Position initiale :", rover.getPosition());


const commands = "LMLMLMLMM"; // Commandes à exécuter
//rover.executeCommands(commands, plateau);
console.log("Position après commandes :", rover.getPosition());
