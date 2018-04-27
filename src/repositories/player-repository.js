'use strict';
import WorldCupError        from '../exception/exception';

exports.create = async (data, Player) => {

    try {
        const player = new Player(data);
        await player.save();
    } catch (error) {
        throw new WorldCupError(error, "");
    }
};


exports.getById = async (id, Player) => {
    try {
        return await Player.findById(id);
    } catch (error) {
        throw new WorldCupError(error, "");
    }
};

exports.getAll = async (Player) => {
    try {
        return await Player.find();
    } catch (error) {
        throw new WorldCupError(error, "");
    }
};
exports.delete = async (id, Player) => {
    try {
        await Player.remove({'_id': id});
    } catch (error) {
        throw new WorldCupError(error, "");
    }
};
exports.update = async (id, data, Player) => {
    try {
        await Player.findByIdAndUpdate(id, data);
    } catch (error) {
        throw new WorldCupError(error, "");
    }
};
