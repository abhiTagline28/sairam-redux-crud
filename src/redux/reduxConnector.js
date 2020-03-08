import { connect } from "react-redux";

export default (originalStateToProps, dispatchToProps) => (components) => {
    let updatedStateToProps = originalStateToProps;

    if (typeof originalStateToProps !== "function") {
        updatedStateToProps = (state, ownProps) => {
            let mappedProps = {};
            for (const key in originalStateToProps) {
                if (originalStateToProps.hasOwnProperty(key)) {
                    mappedProps[key] = originalStateToProps[key](state, ownProps);
                }
            }
            return mappedProps;
        }
    }

    return connect(updatedStateToProps, dispatchToProps)(components)
}   