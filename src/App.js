import React, { useState } from "react";
import Form from "./components/form/form.component";
import Menu from "./components/menu/menu.component";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="app">
      {user.length < 1 ? (
        <Form setUser={(v) => setUser(v)} />
      ) : (
        <Menu changeUser={() => setUser("")} />
      )}
    </div>
  );
}

export default App;
