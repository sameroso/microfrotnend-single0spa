import logo from "./assets/logo.svg";

export default function Root(props) {
  return (
    <section
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "blue",
        width: "100%",
        display: "flex",
        alignItems: "baseline",
      }}
    >
      <img src={logo} alt="logo" />
      <h2 style={{ color: "white", marginLeft: "10px" }}>
        {" "}
        this runs in a Microfrontend
      </h2>
    </section>
  );
}
