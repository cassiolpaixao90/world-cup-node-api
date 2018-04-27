'use strict';
import WorldCupError        from '../exception/exception';

exports.create = async (data, Matches) => {

    try {
        const matches = new Matches(data);
        await matches.save();
    } catch (error) {
        throw new WorldCupError(error, "");
    }
};
