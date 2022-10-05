class Cotizador {
    constructor(m2, factorTipo, factorZona, factorAplicacion, costoM2){
        this.m2 = m2
        this.factorTi = parseFloat(factorTipo)
        this.factorAp = parseFloat(factorAplicacion)
        this.factorZo = parseFloat(factorZona)
        this.costoM2 = parseFloat(costoM2)
    }
    cotizar() {
        let resultado = (this.m2 * this.factorTi * this.factorAp * this.factorZo * this.costoM2)
        return resultado.toFixed(2)        
    }
}
