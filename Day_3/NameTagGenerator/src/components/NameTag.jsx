import React, { useState } from "react";

const NameTag = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const downloadMe = () => {
    alert(
      `<>NAME</>\nHello, my name is\n${name.toUpperCase()}\n${title}\n${company}`
    );
  };

  return (
    <div className="nametag-container">
      <h2>Name Tag Generator</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="First & Last Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="preview">
        <p className="greeting">Hello, my name is</p>
        <h3 className="name">{name.toUpperCase() || "YOUR NAME"}</h3>
        <p className="title">{title || "Job Title"}</p>
        <p className="company">{company || "Company"}</p>
      </div>

      <button className="download" onClick={downloadMe}>
        Download
      </button>
    </div>
  );
};

export default NameTag;