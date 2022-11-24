const router = require("../routes/adicionales.routers");
const connection = require("../routes/database")

function getMedia(request,response)
{
    let sql = "SELECT AVG(nota) AS media FROM notas WHERE id_estudiantes=" + request.query.id;

    connection.query(sql,function(error,result)
    {
    if(error) console.log(error)
    else
    {
        response.send(result)
    }})
}

function getApuntadas(request,response)
{
    let sql;
    if(request.query.id == null)
    sql = "SELECT estudiantes.nombre, estudiantes.apellido, asignaturas.titulo FROM estudiantes JOIN grupos ON (estudiantes.id_grupo = grupos.id) JOIN profesor_asignatura ON (grupos.id = profesor_asignatura.id_grupo) JOIN asignaturas ON (profesor_asignatura.id_asignaturas = asignaturas.id) GROUP BY titulo"
    else
    sql = "SELECT estudiantes.nombre, estudiantes.apellido, asignaturas.titulo FROM estudiantes  JOIN grupos ON (estudiantes.id_grupo = grupos.id) JOIN profesor_asignatura ON (grupos.id = profesor_asignatura.id_grupo) JOIN asignaturas ON (profesor_asignatura.id_asignaturas = asignaturas.id) WHERE estudiantes.id =" + request.query.id +" GROUP BY titulo" ;

    connection.query(sql,function(error,result)
    {
    if(error) console.log(error)
    else
    {
        response.send(result)
    }})
}

function getImpartidas(request,response)
{
    let sql;
    if(request.query.id == null)
    sql = "SELECT profesores.nombre, profesores.apellido, asignaturas.titulo FROM profesores JOIN profesor_asignatura ON (profesores.id = profesor_asignatura.id_profesores) JOIN asignaturas ON (profesor_asignatura.id_asignaturas = asignaturas.id) GROUP BY titulo"
    else
    sql = "SELECT profesores.nombre, profesores.apellido, asignaturas.titulo FROM profesores JOIN profesor_asignatura ON (profesores.id = profesor_asignatura.id_profesores) JOIN asignaturas ON (profesor_asignatura.id_asignaturas = asignaturas.id) WHERE profesores.id =" + request.query.id +" GROUP BY titulo" ;

    connection.query(sql,function(error,result)
    {
    if(error) console.log(error)
    else
    {
        response.send(result)
    }})
}



module.exports = {getMedia,getApuntadas,getImpartidas};