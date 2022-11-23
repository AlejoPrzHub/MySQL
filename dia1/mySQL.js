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








//////////////////////////DIA 2/////////////////////////////////////

                                                ///RETO 1.1
// let sql = "SELECT AVG(nota) FROM notas";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("AVG CORRECTO");
//         console.log(result);
//     }
// })

                                                //RETO1.2
// let sql = "SELECT COUNT(*) AS total_alumnos FROM estudiantes";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("TOTAL DE ALUMNOS");
//         console.log(result);
//     }
// })
                                            //RETO1.3
// let sql = "SELECT * FROM grupos";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION CORRECTA");
//         console.log(result);
//     }
// })
                                                //RETO1.4
// let sql = "DELETE nota FROM notas WHERE nota > 5 AND fecha > 2021/01/01";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION CORRECTA");
//         console.log(result);
//     }
// })

                                                //RETO 1.5 
// let sql = "SELECT * FROM estudiantes WHERE anyo_ingreso =2022";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION CORRECTA");
//         console.log(result);
//     }
// })
                                            //RETO 1.6
// let sql = "SELECT id_asignaturas, COUNT(*) AS prof_xasig FROM profesor_asignatura GROUP BY id_asignaturas";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION CORRECTA");
//         console.log(result);
//     }
// })

                                                //RETO2

// let sql = "SELECT id_estudiantes, nota FROM notas WHERE id_estudiantes BETWEEN 1 AND 20 OR nota > 8 AND fecha BETWEEN \"2021-01-01\" AND \"2021-31-12\"";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION CORRECTA");
//         console.log(result);
//     }
// })

                                        //RETO 2.1


// let sql = "SELECT AVG(nota), COUNT(id_asignatura) AS id_asig FROM notas WHERE fecha BETWEEN \"2022-01-01\" AND \"2022-12-12\" GROUP BY id_asignatura";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION CORRECTA");
//         console.log(result);
//     }
// })
                                            //RETO 2.2

// let sql = "SELECT AVG(nota), COUNT(*) AS alumnosxasig FROM notas WHERE fecha BETWEEN \"2022-01-01\" AND \"2022-12-12\" GROUP BY id_estudiantes";
// connection.query(sql,function(error,result)
// {
//     if(error) console.log(error)
//     else
//     {
//         console.log("SELECCION CORRECTA");
//         console.log(result);
//     }
// })