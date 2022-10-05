
const tipo = document.querySelector("#tipoDeSistema")
const aplicacion = document.querySelector("#tipoDeAplicacion")
const zona = document.querySelector("#zona")
const metros2 = document.querySelector("#metros2")
const btnCotizar = document.querySelector("#button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")


//Emulador de base de datos:

const datosTipo = [ {tipo: 'Riego por aspercion', factor: 2.20},
                    {tipo: 'Riego por goteo', factor: 1.60},
                    {tipo: 'Riego subterraneo', factor: 2.80},]

const datosAplicacion = [   {tipo: 'Riego para cesped', factor: 1.80},
                            {tipo: 'Riego para huertas', factor: 1.35},
                            {tipo: 'Riego para canteros', factor: 1.45},]
                        

const datosZona = [ {tipo: 'CABA', factor: 1.70},
                    {tipo: 'Zona Norte', factor: 1.00},
                    {tipo: 'Zona Este', factor: 1.90},
                    {tipo: 'Zona Oeste', factor: 1.90},
                    {tipo: 'Zona sur', factor: 2.40},]

const CostoM2 = 960.50