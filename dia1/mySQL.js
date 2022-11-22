let mysql = require("mysql2")
let connection = mysql.createConnection
({
        host:"127.0.0.1",
        user:"root",
        password:"Joseale12perez!",
        database:"codenotch_2"
});

connection.connect(function(error)
{
    if(error){console.log(error)}
    else{console.log("conexion correcta")}
})
//RETO1
                                                                                                                                                    //CREAR TABLA
// let sql ="CREATE TABLE colegio (id_col INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(20), calle VARCHAR(20), numero INT)"; 

// connection.query(sql, function(error,result)
// {
//     if(error) console.log(error);
//     else
//     {
//         console.log("tabla creada");
//         console.log(result);
//     }
// })

                                                                                                                                                        //INSERTAR COLUMNA
// let sql = "INSERT INTO colegio (id_col, nombre,calle,numero) VALUES (2,\"juanco\",\"perez\",20)";
// connection.query(sql,function(error,result)
// {
//     if(error)
//     console.log(error);
//     else
//     {
//         console.log("DATO INSERTADO");
//         console.log(result);
//     }
// })

                                                                                                                                                        //BORRAR COLUMNA
// let sql4 = "DELETE FROM colegio WHERE(`id_col`= 2)"
// connection.query(sql4,function(error,result)
// {
//     if(error)
//     console.log(error);
//     else
//     {
//         console.log("COLUMNA ELIMINADA");
//         console.log(result);
//     }
// })




                                                                                                                                                            //ELIMINAR TABLA
// let sql2 ="DROP TABLE colegio";
// connection.query(sql2, function(error,result)
// {
//     if(error) throw error;
//     console.log("tabla eliminada")
// })



//RETO2
// let sql2 ="USE codenotch_2"
// connection.query(sql2,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("listo");
//         console.log(result);
//     }
// })


                                                    //ACTUALIZAR DATOS
// let sql = "UPDATE notas SET nota = 0";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("DATO ACTUALIZADO");
//         console.log(result);
//     }
// })
                                                    //OBTENER DATOS ALUMNOS
// let sql = "SELECT nombre, apellido FROM estudiantes"
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION REALIZADA");
//         console.log(result)
//     }
// })
                                                    //OBTENER DATOS PROFESORES
// let sql = "SELECT * FROM profesores"
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION REALIZADA");
//         console.log(result)
//     }
// })



//RETO3

// let sql = "DELETE FROM notas WHERE `id` = 1"
// connection.query(sql,function(error,result)
// {
//     if(error)
//     console.log(error);
//     else
//     {
//         console.log("COLUMNA ELIMINADA");
//         console.log(result);
//     }
// })


// let sql = "UPDATE notas SET nota = 5 WHERE nota < 5";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("DATO ACTUALIZADO");
//         console.log(result);
//     }
// })
