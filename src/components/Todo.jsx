import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `mt-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
}

const Todo = ({todo}) => {
  return (
    <li className={style.li}>
        
        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.text}>{todo}</p>
        </div>

        <button><FaRegTrashAlt/></button>

    </li>
  )
}

export default Todo;




// 1. li roditelj elementu dodajemo klasu
// 2. unutar li roditelj elementa dodajemo div element
// 3. unutar div elementa dodajemo input element
// 4. dodajemo p element
// 5. Todo jsx funkciji dodajemo {todo} props
// 6. ispod div elementa dodajemo button element
// 7. unutar button elementa importujemo react ikonicu
// 8. dodajemo klase elementima
// 9. 