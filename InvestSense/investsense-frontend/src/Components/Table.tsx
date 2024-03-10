import React from "react";

interface Props {
    config: any,
    data: any
}

function Table({ config, data }: Props) {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => (
                    <td  className="text-md text-center p-2" key={val.label}>{val.render(company)}</td>
                ))}
            </tr>
        );
    });

    const renderedHeaders = config.map((element: any) => {
        return <th className="text-md p-2" key={element.label} >{element.label}</th>;
    });

    return (
        <div className="overflow-x-auto ">
            <table className="min-w-max">
                <thead>
                    {renderedHeaders}
                </thead>
                <tbody>{renderedRows}</tbody>
            </table>
        </div>
    );
}

export default Table;
