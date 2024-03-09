import React from "react";

type Props = {};
// const data = testIncomeStatementData;
// type Company = (typeof data)[0];
// const config = [
//   {
//     label: "Year",
//     render: (company: Company) => company.acceptedDate,
//   },
//   {
//     label: "Cost Of Revenue",
//     render: (company: Company) => company.costOfRevenue,
//   },
// ];

function Table({}: Props) {
//   const renderedRows = data.map((company) => {
//     return (
//       <tr key={company.cik}>
//         {config.map((val: any) => (
//           <td key={val.label}>{val.render(company)}</td>
//         ))}
//       </tr>
//     );
//   });
//   const renderedHeaders = config.map((element: any) => {
//     return <th>{element.label}</th>;
//   });
  return <>
  {/* <table className="w-full">
    <thead>{renderedHeaders}</thead>
    <tbody>{renderedRows}</tbody>
  </table> */}
  </>;
}

export default Table;
