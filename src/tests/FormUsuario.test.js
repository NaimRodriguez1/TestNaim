import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente',()=>{
    let box
    let h2
    let button
    let text
    beforeEach(()=>{
        render(<FormUsuario />); //aquí generamos el virtual DOM
        //el name de Box lo definimos en su atributo title (fijarse en el código)
        button = screen.getByRole('button', { name: 'Submit' });
        text=screen.getByLabelText('Nombre');
        h2=screen.getByRole('heading',{level:2});
    });
    test('comprueba que se renderiza el botón',()=>{
        expect(button).toBeInTheDocument()
    })

    test('comprueba que se renderiza el campo de texto',()=>{
        expect(text).toBeInTheDocument()
    })

    test('comprueba que se renderiza la cabecera de nivel 2',()=>{
        expect(h2).toBeInTheDocument()
    })
    test('comprobar si al pulsar el botón cambia el botón de fondo', async () => {
     
        //usamos el userEvent. Lo primero que debemos hacer es inicializarlo:
        const user = userEvent.setup()
        //simulamos que el usuario clica el botón               
        await user.click(button);
        expect(h2).toBe("")
    });
})