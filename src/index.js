// import { readFile } from 'fs/promises';
// const data = JSON.parse(await readFile(new URL('./IndianStatesUTCapitals.json', import.meta.url), 'UTF-8'))

// const allStates = data.States;
// const allUT = data.UT;

// export const getAllStates = () => {
//   const states = []
//   for (const state in allStates) {
//     if (Object.hasOwnProperty.call(allStates, state)) {
//       states.push(state);
//     }
//   }
//   return states;
// }

const data = require('./IndianStatesUTCapitals.json');
const allStates = data.States;
const allUT = data.UT;

const getAllStates = () => {
  const states = [];
  for (let state in allStates) {
    if (Object.hasOwnProperty.call(allStates, state)) {
      states.push(state);
    }
  }
  return states;
};

const getAllUT = () => {
  const uts = [];
  for (let ut in allUT) {
    if (Object.hasOwnProperty.call(allUT, ut)) {
      uts.push(ut);
    }
  }
  return uts;
};

module.exports = { getAllStates, getAllUT };
