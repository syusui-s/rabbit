import { UAParser } from 'ua-parser-js';
import '@/types/userAgentData.d';

const isMobile = (): boolean =>
  window.navigator?.userAgentData?.mobile ||
  UAParser(window.navigator.userAgent).device.type === 'mobile';

export default isMobile;
