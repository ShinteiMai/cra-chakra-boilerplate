import React from "react";

import { Box, Button, Input } from "@chakra-ui/core";

const TodosInput: React.FC = () => {
  return (
    <Box display="flex">
      <Input placeholder="Write a task..." />
      <Button>Add</Button>
    </Box>
  );
};

export default TodosInput;
