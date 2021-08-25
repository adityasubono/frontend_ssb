import React from 'react';
import {Grid} from "@material-ui/core";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

import Register_ssb from "../register/RegisterSSB";

const Contents = ({ profile: {profiles, loading}}) => {


    return (
        <div>
                {loading ? (
                    <Spinner/>
                ) : (
                    <div>
                        <div>
                            <Grid spacing={3}>
                                <Register_ssb />
                            </Grid>
                        </div>
                    </div>
                )}
        </div>
    );

}
Contents.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

export default Contents;
