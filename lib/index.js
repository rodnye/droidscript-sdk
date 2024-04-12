
import { state } from './state.js' 

/**
 * Start the droidscript sdk
 */
export const start = () => {
  if (state.isStarted) throw new Error('DroidSDK already started');
  
  // communicate with droidscript interface
  window.prompt('#', '_Init');
  window.prompt('#', '_Start');
  
  state.isStarted = true;
  
  // globalize the stored callbacks
  window._droidCb = state.callbacks;
}

// export all droidscript ecosystem
export * from './file-system/__index.js'