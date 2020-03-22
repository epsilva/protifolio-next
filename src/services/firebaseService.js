import { firebaseDatabase } from '../utils/firebaseConfig';

export default class FirebaseService {
    
    static pushData = (node, child, objToSubmit) => {
        const data = firebaseDatabase.ref(node).child(child).set(objToSubmit);
        return data;
    };

}