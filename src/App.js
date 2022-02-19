import React, { useState } from "react";
import Content from "./components/content/content.component";
import Form from "./components/form/form.component";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="app">
      {user.length < 1 ? (
        <Form setUser={(v) => setUser(v)} />
      ) : (
        <Content changeUser={() => setUser("")} user={user} />
      )}
    </div>
  );
}

export default App;
