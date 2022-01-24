import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { Pic } from "./pages/pic";
import { TodoPage } from "./pages/todo";

// App.js

export function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <h1>My React App</h1>
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/pic" element={<Pic />} />
        </Routes>
      </Container>
    </div>
  );
}
