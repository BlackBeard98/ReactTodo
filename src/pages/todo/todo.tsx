import { Box, Container } from "@material-ui/core";
import { useState } from "react";
import { Buttons, CheckboxList, TextFields, Todo } from "../../components";

export const TodoPage: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const HandleAdd = () => {
    setTodos([...todos, { text: value, done: false }]);
    console.log(todos);
  };

  const HandleToggle = (value: Todo) => {
    setTodos(
      todos.map((todoItem) => {
        if (todoItem === value) {
          return { ...todoItem, done: !todoItem.done };
        }
        return todoItem;
      })
    );
  };

  return (
    <div>
      <Container maxWidth="sm">
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
};
