import './App.css';
import Page1 from './Components/Page1/page1';
import Page2 from './Components/Page2/page2';
import Page4 from './Components/Page4/page4';
import Page5 from './Components/Page5/page5';
import Page3 from './Components/Page3/page3';
import Page6 from './Components/Page6/page6';

const App = () => {
  return (
    <div className='p-3'>
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    </div>
  )
}

export default App;
