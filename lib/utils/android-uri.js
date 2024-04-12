
import { getInternalFolder } from '../file-system/generic-folders.js'

/**
 * Converts an Android URI to an absolute path.
 * @param {string} uri - The Android URI to convert.
 * @return {string} The absolute path.
 */
export const parseAndroidUri2Path = (uri) => {
  // DocumentProvider
  uri = uri.replace('content://', '');

  // ExternalStorageProvider
  if (uri.indexOf('com.android.externalstorage.documents') === 0) {
    const split = uri.split(':');
    const type = split[0];
    return getInternalFolder() + '/' + split[1];
  }
  // DownloadsProvider
  else if (uri.indexOf('com.android.providers.downloads.documents') === 0) {
    const split = uri.split(':');
    return split[1];
  }
  // MediaProvider
  // TODO !
  else if (uri.indexOf('WTF') === 0) {
    const split = uri.split(':');
    const type = split[0];

    if (type.indexOf('image') !== -1) {
      contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
    } else if (type.indexOf('video') !== -1) {
      contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
    } else if (type.indexOf('audio') !== -1) {
      contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
    }
  }

  // Illegal Android URI
  return null;
}