import React from 'react'

export const Container = ({children}) => {
  return(
    <div className='container-fluid'>
      <div className="row justify-content-center">
        <div className="col col-lg-9 col-sm-11">
          <div className="row justify-content-center">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}
