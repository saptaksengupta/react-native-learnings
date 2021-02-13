import { cancelled, put, take } from 'redux-saga/effects'

/**
 * Global Generator function
 * for Syncing resources
 * 
 * @param channel 
 * @param options 
 */
export function* syncChannel(channel, options) {
  const { successActionCreator, failureActionCreator, transformer } = options

  try {
    while (true) {
      const data = yield take(channel);
      const transformedData = transformer ? transformer(data) : data;
      yield put(successActionCreator(transformedData))
    }
  } catch (err) {
    if (failureActionCreator) yield put(failureActionCreator(err));
    else 
        console.log(err);
  } finally {
    if (yield cancelled()) channel.close()
  }
}