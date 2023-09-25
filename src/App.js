import "./App.css";
import DessertsList from "./DessertsList";
import { useState } from "react";
import { validateEmail } from "./utils";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return true;
  };

  const clearForm = () => {
    // Implement this function
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
  };

  return (
    <>
      {/* start bootstrap practice */}
    <div class="container">
    <div class="row">
        <div id="bio" class="col-12 col-lg-6 text-center">
            <h1>Enkhzaya Munkhochir</h1>
            <img src="photo.jpg" alt="profile picture" class="img-fluid"/>
        </div>
        <div id="more" class="col-12 col-lg-6">
            <h2>Favorite Music Artists</h2>
            <ul>
                <li>Big Bang</li>
                <li>Beatles</li>
                <li>Epik High</li>
                <li>Tablo</li>
                <li>Justin Bieber</li>
            </ul>
            <h2>Favorite Films</h2>
            <ol>
                <li>West world</li>
                <li>Orville</li>
                <li>Orange is new black</li>
                <li>Tablo</li>
                <li>Justin Bieber</li>
            </ol>
            <a href="https://www.facebook.com/emilin.zaya" class="btn btn-primary">My Meta Profile</a>
        </div>
    </div>
    <div class="row"></div>

      </div>
      {/* end of bootstrap practice */}

    <div className="App">
      {/* dessert list start */}
      <div>
      <h2>List of low calorie desserts:</h2>
        <DessertsList data={desserts} />
      </div>

      {/* sign up form start */}
      <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <h2>Sign Up</h2>

          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
              <input
                value={firstName}
                placeholder="First name"
                onChange={(e) => { setFirstName(e.target.value) }} />
            </div>

          <div className="Field">
            <label>Last name</label>
              <input
                placeholder="Last name"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value)}}/>
            </div>

          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
              <input
                placeholder="Email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value)}}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
      </div>
    </div>
    </>
  );
}

export default App;
