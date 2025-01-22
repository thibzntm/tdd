import { Rover } from "./Rover";
import { Plateau } from "./Plateau";

export class RoverManager {
  private rovers: Rover[] = [];
  private plateau: Plateau;

  constructor(plateau: Plateau) {
    this.plateau = plateau;
  }

  // Ajouter un rover
  public addRover(rover: Rover): void {
    if (this.isPositionOccupied(rover)) {
      console.warn(`Position déjà occupée : ${rover.getPosition()}`);
      return; // Empêche l'ajout si la position est occupée
    }
    this.rovers.push(rover);
  }

  // Vérifier si une position est occupée par un autre rover
  private isPositionOccupied(rover: Rover): boolean {
    return this.rovers.some((r) => r["x"] === rover["x"] && r["y"] === rover["y"]);
  }

  // Exécuter les commandes pour un rover
  public executeCommands(roverIndex: number, commands: string): void {
    if (this.rovers[roverIndex]) {
      const rover = this.rovers[roverIndex];
      rover.executeCommands(commands, this.plateau);
    } else {
      console.error(`Rover inexistant à l'indice ${roverIndex}`);
    }
  }

  // Afficher l'état de tous les rovers
  public showRoversStatus(): void {
    this.rovers.forEach((rover, index) => {
      console.log(`Rover ${index}: ${rover.getPosition()}`);
    });
  }
}
