import React from 'react'

function Post() {
  return (
    <div className=' shadow-lg hover:shadow-2xl py-8 px-4 rounded-md border-slate-100 shadow-slate-300 cursor-pointer mt-14 gap-y-3 flex flex-col'>
      <h1 className='text-lg font-bold'>Hello World!</h1>
      <p>
        Welcome to WordPress. This is your first post. Edit or delete it, then
        start writing!
      </p>
    </div>
  )
}

export default Post
