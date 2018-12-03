import UsersApi from '../components/users/UsersApi'

//CLASSE EM CONSTRUÇÃO

class Auth {
    
    constructor() {
        super();
    
        this.state = {
          username: '',
          password: ''
        };
    
        this._handleChange = this._handleChange.bind(this);
      }
    
      _handleChange(field, val) {
        this.setState({ ...this.state, [field]: val });
      }
    
      doLogin() {
        UsersApi.login(this.state).then(res => {
          const { token } = res.data;
          localStorage.setItem('token', token);
          document.location.href = "/homeUser"
        }).catch(err => {
          console.log(err);
          alert('Credenciais incorretas!');
        });
      }

    Logout() {
    logout = () => {
            localStorage.removeItem('token', token);
          };
    }

    checkAuthenticated = () => { 
        localStorage.getItem('token') !== null
    }

    isAuthenticated = (component) => {
        let token = window.localStorage.getItem('token')
        if (token===undefined || token===null) {
          return (
            Login
          )
        }
        return(
          component
        )
      }

}

export default Auth