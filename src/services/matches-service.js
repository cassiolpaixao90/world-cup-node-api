import {getMatchesModel}    from "../data_access/modelFactory";
import repository           from "../repositories/matches-repository";
import WorldCupError        from '../exception/exception';


exports.save = async (data) => {

    try {
        const Matches       = await getMatchesModel();

        console.log("registro dados", data);
        await repository.create(data, Matches);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};


exports.getById = async (id) => {

    try {
        const Country           = await getMatchesModel();
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
        const Country   = await getMatchesModel();
        return await repository.getAll(Country);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};

exports.delete = async (id) => {

    try {
        const Country           = await getMatchesModel();
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
        const Country           = await getMatchesModel();
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
