
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <>

      <h1 className='text-6xl text-purple-600 text-center my-20'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mx-6'>
        {
          coffees.map(coffee => <CoffeeCard
            coffee={coffee}
            key={coffee._id}></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
