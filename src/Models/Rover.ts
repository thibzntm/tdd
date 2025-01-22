type Direction = "N" | "E" | "S" | "W";
import { Plateau } from "./Plateau";

export class Rover {
  private x: number;
  private y: number;
  private direction: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  // Méthode pour récupérer la position actuelle
  public getPosition(): string {
    return `(${this.x}, ${this.y}, ${this.direction})`;
  }
  
  

  // Méthode pour tourner à gauche
  public turnLeft(): void {
    const directions: Direction[] = ["N", "W", "S", "E"];
    this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
  }

  // Méthode pour tourner à droite
  public turnRight(): void {
    const directions: Direction[] = ["N", "E", "S", "W"];
    this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
  }

  // Méthode pour avancer
  public moveForward(plateau: Plateau): void {
    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case "N":
        newY++;
        break;
      case "E":
        newX++;
        break;
      case "S":
        newY--;
        break;
      case "W":
        newX--;
        break;
    }

    if (plateau.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    } else {
      console.warn(`Mouvement invalide pour le rover à (${this.x}, ${this.y})`);
    }
  }

  // Méthode pour exécuter une série de commandes
  public executeCommands(commands: string, plateau: Plateau): void {
    for (const command of commands) {
      switch (command) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "M":
          this.moveForward(plateau);
          break;
        default:
          throw new Error(`Commande inconnue : ${command}`); // Plus strict
      }
    }
  }
}
