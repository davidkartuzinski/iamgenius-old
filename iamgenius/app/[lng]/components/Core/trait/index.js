function Trait({ number, name, content }) {
  return (
    <>
      <h3>
        {number}: {name}.
      </h3>
      <p>{content}</p>
    </>
  );
}

export default Trait;
