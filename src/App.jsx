import { useState } from 'react'
import Card from './components/card/card'
import Button from './components/button/button'

function App() {

  const [color , setcolor] = useState()

  return (
    <>
      <div className='w-full h-screen duration-200 flex items-center justify-center' 
      style={{backgroundColor: color}}>
        {/* <Card/> */}
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <Button bg='red' change={setcolor}/>
            <Button bg='green' change={setcolor}/>
            <Button bg='blue' change={setcolor}/>
            <Button bg='cyan' change={setcolor}/>
            <Button bg='black' change={setcolor}/>
            <Button bg='gray' change={setcolor}/>
            <Button bg='olive' change={setcolor}/>
            <Button bg='yellow' change={setcolor}/>
            <Button bg='pink' change={setcolor}/>
            <Button bg='purple' change={setcolor}/>
            <Button bg='violet' change={setcolor}/>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
