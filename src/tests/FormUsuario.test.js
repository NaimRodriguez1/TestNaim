import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente',()=>{
    let box
    beforeEach(()=>{
        render(<FormUsuario />); //aquí generamos el virtual DOM
        //el name de Box lo definimos en su atributo title (fijarse en el código)
        box = screen.getByRole('caja', { name: 'es una caja' });
    })

    describe('')
})