import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="title" />
      <div className="flex justify-center bg-blue-700 text-white font-bold rounded-lg border shadow-lg p-7">
        <div id="title">Profile</div>
      </div>
      <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-4">
        <Link to="/dashboard">Go To Root</Link>
      </div>
      <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-4">
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
      <div id="username">{user}</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
