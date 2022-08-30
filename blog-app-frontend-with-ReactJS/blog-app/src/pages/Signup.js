import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
import { signup } from "../services/user-service";
import { toast } from "react-toastify";

const Signup = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: ''
    })

    const [error, setError] = useState({
        errors: {},
        isError: false
    })

    // Handle change
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value })
    }

    //resetting the form
    const resetData = () => {
        setData({
            name: '',
            email: '',
            password: '',
            about: ''
        })
    }

    // axios -> server call
    // npm install axios

    // react - toastify -> for message displaying
    //     npm install react-toastify

    // server - url:
    // BASE_URL/api/v1/auth/register

    //submitting the form
    const submitForm = (event) => {
        event.preventDefault()

        // if (error.isError) {
        //     toast.error("Form data is invalid, correct all detail then submit")
        //     return
        // }

        console.log(data)
        //data validate

        //call server api for sending data
        signup(data).then((resp) => {
            console.log(resp)
            console.log("success log")
            toast.success("User is register successfully !! User ID : " + resp.id)
            setData({
                name: '',
                email: '',
                password: '',
                about: ''
            })
        }).catch((error) => {
            console.log(error)
            console.log("Error log")
            // handle errors in proper way
            setError({
                errors: error,
                isError: true
            })
        })
    }

    return (
        <Base>

            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color="success" inverse>
                            <CardHeader className="text-center">
                                <h3>Registeration Page !!</h3>
                            </CardHeader>

                            <CardBody>
                                {/* creating form */}
                                <Form onSubmit={submitForm}>
                                    <FormGroup>
                                        <Label for="name">Enter Name</Label>
                                        <Input
                                            name="name"
                                            type="text"
                                            id="name"
                                            placeholder="Enter your Name"
                                            onChange={(e) => handleChange(e, 'name')}
                                            value={data.name}
                                            invalid={error.errors?.response?.data?.name ? true : false}

                                        />

                                        <FormFeedback>
                                            {error.errors?.response?.data?.name}
                                        </FormFeedback>

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Enter your Email"
                                            onChange={(e) => handleChange(e, 'email')}
                                            value={data.email}
                                            invalid={error.errors?.response?.data?.email ? true : false}

                                        />

                                        <FormFeedback>
                                            {error.errors?.response?.data?.email}
                                        </FormFeedback>

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            name="password"
                                            type="password"
                                            id="password"
                                            placeholder="Enter your Password"
                                            onChange={(e) => handleChange(e, 'password')}
                                            value={data.password}
                                            invalid={error.errors?.response?.data?.password ? true : false}

                                        />

                                        <FormFeedback>
                                            {error.errors?.response?.data?.password}
                                        </FormFeedback>

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="about">About</Label>
                                        <Input
                                            name="about"
                                            type="textarea"
                                            id="about"
                                            placeholder="Enter your About"
                                            onChange={(e) => handleChange(e, 'about')}
                                            style={{ height: "250px" }}
                                            value={data.about}
                                            invalid={error.errors?.response?.data?.about ? true : false}

                                        />

                                        <FormFeedback>
                                            {error.errors?.response?.data?.about}
                                        </FormFeedback>

                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button type="submit" color="warning">
                                            Submit
                                        </Button>
                                        <Button onClick={resetData} type="reset" color="danger" className="ms-2">
                                            Reset
                                        </Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Base>
    )
}

export default Signup;