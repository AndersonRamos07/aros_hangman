const mngFile = require('./managementFile');
const createGame = (content) =>
{
    return mngFile.create(content);
}

const findGame = () =>
{
    return mngFile.read();
}

const editGame = (mode, content) =>
{
    switch(mode)
    {
        case "create": createGame(content); break;
        case "find": findGame(); break;
    }
}

module.exports = editGame;