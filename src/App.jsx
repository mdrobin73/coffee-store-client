import { useLoaderData } from 'react-router-dom'
import './App.css'
import SingleCoffee from './components/SingleCoffee';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>

      <h1 className='text-5xl text-purple-900 text-center mt-10'>Total coffee: {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-6 md:m-10 '>
        {
          coffees.map((coffee, index) => <SingleCoffee key={index} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></SingleCoffee>)
        }
      </div>

    </>
  )
}

export default App
