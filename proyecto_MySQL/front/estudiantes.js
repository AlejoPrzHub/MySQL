class Estudiante
{
    nombre;
    apellido;
    id_grupo;
    anyo_ingreso;

    constructor(nombre,apellido,id_grupo,anyo_ingreso)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id_grupo = id_grupo;
        this.anyo_ingreso = anyo_ingreso;
    }
}


async function postEstudiantes()
{
    try
    {
        
        // let nombre = document.getElementById("nombre").value;
        // let apellido = document.getElementById("apellido").value;
        // let id_grupo = document.getElementById("id_grupo").value;
        // let anyo_ingreso = document.getElementById("anyo_ingreso").value;

        let estudiante = new Estudiante(document.getElementById("nombre").value,
                                        document.getElementById("apellido").value,
                                        document.getElementById("id_grupo").value,
                                        document.getElementById("anyo_ingreso").value)
        console.log(estudiante);
        //let estudiante = {"nombre":nombre,"apellido":apellido,"id_grupo":id_grupo,"anyo_ingreso":anyo_ingreso}
        let url = "http://localhost:3000/Estudiantes";
        let params =
        {
            headers:{"Content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify(estudiante),
            method:"POST"
        }
        let data = await fetch(url,params);
        let result = await data.json()
        console.log(result)
        
    }
    catch(error)
    {console.log(error)}
}

async function getEstudiantes()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            

            let url;
            if(idFront =="")
            {
                url = `http://localhost:3000/Estudiantes`
            }
            else(url = `http://localhost:3000/Estudiantes/?id=${idFront}`)
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
                <p>Nombre: ${result[i].nombre}</p>
                <p>Apellido: ${result[i].apellido} </p>
                <p>Grupo: ${result[i].id_grupo} </p>
                <p>Año de ingreso: ${result[i].anyo_ingreso} </p>`)
                tarjeta.appendChild(div)}}
            

            else
            {   div.innerHTML =( 
                `<div class="card">
                <p>Nombre: ${result[0].nombre}</p>
                <p>Apellido: ${result[0].apellido} </p>
                <p>Grupo: ${result[0].id_grupo} </p>
                <p>Año de ingreso: ${result[0].anyo_ingreso} </p>`)
                tarjeta.appendChild(div)
            }
                

        }
        catch(error){console.log(error)}
}

async function delEstudiantes()
{
    try
    {
        let idFront = document.getElementById("idFront").value
        let url = "http://localhost:3000/Estudiantes";
        let param =
        {
            headers:{"Content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify({"id": idFront}),
            method:"DELETE"
        }
        //console.log(param)
        let data = await fetch(url,param);
        let result = await data.json()
        //result.splice(id,1)
        
        console.log(result)
    }
    catch(error){console.log(error)}
}

async function putEstudiantes()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let id_grupo = document.getElementById("id_grupo").value;
            let anyo_ingreso = document.getElementById("anyo_ingreso").value;
            
            let nuevo = {"nombre":nombre ? nombre:null,"apellido":apellido ? apellido:null,"id_grupo":id_grupo ? id_grupo:null,"anyo_ingreso":anyo_ingreso ? anyo_ingreso:null,"id":idFront}
            let url = "http://localhost:3000/Estudiantes";
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
