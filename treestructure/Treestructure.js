var planet1={
    India:{
       Tamilnadu:{
           Tenkasi:{
              Alangulam:{},
              Govindaperi:{},
            },
            Tirunelveli:{
                Manimuthar:{},
                Ambai:{}
            }
        },
       Telungana:{
           Hyderabad:{
                Charminar:{},
                Golconda:{},
           },
           Karimnagar:{
                 Kaleshwaram:{},
                 Kotilingala:{}
           }
        },
    },
    Pakistan:{
       AzadJammuAndKashmir:{
           Poonch:{
               Karachi:{},
               Badin:{},
            },
           Mirpur:{
               Abdulahpur:{},
               Abdupur:{},
           }
        },
        Sindh:{
            Malir:{
                BinQasim:{},
                GadapTown:{}
            },
            Larkana:{
                Mohenjadaro:{},
                Baqapur:{}
            }
       }
    }
};
function countryname(test){
   x=Object.keys(test);
   for(i=0;i<x.length;i++){
        var element1=document.createElement("div");
        var element1text=document.createTextNode(x[i]);
        element1.appendChild(element1text);
        element1.className="padding";
        element1.setAttribute("onclick","state(this)")
        document.getElementById("demo1").appendChild(element1);
    }
};
var value1;
function state(value){
    value1=value.textContent;
    fetch(value);
};
function fetch(value){
    for (var key1 in planet1) {
        let x=planet1[key1];
        console.log(x);
        for(var key2 in x){
        let y=planet1[key1][key2];
        if(value1===key1){
           addingsubchild(key2,value)
        }
        for(var key3 in y){
        if(value1===key2){
             addingsubchild(key3,value)
        }
        let z=planet1[key1][key2][key3];
        for(var key4 in z){
            if(value1===key3){
            addingsubchild(key4,value)
        }}}
}}};
function addingsubchild(key,value){
    var element2=document.createElement("div");
    var element2text=document.createTextNode(key);
    element2.appendChild(element2text);
    element2.className="padding";
    element2.setAttribute("onclick","state(this)")
    value.appendChild(element2);
};