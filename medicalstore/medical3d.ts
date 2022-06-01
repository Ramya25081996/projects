type medicalDetails = {
    id: string;
    availabletablets: number;
    price:number;
}
var medicalstore = {
    medicaldetails: {
        nameofmedicalstore: "RR Pharmacy",
        medicalid: "ms0101"
    },
    medicalDetails: [{
        id: "Tablet1",
        availabletablets: 100,
        price:2
    }, {
        id: "Tablet2",
        availabletablets: 100,
        price:2
    }, {
        id: "Tablet3",
        availabletablets: 100,
        price:2

    }, {
        id: "Tablet4",
        availabletablets: 100,
        price:2
    }, {
        id: "Tablet5",
        availabletablets: 100,
        price:2
    }, {
        id: "Tablet6",
        availabletablets: 100,
        price:2
    }, {
        id: "Tablet7",
        availabletablets: 100,
        price:2
    }, {
        id: "Tablet8",
        availabletablets: 100,
        price:4
    }, {
        id: "Tablet9",
        availabletablets: 100,
        price:4
    }, {
        id: "Tablet10",
        availabletablets: 100,
        price:4
    }, {
        id: "Tablet11",
        availabletablets: 100,
        price:4
    }, {
        id: "Tablet12",
        availabletablets: 100,
        price:4
    }, {
        id: "Tablet13",
        availabletablets: 100,
        price:4
    }, {
        id: "Tablet14",
        availabletablets: 100,
        price:4
    }, {
        id: "Tablet15",
        availabletablets: 100,
        price:6
    }, {
        id: "Tablet16",
        availabletablets: 100,
        price:6
    }, {
        id: "Tablet17",
        availabletablets: 100,
        price:6
    }, {
        id: "Tablet18",
        availabletablets: 100,
        price:6
    }, {
        id: "Tablet19",
        availabletablets: 100,
        price:6
    }, {
        id: "Tablet20",
        availabletablets: 100,
        price:6
    }, {
        id: "Tablet21",
        availabletablets: 100,
        price:6
    }, {
        id: "Tablet22",
        availabletablets: 100,
        price:8
    }, {
        id: "Tablet23",
        availabletablets: 100,
        price:8
    }, {
        id: "Tablet24",
        availabletablets: 100,
        price:8
    }, {
        id: "Tablet25",
        availabletablets: 100,
        price:8
    }, {
        id: "Tablet26",
        availabletablets: 100,
        price:8
    }, {
        id: "Tablet27",
        availabletablets: 100,
        price:8
    }, {
        id: "Tablet28",
        availabletablets: 100,
        price:8
    }, {
        id: "Tablet29",
        availabletablets: 100,
        price:10
    }, {
        id: "Tablet30",
        availabletablets: 100,
        price:10
    }, {
        id: "Tablet31",
        availabletablets: 100,
        price:10
    }, {
        id: "Tablet32",
        availabletablets: 100,
        price:10
    }, {
        id: "Tablet33",
        availabletablets: 100,
        price:10
    }, {
        id: "Tablet34",
        availabletablets: 100,
        price:10
    }, {
        id: "Tablet35",
        availabletablets: 100,
        price:10
    }, {
        id: "Tablet36",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet37",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet38",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet39",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet40",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet41",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet42",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet43",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet44",
        availabletablets: 100,
        price:12
    }, {
        id: "Tablet45",
        availabletablets: 100,
        price:12
    }]
};
var tabletName: string;
var tabletpath: string;
var rackMovement;
let CurrentTablet: string;
var findpath: number;
var value1;
var rackNo: number = 0;
var tabletDetails: medicalDetails;
var CurrentAvailableTablets: number;
var saledTablet: number;
var present1: string;
var Current: string;
var GenerateTabletId: string;
rackMovement = document.querySelector(':root');
function search() {
    if (CurrentTablet) {
        let PreviousTabletId = document.getElementById(CurrentTablet);
        PreviousTabletId.classList.remove("green");
        document.getElementById(Current).classList.remove("yellow");
    }
    tabletName = (document.getElementById("numb") as HTMLFormElement).value || value1;
    for (var i = 0; i <= medicalstore.medicalDetails.length; i++) {
        if (medicalstore.medicalDetails[i].id === tabletName) {
            i = i + 1;
            tabletpath = ("Rack Number : " + (Math.ceil(i / 9)) + "," + "Shelf Number : " + (Math.ceil((i % 9) / 3))) + "Tablet Number : " + i;
            findpath = Math.ceil(i / 9);
            document.getElementById("FindTabletPath").innerHTML = tabletpath;
            i = i - 1;
            rackNo = findpath - 1;
            document.getElementById(medicalstore.medicalDetails[i].id).classList.add("green");
            rackMovement.style.setProperty('--selectedrack', rackNo);
            CurrentTablet = tabletName;
            GenerateTabletId = `tab${i + 1}`;
            document.getElementById(GenerateTabletId).classList.add("yellow");
            Current = GenerateTabletId;
            return medicalstore.medicalDetails[i];
        }
        else {
            document.getElementById("FindTabletPath").innerHTML = "Tablet is not available";
        }
    }
};
function billing() {
    tabletDetails = search();
    saledTablet = (document.getElementById("numb1") as HTMLFormElement).value;
    document.getElementById("s1").classList.add("red");
    if (saledTablet < 0 || saledTablet > 100) {
        document.getElementById("s1").innerHTML = "Invalid input";
    }
    else {
        if (CurrentAvailableTablets <= 0) {
            document.getElementById("s1").innerHTML = "Error:cannot be applied";
            return;
        }
        tabletDetails.availabletablets = tabletDetails.availabletablets - saledTablet;
        CurrentAvailableTablets = tabletDetails.availabletablets;
        document.getElementById("s1").innerHTML =CurrentAvailableTablets.toString();
        document.getElementById(GenerateTabletId).children[1].innerHTML = CurrentAvailableTablets.toString();
        if (CurrentAvailableTablets < 30) {
            document.getElementById(tabletDetails.id).classList.add("red");
            document.getElementById(GenerateTabletId).classList.add("red");
        }
    }
    cashbilling();
    (document.getElementById("numb1") as HTMLFormElement).value = "";
};

