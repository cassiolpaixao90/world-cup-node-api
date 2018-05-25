import {getPlayerModel}     from "../data_access/modelFactory";
import repository           from "../repositories/player-repository";
import WorldCupError        from '../exception/exception';
import messageProperties    from "../utils/messageProperties";

exports.save = async (data) => {
    try {
        const Player       = await getPlayerModel();
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
            throw new WorldCupError(messageProperties.MESSAGE_DADOS_NAO_LOCALIZADOS, 409);
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
            throw new WorldCupError(messageProperties.MESSAGE_DADOS_NAO_LOCALIZADOS, 409);
        }
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
            throw new WorldCupError(messageProperties.MESSAGE_DADOS_NAO_LOCALIZADOS, 409);
        }
        await repository.update(id, data, Country);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};
