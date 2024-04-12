
import { runTask } from '../task.js';

/**
 * Write text to a file and create it if not exists
 * @param {string} file - File path
 * @param {string} text - Text to write
 * @param {'a' | 'w' | 'a+' | 'w+' } mode - Append or write mode
 * @param {string} encoding - Encoding format
 */
export const writeFile = (file, text, mode, encoding) => {
  runTask('WriteFile', file, text, mode, encoding);
};

/**
 * Create a new folder
 * @param {string} folder - Folder path
 */
export const makeFolder = (folder) => {
  runTask('MakeFolder', folder);
};

/**
 * Rename a file
 * @param {string} src - Source file path
 * @param {string} dest - Destination file path
 */
export const renameFile = (src, dest) => {
  runTask('RenameFile', src, dest);
};

/**
 * Rename a folder
 * @param {string} src - Source folder path
 * @param {string} dest - Destination folder path
 */
export const renameFolder = (src, dest) => {
  runTask('RenameFolder', src, dest);
};