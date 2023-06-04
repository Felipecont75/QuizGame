import ButtonAgregar from "./ButtonAgregar";
import ButtonInicio from "./ButtonInicio";
import ButtonLimpiar from "./ButtonLimpiar";
import Preguntas from "./Preguntas";


const ScreenCaptura = ({
    setPagina,
    listQuestions,
    setListQuestions,
}) => {

    return (
        <div className="container">

            <div className="row">
                <div className="col text-start">
               
                    <h1>Captura de Preguntas</h1>
                </div>
                <div className="col text-end mt-1">
                    <ButtonLimpiar
                        setListQuestions={setListQuestions}
                    />
                    <ButtonAgregar
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                    <ButtonInicio
                        setPagina={setPagina}
                    />
                </div>
            </div>
            <hr />
            <hr />
            {
                listQuestions.length === 0 && (
                    <div className="text-center">
                        <h3>No se tiene agregada ninguna pregunta.</h3>
                        Añade una nueva pregunta.
                    </div>
                )
            }
            
            {
                listQuestions.map((pregunta) => (
                    <Preguntas
                        pregunta={pregunta}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                ))
            }

            <hr />
            <hr />

         

        </div>
    )
}

export default ScreenCaptura