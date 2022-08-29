import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";

const Login = () => {
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
                                <Form>
                                    <FormGroup>
                                        <Label for="email">Enter Email</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Enter your Email"
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input
                                            name="password"
                                            type="password"
                                            id="password"
                                            placeholder="Enter your Password"
                                            required
                                        />
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button type="submit" color="warning">
                                            Login
                                        </Button>
                                        <Button type="reset" color="danger" className="ms-2">
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