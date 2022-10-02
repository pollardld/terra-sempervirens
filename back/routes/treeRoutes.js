import { addNewTree, getTrees, getTree } from '../controllers/treeController.js';

const routes = (app) => {
    app.route('/trees')
        .get(getTrees)
        .post(addNewTree);
    
    app.route('/tree/:treeId')
        .get(getTree);
}

export default routes;