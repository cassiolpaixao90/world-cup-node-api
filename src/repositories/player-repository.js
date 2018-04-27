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
