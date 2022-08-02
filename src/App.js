import React, { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import Todo from "./components/Todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`
}

function App() {

  const [todos, setTodos] = useState(['Take the trash', 'Clean the table']);

  return (
    <div className={style.bg}>
       
      <div className={style.container}>
        <h3 className={style.heading}>Todo app</h3>
        <form className={style.form}>
          <input className={style.input} 
                 type="text" 
                 placeholder="Add Todo" 
          />
          <button className={style.button}>
            <AiOutlinePlus size={30}/>
          </button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo}/> //passing state down in components
          ))}
        </ul>

        <p className={style.count}>You have 2 todos</p>

      </div>

    </div>
  );
}

export default App;




// 1. roditelj div elementu dodajemo klasu
// 2. unutar div roditelj elementa dodajemo div container
// 3. unutar div container elementa dodajemo h3 i form element
// 4. html elementima dodajemo klase
// 5. dodajemo input i button element
// 6. importujemo react ikonicu
// 7. ispod form elementa dodajemo ul element
// 8. dodajemo useState react hook
// 9. unutar ul elementa dodajemo javascript map metodu
// 10. ispod ul elementa dodajemo p element koji ce nam pokazivati koliko imamo stvari da uradimo
// 11. 