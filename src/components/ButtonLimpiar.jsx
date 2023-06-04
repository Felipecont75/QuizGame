import Swal from "sweetalert2"

const ButtonLimpiar = ({setListQuestions}) => {

    const clearList = async () => {
        const { isConfirmed } = await Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras recuperarlas",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalas',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
        if (isConfirmed) {
            localStorage.setItem("listQuestions", JSON.stringify([]));
            setListQuestions([])
        }
    }

    return (
        <button
            className="btn btn-outline-danger me-1"
            onClick={clearList}
            type="button"
        >
            <i className="bi bi-trash2">Borrar</i>
        </button>
    )
}

export default ButtonLimpiar