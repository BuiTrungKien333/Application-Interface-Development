function MyForm({ formData, updateInfo }) {
  return (
    <form id="form">
      <input
        type="text"
        name="name"
        value={formData.name || ""}
        className="my-input"
        placeholder="Name"
        onChange={updateInfo}
      />
      <p></p>
      <input
        type="text"
        name="email"
        value={formData.email || ""}
        className="my-input"
        placeholder="Email"
        onChange={updateInfo}
      />
      <p></p>
      <input
        type="text"
        name="age"
        value={formData.age || ""}
        className="my-input"
        placeholder="Age"
        onChange={updateInfo}
      />
    </form>
  );
}

export default MyForm;
