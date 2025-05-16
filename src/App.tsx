import Timeline from './components/Timeline'
import './App.css'

function App() {

  return (
    <div className="min-h-[300vh] bg-white">
      <div className="flex w-full px-10 py-10 gap-12 mt-[50vh]">
        {/* Left sticky section */}
        <section className="w-1/2 sticky top-5 bottom-0 h-fit self-start" style={{ fontFamily: 'Figtree, sans-serif' }}>
          <h1 className="text-[#E3522D] font-bold">Success, One Step At A Time</h1>
          <h2 className="font-bold text-[3rem]">
            Smart Steps For Market Domination (Your <br /> Success Toolkit)
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            eveniet blanditiis qui laboriosam voluptatem eum repellat dolores
            reiciendis labore debitis.
          </p>
        </section>

        {/* Scrollable Timeline on the right */}
        <div className="">
          <Timeline />
        </div>
      </div>
    </div>

  )
}

export default App
