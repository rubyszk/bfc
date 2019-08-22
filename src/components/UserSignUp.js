import React from 'react';


class NewBaby extends React.Component {
    render() {
        return (
            <div className='jumbotron container'>
                    <h1> Sign Up New User </h1>
                    <p>Please fill out the following to create an account</p>
                    <form>
                        <div className="form-group">
                            <label for='email'><b>Email</b></label>
                            <input type='text' className='form-control' placeholder='Enter Email' name='email'></input>
                        </div>

                        <div className="form-group">
                            <label for='email' ><b>Password</b></label>
                            <input type='text' className='form-control' placeholder='Enter Password' name='password'></input>
                        </div>

                        <div className="form-group">
                            <label for='email' ><b> Re-Enter Password</b></label>
                            <input type='text' className='form-control' placeholder='Re-Enter Password' name='ReEnterPassword'></input>
                        </div>


                        <div className="clearfix">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="button" class="btn btn-danger">Cancel</button>
                        </div>
                    </form>
            </div>    
=======
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            isAdmin: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
                toUserPage: true
        })
        const baseURL = this.props.baseURL;
        const response = await axios.post(`${baseURL}/users/new`, {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            isAdmin: this.state.isAdmin
        });
        this.setState = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            isAdmin: false
        }
        this.props.addUser(response.data);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }


    renderRedirect = () => {
        if (this.state.toUserPage) {
            return <Redirect to='/user' />
        }
    }

    render() {
        return (
            <div>
            {this.renderRedirect()}
            <NavigationBar/>
            <div className="jumbotron container">
                <h3>Register to BFC</h3>
                <Form onSubmit={this.handleSubmit}>
                    <hr />

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            First Name
                    </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" id="firstname" name="firstname" value={this.state.firstname} placeholder="First Name" onChange={this.handleChange} required />
                        </Col>
                        <Form.Label column sm={2}>
                            Last Name
                    </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" id="lastname" name="lastname" value={this.state.lastname} placeholder="Last Name" onChange={this.handleChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Username
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" id="username" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Password
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Register</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            </div>
        )
    }
}

export default NewBaby;