import React from 'react';
import { Layout, Form, Input, Button, Typography } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const App = () => {
	const onFinish = values => {
		console.log(values);
		alert('Success');
		document.location.href =
			'mailto:medu.help@gmail.com?subject=' +
			encodeURIComponent(values.topic) +
			'&body=' +
			encodeURIComponent(`${values.detail}`);
	};

	const onFinishFailed = errorInfo => {
		alert('Failed');
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
								{ required: true, message: 'กรุณากรอกรายละเอียดของท่าน!' }
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
