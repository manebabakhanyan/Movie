import Home from './Home'
import { Route, Routes } from "react-router-dom"
export default function HomePage() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}
