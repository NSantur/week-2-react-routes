import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="flex justify-center bg-blue-700 text-white font-bold rounded-lg border shadow-lg p-7"
      >
        Dashboard
      </div>
      <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-4">
        <Link to="/dashboard/profile/7b4e70d3-efda-43fe-bb53-c29e23e12c9c">Go To Profile</Link>
      </div>
      <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-4">
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
