// // function tt() {
// //     let vl= +document.getElementById("vl").value;
// //     let hh = +document.getElementById("hoaHoc").value;
// //     let sh = +document.getElementById("sinhHoc").value;
// //
// //        // tb = (Number(vl)+ Number(hh)+ Number(sh))/3;
// //     tb = (vl+hh+sh)/3;
// //       document.getElementById("ketqua").value= tb;
//
// }
function chuyendoi() {
    let tC = +document.getElementById("doC").value;
    let tF = (tC/5)*9+32;
    document.getElementById("doF").innerText = tF+" độ F" ;
}