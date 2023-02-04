import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      style={{
        margin: "auto",
        padding: "36px 72px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </section>
  );
};

export default Container;
