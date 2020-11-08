import React = require("react");
import "./index.scss";
import { XCircle } from "react-feather";
import { Button } from "../../components/button";
import { connect } from "react-redux";
import { ReduxType } from "../../reducers";
import { NoteModel } from "../../reducers/note/note-model";

interface State {
  show: boolean;
}

interface Props {
  note?: NoteModel;
}

class Note extends React.Component<Props, State> {
  state: State = {
    show: false,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 10);
  }

  render() {
    return (
      <div className={"note" + (this.state.show ? " show" : "")}>
        <div className={"form"}>
          <div className={"header"}>
            Add Citizen
            <div
              onClick={() => {
                window.location.href = "/#/";
              }}
              className={"close"}
            >
              <XCircle />
            </div>
          </div>
          <div className={"body"}>{this.props.note?.note}</div>
          <div className={"footer"}>
            <Button
              text={"Ok"}
              onClick={() => {
                window.location.href = "/#/";
              }}
              className={"submit"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxType) => {
  return {
    note: state.note.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    reduxDispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
