function choose (pChoice){
    let choice = document.getElementById(pChoice);
    switch(choice.id)
    {
        case "newGame": newGame(); break;
        case "createGame": createGame(); break;
        case "findAGame": findAGame(); break;
        case "goBack": goBack(); break;
    }

}
function selectAction (callback)
{
    switch(callback)
    {
        case
    }
}

function getForm (method)
{
    let form = document.getElementById("formGame");
    form.action = "#";
    form.method = method;
    form.submit();
}
console.log("foi!")