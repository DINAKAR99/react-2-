import React, { useState, useTransition, Suspense, lazy } from "react";
// import { SlowComponent } from "./SlowComponent";

const SlowComponent = lazy(() => import("./SlowComponent"));
export const LatestReact = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const handleChange = (e) => {
    setText(e.target.value);

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg"></img>
          </div>
        );
      });
      setItems(newItems);
    });
  };

  return (
    <section>
      <form>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      <button onClick={() => setShow(!show)}>toggler</button>
      <h4>items below</h4>

      {isPending ? (
        <h4>pending.....</h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}

      {show && (
        <Suspense>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
