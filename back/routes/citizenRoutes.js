import { 
    addNewCitizen, 
    getCitizen 
} from '../controllers/citizenController.js';

const citizenRoutes = (app) => {
    app.route('/citizen')
        .post(addNewCitizen);

    app.route('/citizen/:citizenId')
        .get(getCitizen);
}

export default citizenRoutes;