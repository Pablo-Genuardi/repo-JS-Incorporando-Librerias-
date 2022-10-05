

const cargarCombo = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        })
    } else {
        console.error("No existen elementos en el array.")
    }
}

cargarCombo(tipo, datosTipo)
cargarCombo(aplicacion, datosAplicacion)
cargarCombo(zona, datosZona)


const datosCompletos = ()=> {
    if (tipo.value !== "..." && aplicacion.value !== "..." && zona.value !== "..." && parseInt(metros2.value) && metros2.value >= 35 && metros2.value <= 13000) {
        return true
    } else {
        return false
    }
}


const cotizo = ()=> {
    const riego = new Cotizador(metros2.value, tipo.value, aplicacion.value, zona.value, CostoM2)
        importe.innerText = riego.cotizar()
        btnEnviar.classList.add("")
}

const realizarCotizacion = ()=> datosCompletos() ? cotizo() : alert()



const alert = ()=> {

    Swal.fire({
        icon: 'warning',
        title: 'Atencion!',
        text: 'Por favor, completa todos los datos solicitados',
        showCloseButton: true,
    })

}


const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        tipo: tipo[tipo.selectedIndex].text,
        aplicacion: aplicacion[aplicacion.selectedIndex].text,
        zona: zona[zona.selectedIndex].text,
        metrosCuadrados: metros2.value,
        riego: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    enviadoOk()
    btnEnviar.classList.add("ocultar")
}


const enviadoOk = ()=> {
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por su consulta!',
        showConfirmButton: false,
        timer: 1500
    })

}


btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)