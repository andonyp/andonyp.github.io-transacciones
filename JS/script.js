document.getElementById('boton-descarga').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('formulario-ive'));

    
    function formatDate(date) {
        return date.replace(/-/g, ''); 
    }

    const data = {
        fechaTransaccion: formatDate(formData.get('fecha-transaccion')) || '',
        numeroCuenta: formData.get('numero-cuenta') || '',
        caracteristicaTransaccion: formData.get('caracteristicas-transaccion') || '',
        tipoCuenta: formData.get('tipo-cuenta') || '',
        tipoTransaccion: formData.get('tipo-transaccion') || '',
        tipoMoneda: formData.get('tipo-moneda') || '',
        montoTransaccion: formData.get('monto-transaccion') || '',
        tipocambio: formData.get('tipo-cambio') || '',
        montoDolares: formData.get('monto-dolares') || '',
        municipio: formData.get('municipio') || '',
        codigoAgencia: formData.get('codigo-agencia') || '',
        descripcion: formData.get('descripcion-transaccion') || '',
        // Información del Cliente
        tipoCliente: formData.get('tipo-cliente') || '',
        razonSocial: formData.get('razon-social') || '',
        primerNombre: formData.get('primer-nombre') || '',
        segundoNombre: formData.get('segundo-nombre') || '',
        apellidoCasada: formData.get('apellido-casada') || '',
        primerApellido: formData.get('primer-apellido') || '',
        segundoApellido: formData.get('segundo-apellido') || '',
        origenPersona: formData.get('origen-persona') || '',
        tipoIdentificacion: formData.get('tipo-identificacion') || '',
        otroTipoId: formData.get('otra-identificacion') || '',
        numeroIdentificacion: formData.get('numero-identificacion') || '',
        //Informacion de terceros  
        primerApellidoTercero: formData.get('primer-apellido-tercero') || '',
        segundoApellidoTercero: formData.get('segundo-apellido-tercero') || '',
        apellidoCasadaTercero: formData.get('apellido-casada-tercero') || '',
        primerNombreTercero: formData.get('primer-nombre-tercero') || '',
        segundoNombreTercero: formData.get('segundo-nombre-tercero') || '',
        tipoIdentificacionTercero: formData.get('tipo-identificacion-tercero') || '',
        numeroIdentificacionTercero: formData.get('numero-identificacion-tercero') || '',
        nacionalidadTercero: formData.get('nacionalidad-tercero') || '',
    };

    let fileContent = '';
    for (const key in data) {
        fileContent += `${data[key]}&&`;
    }

    fileContent = fileContent.slice(0, -2); 
    const blob = new Blob([fileContent], { type: 'text/plain' }); 
    const link = document.createElement('a'); 
    link.href = URL.createObjectURL(blob); 
    link.download = 'transaccion.txt';
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
});
