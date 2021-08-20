import sassStyles from "../styles/Home.module.scss";
import { useState, useRef, useEffect } from "react";
import { subjectOptions, contactAPI } from "../contants";
import { Form, Input, Button, Select } from 'antd';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState(["web development"]);
    const [message, setMessage] = useState("");
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('verticle');
    const [responseOk, setStatus] = useState(false);
    const phoneRef = useRef();
    const [country, setCountry] = useState(null);
    const { Option } = Select;


    useEffect(() => {
        setCountry(phoneRef.current && phoneRef.current.selectedCountryData)
    }, [phoneRef])

    const emptyInputs = () => {
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
    }
    const onFinish = () => {
        setStatus(true);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        var details = {
            'name': name,
            'email': email,
            'subject': subject.join(", "),
            'message': message,
            "phone": "+" + country.dialCode + phone
        };
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const initObject = {
            method: "post",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody

        }
        fetch(contactAPI, initObject)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else throw response.json();
            })
            .then(data => {
                setStatus(false);
                emptyInputs();
                alert(data.message);
            })
            .catch(err => {
                setStatus(false);
                err.then(res => alert(res.error));
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const children = [];
    for (let i = 0; i < subjectOptions.length; i++) {
        children.push(<Option key={subjectOptions[i].value}>{subjectOptions[i].value}</Option>);
    }

    const formItemLayout = {
        labelCol: {
            span: 6,
            style: {
                "text-align": "left",
                "font-size": "18px"
            }
        },
        wrapperCol: {
            span: 30,
        },
    };
    const buttonItemLayout = {
        wrapperCol: {
            span: 14,
            offset: 8,
        },
    };


    const Loader = () => {
        return (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        );
    }
    const handleChange = (e) => {

        const fieldName = e.target.name;
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
            case "phone":
                setPhone(country !== null && e.target.value);
                setCountry
        }
    }

    const handleSubmit = () => {

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
                        <iframe width="600" height="100%" style={{ border: 0, maxWidth: "100%" }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRaypYT5pXz4R1SII5ibX6ME&key=AIzaSyDAAM1M5bIManqOD8407kqt40KD_Le-Odo"></iframe>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={sassStyles.form}>
                            <Form
                                onSubmit={handleSubmit}
                                {...formItemLayout}
                                layout={formLayout}
                                form={form}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                initialValues={{
                                    layout: formLayout,
                                }}
                            >
                                <Form.Item
                                    label={"Full Name"}
                                    id="name"
                                    style={{ display: "flex", flexDirection: "column", marginBottom: 5 }}
                                    defaultValue={name}
                                    onChange={(e) => handleChange(e)}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Full Name!',
                                        },
                                    ]}
                                >
                                    <Input name="name" />
                                </Form.Item>

                                <Form.Item
                                    label="Email"

                                    value={email}
                                    style={{ display: "flex", flexDirection: "column", marginBottom: 5 }}
                                    onChange={(e) => handleChange(e)}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                    ]}
                                >
                                    <Input name="email" type={"email"} />
                                </Form.Item>

                                <Form.Item
                                    label="Phone"
                                    style={{ display: "flex", flexDirection: "column", marginBottom: 5 }}
                                    onChange={(e) => { handleChange(e) }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                    ]}
                                >
                                    <IntlTelInput
                                        ref={phoneRef}
                                        style={{ width: "100%" }}
                                        fieldName="phone"
                                        value={phone}
                                        separateDialCode={true}
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control"
                                        onSelectFlag={() => { setCountry(phoneRef.current.selectedCountryData) }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Subject"
                                    style={{ display: "flex", flexDirection: "column", marginBottom: 5 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Subject!',
                                        },
                                    ]}
                                >
                                    <Select
                                        value={subject}
                                        allowClear
                                        placeholder={"Please Select"}

                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Subject!',
                                            },
                                        ]}
                                        name="subject" onChange={(value) => setSubject(value)} mode="multiple">
                                        {
                                            children
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Message"
                                    value={message}
                                    style={{ display: "flex", flexDirection: "column", marginBottom: 5 }}
                                    onChange={(e) => handleChange(e)}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Requirements!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea name="message" />
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 0,
                                        span: 30,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit" style={{ width: "100%", marginTop: 15, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        {!responseOk ? "Submit" : <Loader />}
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