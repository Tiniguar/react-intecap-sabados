import React,{useEffect, useState} from "react";
// importar la fotos
import images from "../image/images.jpeg"

const ApiPlaceHolder =() =>{
    const [usuarios,setUsuarios]= useState([]);

    useEffect(()=>{
        console.log('Use efecct ejecutado');

        getApiUserPlaceHolder();
    },[]);

    const getApiUserPlaceHolder = async()=>{
        try{
            // se obtiene los datos en la API
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const users = await response.json();
            console.log(users);
            setUsuarios(users);
            console.info('Usuario', usuarios);

        }
        catch(error){
            console.error(error);
        }

    }

    return (
        <div className="container">
            <h2 className="text-success"> Consumo API PlaceHolde </h2>
            <div className="container py-5">
                <div className="row">
                
                    {
                        //itera cada usuario en la lista
                        usuarios.map((item)=>{
                        return( <div class="col-sm-6"> 
                                    <div className="card mb-4" key={item.id}>
                                        <div className="row g-0">
                                            <div className="col-md-6">
                                                <img src={images} className="img-fluid" alt="{item.name}"/>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <h5 className="card-title">Nombre: {item.name}</h5>
                                                    <h5 className="card-title">Usuario: {item.username}</h5>
                                                    <h5 className="card-title">Email: {item.email}</h5>
                                                    <div className="container px-4">
                                                        
                                                        <p className="card-text">Calle: {item.address.street}</p>
                                                        <p className="card-text">Ciudad: {item.address.city}</p>
                                                        <p className="card-text">Codido Postal: {item.address.zipcode}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ApiPlaceHolder;
