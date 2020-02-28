// Retrieve data from Firebase -> Outdoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
var ref_kW_Lighting_1 = ref_indoor.child("F1L1")
var ref_kW_Outlet_1 = ref_indoor.child("F1O1")
var ref_kW_Aircon_1 = ref_indoor.child("F1AC1")

ref_kW_Lighting_1.on("value", function(snapshot) {
    console.log("Get kW_Lighting_1 from firebase")
    //  console.log(snapshot.val());
    var kW_Lighting_1 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Lighting_1").innerHTML = kW_Lighting_1;
    var kW_Lighting_1_local = localStorage.setItem("kW_Lighting_1", kW_Lighting_1)
  });

ref_kW_Outlet_1.on("value", function(snapshot) {
    console.log("Get kW_Outlet_1 from firebase")
    //  console.log(snapshot.val());
    var kW_Outlet_1 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Outlet_1").innerHTML = kW_Outlet_1;
    var kW_Outlet_1_local = localStorage.setItem("kW_Outlet_1", kW_Outlet_1)
});

ref_kW_Aircon_1.on("value", function(snapshot) {
    console.log("Get kW_Aircon_1 from firebase")
    //  console.log(snapshot.val());
    var kW_Aircon_1 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Aircon_1").innerHTML = kW_Aircon_1;
    var kW_Aircon_1_local = localStorage.setItem("kW_Aircon_1", kW_Aircon_1)
});

var cal_kW_Lighting_1 = parseInt(localStorage.getItem("kW_Lighting_1"));
var cal_kW_Outlet_1 = parseInt(localStorage.getItem("kW_Outlet_1"));
var cal_kW_Aircon_1 = parseInt(localStorage.getItem("kW_Aircon_1"));
var total_load_floor1 = cal_kW_Lighting_1 + cal_kW_Outlet_1 + cal_kW_Aircon_1

document.getElementById("Floor1_Total_Load").innerHTML = (total_load_floor1);
