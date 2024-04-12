
import { runTask } from '../utils/utils.js';

/**
 * Copies a file from one location to another.
 * @param {string} src - The source file path.
 * @param {string} dest - The destination file path.
 */
export const copyFile = (src, dest) => {
  runTask('CopyFile', src, dest);
};

/**
 * Copies a folder from one location to another, with optional overwrite and filter parameters.
 * @param {string} src - The source folder path.
 * @param {string} dest - The destination folder path.
 * @param {boolean} overwrite - Whether to overwrite existing files (default: true).
 * @param {string} filter - A function to filter which files to copy (default: null).
 */
export const copyFolder = (src, dest, overwrite = true, filter = null) => {
  runTask('CopyFolder', src, dest, overwrite, filter);
};