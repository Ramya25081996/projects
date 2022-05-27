var medicalstore = {
    medicaldetails: {
        nameofmedicalstore: "RR Pharmacy",
        medicalid: "ms0101"
    },
    medicalDetails: [{
            id: "Tablet1",
            availabletablets: 100
        }, {
            id: "Tablet2",
            availabletablets: 100
        }, {
            id: "Tablet3",
            availabletablets: 100
        }, {
            id: "Tablet4",
            availabletablets: 100
        }, {
            id: "Tablet5",
            availabletablets: 100
        }, {
            id: "Tablet6",
            availabletablets: 100
        }, {
            id: "Tablet7",
            availabletablets: 100
        }, {
            id: "Tablet8",
            availabletablets: 100
        }, {
            id: "Tablet9",
            availabletablets: 100
        }, {
            id: "Tablet10",
            availabletablets: 100
        }, {
            id: "Tablet11",
            availabletablets: 100
        }, {
            id: "Tablet12",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet13",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet14",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet15",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet16",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet17",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet18",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet19",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet20",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet21",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet22",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "tablet23",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet24",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet25",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet26",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet27",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet28",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet29",
            availabletablets: 100,
            rackid: "rack1"
        }, {
            id: "Tablet30",
            availabletablets: 100
        }, {
            id: "Tablet31",
            availabletablets: 100
        }, {
            id: "Tablet32",
            availabletablets: 100
        }, {
            id: "Tablet33",
            availabletablets: 100
        }, {
            id: "Tablet34",
            availabletablets: 100
        }, {
            id: "Tablet35",
            availabletablets: 100
        }, {
            id: "Tablet36",
            availabletablets: 100
        }, {
            id: "Tablet37",
            availabletablets: 100
        }, {
            id: "Tablet38",
            availabletablets: 100
        }, {
            id: "Tablet39",
            availabletablets: 100
        }, {
            id: "Tablet40",
            availabletablets: 100
        }, {
            id: "Tablet41",
            availabletablets: 100
        }, {
            id: "Tablet42",
            availabletablets: 100
        }, {
            id: "Tablet43",
            availabletablets: 100
        }, {
            id: "Tablet44",
            availabletablets: 100
        }, {
            id: "Tablet45",
            availabletablets: 100
        }]
};
var a;
var n;
var r;
var present;
var f;
var value1;
var rackNo = 0;
var tabletDetails;
var m;
var saledTablet;
var present1;
var present2;
r = document.querySelector(':root');
function search() {
    if (present) {
        var previousEle = document.getElementById(present);
        previousEle.classList.remove("green");
        document.getElementById(present2).classList.remove("yellow");
    }
    a = document.getElementById("numb").value || value1;
    for (var i = 0; i <= medicalstore.medicalDetails.length; i++) {
        if (medicalstore.medicalDetails[i].id === a) {
            i = i + 1;
            n = ("Rack Number : " + (Math.ceil(i / 9)) + "," + "Shelf Number : " + (Math.ceil((i % 9) / 3))) + "," + "Tablet Number : " + i;
            f = Math.ceil(i / 9);
            document.getElementById("demo").innerHTML = n;
            i = i - 1;
            rackNo = f - 1;
            document.getElementById(medicalstore.medicalDetails[i].id).classList.add("green");
            r.style.setProperty('--selectedrack', rackNo);
            //myFunction();
            //document.getElementById("numb").value="";
            present = a;
            var b = "tab".concat(i + 1);
            document.getElementById(b).classList.add("yellow");
            present2 = b;
            return medicalstore.medicalDetails[i];
        }
        else {
            document.getElementById("demo").innerHTML = "Tablet is not available";
        }
    }
}
;
function billing() {
    tabletDetails = search();
    console.log(tabletDetails);
    saledTablet = document.getElementById("numb1").value;
    document.getElementById("s1").classList.add("red");
    if (saledTablet < 0 || saledTablet > 100) {
        document.getElementById("s1").innerHTML = "Invalid input";
    }
    else {
        if (m <= 0) {
            document.getElementById("s1").innerHTML = "Error:can not be applied";
            return;
        }
        tabletDetails.availabletablets = tabletDetails.availabletablets - saledTablet;
        m = tabletDetails.availabletablets;
        document.getElementById("s1").innerHTML = m.toString();
        myFunction();
        if (m < 30) {
            document.getElementById(tabletDetails.id).classList.add("red");
        }
        //document.getElementById("numb").value="";
    }
}
;
function myFunction() {
    document.getElementById("list12").innerHTML = "";
    for (var k = 0; k < medicalstore.medicalDetails.length; k++) {
        var node01 = document.createElement("div");
        node01.className = "border1 list01";
        node01.id = "tab".concat(k + 1);
        node01.setAttribute("onclick", "sample(this.id)");
        var node = document.createElement("div");
        var node1 = document.createElement("div");
        var textnode = document.createTextNode(medicalstore.medicalDetails[k].id);
        var text = document.createTextNode(medicalstore.medicalDetails[k].availabletablets.toString());
        node.appendChild(textnode);
        node1.appendChild(text);
        node01.appendChild(node);
        node01.appendChild(node1);
        document.getElementById("list12").appendChild(node01);
    }
}
;
function sample(id) {
    value1 = document.getElementById(id).children[0].innerHTML;
    document.getElementById("numb").value = "";
    search();
}
function sorting() {
    medicalstore.medicalDetails.sort(function (a, b) {
        return a.availabletablets - b.availabletablets;
    });
    myFunction();
}
function sorting1() {
    medicalstore.medicalDetails.sort(function (a, b) {
        return b.availabletablets - a.availabletablets;
    });
    myFunction();
}
function previous() {
    if (rackNo === 0) {
        alert("Previous rack is not available");
    }
    else {
        rackNo = rackNo - 1;
        r.style.setProperty('--selectedrack', rackNo);
    }
}
function next() {
    if (rackNo >= 4) {
        alert("Next rack is not available");
    }
    else {
        rackNo = rackNo + 1;
        r.style.setProperty('--selectedrack', rackNo);
    }
}
function reload() {
    location.reload();
}
myFunction();
