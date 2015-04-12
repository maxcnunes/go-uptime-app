import Target from './target';
import Track from './track';


const MONITOR_SERVICE_URL = 'http://monitor-service.local.dockito.org';

export default {
  Target: new Target(`${MONITOR_SERVICE_URL}/targets`),
  Track: new Track(`${MONITOR_SERVICE_URL}/tracks`)
};
