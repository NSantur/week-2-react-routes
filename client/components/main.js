import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex justify-center bg-blue-700 text-white font-bold rounded-lg border shadow-lg p-7">
        <div id="title">Main</div>
      </div>
      <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-4">
        <Link to="/dashboard/profile/7b4e70d3-efda-43fe-bb53-c29e23e12c9c">Go To Profile</Link>
      </div>
      <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-4">
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
