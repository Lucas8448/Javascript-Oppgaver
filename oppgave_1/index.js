var dag = new Date();

var dager = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
var dagNavn = dager[dag.getDay()];

var dato = dag.getDate();
var måned = dag.getMonth() + 1;
var år = dag.getFullYear();

var klokke = dag.toLocaleTimeString('no-NO', {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

document.getElementById('dato').innerHTML = `${dagNavn} ${dato}.${måned}.${år}`;
document.getElementById('klokke').innerHTML = klokke;

if (dagNavn === 'Søndag') {
  document.getElementById('dato').className = 'red';
}

setInterval(function () {
  dag = new Date();
  klokke = dag.toLocaleTimeString('no-NO', {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  document.getElementById('klokke').innerHTML = klokke;
}, 1000);
