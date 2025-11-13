import {multypy} from "../pertemuan13/modules/script1.js"
import {sayhelo} from "../pertemuan13/modules/script2.js"
import { masukan } from "./modules/script3.js";
import { f3 } from "./modules/script4.js";


console.log(multypy(100,200));
console.log(sayhelo("rayhan"));
let nama = sayhelo("Rayhan")

masukan.innerHTML = `<h3>Assalamu alaikum, ${nama} </h3>`

// yaaa yg intinya itu kalo mau import sama export itu harus sesuai dgn lokasi sintask yg mau di import


import  * as penggabungan from '/pertemuan13/modules/script4.js';
penggabungan.hello(); 
penggabungan.bye();   

import Nama from '/pertemuan13/modules/script4.js'
const u = new Nama('Nopal');
console.log(u.name); 

// ===================================================
let aktif = async () => {
  const { f3 } = await import('/pertemuan13/modules/script4.js');
  f3();
};
//  ini gk bisa jln karena di dlm html kita udh nyebut (style="module") yg membuat  semua variable  tdk otomatis menjadi global
// yg membuat mereka mempunyai scope tersendiri  jadi variablenya tidak nempel ke window yg membuat html susah untuk 
// mengaksesnya
// =========================================================
window.aktif = async () => {
  const { f3 } = await import('/pertemuan13/modules/script4.js');
  f3();
};
