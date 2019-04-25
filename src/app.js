import React, {PureComponent} from "react";
import FormDetails from "./containers/form-details-container";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/styles.css";
import Form from "./components/form";
import {ModalPopOver} from "./components/index";

class DemoForm extends PureComponent {
  state = {
    isVisible: false
  }

  showResults = () => {
    this.setState({isVisible: true}, () => {
      window.setTimeout(() => {
        this.setState({isVisible: false});
      }, 3000);
    });
  }

  render() {
    return(
      <React.Fragment>
        <ModalPopOver isVisible={this.state.isVisible} />
        <Form onSubmit={this.showResults} />
        <FormDetails />
      </React.Fragment>
    )
  }
};

export default DemoForm;