import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center mx-auto max-w-fit mt-4">
      <div className="w-5 h-5 border-2 border-black rounded-full border-l-0 border-t-0 animate-spin"></div>
      <p className="ml-2">Loading...</p>
    </div>
  )
}

export default Loader
