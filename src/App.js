import './App.css';
import InstaPost from './Components/InstaPost';
import Data from './Data/Data.json'

function App() {
  return (
    <div className="App">

      {Data.map((data, index) => (
      
        <InstaPost key={index} profilePic={data.profilePic} userName={data.userName} postPic={data.postPic} views={data.views} postedTime={data.postedTime} />
      
      ))}

    </div>
  );
}

export default App;
