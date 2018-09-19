import {
    REGISTER_USER,
    LOGIN_USER,
    USER_PROCESSING
} from '../../store/types';
//firebase 
import firebase from '../../../firebase';

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(_requestLogin());

        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then (response => {
                console.log('user login res -',response)
                dispatch(_successLogin());

            })
            .catch(err => {
                console.log('err', err)
                dispatch(_errLogin())
            })
    }
}