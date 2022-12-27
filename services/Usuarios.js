import axios from "axios";
const LOGIN_URL = "http://192.168.0.48:8080/api/usuario";
let login;
class Usuarios{
    setPasswordAndUsername(){
        nome = 'system';
        senha = '12345';
        login = {nome, senha};
    }
    login(){
        return axios.put(LOGIN_URL,login);
    }
    getUsuarios(){
        return axios.put(LOGIN_URL+"/todos",login);
    }
    
}
export default new Usuarios;