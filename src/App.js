import { useState } from 'react';
import React from 'react';
import ComponentSelect from './Components/ComponentSelect';
import './App.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const [selecttitle, setSelecttitle] = useState("现在选择的是：")
  const handleSelectChange = function (str) {
    setSelecttitle(`现在选择的是：${str||''}`)
  }
  return (
    <React.Fragment>
      <Row>
        <Col span={8}>
          {selecttitle}
        </Col>
        <Col span={8}>
          <ComponentSelect options={['小明', '小红', '小绿']} allowClear={true} placeholder="请选择" mpde="tags" onChange={handleSelectChange} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default App;
