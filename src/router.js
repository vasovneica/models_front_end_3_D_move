import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Createpost, createPostAction } from './pages/Createpost';
import { Editpost, updatePostAction } from './pages/Editpost';
import { FullPage, postLoader } from './pages/FullPage';
import { Notfoundpage } from './pages/Notfoundpage';
import { LoginPage } from './pages/Loginpage';
import { Layout } from './components/Layout' 
import { RequireAuth } from './hoc/RequireAuth'
import ErrorPage from './pages/Errorpage';
import { HowUsePage } from './pages/HowUsePage';
import { ModelsPage } from './pages/ModelsPage';


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Layout />}>
    <Route path='/' element={<Navigate to='/home' replace />}/>
    <Route path='/home' index element={<Homepage />} />
    <Route path='about' element={<About />}>
      <Route path='contacts' element={<p>Our contact</p>} />
      <Route path='team' element={<p>Our team</p>} />
    </Route>
    <Route path='about-us' element={<Navigate to='/about' replace />} />
    <Route path='/api/models' element={<ModelsPage />}  errorElement={<ErrorPage />} />
    <Route path='model/:id' element={<FullPage />} loader={postLoader} />
    <Route path='posts/:id/edit' element={<Editpost />} loader={postLoader} action={updatePostAction} />
    <Route path='posts/new' element={
      <RequireAuth>
        <Createpost />
      </RequireAuth>
    } action={createPostAction} />
    <Route path='login' element={<LoginPage />} />
    <Route path='howusepage' element={<HowUsePage />} />
    <Route path='*' element={<Notfoundpage />} />
  </Route>

))

export default router
