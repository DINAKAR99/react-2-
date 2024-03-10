import React from "react";

function UncontrolledInput() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const emails = Object.fromEntries(formdata);
    // console.log(email);
    console.log(emails);
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>FORM DATA API </h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input type="password" id="password" name="password" />
        </div>

        <div>
          <button>click to submit</button>
        </div>
      </form>
    </div>
  );
}

export default UncontrolledInput;
