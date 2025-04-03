function App() {
  
  function addContact(event) {
    event.preventDefault();

    // get the form data
    const formData = new FormData(event.target);

    // concert form data into JSON
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    // send the data to the server
    const sendPost = async () => {
      
      const response = await fetch('https://nscc-0304263-inft400701-contacts-api-dxezaafhhmc3gdhd.canadacentral-01.azurewebsites.net/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })

      const result = await response.json();

      if (response.ok) {
        alert('Ticket purchased successfully');
      }
      else {
        alert('Error purchasing ticket' + result.message);
      }

    }

    sendPost();
    
  }

  return (
    <>
      <h1>
        Welcome to my ticket purchases
      </h1>

      <form onSubmit={addContact} method="post" className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> 
    </>
  )
}

export default App
