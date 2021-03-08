import build from '../adapters/build';
import RoutesConfig from '../config/routes';

const app = build();

RoutesConfig(app);

export default app;
