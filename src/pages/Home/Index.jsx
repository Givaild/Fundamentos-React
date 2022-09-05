import './styles.css';
import { Card } from '../../componets/Card'; 
import { useState } from 'react';

export function Home() {
  const [personName,setPersonName] = useState();
  
  return (
    <div className='container'>
      <h1>Nome:{personName}</h1>
      <input
       type='text' 
       placeholder='Digite o nome'
       onChange={event => setPersonName(event.target.value)} 
       />
      <button type="button">Adicionar</button>

      <Card name='Givaildo' time='12:15:22'/>
      <Card name='Gustavo' time="12:17:02"/>
      <Card name='Henrique' time="12:20:00"/>
      
    </div>
  )
}
