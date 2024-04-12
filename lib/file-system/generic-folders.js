
import { runTask } from '../utils/utils.js'

/**
 * Get external micro sdcard path of the device.
 * @return {'' | string}
 */
export const getExternalFolder = () => {
  return runTask('GetExternalFolder');
}

/**
 * Get devices internal “/sdcard/” path
 * @return {string}
 */
export const getInternalFolder = () => {
  return runTask('GetInternalFolder');
}

/**
 * Full path of a generic android folder 
 * @param {'DCIM' | 'Pictures' | 'Movies' | 'Downloads' | 'Documents' | 'Music'} folder
 * @return {string}
 */
export const getSpecialFolder = (folder) => {
  return runTask('GetInternalFolder');
} 