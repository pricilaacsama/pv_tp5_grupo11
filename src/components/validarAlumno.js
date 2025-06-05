function validarAlumno (alumno, alumnos) {
    let valido=true;
    const tel = /^\d{10}$/;
    const lu = /^\d{4}$/;
    let mensaje = "";
    if(!tel.test(alumno.telefono)){
            valido=false; mensaje=mensaje+"Telefono no valido (10 digitos). "
    }
    if(!lu.test(alumno.lu)){
            valido=false; mensaje=mensaje+"LU no valido (4 digitos). ";
    }
    else{
        alumnos.forEach(element => {
            if(alumno.lu == element.lu)
                if(alumno.id !== element.id){
                    valido=false; mensaje=mensaje+"LU ya registrado. ";
                }
    });
    }
    return [valido, mensaje]
}
export default validarAlumno;