import React from "react";
export default ({ theadKeyMap, tbodyValueMap }) => (
    <table style={{ width: '50%', margin: '0 auto' }}>
        <thead>
            <tr>
                {
                    theadKeyMap.map(value => <th key={value}>{value.toUpperCase()}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                tbodyValueMap.map((value, index) => {
                    return <tr key={index}>
                        {
                            Object.values(value).map((values, index) => {
                                return <td key={index}>{values}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
)
