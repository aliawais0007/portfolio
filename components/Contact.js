import sassStyles from "../styles/Home.module.scss";
import { useState } from "react";
import { subjectOptions } from "../contants";
import { Form, Input, Button, Radio } from 'antd';


export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                    style:{
                        "text-align": "left",
                        "font-size": "18px"
                    }
                },
                wrapperCol: {
                    span: 30,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 8,
                },
            }
            : null;

    const handleChange = (e) => {
        const fieldName = "";

        switch (fieldName) {
            case "email":
                setEmail(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            case "subject":
                setSubject(e.target.value);
                break;
            case "message":
                setMessage(e.target.value);
                break;
        }
    }

    return (
        <section className={sassStyles.wrapperSection} id="contact" >
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12 mb-5"}>
                        <h2 className={sassStyles.sectionTitle}>
                            Contact
                        </h2>

                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <iframe width="600" height="450" style={{ border: 0, maxWidth: "100%" }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRaypYT5pXz4R1SII5ibX6ME&key=AIzaSyDAAM1M5bIManqOD8407kqt40KD_Le-Odo"></iframe>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={sassStyles.form}>
                            <Form

                                {...formItemLayout}
                                layout={formLayout}
                                form={form}
                                initialValues={{
                                    layout: formLayout,
                                }}
                            >
                                <Form.Item
                                    label={"Full Name"}
                                    name="username"
                                    id="name"
                                    style={{ display: "flex", flexDirection: "column" }}
                                    defaultValue={name}
                                    onChange={handleChange()}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    value={email}
                                    style={{ display: "flex", flexDirection: "column" }}
                                    onChange={handleChange()}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        Submit
                            </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}