import machineData from '../../helpers/data/machineData';
import './machine.scss';
import smash from '../../helpers/data/smash';

const buildTheMachine = () => {
    smash.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));

    // 1. getMachines - returns first machine (hard coding)
    // 2. use MachineId to get all positions for that machine
    // 3. use MachineId to get all snack positions
    // 4. use uid of snackpositions/positions to get available snacks for that machine
    // 5. SMASH em - return an array of positions (in order A1, A2, A3, B1...)
}

export default { buildTheMachine };