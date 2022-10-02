import { 
    addNewTree, 
    getTrees, 
    getTreeById, 
    deleteTree 
} from '../controllers/treeController.js';

const routes = (app) => {
    app.route('/trees')
        .get(getTrees)
        .post(addNewTree);
    
    app.route('/tree/:treeId')
        .get(getTreeById)
        .delete(deleteTree);
}

export default routes;