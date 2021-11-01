var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.936,title:"23.01 ms"},
{axis:"SHA-1 hash (256B)",value:0.917,title:"5.75 ms"},
{axis:"SHA2-256 hash (256B)",value:0.907,title:"11.83 ms"},
{axis:"AES128 encrypt (256B)",value:0.903,title:"9.9 ms"},
{axis:"AES256 encrypt (256B)",value:0.901,title:"12.8 ms"},
{axis:"3DES encrypt (256B)",value:0.648,title:"72.2 ms"},
{axis:"3DES setKey(192b)",value:0.643,title:"17.74 ms"},
{axis:"AES setKey(128b)",value:0.707,title:"14.32 ms"},
{axis:"AES setKey(256b)",value:0.655,title:"17.06 ms"},
{axis:"SWAES oneblock (16B)",value:0.912,title:"210.07 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.956,title:"0.28 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.28 ms"},
{axis:"ECC 256b genKeyPair",value:0.261,title:"468.15 ms"},
{axis:"ECDSA 256b sign",value:0.242,title:"119.67 ms"},
{axis:"ECDSA 256b verify",value:0.132,title:"202.93 ms"},
{axis:"ECDH 256b",value:0.099,title:"187.1 ms"},
{axis:"RSA1024 CRT decrypt",value:0.758,title:"106.66 ms"},
{axis:"RSA1024 CRT encrypt",value:0.914,title:"3.46 ms"},
{axis:"RSA2048 CRT decrypt",value:0.745,title:"444.09 ms"},
{axis:"RSA2048 CRT encrypt",value:0.892,title:"8.86 ms"},
{axis:"RSA1024 decrypt",value:0.132,title:"415.7 ms"},
{axis:"RSA1024 encrypt",value:0.913,title:"3.48 ms"},
{axis:"RSA2048 decrypt",value:0.188,title:"2639.16 ms"},
{axis:"RSA2048 encrypt",value:0.892,title:"8.85 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.948,title:"18.71 ms"},
{axis:"SHA-1 hash (256B)",value:0.349,title:"45.1 ms"},
{axis:"SHA2-256 hash (256B)",value:0.460,title:"68.5 ms"},
{axis:"AES128 encrypt (256B)",value:0.930,title:"7.13 ms"},
{axis:"AES256 encrypt (256B)",value:0.938,title:"8.07 ms"},
{axis:"3DES encrypt (256B)",value:0.971,title:"5.88 ms"},
{axis:"3DES setKey(192b)",value:0.334,title:"33.07 ms"},
{axis:"AES setKey(128b)",value:0.362,title:"31.21 ms"},
{axis:"AES setKey(256b)",value:0.307,title:"34.31 ms"},
{axis:"SWAES oneblock (16B)",value:0.710,title:"688.85 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.908,title:"0.59 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.986,title:"0.58 ms"},
{axis:"ECC 256b genKeyPair",value:2.157,title:"-732.8 ms"},
{axis:"ECDSA 256b sign",value:0.627,title:"58.84 ms"},
{axis:"ECDSA 256b verify",value:0.723,title:"64.66 ms"},
{axis:"ECDH 256b",value:0.967,title:"6.84 ms"},
{axis:"RSA1024 CRT decrypt",value:0.807,title:"85.1 ms"},
{axis:"RSA1024 CRT encrypt",value:1.450,title:"-18.05 ms"},
{axis:"RSA2048 CRT decrypt",value:0.885,title:"200.2 ms"},
{axis:"RSA2048 CRT encrypt",value:1.201,title:"-16.56 ms"},
{axis:"RSA1024 decrypt",value:0.507,title:"236.4 ms"},
{axis:"RSA1024 encrypt",value:1.327,title:"-13.09 ms"},
{axis:"RSA2048 decrypt",value:0.828,title:"557.93 ms"},
{axis:"RSA2048 encrypt",value:1.119,title:"-9.82 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);