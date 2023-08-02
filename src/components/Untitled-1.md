      {loading ? (
            <p>Loading...</p>
          ) : info.length > 0 ? (
            info.map((elem) => <div>
            <Card  key={elem._id} 

Polling_Booth_Number={elem.Polling_Booth_Number}
Polling_Booth_Name={elem.Polling_Booth_Name}
Parent_Constituency={elem.Parent_Constituency}
Winner_2014={elem.Winner_2014}
first_Runner_up_other_than_INC_and_BJP={elem.first_Runner_up_other_than_INC_and_BJP}
Margin_percentage_2014={elem.Margin_percentage_2014}
Margin_2014={elem.Margin_2014}
Total_Voters_2014={elem.Total_Voters_2014}
BJP_Votes_2014={elem.BJP_Votes_2014}
BJP_={elem.BJP_}
INC_Votes_2014={elem.INC_Votes_2014}
INC_={elem.INC_}
Winner_2019={elem.Winner_2019}
Margin_={elem.Margin_}
Margin_2019={elem.Margin_2019}
Total_Voters_2019={elem.Total_Voters_2019}
BJP_Votes_2019={elem.BJP_Votes_2019}
INC_Votes_2019={elem.INC_Votes_2019}

            
                      />
          </div> )
          ) : (
            <p>No data available.</p>
          )}








          <p className="text-bold">{props.Polling_Booth_Number}</p>
<p className="text-bold">{props.Polling_Booth_Name}</p>
<p className="text-bold">{props.Parent_Constituency}</p>
<p className="text-bold">{props.Winner_2014}</p>
<p className="text-bold">{props.first_Runner_up_other_than_INC_and_BJP}</p>
<p className="text-bold">{props.Margin_percentage_2014}</p>
<p className="text-bold">{props.Margin_2014}</p>
<p className="text-bold">{props.Total_Voters_2014}</p>
<p className="text-bold">{props.BJP_Votes_2014}</p>
<p className="text-bold">{props.INC_Votes_2014}</p>
<p className="text-bold">{props.Winner_2019}</p>
<p className="text-bold">{props.Margin_2019}</p>
<p className="text-bold">{props.Total_Voters_2019}</p>
<p className="text-bold">{props.BJP_Votes_2019}</p>
<p className="text-bold">{props.INC_Votes_2019}</p>
<p className="text-bold">{props.INC_Votes_2019}</p>