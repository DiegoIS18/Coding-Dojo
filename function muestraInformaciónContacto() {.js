function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//      variables/datos
//auntContactInfo/["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]//
//["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]//

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//      Variable/Datos
//        produce/["manzanas", "naranjas"]
//          frozen/["brócoli", "helado"]-> ["brócoli", "helado", "croqueta de papa"]//

//["brócoli", "helado", "croqueta de papa"]

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
//    variable/Datos
//movielibrary/["Bambi", "E.T.", "Toy Story"]->["Bambi", "E.T.", "Toy Story","zoro"]->["Bambi", "Beetlejuice", "Toy Story", "zoro"]//
//["Bambi", "Beetlejuice", "Toy Story", "zoro"]