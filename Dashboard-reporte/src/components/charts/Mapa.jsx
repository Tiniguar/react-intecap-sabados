import React from "react";
import { Chart } from "react-google-charts";
import{ GeoPosicion} from '../../db/GeoPosicion';
//agrega los encabezados
export const data = [
    ["Pais", "Venta"],
];
//recorre los datos de los paises con sus ventas.
GeoPosicion.map((x)=>{    
    data.push ([x.nombre, x.venta])
});
//conjunto de opciones para la grafica.
export const options = {
    title: "Paises - Producto",   
    vAxis: { format: "decimal" },
    height: 300,
    width: 450,   
    legend: { position: "top", maxLines: 3 },
};
export default function Mapa() {
    return (
        //retorna una grafica de tipo mapa o geoposicion.
        <Chart
            chartEvents={[
                {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data}            
        />
    );
}
