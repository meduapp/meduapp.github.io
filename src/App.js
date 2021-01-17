import './App.css';

import { Button, Form, Input, Layout, Typography } from 'antd';

import React from 'react';

const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const App = () => {
	const onFinish = async (values) => {
		const data = {
			email: values.email,
			subject: values.topic,
			description: values.detail,
		};
		const response = await fetch('https://medu.app/v2/api/support/request', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			mode: 'cors',
			body: JSON.stringify(data),
		});
		
		if (response.ok) {
			alert('สำเร็จ! คำร้องของท่านได้รับการบันทึกไว้ในระบบแล้ว.');
		} else {
			alert('พบข้อผิดพลาด กรุณาลองอีกครั้งในภายหลัง')
		}
	};

	const onFinishFailed = (errorInfo) => {
		alert('กรุณากรอกข้อมูลให้ถูกต้อง และครบถ้วน');
	};

	return (
		<div className='App'>
			<Layout>
				<Header className='text-center px-1'>
					<Title className='text-white' level={3}>
						MedU Support Center
					</Title>
				</Header>
				<Content className='mt-2 center'>
					<Title className='text-center' level={1}>
						กรุณากรอกรายละเอียดของท่านเพื่อติดต่อกลับ
					</Title>
					<Form
						className='mx-2'
						labelCol={{ span: 4 }}
						wrapperCol={{ span: 20 }}
						name='basic'
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							label='อีเมล'
							name='email'
							rules={[
								{
									required: true,
									message: 'กรุณากรอกอีเมลให้ถูกต้อง!',
									type: 'email',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label='หัวข้อ'
							name='topic'
							rules={[{ required: true, message: 'กรุณากรอกหัวข้อ!' }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label='รายละเอียด'
							name='detail'
							rules={[
								{ required: true, message: 'กรุณากรอกรายละเอียดของท่าน!' },
							]}
						>
							<TextArea rows={4} />
						</Form.Item>

						<Form.Item wrapperCol={24}>
							<Button className='float-right' type='primary' htmlType='submit'>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Content>
				<Footer className='text-center'>
					&copy;{new Date().getFullYear()} MedU Teams
				</Footer>
			</Layout>
		</div>
	);
};

export default App;
