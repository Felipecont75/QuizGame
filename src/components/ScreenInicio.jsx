const ScreenInicio = ({ setPagina }) => {

    return (
        <div>
            
            <h1
                style={{
                    textAlign: "center"
                }}
            >QUIZ GAME</h1>

            <div class="d-grid gap-4 col-8 mx-auto">
            <button type="button" className="btn btn-secondary"
                onClick={() => setPagina('Capture')}>
                <i class="bi bi-card-checklist"> Crear Preguntas</i>
                </button>

            <button type="button" className="btn btn-success"
                onClick={() => setPagina('Game')}>
                <i class="bi bi-controller"> Juego </i>
                </button>
            </div>
        </div>
    )
}

export default ScreenInicio