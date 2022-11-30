// questo componente viene utilizzato in _app.js per permettere di inserire componenti che saranno visibili in tutte le pagine del blog

import { Fragment } from "react";
import Header from "./header";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
