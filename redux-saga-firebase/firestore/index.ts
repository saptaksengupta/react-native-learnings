import firestore from '@react-native-firebase/firestore';
import { buffers, eventChannel } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';
import { syncChannel } from '../utils';

const RESOURCES = {
    COLLECTION: 'collection',
    DOCUMENT: 'document'
}

/**
 * get Collection reference
 * @param pathOrRef = path or reference of a collection 
 */
const getCollectionRef = (pathOrRef) => {
    return typeof pathOrRef === 'string' ? firestore().collection(pathOrRef) : pathOrRef;
}


/**
 * get Document reference
 * @param pathOrRef = path or reference of a document 
 */
const getDocumentRef = (colelctRef, docRef) => {
    return typeof docRef === 'string' ? firestore().collection(colelctRef).doc(docRef) : docRef;
}

const getSubscriber = (type, collectionRef, documentRef = null) => {
    let ref = null;
    switch (type) {
        case RESOURCES.COLLECTION:
            ref = getCollectionRef(collectionRef);
            break;
        case RESOURCES.DOCUMENT:
            ref = getDocumentRef(collectionRef, documentRef);
            break;
        default:
            ref = null;
    }
    return eventChannel(emit => ref.onSnapshot(emit), buffers.none());
}

export function* syncCollection(collectionRef, snapshotHandler, onSuccess, onError = null) {
    const channel = getSubscriber(RESOURCES.COLLECTION, collectionRef);
    yield fork(
        syncChannel,
        channel,
        {
            transformer: snapshotHandler,
            successActionCreator: onSuccess,
            failureActionCreator: onError
        }
    );
}

export function* syncDocument(collectionRef, documentRef) {
    const channel = getSubscriber(RESOURCES.DOCUMENT, collectionRef);
    yield fork(syncChannel, channel, {});
}