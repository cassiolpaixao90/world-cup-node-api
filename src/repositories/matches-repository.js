'use strict';
import WorldCupError        from '../exception/exception';

exports.create = async (data, Matches) => {

    try {
        const matches = new Matches(data);
        await matches.save();
    } catch (error) {
        throw new WorldCupError(error);
    }
};


exports.getById = async (id, Matches) => {
    try {
        return await Matches.findById(id);
    } catch (error) {
        throw new WorldCupError(error);
    }
};

exports.getAll = async (Matches) => {
    try {
        return await Matches.find();
    } catch (error) {
        throw new WorldCupError(error);
    }
};
exports.delete = async (id, Matches) => {
    try {
        await Matches.remove({'_id': id});
    } catch (error) {
        throw new WorldCupError(error);
    }
};
exports.update = async (id, data, Matches) => {
    try {
        await Matches.findByIdAndUpdate(id, data);
    } catch (error) {
        throw new WorldCupError(error);
    }
};
