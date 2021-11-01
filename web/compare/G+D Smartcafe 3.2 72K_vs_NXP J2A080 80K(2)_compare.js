var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.884,title:"41.4 ms"},
{axis:"SHA-1 hash (256B)",value:0.099,title:"62.4 ms"},
{axis:"SHA2-256 hash (256B)",value:0.099,title:"114.26 ms"},
{axis:"AES128 encrypt (256B)",value:0.834,title:"16.9 ms"},
{axis:"AES256 encrypt (256B)",value:0.868,title:"17.1 ms"},
{axis:"3DES encrypt (256B)",value:0.711,title:"59.13 ms"},
{axis:"3DES setKey(192b)",value:0.692,title:"15.3 ms"},
{axis:"AES setKey(128b)",value:0.763,title:"11.62 ms"},
{axis:"AES setKey(256b)",value:0.673,title:"16.2 ms"},
{axis:"SWAES oneblock (16B)",value:0.718,title:"669.64 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.826,title:"1.11 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.904,title:"4.04 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.585,title:"182.74 ms"},
{axis:"RSA1024 CRT encrypt",value:0.525,title:"19.02 ms"},
{axis:"RSA2048 CRT decrypt",value:0.520,title:"836.66 ms"},
{axis:"RSA2048 CRT encrypt",value:0.653,title:"28.53 ms"},
{axis:"RSA1024 decrypt",value:0.145,title:"409.75 ms"},
{axis:"RSA1024 encrypt",value:0.527,title:"18.93 ms"},
{axis:"RSA2048 decrypt",value:0.181,title:"2659.69 ms"},
{axis:"RSA2048 encrypt",value:0.651,title:"28.68 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.945,title:"19.56 ms"},
{axis:"SHA-1 hash (256B)",value:0.558,title:"30.61 ms"},
{axis:"SHA2-256 hash (256B)",value:0.528,title:"59.89 ms"},
{axis:"AES128 encrypt (256B)",value:0.099,title:"91.87 ms"},
{axis:"AES256 encrypt (256B)",value:0.099,title:"116.96 ms"},
{axis:"3DES encrypt (256B)",value:0.099,title:"184.56 ms"},
{axis:"3DES setKey(192b)",value:0.753,title:"12.28 ms"},
{axis:"AES setKey(128b)",value:0.756,title:"11.96 ms"},
{axis:"AES setKey(256b)",value:0.747,title:"12.54 ms"},
{axis:"SWAES oneblock (16B)",value:0.812,title:"447.74 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.887,title:"0.72 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.922,title:"3.27 ms"},
{axis:"ECC 256b genKeyPair",value:0.099,title:"570.65 ms"},
{axis:"ECDSA 256b sign",value:0.099,title:"142.16 ms"},
{axis:"ECDSA 256b verify",value:0.099,title:"210.64 ms"},
{axis:"ECDH 256b",value:0.229,title:"160.05 ms"},
{axis:"RSA1024 CRT decrypt",value:0.719,title:"123.74 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.630,title:"644.39 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);