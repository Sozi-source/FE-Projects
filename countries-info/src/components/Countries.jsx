import React, { useEffect, useState } from 'react'
import countryData from '../Data/data.json'



function Countries() {
  
  const[data, setData] = useState([])
  const[search, setSearch]= useState('')
 
  useEffect(()=>{
    setData(countryData)
  },[])

  const filteredCountries = data.filter((item)=>
item.name.toLowerCase().includes(search.toLowerCase())
);
  
    return (
    <div className='bg-navy min-h-screen px-6 py-10 text-white'>
       
        <div className='max-w-7xl mx-auto'>
         <h2 className='text-3xl font-bold mb-6'>Where in the World?</h2>

        {/* Search Input */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'>
        <input type="text"
        placeholder='Search countries'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} 
        className='w-full md:w-1/3 px-4 py-2 rounded shadow bg-gray-900 text-white font-bold placeholder-gray-400 focus:outline-none'/>
        </div>

        {/* Filtered Countries */}
       <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {filteredCountries.map((item, index)=>(
            <div key={index} className='bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300'>

            {/* flag */}
            
              <img src={item.flags.png}
               alt={item.name} 
               className='w-full h-40 object-cover'
              />

            <div className='p-4'>
                 <h3 className='text-lg font-semibold mb-2'>{item.name} </h3>

                 <p className='text-sm mb-1'>
                    <span className='font-medium'> Population: </span> 
                    <span className='text-gray-300'>{item.population}</span> 
                 </p>

                 <p className='text-sm mb-1'>
                    <span className='font-medium'> Region: </span> 
                    <span className='text-gray-300'>{item.region} </span> 
                </p>
                 
                 <p className='text-sm mb-1'>
                    <span className='font-medium'> Capital: </span> {''}
                    <span className='text-gray-300'>{item.capital} </span>
                 </p>
                    
                   {item.currencies?.length > 0 && (
                    <p className='text-sm mt-1'>
                        <strong>Currencies: </strong> {''}
                        
                        {item.currencies.map((c)=>`${c.name} (${c.code}, ${c.symbol})`).join(', ')}
                    </p>
                   )}
                    
                 </div>   
            
                </div>
                ))}

                </div>
                </div>               
    </div>
  )
}

export default Countries