const readlineSync = require("readline-sync");

console.log("Welcome to the mystical land of Eldoria, a realm filled with wonders and dangers.");

const playGame = readlineSync.keyInYNStrict("Would you dare play this game?");

if (playGame) {
  console.log("You find yourself at the entrance of the enchanted forest, surrounded by ancient mysteries.");

  const direction = readlineSync.keyInSelect(["Explore the ancient ruins", "Head towards the shimmering lake"], "As you stand at the crossroads, which path will you choose?");

  if (direction === 0) {
    console.log("You follow the overgrown path leading to the ancient ruins. The air is thick with magic, and the ruins seem to whisper secrets of the past.");

    const touchStatue = readlineSync.keyInYNStrict("Upon reaching the ruins, you encounter a magical statue with outstretched hands. Do you touch the statue?");

    if (touchStatue) {
      console.log("As you touch the statue, you feel a surge of magical energy. The statue comes to life and grants you the ability to understand ancient languages.");

      const enterChamber = readlineSync.keyInYNStrict("You decide to use your newfound ability to decipher the runes on the ruins' walls. They reveal the location of a hidden chamber filled with valuable artifacts. Do you want to enter the chamber?");
      
      if (enterChamber) {
        console.log("You enter the chamber and discover ancient treasures. Congratulations, you've successfully navigated the ruins and gained valuable artifacts!");

        console.log("As you exit the ruins with your newfound wealth, you encounter a group of treasure hunters. They challenge you to a friendly competition. Do you accept (y/n)?");

        const treasureCompetition = readlineSync.keyInYNStrict("Enter your choice: ");

        if (treasureCompetition) {
          console.log("You accept the challenge and impress the treasure hunters with your knowledge and skills. They offer to join forces, and together you become renowned adventurers!");

        } else {
          console.log("You decline the challenge and continue your journey alone. The treasure hunters wish you luck, and you become a legendary solo adventurer.");

        }

      } else {
        console.log("You choose not to enter the chamber and continue your journey through the mystical ruins. As you explore further, you uncover ancient mysteries and become a respected scholar of Eldoria.");

      }
    } else {
      console.log("You decide to explore further, avoiding the magical statue. As you wander deeper into the ruins, you stumble upon a hidden trap. Game Over.");
    }

  } else if (direction === 1) {
    console.log("You head towards the shimmering lake, its waters reflecting the colors of the rainbow. A mysterious boat appears by the shore.");

    const takeBoat = readlineSync.keyInYNStrict("Do you take the boat across the lake?");
    
    if (takeBoat) {
      console.log("You board the boat, and it magically glides across the lake. Halfway through, a friendly water spirit appears and offers you a magical gem. Do you accept the gem?");

      if (readlineSync.keyInYNStrict()) {
        console.log("The water spirit smiles and gives you a gem imbued with protective magic. You continue your journey with a newfound ally.");

        const exploreForest = readlineSync.keyInYNStrict("As you approach the other side of the lake, you encounter a mystical forest. Do you want to enter the forest?");
        
        if (exploreForest) {
          console.log("You enter the mystical forest and find a hidden sanctuary of magical creatures. They invite you to join their celebration. Congratulations, you've won!");

          console.log("As you celebrate with the magical creatures, a portal to another realm opens. Do you enter the portal to explore new dimensions (y/n)?");

          const enterPortal = readlineSync.keyInYNStrict("Enter your choice: ");

          if (enterPortal) {
            console.log("You enter the portal and embark on a journey through multiple dimensions. Your adventures become legendary across the realms.");

          } else {
            console.log("You choose not to enter the portal and continue your festivities with the magical creatures. You become a cherished guest in the mystical forest.");

          }

        } else {
          console.log("You choose not to enter the forest and follow the path along the lake's edge. The water spirit bids you farewell, and you continue your journey alone.");

        }

      } else {
        console.log("You decline the gem, and the water spirit disappears. The boat reaches the other side of the lake, but without the protection of the gem, you encounter a magical barrier. Game Over.");

      }

    } else {
      console.log("You decide to explore the lake's edge. As you wander along the shore, you come across a hidden cave. Do you enter the cave?");
      
      if (readlineSync.keyInYNStrict()) {
        console.log("You enter the cave and find a magical pool with healing properties. Bathing in the pool rejuvenates your strength, and you continue your journey feeling invigorated.");

        console.log("The cave leads to a magnificent waterfall. You encounter a wise old wizard who offers to teach you a powerful spell. Do you accept the wizard's offer (y/n)?");

        const meetWizard = readlineSync.keyInYNStrict("Enter your choice: ");

        if (meetWizard) {
          console.log("You accept the wizard's offer and learn a powerful spell. With your newfound magical abilities, you continue your adventure.");

          console.log("As you use your magical powers, you become a beacon of hope in Eldoria. Your name is remembered throughout the land as the great wizard-adventurer.");

        } else {
          console.log("You decline the wizard's offer and thank him for the healing pool. You leave the cave with newfound strength and continue your journey.");

          console.log("As you explore further, you encounter a tribe of friendly creatures who recognize your gratitude. They offer you a special amulet that brings good fortune. Congratulations, you've won!");

        }

      } else {
        console.log("You choose not to enter the cave and continue exploring along the lake's edge. The sun sets, and you find a cozy spot to rest for the night.");

      }
    }

  } else {
    console.log("You decide not to play. Wise choice. Thanks for considering the adventure!");
  }
} else {
  console.log("Wise choice. Thanks for playing!");
}