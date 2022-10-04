import { 
    addNewCitizen, 
    getCitizen,
    getCitizens
} from '../controllers/citizenController.js';

const citizenRoutes = (app) => {
    app.route('/citizen')
        .get(getCitizens)
        .post(addNewCitizen);

    app.route('/citizen/:citizenId')
        .get(getCitizen);
}

export default citizenRoutes;