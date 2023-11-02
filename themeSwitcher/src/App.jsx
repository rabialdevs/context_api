import React from 'react'
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
const App = () => {

  return (
    <div className='h-[100vh] flex justify-center items-center flex-col gap-4'>
      <Card />
      <ThemeBtn/>
    </div>
  )
}

export default App;

