const autosDisponibles = [
    {marca: 'Chevrolet', modelo: 'Camaro', puertas: 2},
    {marca: 'Chevrolet', modelo: 'Cruze', puertas: 4},
    {marca: 'Ford', modelo: 'Fiesta', puertas: 4},
    {marca: 'Ford', modelo: 'Focus', puertas: 4},
    {marca: 'Ford', modelo: 'Mustang', puertas: 4},
    {marca: 'Ford', modelo: 'Fusion', puertas: 4},
    {marca: 'Ford', modelo: 'Ka', puertas: 2},
    {marca: 'Audi', modelo: 'A4', puertas: 5},
    {marca: 'Audi', modelo: 'A5', puertas: 5},
    {marca: 'Audi', modelo: 'A6', puertas: 5},
    {marca: 'Audi', modelo: 'A7', puertas: 5},
    {marca: 'Audi', modelo: 'A8', puertas: 5},
    {marca: 'Audi', modelo: 'Q5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 3', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 7', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase A', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase C', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase E', puertas: 5},
];

let autosPuertaGenaro = [];
var cuatro = 4;

//----------Punto Nro.I----------\\

const listarAutos = (autos) => {
  autos.forEach((auto) =>
    console.log(`Tenemos disponible un ${auto.marca}: ${auto.modelo} `)
  );
};
listarAutos(autosDisponibles);

//----------Punto Nro.II----------\\

const numeroPuertas = (autos, puerta) => {
  const autosPuertaGenaro = autos.filter((auto) => auto.puertas === puerta);
  return autosPuertaGenaro;
};
autosPuertaGenaro = numeroPuertas(autosDisponibles, cuatro);
listarAutos(autosPuertaGenaro);

//----------Punto Nro.III----------\\

const autosCondicional = (autos, propiedad, condicion) => {
  const propTrue = autos.every((auto) => Object.keys(auto).includes(propiedad));
  if (!propTrue) return console.log("Propiedad incorrecta");

  const autosMarcaPuertaGenaro = autos.filter((auto) => {
    if (propiedad == "marca") {
      return auto.marca == condicion;
    } else if (propiedad == "modelo") {
      return auto.modelo == condicion;
    } else {
      return auto.puertas == condicion;
    }
  });

  autosMarcaPuertaGenaro.forEach((auto) =>
    console.log(
      `Tenemos disponibles los autos ${auto.marca} ${auto.modelo} que tienen ${auto.puertas} puertas`
    )
  );

  return autosMarcaPuertaGenaro;
};

autosCondicional(autosPuertaGenaro, "puertas", cuatro);

//----------Punto Nro.IV----------\\

const comprarAuto = () => {
  const filterAuto = autosCondicional(
    numeroPuertas(autosDisponibles, cuatro), "puertas", cuatro);
  const autoComprado = filterAuto.filter((auto) => auto.modelo === "Mustang");
  const { marca, modelo, puertas } = autoComprado[0];

  return autoComprado[0];
};

const { marca, modelo, puertas } = comprarAuto();
console.log(`Felicitaciones Genaro por haber adquirido tu ${marca} ${modelo} que disfrutes sus ${puertas} puertas`);

//----------Punto Nro.IV----------\\

const listaActualizada = (autosDisponibles) => {
  const { modelo } = comprarAuto();
  const listaActualizada = autosDisponibles.filter(
    (auto) => auto.modelo !== modelo
  );

  listarAutos(listaActualizada);
};

listaActualizada(autosDisponibles); 