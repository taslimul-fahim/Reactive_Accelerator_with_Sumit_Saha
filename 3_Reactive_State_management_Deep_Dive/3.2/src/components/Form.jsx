/* eslint-disable react/prop-types */
const Form = ({ status = "empty" }) => {
  // visual status: empty, typing, submitting, success, error
  if (status === "empty") return <h1>That's right!</h1>;

  return (
    <>
      <form>
        <textarea
          className="border"
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={status === "submitting" || status === "empty"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}

        {status === "error" && <p className="Error">error</p>}
      </form>
    </>
  );
};

export default Form;
