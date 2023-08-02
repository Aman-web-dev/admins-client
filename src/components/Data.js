import React, { useEffect, useState } from 'react'
import Card from "./Card"



export default function Data() {

const [info,setInfo]=useState([])
const [loading,setLoading] = useState(true);
const [from,setfromIndex]=useState(0);
const [to,setToIndex]= useState(10);
const [constituency,setConstituency]= useState("All")
const [search,setSearch]=useState("")
const [loggedin,setLoggedin]=useState()



console.log(search)
console.log(loggedin)




const deleteData=()=>{

  
}

  const   fetchData = async() =>{

    if(localStorage.getItem('authToken')){   

fetch(`${process.env.REACT_APP_API_URL}/api/loaddata?from=${from}&to=${to}&constituency=${constituency}`)
.then((response) => response.json())  
.then((result) => {
  console.log("result",result)
  setInfo(result[0]);
  console.log("result2  ",result[0])
  console.log("is is here sir",info[1])
  setLoading(false);
})
.catch((error) => {
  console.error('Error fetching data:', error);
  setLoading(false); 
}); 

  }

  else{
    alert("Logg in first ")
  }

}



 useEffect(()=>{


console.log("loggedin",loggedin)
    fetchData()
  
},[],[to])


const handleNumberChange=(e)=>{
setToIndex(e.target.value);
console.log(to)
}


  return (
<>


<div>
  <span>Number Of Data:-</span>
<select className='m-2'  name="" id="" onChange={handleNumberChange}>
  <option value={""}>Choose....</option>
  <option value={10}>10</option>
  <option value={100}>100</option>
  <option value={200}>200</option>
  <option value={300}>300</option>
  <option value={400}>400</option>
</select>  
  
<span>Select Constituency</span>
<select className='m-2'  name="constituency" id="" onChange={(e)=>{setConstituency(e.target.value)}}>
  <option value={""}>Choose....</option>
  <option value={"Arvi"}>Arvi</option>
  <option value={"Ashti"}>Ashti</option>
  <option value={"Karanja"}>Karanja</option>

</select>  


<input type="search" placeholder='Pooling-Name' onChange={(e)=>(setSearch(e.target.value))}/>

  <button className='m-2' onClick={()=>fetchData()}>Filter</button>


</div>

{loading ? (
            <p>Loading...</p>
          ) : info.length > 0 ? (
 

<table className=" border-collapse border lg:w-[80vw] w-[70vw]  p-4 m-4 shadow-md bg-white rounded-lg h-80">
        <thead>
          <tr className="bg-gray-500">
          
          
<th className="border border-gray-400  px-4 py-2">Operations</th>
<th className="border border-gray-400  px-4 py-2">Polling_Booth_Number</th>
<th className="border border-gray-400  px-4 py-2">Polling_Booth_Name</th>
<th className="border border-gray-400  px-4 py-2">Parent_Constituency</th>
<th className="border border-gray-400  px-4 py-2">Winner_2014</th>
<th className="border border-gray-400  px-4 py-2">Runner_up_other_than_INC_and_BJP</th>
<th className="border border-gray-400  px-4 py-2">Margin_Percentage_2014</th>
<th className="border border-gray-400  px-4 py-2">Margin_2014</th>
<th className="border border-gray-400  px-4 py-2">Total_Voters_2014</th>
<th className="border border-gray-400  px-4 py-2">BJP_Votes_2014</th>
<th className="border border-gray-400  px-4 py-2">BJP_Percentage_vote</th>
<th className="border border-gray-400  px-4 py-2">INC_Votes_2014</th>
<th className="border border-gray-400  px-4 py-2">INC_Percentage_votes</th>
<th className="border border-gray-400  px-4 py-2">Winner_2019</th>
<th className="border border-gray-400  px-4 py-2">Margin_Percentage_2019</th>
<th className="border border-gray-400  px-4 py-2">Margin_2019</th>
<th className="border border-gray-400  px-4 py-2">Total_Voters_2019</th>
<th className="border border-gray-400  px-4 py-2">BJP_Votes_2019</th>
<th className="border border-gray-400  px-4 py-2">BJP_Percentage_votes_2019</th>
<th className="border border-gray-400  px-4 py-2">INC_Votes_2019</th>
<th className="border border-gray-400  px-4 py-2">INC_Percentage_Votes_2019</th>

          </tr>
        </thead>
        <tbody>
          {info.filter((item)=>{
            return search.toLowerCase()===""? item:item.Polling_Booth_Name.toLowerCase().includes(search)
          }).map((elem) => (
            <tr key={elem.id}>

<td className="border border-gray-400  px-4 py-2" >{<><button onClick={(e)=>{console.log(e.target.value)}} value={elem._id}>Delete</button><button>Update</button></>}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Polling_Booth_Number}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Polling_Booth_Name}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Parent_Constituency}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Winner_2014}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Runner_up_other_than_INC_and_BJP}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Margin_Percentage_2014}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Margin_2014}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Total_Voters_2014}</td>
<td className="border border-gray-400   px-4 py-2">{elem.BJP_Votes_2014}</td>
<td className="border border-gray-400   px-4 py-2">{elem.BJP_Percentage_vote}</td>
<td className="border border-gray-400   px-4 py-2">{elem.INC_Votes_2014}</td>
<td className="border border-gray-400   px-4 py-2">{elem.INC_Percentage_votes}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Winner_2019}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Margin_Percentage_2019}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Margin_2019}</td>
<td className="border border-gray-400   px-4 py-2">{elem.Total_Voters_2019}</td>
<td className="border border-gray-400   px-4 py-2">{elem.BJP_Votes_2019}</td>
<td className="border border-gray-400   px-4 py-2">{elem.BJP_Percentage_votes_2019}</td>
<td className="border border-gray-400   px-4 py-2">{elem.INC_Votes_2019}</td>
<td className="border border-gray-400   px-4 py-2">{elem.INC_Percentage_Votes_2019}</td>


            </tr>
          ))}
        </tbody>
      </table>

    
          ) : (
            <p>No data available.</p>
          )}
 </>
  )
}



