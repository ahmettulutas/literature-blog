import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react'

const Spinner: React.FC  = () =>  {
  return (
    <Spin
      className="spinner"
      indicator={
        <LoadingOutlined
          style={{
          fontSize: 24,
          }}
          spin/>}>
    </Spin>
  )
}
export default Spinner;
