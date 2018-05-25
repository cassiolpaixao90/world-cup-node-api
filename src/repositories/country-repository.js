'use strict';
import WorldCupError        from '../exception/exception';

exports.create = async (data, Country) => {

    try {
        const country = new Country(data);
        await country.save();
    } catch (error) {
        throw new WorldCupError(error);
    }
};

exports.getById = async (id, Country) => {
    try {
        return await Country.findById(id);
    } catch (error) {
        throw new WorldCupError(error);
    }
};

exports.getAll = async (Country) => {
    try {
        return await Country.find();
    } catch (error) {
        throw new WorldCupError(error);
    }
};
exports.delete = async (id, Country) => {
    try {
        await Country.remove({'_id': id});
    } catch (error) {
        throw new WorldCupError(error);
    }
};
exports.update = async (id, data, Country) => {
    try {
        await Country.findByIdAndUpdate(id, data);
    } catch (error) {
        throw new WorldCupError(error);
    }
};
