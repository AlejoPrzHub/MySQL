const router = require("../routes/notas.routers");
const connection = require("../routes/database")

function getNotas(request,response)
{
    let sql;
    if(request.query.id == null)
    sql = "SELECT * FROM notas"
    else
    sql = "SELECT * FROM notas WHERE id_estudiantes=" + request.query.id;

    connection.query(sql,function(error,result)
    {
    if(error) console.log(error)
    else
    {
        response.send(result)
    }})
}


function postNotas(request,response)
{
    console.log(request.body);
    let sql = "INSERT INTO notas (id_estudiantes, id_asignatura, fecha, nota) " + "VALUES (\"" + request.body.id_estudiantes + "\", \"" + request.body.id_asignatura + "\",\"" + request.body.fecha + "\",\"" + request.body.nota + "\")";
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

function putNotas(request,response)
{
    console.log(request.body);
    let params =
    [
        request.body.id_estudiantes,
        request.body.id_asignatura,
        request.body.fecha,
        request.body.nota,
        request.body.id
    ]

    let sql = "UPDATE notas SET id_estudiantes = COALESCE(?, id_estudiantes) , " + "id_asignatura = COALESCE(?, id_asignatura) , " + "fecha = COALESCE(?, fecha) , " + "nota = COALESCE(?, nota) WHERE id = ?";
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

function delNotas(request,response)
{
    console.log(request.body);
    let sql = "DELETE FROM notas WHERE id = \""+ request.body.id+"\"";
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

module.exports = {getNotas,postNotas,putNotas,delNotas};