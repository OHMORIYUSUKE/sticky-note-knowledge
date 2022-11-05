import { useRef } from "react";
import { trpc } from "./trpc";
import { TextInput, Button } from "react-native";

export function Form() {
  const mutation = trpc.useMutation("addTodo");
  const inputRef = useRef<HTMLInputElement>(null);
  const utils = trpc.useContext();

  const handleClick = () => {
    if (inputRef.current) {
      mutation.mutate(
        { text: inputRef.current.value },
        { onSuccess: () => utils.invalidateQueries("getTodoList") }
      );
    }
  };

  return (
    <>
      <TextInput ref={inputRef} value={"add something"} />
      <Button
        onPress={handleClick}
        title="Add"
        color="#841584"
        accessibilityLabel="Add"
      />
    </>
  );
}
