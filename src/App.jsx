import { useState } from "react";
import Playgame from "./components/Playgame";
import ScreenFinal from "./components/ScreenFinal";
import Respuestas from "./components/Respuestas";
import './components/Ejuego.css'
import ScreenInicio from "./components/ScreenInicio";
import ScreenCaptura from "./components/ScreenCaptura";

function App() {

  const [pagina, setPagina] = useState('Home')
  const [puntuacion, setPuntuacion] = useState(0);

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (

    <div className="container mt-2">

      {
        pagina === 'Home' && (
          <div>
            <ScreenInicio
              setPagina={setPagina}
            />
          </div>
        )
      }

      {
        pagina === 'Capture' && (
          <div>
            <ScreenCaptura
              setPagina={setPagina}
              listQuestions={listQuestions}
              setListQuestions={setListQuestions}
            />
          </div>
        )
      }

      {

        pagina === 'Game' && (
          <div>
            <Playgame
              pagina={pagina}
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Finish' && (
          <div>
            <ScreenFinal
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Answers' && (
          <div>
            <Respuestas
              setPagina={setPagina}
              listQuestions={listQuestions}
            />
          </div>
        )
      }

    </div>
  )
}

export default App