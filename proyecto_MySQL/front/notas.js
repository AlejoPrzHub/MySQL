class Notas
{
    id_estudiantes;
    id_asignatura;
    fecha;
    nota;

    constructor(id_estudiantes,id_asignatura,fecha,nota)
    {
        this.id_estudiantes = id_estudiantes;
        this.id_asignatura = id_asignatura;
        this.fecha = fecha;
        this.nota = nota;
    }
}


async function postNotas()
{
    try
    {
        
        // let nombre = document.getElementById("id_estudiantes").value;
        // let apellido = document.getElementById("id_asignatura").value;
        // let id_grupo = document.getElementById("fecha").value;
        // let anyo_ingreso = document.getElementById("nota").value;

        let notas = new Notas(document.getElementById("id_estudiantes").value,
                                        document.getElementById("id_asignatura").value,
                                        document.getElementById("fecha").value,
                                        document.getElementById("nota").value)
        //let notas = {"id_estudiantes":id_estudiantes,"id_asignatura":id_asignatura,"fecha":fecha,"nota":nota}
        let url = "http://localhost:3000/Notas";
        let params =
        {
            headers:{"Content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify(notas),
            method:"POST"
        }
        let data = await fetch(url,params);
        let result = await data.json()
        console.log(result)
        
    }
    catch(error)
    {console.log(error)}
}

async function getNotas()
{
        try
        {
            let idFront = document.getElementById("id_estudiantes").value
        

            let url;
            if(idFront =="")
            {
                url = `http://localhost:3000/Notas`
            }
            else(url = `http://localhost:3000/Notas/?id=${idFront}`)
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                method:"GET"
                
            }
            
            let data = await fetch(url,param);
            let result = await data.json()
            console.log(result);
            let tarjeta = document.getElementById("prof")
            let div = document.createElement("div")
            
            if(result.length > 1)
            {
                tarjeta.innerHTML = "" 
                for(let i=0;i<result.length;i++)
                {div.innerHTML +=
                (`<div class="card">
                <p>ID Estudiante: ${result[i].id_estudiantes}</p>
                <p>ID Asignatura: ${result[i].id_asignatura} </p>
                <p>Fecha de la nota: ${result[i].fecha} </p>
                <p>Nota: ${result[i].nota} </p>`)
                tarjeta.appendChild(div)}}
            
            else
            {   
                div.innerHTML =( 
                `<div class="card">
                <p>ID Estudiante: ${result[0].id_estudiantes}</p>
                <p>ID Asignatura: ${result[0].id_asignatura} </p>
                <p>Fecha de la nota: ${result[0].fecha} </p>
                <p>Nota: ${result[0].nota} </p>`)
                tarjeta.appendChild(div)
            }
                

        }
        catch(error){console.log(error)}
}

async function delNotas()
{
    try
    {
        let idFront = document.getElementById("idFront").value
        let url = "http://localhost:3000/Notas";
        let param =
        {
            headers:{"Content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify({"id": idFront}),
            method:"DELETE"
        }
      
        let data = await fetch(url,param);
        let result = await data.json()
       
        console.log(result)
    }
    catch(error){console.log(error)}
}

async function putNotas()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            let id_estudiantes = document.getElementById("id_estudiantes").value;
            let id_asignatura = document.getElementById("id_asignatura").value;
            let fecha = document.getElementById("fecha").value;
            let nota = document.getElementById("nota").value;
            
            let nuevo = {"id_estudiantes":id_estudiantes ? id_estudiantes:null,"id_asignatura":id_asignatura ? id_asignatura:null,"fecha":fecha ? fecha:null,"nota":nota ? nota:null,"id":idFront}
            let url = "http://localhost:3000/Notas";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(nuevo),
                method:"PUT"
            }
            let data = await fetch(url,param);
            let result = await data.json()
            
            console.log(result)
        }
        catch(error){console.log(error)}
}