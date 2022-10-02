import { addNewTree, getTrees } from '../controllers/treeController.js';

const routes = (app) => {
    app.route('/trees')
        .get(getTrees)
        .post(addNewTree);
}

export default routes;