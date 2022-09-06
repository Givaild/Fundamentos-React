import './styles.css';
import { Card } from '../../componets/Card'; 
import { useEffect, useState } from 'react';

export function Home() {
  const [personName,setPersonName] = useState('');
  const [persons,setPersons] = useState([]);
  const [user,setUser] = useState({
    name:'', avatar:''
  });

 function handleAddPerson(){
    const newPerson = {
        name:personName,
        time: new Date().toLocaleTimeString('pt-br', {
          hour:'2-digit',
          minute:'2-digit',
          second:'2-digit',
      })
    };
    setPersons(prevState=>[...prevState,newPerson]);
  }  

  useEffect(()=> {
    fetch ('https://api.github.com/users/givaild')
    .then(response => response.json())
    .then(data => {
      setUser({
        name:data.name,
        avatar:data.avatar_url,
      })
    })
  },[]);
  
  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <input
       type='text' 
       placeholder='Digite o nome'
       onChange={event => setPersonName(event.target.value)} 
       />
      <button
       type="button"
       onClick={handleAddPerson}>
        Adicionar
      </button>

     {
      persons.map(thePerson => <Card name={thePerson.name} time={thePerson.time}/>)
     
     }
           
    </div>
  )
}
