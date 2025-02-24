import React from 'react'

const Profile = ({data , setData , errors }) => {
  const {name , age , email} = data

  const handleDataChange = (e , item) => { 
    setData((prevState)=> ({ 
      ...prevState,
      [item] : e.target.value,
    }))
  }

  return(
    <> 
    <div>
<label htmlFor="">Name :</label>
<input 
type="text" 
value={name} 
onChange={(e)=> handleDataChange(e,"name")}
/>   
{errors.name && <span className='error'>{errors.name}</span>}

 </div>

 <div>
<label htmlFor="">Age :</label>
<input 
type="number" 
value={age} 
onChange={(e)=> handleDataChange(e,"age")}
/>   
{errors.age && <span className='error'>{errors.age}</span>}

 </div>

 <div>
<label htmlFor="">Email :</label>
<input 
type="email" 
value={email} 
onChange={(e)=> handleDataChange(e, "email")}
/>   
{errors.email && <span className='error'>{errors.email}</span>}
 </div>
 </> 
  )
}

export default Profile
