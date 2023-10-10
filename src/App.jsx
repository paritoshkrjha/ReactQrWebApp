import { Toaster } from 'react-hot-toast';
import Container from "./components/Container";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './container/home.index';

const Logo = () => {
  return (
    <>
      <p className=" text-center text-2xl text-black font-bold pt-6 mb-6 sm:mb-12">QR-Helper</p>
    </>
  )
}

function App() {
  return (
    <div className=" min-h-screen bg-[#f5f5f5] flex  justify-center items-center px-5 py-5">
      <div className="h-max bg-[#f5f5f5] flex flex-col justify-center items-center sm:p-20">
        <Logo />
        <Container >
          <BrowserRouter>
            <Routes>
              <Route path='/:id/*' element={<HomeContainer />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
      <Toaster />
    </div>
  )
}

export default App
