import { Box, Container } from "@material-ui/core";
import React, { useState } from "react";
import { Buttons, CheckboxList, TextFields, Todo } from "./components";

export function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const HandleAdd = function () {
    setTodos([...todos, { text: value as string, done: false }]);
    console.log(todos);
  };
  function ToggleCheck(cTodo: Todo, tTodo: Todo) {
    if (cTodo === tTodo) {
      return { text: cTodo.text, done: !cTodo.done };
    }
    return tTodo;
  }
  const HandleToggle = (value: Todo) => {
    setTodos(todos.map((a) => ToggleCheck(value, a)));
  };

  return (
    <div>
      <Container maxWidth="sm">
        <h1>My ToDo List</h1>
        <Box
          display="flex"
          flexDirection="row"
          p={1}
          m={1}
          bgcolor="background.paper"
          alignItems="center"
        >
          <Box p={1}>
            <TextFields setValue={setValue} />
          </Box>
          <Box p={1}>
            <Buttons action={HandleAdd} />
          </Box>
        </Box>
        <CheckboxList todos={todos} handleToggle={HandleToggle} />
      </Container>
    </div>
  );
}
