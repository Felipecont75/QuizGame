const ButtonInicio = ({setPagina}) => {
    return (
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setPagina('Home')}
            >
                <i className="bi bi-house">Inicio</i>
            </button>
    )
}

export default ButtonInicio