import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Discover from './Components/Discover.jsx'
import CreateAIAgent from './Components/CreateAIAgent.jsx'
import MyAIAgent from './Components/MyAiAgent.jsx'
import AiAgent from './Components/AiAgent.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}> 
      <Route index path="/" element={<Discover/>}/>
      <Route path='/my-agent' element={<MyAIAgent/>}/>
      <Route path='/create-agent' element={<CreateAIAgent/>}/>
      <Route path='/ai-agent' element={<AiAgent/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>    
  </StrictMode>,
)
