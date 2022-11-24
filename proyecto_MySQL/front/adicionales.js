async function getMedia()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            

            let url = `http://localhost:3000/Media/?id=${idFront}`
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
            
    
                div.innerHTML =( 
                `<div class="card">
                <p>Id Estudiante: ${idFront}</p>
                <p>AVG notas: ${result[0].media}</p>`)
                tarjeta.appendChild(div)     

        }
        catch(error){console.log(error)}
}

async function getApuntadas()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            

            let url;
            if(idFront =="")
            {
                url = `http://localhost:3000/Apuntadas`
            }
            else(url = `http://localhost:3000/Apuntadas/?id=${idFront}`)
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
                div.innerHTML = "" 
                for(let i=0;i<result.length;i++)
                {div.innerHTML +=
                (`<div class="card">
                <p>Nombre: ${result[i].nombre}</p>
                <p>Apellido: ${result[i].apellido} </p>
                <p>Asignatura: ${result[i].titulo} </p>`)
                tarjeta.appendChild(div)}}
            

            else
            {   div.innerHTML =( 
                `<div class="card">
                <p>Nombre: ${result[0].nombre}</p>
                <p>Apellido: ${result[0].apellido} </p>
                <p>Asignatura: ${result[0].titulo} </p>`)
                tarjeta.appendChild(div)
            }
                

        }
        catch(error){console.log(error)}
}

async function getImpartidas()
{
        try
        {
            let idFront = document.getElementById("idFront").value
            

            let url;
            if(idFront =="")
            {
                url = `http://localhost:3000/Impartidas`
            }
            else(url = `http://localhost:3000/Impartidas/?id=${idFront}`)
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
                <p>Asignatura: ${result[i].titulo} </p>`)
                tarjeta.appendChild(div)}}
            

            else
            {   div.innerHTML =( 
                `<div class="card">
                <p>Nombre: ${result[0].nombre}</p>
                <p>Apellido: ${result[0].apellido} </p>
                <p>Asignatura: ${result[0].titulo} </p>`)
                tarjeta.appendChild(div)
            }
                

        }
        catch(error){console.log(error)}
}