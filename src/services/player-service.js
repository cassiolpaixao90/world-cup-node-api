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
