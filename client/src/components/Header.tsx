import React from 'react';
import { Row } from 'antd';
import Spinner from './Spinner';

const Form = React.lazy(() => import('../components/Form'));

const Header: React.FC = () => {
  return (
    <Row className='header-main'> 
      Literature Blog
      <React.Suspense fallback={<Spinner />}>
        <Form />
      </React.Suspense>
    </Row>
  )
}
export default Header;
