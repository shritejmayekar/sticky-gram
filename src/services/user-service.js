import axiosService from './axios-service';
import config from '../config/environment'
import apiRoute from '../config/apiConstants';


export default class UserService {
    constructor() {
        this.axiosService = new axiosService();
    }

    login(data) {
        return this.axiosService.post(`${config.apiUrl}/${apiRoute.LOGIN_API}`, data,true,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
          
        })
    }
    fetchNotes() {
        let token = localStorage.getItem('stickyGram')
        return this.axiosService.get(`${config.apiUrl}/${apiRoute.NOTE_API}`, true,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+ token,
                }
            }
        )
    }
    fetchNoteById(noteId) {
        let token = localStorage.getItem('stickyGram')
        return this.axiosService.get(`${config.apiUrl}/${apiRoute.NOTE_API}/${noteId}/`, true,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+ token,
                }
            }
        )
    }

    updateNoteById(noteId,data) {
        let token = localStorage.getItem('stickyGram')
        return this.axiosService.patch(`${config.apiUrl}/${apiRoute.NOTE_API}${noteId}/`,data, true,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+ token,
                }
            }
        )
    }

}