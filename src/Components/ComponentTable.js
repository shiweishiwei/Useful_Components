import React from 'react';
import { useState } from 'react';
import { Table, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import ComponentModal from './ComponentModal';

function ComponentTable() {
    const [datasource,setDatasource] = useState([
        {
            id: 1,
            name: 'twistzz',
            sex: '男',
            interest: 'csgo',
        }
    ])

    const defaultcolumns = [
        {
            title: '学号',
            dataIndex: 'id'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '性别',
            dataIndex: 'sex'
        },
        {
            title: '爱好',
            dataIndex: 'interest'
        },
        {
            title: '操作',
            dataIndex: 'edit',
            render: () => (
                <span>编辑||删除</span>
            )
        },
    ];

    const addStuInfo = (val)=>{
        let newdatasource = [...datasource];
        newdatasource.push(val);
        setDatasource(newdatasource)
    }
    return (
        <div>
            <Row>
                <Col>
                    <ComponentModal onAdd={addStuInfo}/>
                </Col>
                <Col>
                    <Table columns={defaultcolumns} dataSource={datasource} />
                </Col>                
            </Row>
        </div>
    )
}
export default ComponentTable;