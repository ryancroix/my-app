
import './App.css';
import {Button} from 'antd'
import {useState} from 'react'
import {PoweroffOutlined} from '@ant-design/icons';

function App() 
{
  const [loading, setLoading] = useState(false) //the page will load
  const onButtonClick=(e)=>{  //to call API when button is clicked
    console.log('Button clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button
        loading={loading}
        icon={<PoweroffOutlined />}
        className='my-button'
        onClick={onButtonClick}
        >Homepage</Button>
        <Button>Investment Page</Button>
        <Button>Individual Stock Page</Button>
        <Button>Cash Holdings</Button>
      
      </header>
    </div>
  );
}

export default App;
