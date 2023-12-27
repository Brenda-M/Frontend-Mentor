// import { useState } from 'react';
import { Form, Input } from 'antd';


const PersonalInfo = () => {

  return (
    <div className='py-10'>
      <h1>Personal info</h1>
      <p className='pb-8'>Please provide your name, email address, and phone number.</p>

      <Form layout="vertical" size='large'>
        <Form.Item label="Name" rules={[{ required: true }]}>
          <Input placeholder="e.g Stephen King" />
        </Form.Item>
        <Form.Item label="Email Address" rules={[{ required: true }]}>
          <Input placeholder="e.g stephenking@lorem.com" />
        </Form.Item>
        <Form.Item label="Phone Number" rules={[{ required: true }]}>
          <Input placeholder='e.g +1 234 567 890' />
        </Form.Item>
      </Form>
    </div>

  )
}

export default PersonalInfo