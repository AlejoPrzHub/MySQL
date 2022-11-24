const router = require("../routes/estudiantes.routers");
const connection = require("../routes/database")

function getEstudiantes(request,response)
{
    let sql;
    if(request.query.id == null)
    sql = "SELECT * FROM estudiantes"
    else
    sql = "SELECT * FROM estudiantes WHERE id=" + request.query.id;

    connection.query(sql,function(error,result)
    {
    if(error) console.log(error)
    else
    {
        response.send(result)
    }})
}

// function getEstudiantes2(request,response)
// {
//     let sql = "SELECT * FROM estudiantes WHERE id=" + request.query.id;

//     connection.query(sql,function(error,result)
//     {
//     if(error) console.log(error)
//     else
//     {
//         response.send(result)
//     }})
// }


function postEstudiantes(request,response)
{
    console.log(request.body);
    let sql = "INSERT INTO estudiantes (nombre, apellido, id_grupo, anyo_ingreso) " + "VALUES (\"" + request.body.nombre + "\", \"" + request.body.apellido + "\",\"" + request.body.id_grupo + "\",\"" + request.body.anyo_ingreso + "\")";
    console.log(sql);
    connection.query(sql, function(error,result)
    {
        if (error)
        console.log(error)
        else
        {
            console.log(result);
            if(result.insertId)
            response.send(String(result.insertId));
            else
            response.send ("-1")
        }
    })
}

function putEstudiantes(request,response)
{
    console.log(request.body);
    let params =
    [
        request.body.nombre,
        request.body.apellido,
        request.body.id_grupo,
        request.body.anyo_ingreso,
        request.body.id
    ]

    let sql = "UPDATE estudiantes SET nombre = COALESCE(?, nombre) , " + "apellido = COALESCE(?, apellido) , " + "id_grupo = COALESCE(?, id_grupo) , " + "anyo_ingreso = COALESCE(?, anyo_ingreso) WHERE id = ?";
    console.log(sql);
    connection.query(sql,params,function(error, result)
    {
        if(error)
        console.log(error)
        else
        {
            response.send(result)
        }

    })
}

function delEstudiantes(request,response)
{
    console.log(request.body);
    let sql = "DELETE FROM estudiantes WHERE id = \""+ request.body.id+"\"";
    console.log(sql);
    connection.query(sql,function(error,result)
    {
        if(error)
        console.log(error);
        else
        {
            response.send(result);
        }
    })
}

module.exports = {getEstudiantes,postEstudiantes,putEstudiantes,delEstudiantes};