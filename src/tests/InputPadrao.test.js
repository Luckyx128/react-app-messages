import {act} from 'react';
import ReactDOMClient from 'react-dom/client';
import InputPadrao from '../components/util/input'; 


it('Renderizar o input corretamente', async () => {
    const input = document.createElement('div');
    document.body.appendChild(input);

act(() => {
        ReactDOMClient.createRoot(input).render(<InputPadrao tipo='text' nome='teste' placeholder='aqui o teste' />);
            });

expect(input.innerHTML).toBe('<input id="teste" name="teste" type="text" placeholder="aqui o teste">')


})
