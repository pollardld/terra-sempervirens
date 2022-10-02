import mongoose from 'mongoose';
import { TreeSchema } from '../models/treeModel.js';

const Tree = mongoose.model('Tree', TreeSchema);

export const addNewTree = (req, res) => {
    let newTree = new Tree(req.body);

    newTree.save((err, tree) => {
        if (err) {
            res.send(err);
        }
        res.json(tree);
    });
}

export const getTrees = (req, res) => {
    Tree.find((err, tree) => {
        if (err) {
            res.send(err);
        }
        res.json(tree);
    });
}

export const getTreeById = (req, res) => {
    Tree.findById(req.params.treeId, (err, tree) => {
        if (err) {
            res.send(err);
        }
        res.json(tree);
    });
}

export const deleteTree = (req, res) => {
    Tree.remove({ _id: req.params.treeId}, (err, tree) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted tree' });
    });
}