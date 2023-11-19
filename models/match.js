const Game = (id, code, word, category, skin) =>
{
    let game = {};
        game.id = id;
        game.code = code;
        game.word = word;
        game.category = category;
        game.skin = skin;
    return game;
}

module.exports = Game;