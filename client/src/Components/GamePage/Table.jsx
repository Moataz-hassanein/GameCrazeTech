import React from "react";
import "../../Style/Table.css";

const Table = ({ game }) => {
  return (
    <table className="lg:w-6/12 xl:w-6/12 2xl:w-6/12 table-container m-4 text-xs sm:text-lg">
      <thead>
        <tr>
          <th className="sm:text-2xl p-3">Minimum Requirements</th>
          <th className="sm:text-2xl">Recommended Requirements</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td className="p-2">
            <div>OS</div>
            <div>{game["minimum_requirements"].os || "-"}</div>
          </td>
          <td className="p-2">
            <div>OS</div>
            <div>{game["recommended_requirements"].os || "-"}</div>
          </td>
        </tr>
        <tr>
          <td className="p-2">
            <div>CPU</div>
            <div>{game["minimum_requirements"].processor || "-"}</div>
          </td>
          <td className="p-2">
            <div>CPU</div>
            <div>{game["recommended_requirements"].processor || "-"}</div>
          </td>
        </tr>
        <tr>
          <td className="p-2">
            <div>RAM</div>
            <div>{game["minimum_requirements"].memory || "-"}</div>
          </td>
          <td className="p-2">
            <div>RAM</div>
            <div>{game["recommended_requirements"].memory || "-"}</div>
          </td>
        </tr>
        <tr>
          <td className="p-2">
            <div>GPU</div>
            <div>{game["minimum_requirements"].graphics || "-"}</div>
          </td>
          <td className="p-2">
            <div>GPU</div>
            <div>{game["recommended_requirements"].graphics || "-"}</div>
          </td>
        </tr>
        <tr>
          <td className="p-2">
            <div>DIRECT-X</div>
            <div>{game["minimum_requirements"].directx || "-"}</div>
          </td>
          <td className="p-2">
            <div>DIRECT-X</div>
            <div>{game["recommended_requirements"].directx || "-"}</div>
          </td>
        </tr>
        <tr>
          <td className="p-2">
            <div>STORAGE</div>
            <div>{game["minimum_requirements"].storage || "-"}</div>
          </td>
          <td className="p-2">
            <div>STORAGE</div>
            <div>{game["recommended_requirements"].storage || "-"}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;