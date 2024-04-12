
import { runTask } from '../task.js';
import { getFnName, parseAndroidUri2Path } from "../utils/utils.js"

/**
 * Selects a file using the OS.
 * @param {string} msg - The message to display.
 * @param {string} type - The type of file to select.
 * @param {Function} callback - The callback function.
 * @param {string} fldr - The folder to start in.
 * @param {Object} opt - Additional options.
 */
export const chooseFile = (msg, type, callback, fldr, opt) => {
  runTask('ChooseFile', msg, type, getFnName(callback), fldr, opt);
};

/**
 * Selects a photo.
 * @param {Object} opt - Additional options.
 * @param {Function} callback - The callback function.
 */
export const choosePhoto = (opt, callback) => {
  runTask('ChoosePhoto', opt, getFnName(callback));
};

/**
 * Selects a folder.
 * @param {Function} callback - The callback function.
 */
export const chooseFolder = (callback) => {
  const cb = (uri) => {
    uri = decodeURIComponent(uri);
    const path = parseAndroidUri2Path(uri);
    callback(path, uri);

    callback = null;
    cb = null;
  };
  runTask('GetPermission', 'extsdcard', getFnName(cb));
}
