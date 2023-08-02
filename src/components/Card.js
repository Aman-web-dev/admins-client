
import React from "react"

function Card(props){

  return (
<>

<div className="card">
  <div className="card-body">
 
<h6 className="card-subtitle mb-2 text-body-secondary">Polling_Booth_Name=:      -{props.Polling_Booth_Name}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Parent_Constituency=:      -{props.Parent_Constituency}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Winner_2014=:      -{props.Winner_2014}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">first_Runner_up_other_than_INC_and_BJP=:      -{props.first_Runner_up_other_than_INC_and_BJP}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Margin_percentage_2014=:      -{props.Margin_percentage_2014}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Margin_2014=:      -{props.Margin_2014}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Total_Voters_2014=:      -{props.Total_Voters_2014}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">BJP_Votes_2014=:      -{props.BJP_Votes_2014}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">INC_Votes_2014=:      -{props.INC_Votes_2014}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Winner_2019=:      -{props.Winner_2019}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Margin_2019=:      -{props.Margin_2019}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">Total_Voters_2019=:      -{props.Total_Voters_2019}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">BJP_Votes_2019=:      -{props.BJP_Votes_2019}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">INC_Votes_2019=:      -{props.INC_Votes_2019}</h6>
<h6 className="card-subtitle mb-2 text-body-secondary">INC_Votes_2019=:      -{props.INC_Votes_2019}</h6>
  </div>



  <button>Delete</button>
  <button>Edit</button>
  <button>New</button>

</div>

</>
  )
}

export default Card



