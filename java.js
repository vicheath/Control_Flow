const PI = 3.1415;
const maxCapacity = PI * 5 * 5; // Maximum capacity of the garden

// Part 1: Growing Pains
function predictPlantGrowth(weeks) {
  let plantCount = 20;
  
  for (let i = 1; i <= weeks; i++) {
    plantCount *= 2;
    
    if (plantCount > 0.8 * maxCapacity && plantCount <= 0.8 * maxCapacity) {
      console.log(`Week ${i}: Prune the plants.`);
    } else if (plantCount > 0.5 * maxCapacity && plantCount <= 0.8 * maxCapacity) {
      console.log(`Week ${i}: Monitor the plants.`);
    } else {
      console.log(`Week ${i}: Plant more plants.`);
    }
  }
  
  console.log(`Predicted plant count after ${weeks} weeks: ${plantCount}`);
}

// Part 2: Thinking Bigger
function calculateAdditionalSpace(weeks, initialPlants) {
  let plantCount = initialPlants;
  
  for (let i = 1; i <= weeks; i++) {
    plantCount *= 2;
  }
  
  const additionalSpace = plantCount * 0.8 - maxCapacity;
  const expandedRadius = Math.sqrt((maxCapacity + additionalSpace) / PI);

  console.log(`Additional space required after ${weeks} weeks: ${additionalSpace} square meters`);
  console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);
}

// Part 3: Errors in Judgement
function handleJudgementErrors() {
  const initialPlants = 100;
  let plantCount = initialPlants;

  for (let i = 1; i <= 10; i++) {
    plantCount *= 2;
  }

  const requiredSpace = plantCount * 0.8;

  try {
    if (requiredSpace > maxCapacity) {
      throw new Error('Error: Insufficient space to accommodate the plants. Prune or plant fewer plants.');
    }

    console.log(`Space is sufficient. Plant count after 10 weeks: ${plantCount}`);
  } catch (error) {
    console.error(error.message);
  }
}

// Test Cases
predictPlantGrowth(1);
predictPlantGrowth(2);
predictPlantGrowth(3);

calculateAdditionalSpace(10, 100);

handleJudgementErrors();