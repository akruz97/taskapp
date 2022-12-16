import { Alert } from "react-native";
import Realm from "realm";
import schema from "./schema";

const realm = new Realm({
    schemaVersion: 1,
    path: 'default',
    schema
});

//create or update record
export const createRecord = (name, data, callback = () => {}) => {
    try {
        realm.write(() => {
            callback(realm.create(name, data, 'modified'));
        });
    } catch (e) {
        Alert.alert('Error inesperado', e.message);
    }
}

// delete record
export const deleteRecord = (object, callback = () => {}) => {
    try {
        realm.write(() => {
            callback(realm.delete(object));
            object = null;
          });
    } catch (e) {
        Alert.alert('Error inesperado', e.message);
    }
}

export default realm;