import {NodePlopAPI} from 'plop';
import componentGenerator from './plopGenerators/component';
import featureGenerator from './plopGenerators/feature';

export default function generator(plop: NodePlopAPI) {
	console.log("plopfile.ts loaded");
	plop.setWelcomeMessage('Welcome to the Plopfile! Please choose a generator');
  plop.setGenerator('example', {
		description: 'this is a skeleton plopfile',
		prompts: [],
		actions: []
	});
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('feature', featureGenerator);
};

