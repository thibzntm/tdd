import { Rover } from "./Rover";

export class Plateau {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Vérifie si une position est valide
  public isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
  }

  // Méthode pour afficher les dimensions
  public getDimensions(): string {
    return `Plateau dimensions: ${this.width} x ${this.height}`;
  }
}
