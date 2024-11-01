// import buildClient from '../api/build-client';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const LandingPage = ({ currentUser }) => {
    return currentUser ? (
        <h1>You are signed in</h1>
    ) : (
        <h1>You are NOT signed in</h1>
    );
};

LandingPage.getInitialProps = async (context) => {
    console.log("LANDING PAGE!");
    //   const client = buildClient(context);
    const { data } = await axios.get("/api/users/currentuser", {
        headers: context.req
            ? { cookie: context.req.headers.cookie || "" }
            : undefined,
        withCredentials: true,
    });
    return data;
};

export default LandingPage;
