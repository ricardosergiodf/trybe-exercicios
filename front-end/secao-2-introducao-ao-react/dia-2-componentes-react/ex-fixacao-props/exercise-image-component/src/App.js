import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg'

function App() {
  // const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';   // Também pode ser usada a URL da imagem
  return (
    <main>
      { // <Image source={ URL } alternativeText={ 'Cute cat staring' } />
      }
      <Image source={ staringCat } alternativeText={ 'Cute cat staring' } />
    </main>
  );
}

export default App;
