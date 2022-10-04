import mongoose from 'mongoose';
import { CitizenSchema } from '../models/citizenModel.js';

const Citizen = mongoose.model('Citizen', CitizenSchema);

export const addNewCitizen = (req, res) => {
    let newCitizen = new Citizen(req.body);

    newCitizen.save((err, citizen) => {
        if (err) {
            res.send(err);
        }
        res.json(citizen);
    })
    
}

export const getCitizen = (req, res) => {
    Citizen.findById(req.params.citizenId, (err, citizen) => {
        if (err) {
            res.send(err);
        }
        res.json(citizen);
    });
}

export const getCitizens = (req, res) => {
    Citizen.find((err, citizen) => {
        if (err) {
            res.send(err);
        }
        res.json(citizen);
    });
}