import React from 'react'

const Interests = ({data, setData}) => {
  const {interests} = data
  const handleDataChange = (e)=> { 
    setData((prevState)=> ({
      ...prevState, 
      interests : e.target.checked
      ? [...prevState.interests, e.target.name]
      : prevState.interests.filter((i)=> i!== e.target.name), 
    })); 
  }; 

  return (
    <>   
     <div>
      <label htmlFor=""> 
      <input 
      type="checkbox" 
      name='coding' 
      checked={interests.includes("coding")} 
      onChange={handleDataChange}
      /> 
      Coding
      </label>
    </div>

    <div>
      <label htmlFor=""> 
      <input 
      type="checkbox" 
      name='cricket' 
      checked={interests.includes("cricket")}
      onChange={handleDataChange}
       />
      Cricket
      </label>
    </div>

    <div>
      <label htmlFor=""> 
      <input 
      type="checkbox" 
      name='javascript' 
      checked={interests.includes("javascript")}
      onChange={handleDataChange}
      />
      Javascript
      </label>

    </div>
{interests.name && <span className='error'>{interests.name}</span>}

    </>
  )
}
export default Interests
