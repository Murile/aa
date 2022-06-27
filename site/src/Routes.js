import  Consultar  from '../site/src/consultar';
import  Postar  from '../site/src/post';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom'

export function Index() {
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/consulta' element={<Consultar/>}/>
            <Route path='/postar' element={<Postar/>}/>
        </Routes>
    </BrowserRouter>
}