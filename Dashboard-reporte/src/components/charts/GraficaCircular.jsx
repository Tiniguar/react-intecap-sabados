import React from "react";
import { Chart } from "react-google-charts";
import{ Productos} from '../../db/Productos';
//agregamos los encabezados.
export const data = [
    ["Producto", "Precio"],
];

// recoremos los productos para agregarlos a los datos.
Productos.map((x)=>{    
    data.push ([x.nombre, x.precio])
});

//conjunto de opcion para la grafica.
export const options = { 
    title: "Grafica Circular - Producto por Precio",   
    vAxis: { format: "decimal" },
    height: 300,
    width: 450,   
    legend: { position: "right", maxLines: 3 },
};

export default function GraficaCircular() {
    return (
        //regra una grafica de tipo pie.
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
