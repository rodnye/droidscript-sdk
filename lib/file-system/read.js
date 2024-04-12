 
import { runTask } from '../task.js'

/**
 * Read the content of a file.
 * @param {string} file - The path of the file to read.
 * @param {string} encoding - The encoding of the file.
 * @return {string} The content of the file.
 */
export const readFile = (file, encoding) => {
  return runTask('ReadFile', file, encoding);
}

/**
 * Read the data of a file.
 * @param {string} file - The path of the file to read.
 * @param {string} mode - The mode to read the file.
 * @return {Object} The data of the file.
 */
export const readFileData = (file, mode) => {
  let data = runTask('ReadFileData', file, mode);
  return JSON.parse(data);
}

/**
 * List the content of a folder.
 * @param {string} folder - The path of the folder to list.
 * @param {string} filter - The filter to apply to the list.
 * @param {number} limit - The maximum number of items to return.
 * @param {Object} opt - Additional options.
 * @return {Object} The list of items in the folder.
 */
export const listFolder = (folder, filter, limit, opt) => {
  let list = runTask('ListFolder', folder, filter, limit, opt);
  return JSON.parse(list);
}