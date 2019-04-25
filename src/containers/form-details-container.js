import {connect} from "react-redux";
import {FormDetails} from "../components/index";

const mapStateToProps = state => ({
  formDetails: state.form.demo.values
});

export default connect(mapStateToProps)(FormDetails);