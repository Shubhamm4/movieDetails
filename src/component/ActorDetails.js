import React from 'react'

const ActorDetails = ({ actorsInfo }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8">
    <h1 className="text-3xl font-bold text-white mb-4">List of Actors</h1>
    <table className="w-full border-collapse shadow-lg bg-white rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-pink-500 to-purple-400 text-white">
          <th className="py-2 px-4">Actor Name</th>
          <th className="py-2 px-4">Movie Title</th>
          <th className="py-2 px-4">Year</th>
          <th className="py-2 px-4">Country</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(actorsInfo).map((actorName, index) => (
          <tr
            key={index}
            className={`transition duration-300 ease-in-out hover:shadow-md ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <td className="py-2 px-4">{actorName}</td>
            <td className="py-2 px-4">
              {actorsInfo[actorName].map((movie, index) => (
                <div key={index}>{movie.Title}</div>
              ))}
            </td>
            <td className="py-2 px-4">
              {actorsInfo[actorName].map((movie, index) => (
                <div key={index}>{movie.Year}</div>
              ))}
            </td>
            <td className="py-2 px-4">
              {actorsInfo[actorName].map((movie, index) => (
                <div key={index}>{movie.Country}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ActorDetails