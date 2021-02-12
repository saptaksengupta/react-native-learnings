import { cancelled, put, take } from 'redux-saga/effects'

/**
 * Global Generator function
 * for Syncing resources
 * 
 * @param channel 
 * @param options 
 */
export function* syncChannel(channel, options) {
  const { successActionCreator, failureActionCreator, transform } = options

  try {
    while (true) {
      const data = yield take(channel);
      console.log(data.docs[0].data());
    //   const transformedData = transform ? transform(data) : data
    //   yield put(successActionCreator(transformedData))
    }
  } catch (err) {
    /* eslint-disable no-console */
    // if (failureActionCreator) yield put(failureActionCreator(err))
    // else
    //   console.error(
    //     'The following error has been ignored because no `failureActionCreator` has been set:',
    //     err,
    //   )
  } finally {
    if (yield cancelled()) channel.close()
  }
}