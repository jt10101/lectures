import debug from "debug";
const log = debug("forms:componenets:FormSubmit");

export const FormSubmit = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    log("submit");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    log("data : %a", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Test</legend>
          <label>
            First: <input name="first" />
          </label>
          <br />
          <label>
            Last: <input name="last"></input>
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
};
