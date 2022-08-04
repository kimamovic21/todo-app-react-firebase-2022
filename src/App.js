import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import Todo from "./components/Todo";
import {db} from './firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
  zero: `text-center mt-3`,
}

function App() {

  //const [todos, setTodos] = useState(['learn React', 'grind leetcode']);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  //console.log(input);

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input === '') {
      alert('Please enter a valut todo');
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    });
    setInput('');
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className={style.bg}>
       
      <div className={style.container}>
        <h3 className={style.heading}>Todo app</h3>
        <form onSubmit={createTodo}
              className={style.form}>
          <input value={input}
                 onChange={(e) => setInput(e.target.value)}
                 className={style.input} 
                 type="text" 
                 placeholder="Add Todo" 
          />
          <button className={style.button}>
            <AiOutlinePlus size={30}/>
          </button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} 
                  todo={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
            /> //passing state down in components
          ))}
        </ul>

        {todos.length < 1 ? 
        <p className={style.zero}>You don't have any todo.</p> :   
        <p className={style.count}>
          {`You have ${todos.length} todos.`}
        </p>}
      
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


// Nakon sto instaliramo firebase
// 11. dodajemo kod za read todo (useEffect React hook)
// 12. importujemo db na pocetku fajla
// 13. importujemo query, collection na pocetku fajl
// 14. dodajemo kod za update todo
// 15. dodajemo kod za create todo
// 16. form elementu dodajemo onSubmit dogadaj
// 17. dodajemo input, setInput react hook
// 18. input elementu dodajemo atribut value
// 19. input elementu dodajemo onChange dogadaj
// 20. dodajemo kod za deleteTodo
 
