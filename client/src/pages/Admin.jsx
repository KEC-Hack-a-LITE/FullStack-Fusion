import React from "react";
const ProductTable = () => {
  return (
    <>
      <div className="relative overflow-x-auto table_section">
        <h1>USER TABLE</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Blood Group
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Height
              </th>
              <th scope="col" className="px-6 py-3">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                John Doe
              </th>
              <td className="px-6 py-4">1963-10-12</td>
              <td className="px-6 py-4">M</td>
              <td className="px-6 py-4">AB+</td>
              <td className="px-6 py-4">9843818700</td>
              <td className="px-6 py-4">Kathmandu</td>
              <td className="px-6 py-4">180cm</td>
              <td className="px-6 py-4">80kg</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emily Smith
              </th>
              <td className="px-6 py-4">1960-11-19</td>
              <td className="px-6 py-4">F</td>
              <td className="px-6 py-4">O-</td>
              <td className="px-6 py-4">9834646752</td>
              <td className="px-6 py-4">Bharatpur</td>
              <td className="px-6 py-4">134cm</td>
              <td className="px-6 py-4">60kg</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse
              </th>
              <td className="px-6 py-4">1990-05-05</td>
              <td className="px-6 py-4">M</td>
              <td className="px-6 py-4">B-</td>
              <td className="px-6 py-4">9764565677</td>
              <td className="px-6 py-4">Dhangadi</td>
              <td className="px-6 py-4">177cm</td>
              <td className="px-6 py-4">75kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="relative overflow-x-auto table_section">
        <h1>DOCTOR TABLE</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                NMC Number
              </th>
              <th scope="col" className="px-6 py-3">
                Available Time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Ayushman Sharma
              </th>
              <td className="px-6 py-4">ENT</td>
              <td className="px-6 py-4">1245457</td>
              <td className="px-6 py-4">12-1,1-2,2-3</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sharma
              </th>
              <td className="px-6 py-4">NEURO</td>
              <td className="px-6 py-4">767677</td>
              <td className="px-6 py-4">8-9,10-11,3-4</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dasd Sharma
              </th>
              <td className="px-6 py-4">Ortho</td>
              <td className="px-6 py-4">124767</td>
              <td className="px-6 py-4">4-5,5-6,6-7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="relative overflow-x-auto table_section">
        <h1>APPOINTMENT TABLE</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Appointment of
              </th>
              <th scope="col" className="px-6 py-3">
                Appointment with
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                John Doe
              </th>
              <td className="px-6 py-4">Ayushman Sharma</td>
              <td className="px-6 py-4">ENT</td>
              <td className="px-6 py-4">1-2</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse
              </th>
              <td className="px-6 py-4">Dasd Sharma</td>
              <td className="px-6 py-4">Ortho</td>
              <td className="px-6 py-4">6-7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
