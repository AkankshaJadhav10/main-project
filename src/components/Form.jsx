import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const checkPass = (e) => {
    setCheckPassword(e.target.value);
  };
  const subData = (e) => {
    e.preventDefault();
    console.log(name, pass);
  };

  return (
    <>
      <form onSubmit={subData}>
        <div>
          UserName: <input type="text" value={name} onChange={changeName} />
        </div>
        <div>
          Password: <input type="text" value={pass} onChange={changePass} />
        </div>
        <div>
          Confirm Password:{" "}
          <input type="text" value={checkPassword} onChange={checkPass} />
        </div>
        <div>
          <button>Subimt</button>
        </div>
      </form>
    </>
  );
}

export default Form;
