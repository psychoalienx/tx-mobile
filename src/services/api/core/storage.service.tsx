
import * as SecureStore from 'expo-secure-store';

const StorageWeb = {
  set: (params: any) => SecureStore.setItemAsync(params.key, params.value),
  get: (params: any) => SecureStore.getItemAsync(params.key),
  remove: (params: any) => SecureStore.deleteItemAsync(params.key),
  clear: () => new Promise((resolve, reject) => resolve({})),
};

export const StorageService = {

  set: async (key: any, value: any) => {
    const Storage = StorageWeb;
    try {
      await Storage.set({ key, value: JSON.stringify(value), });
    } catch (e) {
      console.error(e);
    }
  },

  get: (key: any) => {
    const Storage = StorageWeb;
    return new Promise(async (resolve, reject) => {
      try {
        const value = await Storage.get({ key });
        resolve((value ? JSON.parse(value) : undefined))
      } catch (e) {
        resolve(undefined);
      }
    });
  },

  remove: (key: any) => {
    const Storage = StorageWeb;
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await Storage.remove({ key }));
      } catch (error) {
        reject(error);
      }
    });
  },

  /*keys: () => {
    const { keys } = await Storage.keys();
    return keys;
  },*/

  /* clear: () => {
    const Storage = StorageWeb;
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await Storage.clear());
      } catch (error) {
        reject(error);
      }
    });
  } */
}
