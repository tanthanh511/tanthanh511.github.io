import Header from "./Header/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      {/* <Header/> */}
      <aside>{children}</aside>
    </div>
  );
}

export default HeaderOnly;
