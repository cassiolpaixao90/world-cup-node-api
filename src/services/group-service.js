import {getGroupWorldCup}   from "../data_access/modelFactory";
import repository           from "../repositories/group-repository";
import WorldCupError        from '../exception/exception';


exports.save = async (data) => {

    try {
        const Group       = await getGroupWorldCup();
        console.log("registro dados", data);
        await repository.create(data, Group);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};
