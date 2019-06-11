import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

function ComponentSelect(props) {
    const { options, onChange } = props;
    return (
        <div>
            <Select
                style={{ width: '100%' }}
                {...props}
                onChange={onChange}
            >
                {options.map((item, i) => (
                    <Select.Option value={item} key={i}>
                        {item}
                    </Select.Option>
                )
                )}
            </Select>
        </div>
    )
}

export default ComponentSelect;