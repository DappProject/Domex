import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Discover from './Components/Discover.jsx'
import AiAgent from './Components/AiAgent.jsx'
import MyAIAgent from './Components/MyAIAgent.jsx'
// import CreateAIAgent from './Components/CreateAIAgent.jsx'
import Landing from './Components/Landing.jsx'
import Loader from './Components/Loader.jsx'
import CreateAIAgent from './Components/CreateAIAgent.jsx'
// import Loader from './Components/Loader.jsx'
// import Hello from './Components/Hello.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(<>  
  <Route path="/" element={<Landing />}/>
      <Route path="/Discover" element={<App />}>
        <Route index element={<Discover />} />
        {/* <Route path="AiAgent" element={<AiAgent />}/> */}
        <Route path="ai-agent" element={<AiAgent />}/>
        <Route path="my-agent" element={<MyAIAgent/>}/>
        <Route path="create-agent" element={<CreateAIAgent/>}/>
      </Route>
</>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
