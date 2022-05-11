type medicalDetails={
    id:string;
    availabletablets: number;
}
var medicalstore = {
  medicaldetails: {
      nameofmedicalstore: "",
      medicalid: "ms0101"
  },
  medicalDetails: [{
          id: "tablet1",
          availabletablets: 100,
      }, {
          id: "tablet2",
          availabletablets: 100,
         
      }, {
          id: "tablet3",
          availabletablets: 100,
         
      }, {
          id: "tablet4",
          availabletablets: 100,
         
      }, {
          id: "tablet5",
          availabletablets: 100,
         
      }, {
          id: "tablet6",
          availabletablets: 100,
         
      }, {
          id: "tablet7",
          availabletablets: 100,
         
      }, {
          id: "tablet8",
          availabletablets: 100,
          
      }, {
          id: "tablet9",
          availabletablets: 100,
         
      }, {
          id: "tablet10",
          availabletablets: 100,
        
      }, {
          id: "tablet11",
          availabletablets: 100,
          
      }, {
          id: "tablet12",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet13",
          availabletablets: 100,
          rackid:"rack1",
      },
      {
          id: "tablet14",
          availabletablets: 100,
          rackid:"rack1",
      },
      {
          id: "tablet15",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet16",
          availabletablets: 100,
          rackid:"rack1",
      },
      {
          id: "tablet17",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet18",
          availabletablets: 100,
          rackid:"rack1",
      },
      {
          id: "tablet19",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet20",
          availabletablets: 100, 
          rackid:"rack1",
      }, {
          id: "tablet21",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet22",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet23",
          availabletablets: 100,
           rackid:"rack1",

      }, {
          id: "tablet24",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet25",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet26",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet27",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet28",
          availabletablets: 100,
          rackid:"rack1",
      }, {
          id: "tablet29",
          availabletablets: 100,
           rackid:"rack1",
      }, {
          id: "tablet30",
          availabletablets: 100
      }, {
          id: "tablet31",
          availabletablets: 100
      }, {
          id: "tablet32",
          availabletablets: 100
      }, {
          id: "tablet33",
          availabletablets: 100
      }, {
          id: "tablet34",
          availabletablets: 100
      }, {
          id: "tablet35",
          availabletablets: 100
      }, {
          id: "tablet36",
          availabletablets: 100
      }, {
          id: "tablet37",
          availabletablets: 100
      }, {
          id: "tablet38",
          availabletablets: 100
      }, {
          id: "tablet39",
          availabletablets: 100
      }, {
          id: "tablet40",
          availabletablets: 100
      }, {
          id: "tablet41",
          availabletablets: 100
      }, {
          id: "tablet42",
          availabletablets: 100
      }, {
          id: "tablet43",
          availabletablets: 100
      }, {
          id: "tablet44",
          availabletablets: 100
      }, {
          id: "tablet45",
          availabletablets: 100
  }]
};
var a:string;
var n:string;
var styleEle:any;
styleEle = document.createElement("style");
document.head.appendChild(styleEle);
function getStyle(tabletID) {
  var rackID = document.getElementById(tabletID).parentElement.parentElement.parentElement.id;
  return ".container > :not(#" + rackID + ") { opacity:0.05; pointer-events:all }"
};

function search() {
  if (active){
      document.getElementById(medicalstore.medicalDetails[i].id).style.backgroundColor="none";
  }
  a = (document.getElementById("numb")as HTMLFormElement).value;
  var active=a;
  
  var styleStr = getStyle(a);
  styleEle.textContent = styleStr;
  for (var i = 0; i <= medicalstore.medicalDetails.length; i++) {
      if (medicalstore.medicalDetails[i].id === a) {
         console.log(medicalstore.medicalDetails[i].id);
      i = i+1;
      n = ("Rack Number:" + (Math.ceil(i / 9)) + "," + "Shelf Number:" + (Math.ceil((i % 9) / 3)));
      document.getElementById("demo").innerHTML = n;
      i=i-1;
        document.getElementById(medicalstore.medicalDetails[i].id).style.backgroundColor="green";
       console.log(document.getElementById(medicalstore.medicalDetails[i].id).parentElement);
      return medicalstore.medicalDetails[i];
      }
  }
};
var tabletDetails:medicalDetails;
var m:number;
var saledTablet:number;
function billing() {
  tabletDetails = search();
  saledTablet = (document.getElementById("numb1")as HTMLFormElement).value;
  tabletDetails.availabletablets = tabletDetails.availabletablets - saledTablet;
  m =tabletDetails.availabletablets;
  document.getElementById("s1").innerHTML = m.toString();
  console.log(tabletDetails.id);
  if(m<30){
      document.getElementById(tabletDetails.id).style.backgroundColor="red";
  }
}
;
function reload() {
  location.reload();
}
