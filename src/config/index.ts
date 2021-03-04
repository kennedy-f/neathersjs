import dev from './default.json';

import ConfigurationInterface from '../interface/app/config';
const configuration = (): ConfigurationInterface => {
  return dev;
};

export default configuration; 