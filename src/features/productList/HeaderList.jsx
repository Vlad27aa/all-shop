import React from 'react'
import headerItems from '../../data/headerItems'

const HeaderList = () => {
  return (
    <div className="flex mx-auto sticky top-0 bg-slate-300">
      {headerItems.map((item) => (
        <p key={item.name} className={`${item.width} border p-1`}>
          {item.name}
        </p>
      ))}
    </div>
  )
}

export default HeaderList
