import React from "react";

const SpinnerPage = () => {
  return (
    <>
      <div className="spinner-grow fast text-info centerLoader" role="status">
        <span className="sr-only" />
      </div>
      <style jsx>
        {`
          .centerLoader {
            background: #f1f1f1;
            position: fixed;
            z-index: 999;
            height: 2em;
            width: 2em;
            overflow: visible;
            margin: auto;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
        `}
      </style>
    </>
  );
};

export default SpinnerPage;