function TabletListFormation() {
    document.getElementById("list12").innerHTML = "";
    for (var k = 0; k < medicalstore.medicalDetails.length; k++) {
        const node01 = document.createElement("div");
        node01.className = "border1 list01";
        node01.id = `tab${k + 1}`;
        node01.setAttribute("onclick", "sample(this.id)");
        const node = document.createElement("div");
        const node1 = document.createElement("div");
        const textnode = document.createTextNode(medicalstore.medicalDetails[k].id);
        const text = document.createTextNode(medicalstore.medicalDetails[k].availabletablets.toString());
        node.appendChild(textnode);
        node1.appendChild(text);
        node01.appendChild(node);
        node01.appendChild(node1);
        document.getElementById("list12").appendChild(node01);
    }
};
var biller=[];
var TotalAmount;
function cashbilling(){
    var billing1=document.createElement("div");
    billing1.className="amount1";
    var bill1=document.createElement("div");
    var cash1=document.createTextNode(tabletName);
    var bill2=document.createElement("div");
    var cash2=document.createTextNode(saledTablet.toString());
    var bill3=document.createElement("div");
    var cash3=document.createTextNode(tabletDetails.price.toString());
    var bill4=document.createElement("div");
    var biller1:number=(tabletDetails.price)*saledTablet;
    var cash4=document.createTextNode(biller1.toString());
    biller.push(biller1);
    TotalAmount=biller.reduce((x,y)=>x+y);
    bill1.appendChild(cash1);
    bill2.appendChild(cash2);
    bill3.appendChild(cash3);
    bill4.appendChild(cash4);
    billing1.appendChild(bill1);
    billing1.appendChild(bill2);
    billing1.appendChild(bill3);
    billing1.appendChild(bill4);
    document.getElementById("BillingAmount").appendChild(billing1);
    document.getElementById("billerAmount").innerText = TotalAmount;
};
function sample(id) {
    value1 = document.getElementById(id).children[0].innerHTML;
    (document.getElementById("numb") as HTMLFormElement).value = "";
    search();
}
function sorting() {
    medicalstore.medicalDetails.sort(function (a, b) {
        return a.availabletablets - b.availabletablets;
    });
    TabletListFormation();
}
function sorting1() {
    medicalstore.medicalDetails.sort(function (a, b) {
        return b.availabletablets - a.availabletablets;
    });
    TabletListFormation();
}
function PreviousRack() {
    if (rackNo === 0) {
        alert("No previous rack");
    }
    else {
        rackNo = rackNo - 1;
        rackMovement.style.setProperty('--selectedrack', rackNo);
    }
}
function NextRack() {
    if (rackNo >= 4) {
        alert("No next rack");
    }
    else {
        rackNo = rackNo + 1;
        rackMovement.style.setProperty('--selectedrack', rackNo);
    }
}
function reload() {
    location.reload();
}
TabletListFormation();
