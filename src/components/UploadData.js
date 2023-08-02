import React, { useState } from 'react';



function UploadData() {




  const [formData, setFormData] = useState({
    Polling_Booth_Number: "",
    Polling_Booth_Name: "",
    Parent_Constituency: "",
    Winner_2014: "",
    Runner_up_other_than_INC_and_BJP: "",
    Margin_Percentage_2014: "",
    Margin_2014: "",
    Total_Voters_2014: "",
    BJP_Votes_2014: "",
    BJP_Percentage_vote: "",
    INC_Votes_2014: "",
    INC_Percentage_votes: "",
    Winner_2019: "",
    Margin_Percentage_2019: "",
    Margin_2019: "",
    Total_Voters_2019: "",
    BJP_Votes_2019: "",
    BJP_Percentage_votes_2019: "",
    INC_Votes_2019: "",
    INC_Percentage_Votes_2019: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  

  const handleSubmit = async(event) => {
    event.preventDefault();

    console.log(formData);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/upload`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },

    });

const result = await response.json()
console.log('this is the error ',result)


    if (!result.ok) {

      console.log('this is error',result);

    } if (response.ok) {
    console.log("Fetched");
    console.log("Data added successfully");
    setFormData({
      Polling_Booth_Number: "",
      Polling_Booth_Name: "",
      Parent_Constituency: "",
      Winner_2014: "",
      Runner_up_other_than_INC_and_BJP: "",
      Margin_Percentage_2014: "",
      Margin_2014: "",
      Total_Voters_2014: "",
      BJP_Votes_2014: "",
      BJP_Percentage_vote: "",
      INC_Votes_2014: "",
      INC_Percentage_votes: "",
      Winner_2019: "",
      Margin_Percentage_2019: "",
      Margin_2019: "",
      Total_Voters_2019: "",
      BJP_Votes_2019: "",
      BJP_Percentage_votes_2019: "",
      INC_Votes_2019: "",
      INC_Percentage_Votes_2019: "",
    });

    }

  };

  return (
    <div className="container bg-black text-white p-5">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Polling Booth Number</label>
          <input
            type="text"
            className="form-control"
            name="Polling_Booth_Number"
            value={formData.Polling_Booth_Number}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Polling Booth Name</label>
          <input
            type="text"
            className="form-control"
            name="Polling_Booth_Name"
            value={formData.Polling_Booth_Name}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Parent Constituency</label>
          <input
            type="text"
            className="form-control"
            name="Parent_Constituency"
            value={formData.Parent_Constituency}
            onChange={handleInputChange}


  required 
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Winner 2014</label>
          <input
            type="text"
            className="form-control"
            name="Winner_2014"
            value={formData.Winner_2014}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Runner-up (other than INC and BJP)</label>
          <input
            type="text"
            className="form-control"
            name="Runner_up_other_than_INC_and_BJP"
            value={formData.Runner_up_other_than_INC_and_BJP}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Margin Percentage 2014</label>
          <input
            type="text"
            className="form-control"
            name="Margin_Percentage_2014"
            value={formData.Margin_Percentage_2014}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Margin 2014</label>
          <input
            type="text"
            className="form-control"
            name="Margin_2014"
            value={formData.Margin_2014}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Total Voters 2014</label>
          <input
            type="text"
            className="form-control"
            name="Total_Voters_2014"
            value={formData.Total_Voters_2014}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">BJP Votes 2014</label>
          <input
            type="text"
            className="form-control"
            name="BJP_Votes_2014"
            value={formData.BJP_Votes_2014}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">BJP Percentage Vote</label>
          <input
            type="text"
            className="form-control"
            name="BJP_Percentage_vote"
            value={formData.BJP_Percentage_vote}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">INC Votes 2014</label>
          <input
            type="text"
            className="form-control"
            name="INC_Votes_2014"
            value={formData.INC_Votes_2014}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">INC Percentage Vote</label>
          <input
            type="text"
            className="form-control"
            name="INC_Percentage_votes"
            value={formData.INC_Percentage_votes}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Winner 2019</label>
          <input
            type="text"
            className="form-control"
            name="Winner_2019"
            value={formData.Winner_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Margin Percentage 2019</label>
          <input
            type="text"
            className="form-control"
            name="Margin_Percentage_2019"
            value={formData.Margin_Percentage_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Margin 2019</label>
          <input
            type="text"
            className="form-control"
            name="Margin_2019"
            value={formData.Margin_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Total Voters 2019</label>
          <input
            type="text"
            className="form-control"
            name="Total_Voters_2019"
            value={formData.Total_Voters_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">BJP Votes 2019</label>
          <input
            type="text"
            className="form-control"
            name="BJP_Votes_2019"
            value={formData.BJP_Votes_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">BJP Percentage Votes 2019</label>
          <input
            type="text"
            className="form-control"
            name="BJP_Percentage_votes_2019"
            value={formData.BJP_Percentage_votes_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">INC Votes 2019</label>
          <input
            type="text"
            className="form-control"
            name="INC_Votes_2019"
            value={formData.INC_Votes_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">INC Percentage Votes 2019</label>
          <input
            type="text"
            className="form-control"
            name="INC_Percentage_Votes_2019"
            value={formData.INC_Percentage_Votes_2019}
            onChange={handleInputChange}


  required 
          />
        </div>
















        
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadData;
