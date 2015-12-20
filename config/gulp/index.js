import registerBuild from './tasks/build';
import registerClean from './tasks/clean';
import registerLint from './tasks/lint';
import registerDefault from './tasks/default';

registerClean();
registerLint();
registerBuild();

registerDefault();
