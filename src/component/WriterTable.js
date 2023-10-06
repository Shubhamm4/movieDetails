import React from 'react';

function WriterTable({ writersWithDetails }) {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8">
      <h1 className="text-3xl font-bold text-white mb-4">List of Writers</h1>
      <table className="w-full border-collapse shadow-lg bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-pink-500 to-purple-400 text-white">
            <th className="py-2 px-4">Writer</th>
            <th className="py-2 px-4">Movie</th>
            <th className="py-2 px-4">Year</th>
          </tr>
        </thead>
        <tbody>
          {writersWithDetails.map((writerDetail, index) => (
            <tr
              key={index}
              className={`transition duration-300 ease-in-out hover:shadow-md ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <td className="py-2 px-4">{writerDetail.Writer}</td>
              <td className="py-2 px-4">{writerDetail.Title}</td>
              <td className="py-2 px-4 ">{writerDetail.Year}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      );
}

export default WriterTable;
