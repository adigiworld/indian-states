
const data = require('./IndianStatesUTCapitals.json');
const allStates = data.States;
const allUT = data.UT;

const getAllStates = () => {
  const states = [];
  for (let state in allStates) {
    states.push(state);
  }
  return states;
};

const getAllUT = () => {
  const uts = [];
  for (let ut in allUT) {
    uts.push(ut);
  }
  return uts;
};

module.exports = { getAllStates, getAllUT };
