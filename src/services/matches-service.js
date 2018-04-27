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
