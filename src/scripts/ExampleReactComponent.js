import React, { useState } from "react";

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      {/* <div
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-md"
        onClick={() => setClickCount((prev) => prev + 1)}
      >
        <h1 className="text-xl">Hello from React!</h1>
        <p className="text-sm">
          You have clicked on this component{" "}
          <span className="text-yellow-200 font-bold">{clickCount}</span> times.
        </p>
      </div> */}
      <div className="flex flex-col gap-4">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit, urna nec lacinia ultricies, nisi quam ultricies purus, nec
          bibendum justo odio ac libero. Sed auctor, arcu non varius ultricies,
          nunc elit ultricies mi, eu fermentum mi libero sit amet nulla. Nulla
          facilisi. Nullam nec nisl id
        </p>

        <button className="btn btn-primary">Button</button>
        <button className="btn btn-secondary">Button</button>
      </div>
    </>
  );
}

export default ExampleReactComponent;
