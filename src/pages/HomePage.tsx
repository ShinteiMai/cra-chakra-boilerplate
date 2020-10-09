import React from "react";

import { Box, Heading, Text } from "@chakra-ui/core";

import Layout from "../components/Layout";
import TodosInput from "../components/TodosInput";
import Todo from "../components/Todo";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Box>
        <Heading mb={8}>Create React App (CRA) Boilerplate</Heading>
        <Text fontSize={24} mb={4}>
          Todolist
        </Text>
        <TodosInput />
        <Todo />
      </Box>
    </Layout>
  );
};

export default HomePage;
