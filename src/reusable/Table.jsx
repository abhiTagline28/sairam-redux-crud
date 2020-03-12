import React from "react";
export default ({ theadKeyMap, tbodyValueMap }) => (

    <table key={Math.random()} style={{ width: '50%', margin: '0 auto' }}>
        <thead>
            <tr>
                {
                    theadKeyMap.map(value => <th key={value} >{value.toUpperCase()}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                tbodyValueMap.map(({ ...all }, index) => {
                    return <tr key={index}>
                        {
                            Object.values(all).map((values, index) => {
                                return <td key={index}>{values}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
)
