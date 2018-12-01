import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import registerServiceWorker from './registerServiceWorker';
import { faHome, 
faSignInAlt, 
faBars, 
faSearch,
faUser,
faLock,
faEnvelope,
faClipboardList,
faMapMarkerAlt,
faClock,
faPhone,
faCalendarAlt,
faPlus,
faInfo,
faQuestion,
faHandPointUp, 
faSignOutAlt,
faStar,
faComment,
faCog,
faBuilding,
faEdit,
faTrash,
} from '@fortawesome/free-solid-svg-icons'


library.add( faHome, 
faSignInAlt, 
faBars, 
faSearch,
faUser,
faLock,
faEnvelope,
faClipboardList,
faMapMarkerAlt,
faClock,
faPhone,
faCalendarAlt,
faPlus,
faInfo,
faQuestion,
faHandPointUp,
faSignOutAlt,
faStar,
faComment,
faCog,
faBuilding,
faEdit,
faTrash
)


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
