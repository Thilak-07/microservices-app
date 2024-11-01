import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:4000"; // Base URL for your API

export default ({ url, method, body, onSuccess }) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async () => {
        try {
            setErrors(null);
            const response = await axios({
                method,
                url,
                data: body,
                withCredentials: true, // Include cookies with requests
            });

            if (onSuccess) {
                onSuccess(response.data);
            }

            return response.data;
        } catch (err) {
            setErrors(
                <div className="alert alert-danger">
                    <h4>Ooops....</h4>
                    <ul className="my-0">
                        {err.response.data.errors.map((err) => (
                            <li key={err.message}>{err.message}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return { doRequest, errors };
};
