import { Plateau } from "./Models/Plateau";
import { Rover } from "./Models/Rover";
import { RoverManager } from "./Models/RoverManager";

// Initialiser le plateau
const plateau = new Plateau(5, 5);

// Initialiser le gestionnaire de rovers
const manager = new RoverManager(plateau);

// Ajouter des rovers
const rover1 = new Rover(1, 2, "N");
manager.addRover(rover1);

const rover2 = new Rover(3, 3, "E");
manager.addRover(rover2);

// Exécuter des commandes
manager.executeCommands(0, "LMLMLMLMM"); // Rover 1
manager.executeCommands(1, "MMRMMRMRRM"); // Rover 2

// Afficher les positions finales
manager.showRoversStatus();
