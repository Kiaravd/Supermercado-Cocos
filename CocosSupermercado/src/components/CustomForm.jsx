// bun install react-hook-form => comando para instalar Libreria que trabaja con formularios
// Creo q ya se podría usar en el proyecto, porq se modificaron archivos agregando a
//esa libreria, por lo q intenta usarla sin ejecutar este comando, sino pues lo ejecutas.
import {useForm} from "react-hook-form"

const Formulario = () => {
    //Hook para manejar el envio del formulario y validaciones
    // Register tiene el valor de los campos, formState detecta errores y permite manejarlos
    //handleSubmit maneja el envio del formulario
    const { register, formState: {errors}, handleSubmit } = useForm()
    
    //Función para confirmar el ingreso de datos
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
    <>
    <h2>Formulario</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label> nombre </label>
            <input type="text" {...register('name', {required: true })}></input>
        </div>
        {errors.name?.type === 'required' && <p>Completar campo nombre</p>}
        <div>
            <label> Documento </label>
            <input type="number" {...register('document', {required: true, maxLength: 8})}></input>
        </div>
        {errors.document?.type === 'maxLength' && <p>Rango máximo de caracteres es 8</p>}
        <div>
            <label> Numero telefónico </label>
            <input type="number" {...register('cell', {required: true, maxLength: 12})}></input>
        </div>
        {errors.cell?.type === 'maxLength' && <p>Rango telefono debe ser menor que 12</p>}
        <input type="submit" value="Enviar" />
    </form>
    </>);

}

export default Formulario;