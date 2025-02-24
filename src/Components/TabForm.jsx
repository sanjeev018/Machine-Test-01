import React, { useState } from 'react'
import Interests from './Interests'
import Settings from './Settings'
import Profile from './Profile'


const TabForm = () => {
    
    const [data, setData] = useState({ 
        name: "",
        age: "",
        email: "",
        interests: ["coding", "javascript"],
        theme: ["dark","light"]   
    })

    const tabs = [ 
        { 
            name: "Profile",
            component: Profile , 
            validate : () => { 
                const err = {}; 
                if(!data.name || data.name.length < 2){ 
                    err.name = "name is not valid"; 
                }
                
                if(!data.age || data.age < 18){ 
                    err.age = "age ins not valid"; 
                }
                if(!data.email || data.email.length < 2){ 
                    err.email = "Email is not valid"
                }
                setErrors(err)
                return err.name || err.age || err.email ? false : true
            }
        }, 
        
        { 
            name: "Interests",
            component: Interests, 
            validate: () => { 
                const err = { }
                if(data.interests.length < 1){ 
                    err.interests = "select atleast one intrests"
                }
                setErrors(err);
                return err.interests ? false : true; 
            }
        }, 
        {
            name: "Settings",
            component: Settings,
            validate : () => { 
                return true
            }
        }
    ]; 
    
    const [errors, setErrors] = useState({})
    
    const [activeTab , setActiveTab] = useState(0)
    const ActiveTabComponent = tabs[activeTab].component
    
    const handleNextClick = () => { 
        if(tabs[activeTab].validate()){ 
            setActiveTab((prev)=> prev + 1); 
        }
    }
    
    const handlePrevClick = () => { 
        setActiveTab((prev)=> prev-1);
    }
    
    const handleSubmitClick = () => { 
        console.log(data)
    }
    
    return (
        <div> 
    <div className='heading-container'>
        {tabs.map((t, index) => ( 
            <div
    className='heading' 
    onClick={()=> setActiveTab(index)}
    key={index}
    >{t.name}</div>
     ))}
    </div>
    <div className='tab-body'>
        <ActiveTabComponent data={data} setData={setData} errors={errors}/>
         </div>
         {activeTab > 0  && <button onClick={handlePrevClick}>Prev</button>}
         {activeTab < tabs.length-1 && <button onClick={handleNextClick}> Next </button>}
         {activeTab === tabs.length-1 && <button onClick={handleSubmitClick}>Submit</button>}
    </div>
  )
}
export default TabForm
