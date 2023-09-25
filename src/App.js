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
  );
}

export default App;
