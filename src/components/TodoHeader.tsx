import React, { useState } from 'react';
import { useTodoContext } from '../store/todoContext';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const TodoHeader = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();

  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <header>
      <Input 
        style={styles.inputTodo}

        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <KeyboardArrowDownIcon />
          </InputAdornment>
        }  
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleAdd}
        />
    </header>
  );
};


const styles = {
    

    inputTodo: {
        padding: "10px",
        width: "100%",
        borderBottom: "1px solid #EBEBEB"
    }
}

export default TodoHeader;
