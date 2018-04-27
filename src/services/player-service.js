import {getPlayerModel}     from "../data_access/modelFactory";
import repository           from "../repositories/player-repository";
import WorldCupError        from '../exception/exception';


exports.save = async (data) => {

    try {
        const Player       = await getPlayerModel();

        console.log("registro dados", data);
        await repository.create(data, Player);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};


exports.getById = async (id) => {

    try {
        const Country           = await getPlayerModel();
        const existingCountry   = await repository.getById(id, Country);
        if(!existingCountry){
            throw new WorldCupError('Country não localizado!', 409);
        }
        
        return existingCountry;
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};

exports.getAll = async () => {

    try {
        const Country   = await getPlayerModel();
        return await repository.getAll(Country);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};

exports.delete = async (id) => {

    try {
        const Country           = await getPlayerModel();
        const existingCountry   = await repository.getById(id, Country);
        if(!existingCountry){
            throw new WorldCupError('Country não localizado!', 409);
        }
        console.log("dados deletado", id);
        await repository.delete(id, Country);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};

exports.update = async (id, data) => {

    try {
        const Country           = await getPlayerModel();
        const existingCountry   = await repository.getById(id, Country);
        if(!existingCountry){
            throw new WorldCupError('Country não localizado!', 409);
        }
        console.log("dados atualizdo", data);
        await repository.update(id, data, Country);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};
