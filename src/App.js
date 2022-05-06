import { Component } from 'react'
import './app.styles.scss'
import Image from './shared/image.jsx'

class App extends Component {
  render() {
    return (
      <div className='h-screen w-screen w-full wrapper flex justify-center items-center'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 w-6/12 min-w-400'>    
            <div className='container mx-auto 2xl px-4'>
                <div className='header w-8/12 m-auto'>  
                <Image url='./assets/img/main-logo.png'/>
                </div>
                <div class="grid grid-cols-3 gap-4 mt-8">
                  <div className='text-center bg-orange text-tahiti'>01</div>
                  <div className='text-center bg-orange text-tahiti'>01</div>
                  <div className='text-center bg-orange text-tahiti'>09</div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App
