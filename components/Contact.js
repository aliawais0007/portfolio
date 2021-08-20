import sassStyles from "../styles/Home.module.scss";
import { useState, useRef, useEffect } from "react";
import { subjectOptions, contactAPI } from "../contants";
import { Form, Input, Button, Select } from 'antd';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState(["web development"]);
    const [message, setMessage] = useState("");
    const [form] = Form.useForm();
    const [responseOk, setStatus] = useState(false);
    const phoneRef = useRef();
    const [country, setCountry] = useState(null);
    const [countryCode, setDefaultCountry] = useState('ae');
    const { Option } = Select;


    useEffect(() => {
        fetch("https://ipinfo.io/json", function () { })
            .then(response => response.json())
            .then((resp) => {
                let cCode = (resp && resp.country) ? resp.country : "ae";
                setDefaultCountry(cCode);
            });
        setCountry(phoneRef.current && phoneRef.current.selectedCountryData)
    }, [phoneRef])

    const emptyInputs = () => {
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
    }

    const errorHandler = (error) => {
        toast.error(error, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const formValidate = () => {
        if (name.length > 0) {
            if (email.length > 0) {
                const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (emailReg.test(email.toLowerCase())) {
                    if (phone.length > 0) {
                        const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                        const phoneNumber = "+" + country.dialCode + phone
                        if (window.intlTelInputUtils.isValidNumber(phoneNumber)) {
                            if (subject.length > 0) {
                                if (message.length > 0) {
                                    return true;
                                }
                                else {
                                    errorHandler("Message Field is Required!");
                                    return false;
                                }
                            }
                            else {
                                errorHandler("Subject Field is Required!");
                                return false;
                            }
                        }
                        else {
                            errorHandler("Invalid Phone Number!");
                            return false;
                        }
                    }
                    else {
                        errorHandler("Phone Field is Required!");
                        return false;
                    }
                }
                else {
                    errorHandler("Email is not Valid!");
                    return false;
                }

            }
            else {
                errorHandler("Email Field is Required!");
                return false;
            }
        }
        else {
            errorHandler("Name Field is Required!");
            return false;
        }
    }

    const onFinish = () => {
        if (formValidate()) {
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
                    toast.success("You Requested has been submitted!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    emptyInputs();
                })
                .catch(err => {
                    setStatus(false);
                    err.then(res => toast.error(res.error, {
                        position: toast.POSITION.TOP_RIGHT
                    }));
                })
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const children = [];
    for (let i = 0; i < subjectOptions.length; i++) {
        children.push(<Option key={subjectOptions[i].value}>{subjectOptions[i].value}</Option>);
    }


    const Loader = () => {
        return (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        );
    }
    function isNumber(evt) {
        debugger
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
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
            default:
                setPhone(country !== null && (isNumber(e) && e.target.value));
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
                        <iframe width="600" height="100%" style={{ border: 0, maxWidth: "100%" }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRaypYT5pXz4R1SII5ibX6ME&key=AIzaSyDAAM1M5bIManqOD8407kqt40KD_Le-Odo"></iframe>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={sassStyles.form}>
                            <Form
                                layout={"vertical"}
                                form={form}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                initialValues={{
                                    layout: "vertical",
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
                                    type="number"
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
                                        defaultCountry={countryCode}
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
            <ToastContainer autoClose={2000} draggable={true} />
        </section>
    );
}