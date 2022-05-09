import { Component } from 'react'
import './app.styles.scss'
import Image from './shared/image.jsx'
import Text from './shared/text.jsx'

class App extends Component {
  render() {
    return (
      <div className='h-screen w-screen w-full wrapper flex justify-center items-center'>
        <div className='w-3/5 min-w-600 border shadow-lg'>
        <div className='text-black font-bold md:p-12 lg:p-16 p-4 bg-white bg-opacity-50'>    
            <div className='container mx-auto 2xl'>
                <div className='header w-2/6 m-auto mt-4'>  
                <Image url='./assets/img/main-logo.png'/>
                </div>
                <div class="grid grid-cols-3 gap-4 mt-16">
                  <div className='text-center bg-orange hover:bg-grey cursor-pointer rounded-xl'>
                    <Image url='./assets/img/bullets.png' width='150px' className='m-auto'/>
                    <Text as='p' size='text-lg' className='mb-4'>Dokumentarkiv</Text>
                   </div>
                  <div className='text-center bg-orange hover:bg-grey cursor-pointer rounded-xl'>
                    <Image url='./assets/img/bino.png' width='150px' className='m-auto'/>
                    <Text as='p' size='text-lg' className='mb-4'>Fakturaoppfølging</Text>
                    </div>
                  <div className='text-center bg-orange hover:bg-grey cursor-pointer rounded-xl'>
                    <Image url='./assets/img/watch.png' width='150px' className='m-auto'/>
                    <Text size='text-lg' as='p' className='mb-4'>Inkasso</Text>
                    </div>
                </div>
            </div>
            </div>
            <footer class="p-4 shadow p-6 justify-center bg-white bg-opacity-75">
                <ul class="flex flex-wrap items-center mt-3 text-sm !text-grey justify-center relative">
                      <li>
                        <a href="#" class="mr-2 hover:underline mr-6 !text-grey">
                          <Image url='./assets/img/main-slash.png' className='absolute -bottom-1/4' width='20px'/>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="mr-3 md:mr-3 !text-grey">Velkommen til</a>
                    </li>
                    <li className='flex justify-center items-center'>
                        <a href="#" class="mr-4 hover:underline md:mr-6 !text-grey">
                          <Image url='./assets/img/main-logo.png' width='110px'/></a>
                    </li>
                </ul>
          </footer>
          </div>
      </div>
    )
  }
}

export default App
