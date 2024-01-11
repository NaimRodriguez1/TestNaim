import {titleCase, divide, sum, isapple} from '../components/MiComponente'

describe('funciones dentro del componente MiComponente', () => {
    describe('titleCase', () => {
        test('debe retornar un string', () =>
        {   //Compruebo si la ejecuación de la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string')
        })

        test('debe retornar el string transformado', () => 
        {
            const result = titleCase('es una string chiquitita');
            expect(result).toBe('Es Una String Chiquitita');

        })


    });

    
    describe('sum', () => {
        test('debe retornar un número si los sumandos son números', () =>
        {   //Compruebo si la ejecuaciónd e la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })
        test('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })
       
    });

    describe('titleCase', () =>{
        test('debe retornar un string vacio',()=>
        {
            const result =titleCase("")
            expect(result).toBe("")
        })
    })

    describe ('divide', ()=>{
        test('comprobar que el tipo que devuelve es un número',()=>{
            const result=divide(10,2)
            expect(typeof result).toBe('number')
        })
    })

    describe('divide',()=>{
        test('comprobar si entra una string te devuelve null',()=>{
            const result=divide(10,"hola")
            expect(result).toBe(null)
        })
    })

    describe('divide',()=>{
        test('comprobar que realiza la división de 10 y 2',()=>{
            const result=divide(10,2)
            expect(result).toBe(5)
        })
        
    })

    describe('divide',()=>{
        test('comprobar que realiza la división de 10 y 4',()=>{
            const result = divide(10,4)
            expect(result).toBeCloseTo(2.5,1)
        })
    })
    describe('divide',()=>{
        test('comprobar que la división de cuallquier número y 0 te devuelve null',()=>{
            const result = divide(2,0)
            expect(result).toBeNull()
        })
    })

});