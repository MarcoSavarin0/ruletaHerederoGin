import { createRoot } from 'react-dom/client'
import { WheelProvider } from './context/RuletaContext.tsx'
import './index.css'
import WrapRuleta from './components/wrap/WrapRuleta.tsx'
createRoot(document.getElementById('root')!).render(
    <WheelProvider>
        <WrapRuleta />
    </WheelProvider>,
)
