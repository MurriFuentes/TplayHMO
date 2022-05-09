import React from 'react'
import { Table, Fila } from "react-bootstrap";

function TablaPrecios({ formState }) {
    return (
        <>
            <div className="border border-dark font-weight-bolder p-3">
                <Table className="w-100 m-auto bg-dark text-white">
                    <thead className="bg-success">
                        <tr>
                            <th className="tabla-elemento w-75">Concepto</th>
                            <th className="tabla-elemento w-25">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formState.televisionValue == "0" && <tr>
                            <td className="tabla-elemento">Internet {formState.megasValue} megas</td>
                            <td className="tabla-elemento">100</td>
                        </tr>}
                        {formState.televisionValue == "1" && <tr>
                            <td className="tabla-elemento">TV + Internet {formState.megasValue} megas</td>
                            <td className="tabla-elemento">200</td>
                        </tr>}
                        {formState.televisionValue == "2" && <tr>
                            <td className="tabla-elemento">Nuevo TotalPlay TV +  Internet {formState.megasValue} megas</td>
                            <td className="tabla-elemento">300</td>
                        </tr>}
                        {formState.canalesValue == "1" && <tr>
                            <td className="tabla-elemento">140 Canales</td>
                            <td className="tabla-elemento">400</td>
                        </tr>}
                        {formState.canalesValue == "2" && <tr>
                            <td className="tabla-elemento">230 Canales</td>
                            <td className="tabla-elemento">500</td>
                        </tr>}
                        {formState.canalesValue == "3" && <tr>
                            <td className="tabla-elemento">280 Canales</td>
                            <td className="tabla-elemento">600</td>
                        </tr>}
                        {formState.tvPremiumValue == "1" && <tr>
                            <td className="tabla-elemento">HBO</td>
                            <td className="tabla-elemento">700</td>
                        </tr>}
                        {formState.tvPremiumValue == "2" && <tr>
                            <td className="tabla-elemento">Star Premium</td>
                            <td className="tabla-elemento">800</td>
                        </tr>}
                        {formState.streamingValue == "1" && <tr>
                            <td className="tabla-elemento">Netflix</td>
                            <td className="tabla-elemento">800</td>
                        </tr>}
                        {formState.streamingValue == "2" && <tr>
                            <td className="tabla-elemento">Prime Video</td>
                            <td className="tabla-elemento">800</td>
                        </tr>}
                        {formState.wifiExtenderValue >0 && <tr>
                            <td className="tabla-elemento">Wifi Extender: {formState.wifiExtenderValue}</td>
                            <td className="tabla-elemento">{formState.wifiExtenderValue*50}</td>
                        </tr>}
                        {formState.tvExtraValue >0 && <tr>
                            <td className="tabla-elemento">TV Extra: {formState.tvExtraValue}</td>
                            <td className="tabla-elemento">{formState.tvExtraValue*129}</td>
                        </tr>}
                        <tr className='bg-success'>
                            <td className="tabla-elemento">Total</td>
                            <td className="tabla-elemento">Indefinido</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TablaPrecios