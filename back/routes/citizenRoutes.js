import { addNewCitizen } from '../controllers/citizenController.js';

const routes = (app) => {
    app.route('/citizen')
        .get(getCitizen)
        .post(addNewCitizen);
}

export default routes;