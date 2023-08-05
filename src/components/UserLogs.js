import React, { useEffect, useState } from 'react'

export default function UserLogs(props) {
 
 
 const [info,setInfo]=useState([{}])
 const [loading,setLoading]=useState(true)
 const logsFetcher=async()=>{
const response = await fetch(`${props.URL}/api/userlogs`)
const result= await  response.json()
console.log(result[0])
setInfo(result[0])
setLoading(false)
console.log("info",info)


 }
 
 
 useEffect(()=>{

  logsFetcher()
 },[])
 
 
 
 
 
  return (
    <div>
  <>




{loading ? (
            <p>Loading...</p>
          ) : info.length > 0 ? (
 

<table className=" border-collapse border lg:w-[80vw] w-[70vw]  p-4 m-4 shadow-md bg-white rounded-lg h-80">
        <thead>
          <tr className="bg-gray-500">
          
          
<th className="border border-gray-400  px-4 py-2">TIME</th>
<th className="border border-gray-400  px-4 py-2">ACTION</th>
<th className="border border-gray-400  px-4 py-2">ACTION LEVEL</th>


          </tr>
        </thead>
        <tbody>
          {info.reverse().map((elem) => (
            <tr key={elem.id}>

<td className="border border-gray-400   px-4 py-2">{elem.timestamp}</td>
<td className="border border-gray-400   px-4 py-2">{elem.message}</td>
<td className="border border-gray-400   px-4 py-2">{elem.level}</td>



            </tr>
          ))}
        </tbody>
      </table>

    
          ) : (
            <p>No data available.</p>
          )}
 </>
    </div>
  )
}
