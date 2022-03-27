import './App.css'
import contents from './Contents.js'
import { useState } from 'react'
import MainContent from './MainContent.js'

const App = () => {
  const [chapter, setChapter] = useState(contents[0])
  return (
    <div className='App'>
      <div id="header" className='noselect'>
        <h1>Manual</h1>
      </div>
      <div id='sidebar'>
        {contents.map((item, c_id) => {
          return (
            <div
              key={c_id}
              className={
                (chapter.chapterName === item.chapterName) ? 'dbtn unact noselect' : 'dbtn noselect'
              }
              onClick={() => setChapter(contents[c_id])}
            >
              {item.chapterName}
            </div>
          )
        })}
      </div>
      <MainContent content={chapter.chapterContents} />
      <div id="footer" className='noselect'>
        <h5>Manual</h5>
        <p>Produced by YanLIANG</p>
      </div>
    </div>
  )
}


export default App;
