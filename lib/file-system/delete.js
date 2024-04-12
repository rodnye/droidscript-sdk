
import { runTask } from '../utils/utils.js';

/**
 * Deletes a file.
 * @param {string} file - The file to delete.
 */
export const deleteFile = (file) => {
  runTask('DeleteFile', file);
};

/**
 * Deletes a folder.
 * @param {string} folder - The folder to delete.
 */
export const deleteFolder = (folder) => {
  runTask('DeleteFolder', folder);
};