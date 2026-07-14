import { useState } from "react";

function ResidentForm() {
  const [name, setName] = useState("");

  return (
    <div className="resident-form">
      <h2>새 주민 등록</h2>

      <div className="resident-form__field">
        <label htmlFor="resident-name">이름</label>
        <input
          id="resident-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <p className="resident-form__preview">입력한 이름: {name}</p>
    </div>
  );
}

export default ResidentForm;
