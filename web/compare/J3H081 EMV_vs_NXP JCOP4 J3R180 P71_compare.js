var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.994,title:"2.1 ms"},
{axis:"SHA-1 hash (256B)",value:0.904,title:"6.66 ms"},
{axis:"SHA2-256 hash (256B)",value:0.946,title:"6.83 ms"},
{axis:"AES128 encrypt (256B)",value:0.906,title:"9.58 ms"},
{axis:"AES256 encrypt (256B)",value:0.921,title:"10.23 ms"},
{axis:"3DES encrypt (256B)",value:0.954,title:"9.39 ms"},
{axis:"3DES setKey(192b)",value:0.455,title:"27.05 ms"},
{axis:"AES setKey(128b)",value:0.507,title:"24.13 ms"},
{axis:"AES setKey(256b)",value:0.454,title:"27.05 ms"},
{axis:"SWAES oneblock (16B)",value:0.890,title:"261.3 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.950,title:"0.32 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.986,title:"0.6 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
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