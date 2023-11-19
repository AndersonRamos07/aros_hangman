const fs = require("node:fs"); 
const db = process.env.database;

// CRUD - Create , Read , Update , Delete.

//  CREATE:

const create = async (content) =>
{
    let previousContent = read();
    content.id = generator(previousContent);
    let newContent = insert(previousContent , content);
    fs.writeFile(db, JSON.stringify(newContent, null, 2), (error)=>
    {
        if(error) throw error;
        console.log('Foi!')
    });
};

// READ:

const read = () =>
{
    const data = fs.readFileSync(db, { encoding: 'utf-8'});
    let dataToObj = JSON.parse(data);
    let array = [];
    dataToObj.forEach(e => array.push(e));
    return array;
}

// UPDATE:

// DELETE:

const generator = (item) => item.length + 1;

const insert = (array , item) => array.push(item);

module.exports = { create , read };