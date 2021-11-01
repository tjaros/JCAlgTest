var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.931,title:"24.9 ms"},
{axis:"SHA-1 hash (256B)",value:0.748,title:"17.42 ms"},
{axis:"SHA2-256 hash (256B)",value:0.719,title:"35.58 ms"},
{axis:"AES128 encrypt (256B)",value:0.750,title:"25.53 ms"},
{axis:"AES256 encrypt (256B)",value:0.760,title:"31.18 ms"},
{axis:"3DES encrypt (256B)",value:0.700,title:"61.49 ms"},
{axis:"3DES setKey(192b)",value:0.867,title:"6.61 ms"},
{axis:"AES setKey(128b)",value:0.876,title:"6.08 ms"},
{axis:"AES setKey(256b)",value:0.866,title:"6.65 ms"},
{axis:"SWAES oneblock (16B)",value:0.429,title:"1356.0 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.666,title:"2.13 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.946,title:"2.27 ms"},
{axis:"ECC 256b genKeyPair",value:0.670,title:"208.9 ms"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.768,title:"101.92 ms"},
{axis:"RSA1024 CRT encrypt",value:0.724,title:"11.06 ms"},
{axis:"RSA2048 CRT decrypt",value:0.861,title:"242.91 ms"},
{axis:"RSA2048 CRT encrypt",value:0.791,title:"17.16 ms"},
{axis:"RSA1024 decrypt",value:0.750,title:"119.97 ms"},
{axis:"RSA1024 encrypt",value:0.725,title:"11.02 ms"},
{axis:"RSA2048 decrypt",value:0.788,title:"689.56 ms"},
{axis:"RSA2048 encrypt",value:0.792,title:"17.13 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.997,title:"1.19 ms"},
{axis:"SHA-1 hash (256B)",value:0.923,title:"5.32 ms"},
{axis:"SHA2-256 hash (256B)",value:0.937,title:"7.94 ms"},
{axis:"AES128 encrypt (256B)",value:0.982,title:"1.83 ms"},
{axis:"AES256 encrypt (256B)",value:0.985,title:"1.92 ms"},
{axis:"3DES encrypt (256B)",value:0.991,title:"1.86 ms"},
{axis:"3DES setKey(192b)",value:0.935,title:"3.23 ms"},
{axis:"AES setKey(128b)",value:0.934,title:"3.21 ms"},
{axis:"AES setKey(256b)",value:0.935,title:"3.24 ms"},
{axis:"SWAES oneblock (16B)",value:0.927,title:"174.05 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.975,title:"0.16 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.933,title:"2.84 ms"},
{axis:"ECC 256b genKeyPair",value:0.961,title:"24.4 ms"},
{axis:"ECDSA 256b sign",value:0.797,title:"32.0 ms"},
{axis:"ECDSA 256b verify",value:0.871,title:"30.2 ms"},
{axis:"ECDH 256b",value:0.904,title:"20.0 ms"},
{axis:"RSA1024 CRT decrypt",value:0.966,title:"15.0 ms"},
{axis:"RSA1024 CRT encrypt",value:0.935,title:"2.61 ms"},
{axis:"RSA2048 CRT decrypt",value:0.969,title:"53.24 ms"},
{axis:"RSA2048 CRT encrypt",value:0.951,title:"4.0 ms"},
{axis:"RSA1024 decrypt",value:0.946,title:"25.95 ms"},
{axis:"RSA1024 encrypt",value:0.935,title:"2.61 ms"},
{axis:"RSA2048 decrypt",value:0.955,title:"147.78 ms"},
{axis:"RSA2048 encrypt",value:0.951,title:"3.99 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);