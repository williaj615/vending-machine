import machineData from '../../helpers/data/machineData';
import './machine.scss';
import smash from '../../helpers/data/smash';

const buildTheMachine = () => {
    smash.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));

    // 1. getMachines - returns first machine (hard coding) --DONE
    // 2. use MachineId to get all positions for that machine --DONE
    // 3. use MachineId to get all snack positions --DONE
    // 4. use uid of snackpositions/positions to get available snacks for that machine --DONE
    // 5. SMASH em - return an array of positions (in order A1, A2, A3, B1...)
    // so positions should have position.snack if a snack exists at that position.
}

export default { buildTheMachine };