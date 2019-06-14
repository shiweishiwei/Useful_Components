import React from 'react';
import { useState } from 'react';
import { Row, Col, Button, Modal, Input, Form } from 'antd';
import 'antd/dist/antd.css';

function ComponentModal(props) {
    const [visible, setVisible] = useState(false)
    const { form } = props;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    };

    const NewSetMadal = ()=>{
        setVisible(true);
    }

    const closemodal = () =>{
        setVisible(false);
    }

    const addStudent = ()=>{
        const addStuInfo = props.onAdd;
        let stuInfo = form.getFieldsValue();
        addStuInfo(stuInfo);
    }

    return (
        <Row>
            <Col>
                <Button type="primary" onClick={NewSetMadal}>新建</Button>
            </Col>
            <Col>
                <Modal
                    title='新增学生信息'
                    visible={visible}
                    onCancel={closemodal}
                    onOk={addStudent}
                >
                    <Form {...formItemLayout}>
                        <Form.Item label='学号'>
                            {
                                form.getFieldDecorator('id', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '学号不能为空'
                                        }
                                    ]
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label='姓名'>
                            {
                                form.getFieldDecorator('name', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '姓名不能为空'
                                        }
                                    ]
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label='性别'>
                            {
                                form.getFieldDecorator('sex', {
                                    rules: [
                                        {
                                            required: true,
                                        }
                                    ]
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label='爱好'>
                            {
                                form.getFieldDecorator('interest')
                                    (<Input />)
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            </Col>
        </Row>

    )
}

export default Form.create({})(ComponentModal);