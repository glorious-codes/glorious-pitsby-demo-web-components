import windowService from './window.js';

const NO_SUPPORT_MSG = 'This browser may have no support for all the features required to run this website. Please, use Chrome or Firefox.';

export const init = () => {
  if (!isBrowserAgent('chrome') && !isBrowserAgent('firefox')) window.alert(NO_SUPPORT_MSG);
};

function isBrowserAgent(agentName){
  return windowService.getUserAgent().toLowerCase().includes(agentName);
}
