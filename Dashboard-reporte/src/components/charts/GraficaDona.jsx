import React from "react";
import { Chart } from "react-google-charts";
import{ Productos} from '../../db/Productos';

// agrega lasetiquetas o encabezados a los datos 
export const data = [
    ["Producto", "Precio"],
    
];

// recorremos el listado de producto. y lo agregarmos a los datos 
Productos.map((x)=>{    
    data.push ([x.nombre, x.precio])
});

// creacion un conjunto de opciones para la grafica.
export const options = {
    title: "Grafica Dona - Producto vs Precio",    
    vAxis: { format: "decimal" },
    height: 300,
    width: 450,
    legend: { position: "right", maxLines: 5 },
    pieHole: 0.4, // indicar que el centro hay un espacio vacio
    is3D: false,  // la figura no es 3D
};

export default function GraficaDona() {
    return (
        //retorna una  grafica de tipo pie.
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
