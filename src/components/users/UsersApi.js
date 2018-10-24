import Api from '../../utils/Api';

export default {
  login: auth => Api.post('/api-auth/', auth),
}