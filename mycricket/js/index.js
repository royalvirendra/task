// variable declaration

var htmltext = '';
var playervalue;
var teamvalue;
var playername = [];
var playerhtml = '';
var Teamlist = [];
var lengthofarr;
var listofteamplayerhtml = '';
var playerdiv = '';
document.getElementById("adddiv").style.visibility = "hidden";
document.getElementById("btnshow").style.visibility = "hidden";
listofteamplayerhtml += '<div class="list-player col-sm-2" id="whatmylist"></div>'

// drag and drop functions

function dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
};


// action perform when form submit
document.getElementById("form").addEventListener('submit', (e) => {
    let noofteam = document.getElementById("noofteam");
    document.getElementById("btnshow").style.visibility = "visible";
    e.preventDefault();
    teamvalue = noofteam.value;
    playervalue = teamvalue * 11;



    for (let i = 1; i <= teamvalue; i++) {
        Teamlist[i] = "team" + i;
        listofteamplayerhtml += '<div  class = " teamh dragteam1 col-sm-2"id = "' + Teamlist[i] + '"ondragenter = "return dragEnter(event)"ondrop = "return dragDrop(event)"ondragover ="return dragOver(event)"><h3> ' + Teamlist[i] + ' </h3></div >';

    }
    document.getElementById("main").innerHTML = listofteamplayerhtml;

    for (let j = 1; j <= playervalue; j++) {
        playername[j] = "player" + j;
        playerhtml += '<div class="player" id="' + playername[j] + '" draggable="true" ondragstart="return dragStart(event)"><p>' + playername[j] + '</p></div>'

    }
    document.getElementById("whatmylist").innerHTML = playerhtml;


    document.getElementById("teamsubmit").disabled = true;



});



// drag file enter in elemet using event 
function dragEnter(ev) {
    ev.preventDefault();
    return true;
};


function dragOver(ev) {
    return false;
};

function dragDrop(ev) {
    var _target = ('#' + ev.target.id);
    if (_target == '#') {
        alert("can't drop")
    } else {
        var src = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(src));
        ev.stopPropagation();
        return false;
    }
};


// submit draged team
function mysubmit() {
    for (let k = 1; k <= teamvalue; k++) {

        if (document.getElementById(Teamlist[k]).childElementCount == 12) {
            alert("11");
            document.getElementById("btnshow").disabled = true;

            if (!document.getElementById("whatmylist").innerHTML) {
                document.getElementById("adddiv").style.visibility = "visible";


                var listvalue = document.getElementById(Teamlist[k]).innerHTML;
                htmltext += '<div class="col-sm-2" style="margin:10px">' + listvalue + ' </div>'
                document.getElementById('adddiv').innerHTML = htmltext;



            } else {
                alert("team is already submited")
            }


        } else {
            alert(Teamlist[k] + "   less or more then 11");
        }


    }
}