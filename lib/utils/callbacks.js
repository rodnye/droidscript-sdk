
import { state } from './state.js'

/**
 * Create a unique encrypt by an string
 */
const createHash = (str) => {
  let hash = 5381;
  let i = str.length;
  while (i) {
    i--;
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash>>>0;
};

/**
 * Globalize a function so that it is accessible from DroidScript
 * (DroidScript call the name of function for the callbacks)
 * @param {function} fn
 */
export const getFnName = (fn) => {

  if (fn) {
    // return global function
    let name = fn.name;
    if (window[name]) return 'window.' + name;

    // unnamed o private function
    name = '' + createHash(fn.toString());
    
    // store in a variable
    state.functions[name] = fn;
    return 'window._droidCb["' + name + '"]';
  }

  return null;
}