import Timeline from './components/timeline';
import './App.css'

function App() {

  return (
    <div className=' mt-[50vh]'>
      <div className='flex w-full justify-center' style={{ fontFamily: 'Figtree, sans-serif' }}>
        <section className=' px-10 py-10'>
          <h1 className=' text-[#E3522D] font-bold'>Success, One Step At A Time</h1>
          <h2 className=' font-bold text-[3rem]'>
            Smart Steps For Market Domination (Your <br /> Success Toolkit)
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eveniet blanditiis qui laboriosam voluptatem eum repellat dolores reiciendis labore debitis.</p>
        </section>
        <Timeline />
      </div>
    </div>
  )
}

export default App
