import firestore from '@react-native-firebase/firestore';
import { buffers, eventChannel } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';
import { syncChannel } from '../utils';

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


function channel(colelctionRef, documentRef = null, type = 'collection', buffer = buffers.none(), options) {
    const refrence = type === 'collection' ?
        getCollectionRef(colelctionRef) :
        getDocumentRef(colelctionRef, documentRef);
    
    
    const channel = eventChannel(emit => {
        const unsubscribe = refrence.onSnapshot((data) => {
            console.log(data);
        }, emit); 

        return unsubscribe;
    }, buffer);
    return channel;
}

export function *syncCollection(collectionRef) {
    const refrence = getCollectionRef(collectionRef);
    
    
    const channel = eventChannel(emit => {
        const unsubscribe = refrence.onSnapshot(emit); 

        return unsubscribe;
    }, buffers.none());

    // const channel = yield call(channel, collectRef, null, 'collection', undefined, {});
    yield fork(syncChannel, channel, {});
}