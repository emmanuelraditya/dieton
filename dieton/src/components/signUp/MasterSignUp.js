import React, { Component } from "react";
import MultiStepProgressBar from "./MultiStepProgressBar";
import SignUp from "./SignUp";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";
import {
  Form,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

export default class MasterSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      name: "",
      email: "",
      password: "",
      weight: "",
      height: "",
      waistline: "",
      thigh: "",
      calorieSize: "",
    };

    this.handleChange = this.handleChange.bind(this);

    this._next = this._next.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      email,
      password,
      weight,
      height,
      waistline,
      thigh,
      calorieSize,
    } = this.state;
    alert(`Your Sign Up detail: \n
       Name: ${name} \n
       Email: ${email} \n
       Password: ${password} \n
       Weight: ${weight} \n
       Height: ${height} \n
       Waistline: ${waistline} \n
       Thigh: ${thigh} \n
       CalorieSize: ${calorieSize}
       `);
  };

  _next() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }
 
get renderMultiStep() {
    let currentStep = this.state.currentStep;
      
      if (currentStep <= 4) {
        return (
            <MultiStepProgressBar currentStep={this.state.currentStep} />
        );
     }
     return null;
  }

  render() {
    return (
        <>
        <Form onSubmit={this.handleSubmit}>
            <Card>
            <CardBody>
                <SignUp
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                step={this.renderMultiStep}
                next={this._next}
                name={this.state.name}
                email={this.state.email}
                password={this.state.password}
                />
                <SignUp2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                step={this.renderMultiStep}
                next={this._next}
                weight={this.state.weight}
                height={this.state.height}
                waistline={this.state.waistline}
                thigh={this.state.thigh}
                />
                <SignUp3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                step={this.renderMultiStep}
                next={this._next}
                calorieSize={this.state.calorieSize}
                />
                <SignUp4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                step={this.renderMultiStep}
                next={this._next}
                />
            </CardBody>
            </Card>
        </Form>
        </>
    )
  }
}
