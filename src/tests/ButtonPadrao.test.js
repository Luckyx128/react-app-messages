import {act} from 'react';
import ReactDOMClient from 'react-dom/client';
import ButtonPadrao from '../components/util/button'; 

it('Renderizando button' , async ()=>{
    const button = document.createElement('div');
    document.body.appendChild(button);

    act(() => {
        ReactDOMClient.createRoot(button).render(<ButtonPadrao titulo='Teste botao'/>);
            });

    expect(button.innerHTML).toBe('<button type="submit"> Teste botao </button>')
}) 