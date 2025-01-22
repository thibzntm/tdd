import { Plateau } from "../Models/Plateau";
import { Rover } from "../Models/Rover";
import { RoverManager } from "../Models/RoverManager";

describe("RoverManager", () => {
  let plateau: Plateau;
  let manager: RoverManager;

  beforeEach(() => {
    plateau = new Plateau(5, 5);
    manager = new RoverManager(plateau);
  });

  test("should move rovers correctly based on commands", () => {//Permet de tester si les rovers se déplacent correctement en fonction des commandes
    const rover1 = new Rover(1, 2, "N");
    manager.addRover(rover1);

    const rover2 = new Rover(3, 3, "E");
    manager.addRover(rover2);

    manager.executeCommands(0, "LMLMLMLMM");
    manager.executeCommands(1, "MMRMMRMRRM");

    const roversStatus = manager["rovers"].map((rover) => rover.getPosition());
    expect(roversStatus).toEqual(["(1, 3, N)", "(5, 1, E)"]);
  });

  test("should not allow a rover to move out of bounds", () => { //Permet de tester si un rover ne peux pas sortir des limites du plateau
    const rover = new Rover(0, 0, "S");
    manager.addRover(rover);
  
    manager.executeCommands(0, "MMMMM"); 
  
    expect(rover.getPosition()).toBe("(0, 0, S)");
  });

  test("should not allow two rovers to occupy the same position", () => { //Permet de test si un rover2 ne peux pas être ajouté à la même position qu'un rover1
    const rover1 = new Rover(1, 2, "N");
    const rover2 = new Rover(1, 2, "E"); // Même position que rover1
  
    manager.addRover(rover1);
    manager.addRover(rover2);
  
    expect(manager["rovers"].length).toBe(1);
  });

  test("should turn left correctly from all directions", () => { //Permet de tester si la méthode turnLeft fonctionne correctement
    const rover = new Rover(0, 0, "N");
  
    rover.turnLeft();
    expect(rover.getPosition()).toBe("(0, 0, W)");
  
    rover.turnLeft();
    expect(rover.getPosition()).toBe("(0, 0, S)");
  
    rover.turnLeft();
    expect(rover.getPosition()).toBe("(0, 0, E)");
  
    rover.turnLeft();
    expect(rover.getPosition()).toBe("(0, 0, N)");
  });
  
  test("should turn right correctly from all directions", () => { //Permet de tester si la méthode turnRight fonctionne correctement
    const rover = new Rover(0, 0, "N");
  
    rover.turnRight();
    expect(rover.getPosition()).toBe("(0, 0, E)");
  
    rover.turnRight();
    expect(rover.getPosition()).toBe("(0, 0, S)");
  
    rover.turnRight();
    expect(rover.getPosition()).toBe("(0, 0, W)");
  
    rover.turnRight();
    expect(rover.getPosition()).toBe("(0, 0, N)");
  });

  test("should handle invalid rover index gracefully", () => {//Permet de tester si l'index du rover est invalide
    const plateau = new Plateau(5, 5);
    const manager = new RoverManager(plateau);
  
    const success = manager.executeCommands(0, "M");
    expect(success).toBe(false);
  });
  
  test("should count invalid commands", () => {//Permet de tester si les commandes invalides sont comptées
    const plateau = new Plateau(5, 5);
    const rover = new Rover(2, 2, "N");
  
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
  
    rover.executeCommands("MXYZM", plateau);
  
    expect(consoleSpy).toHaveBeenCalledWith("Commande inconnue : X");
    expect(consoleSpy).toHaveBeenCalledWith("Commande inconnue : Y");
    expect(consoleSpy).toHaveBeenCalledWith("Commande inconnue : Z");
    consoleSpy.mockRestore();
  });
  


  
  
  
  
  
});
