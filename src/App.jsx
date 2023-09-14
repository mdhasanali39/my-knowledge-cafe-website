import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmark/Bookmarks'
import Heading from './components/heading/Heading'

function App() {

  return (
    <>
      <Heading></Heading>
      <div className='flex flex-col md:flex-row'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
