import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../view/Home';
import Layout from '../Layouts';
import NotFound from '@/view/NotFound';
import Settings from '@/view/Settings';

const AppRouter = () => {
      return (
            <Router>
                  <Layout>
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/pengaturan" element={<Settings />} />
                              <Route path="*" element={<NotFound />} />
                        </Routes>
                  </Layout>
            </Router>
      );
};

export default AppRouter;