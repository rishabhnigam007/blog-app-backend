import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { doLogin } from "../auth";
import Base from "../components/Base";
import { loginUser } from "../services/user-service";

const Login = () => {

    const navigate = useNavigate()

    const [loginDetail, setLoginDetail] = useState({
        username: '',
        password: ''
    })

    // Handle change
    const handleChange = (event, property) => {
        setLoginDetail({ ...loginDetail, [property]: event.target.value })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(loginDetail)
        // validation
        if (loginDetail.username.trim() === '' || loginDetail.password.trim() === '') {
            toast.error("Username and password is required !!")
            return
        }

        //submit the data to server to generate token
        loginUser(loginDetail).then((data) => {
            console.log(data)

            //save the data to local storage
            doLogin(data, () => {
                console.log("Login detail is save to local storage")

                // redirect to user page
                navigate("/user/dashboard")

            })

            toast.success("Login successfull !!")
        }).catch(error => {
            console.log(error)
            if (error.response.status === 400 || error.response.status === 404) {
                toast.error(error.response.data.message)
            }
            else {
                toast.error("Something went wrong !!")
            }
        })

    }

    //resetting the form
    const handleReset = () => {
        setLoginDetail({
            username: '',
            password: ''
        })
    }


    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color="success" inverse>
                            <CardHeader className="text-center">
                                <h3>Login Page !!</h3>
                            </CardHeader>

                            <CardBody>
                                {/* creating form */}
                                <Form onSubmit={handleFormSubmit}>
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Enter your Email"
                                            value={loginDetail.username}
                                            onChange={(e) => handleChange(e, 'username')}

                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            name="password"
                                            type="password"
                                            id="password"
                                            placeholder="Enter your Password"
                                            value={loginDetail.password}
                                            onChange={(e) => handleChange(e, 'password')}

                                        />
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button type="submit" color="warning">
                                            Login
                                        </Button>
                                        <Button onClick={handleReset} type="reset" color="danger" className="ms-2">
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

export default Login;