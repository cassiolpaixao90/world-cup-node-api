'use strict';
import WorldCupError        from '../exception/exception';

exports.create = async (data, Group) => {

    try {
        const group = new Group(data);
        await group.save();
    } catch (error) {
        throw new WorldCupError(error, "");
    }
};
