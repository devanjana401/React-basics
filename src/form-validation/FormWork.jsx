import React, { useState } from 'react';
import './formwork.css'

const FormWork = () => {

    const [formData, setFormData] = useState({
        month: '',
        year: '',
        date: '',
        firstName: '',
        lastName: '',
        address: '',
        address2: '',
        zip: '',
        city: '',
        state: '',
        email: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // validation
    const validation = () => {
        const newErrors = {};
        const {
            month, year, date,
            firstName, lastName,
            address, zip, city,
            state, email
        } = formData;

        if (!month) newErrors.month = "Month required";
        if (!year) newErrors.year = "Year required";
        if (!date) newErrors.date = "Date required";

        if (!firstName.trim()) newErrors.firstName = "First name required";
        if (!lastName.trim()) newErrors.lastName = "Last name required";

        if (!address.trim()) newErrors.address = "Address required";

        if (!zip) newErrors.zip = "ZIP required";

        if (!city) newErrors.city = "City required";

        if (!state) newErrors.state = "State required";

        if (!email) newErrors.email = "Email required";
        else if (!/^\S+@\S+\.\S+$/.test(email))
            newErrors.email = "Invalid email";

        return newErrors;
    };

    // submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validation();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        alert("Form submitted successfully");
        console.log("Form data:", formData);

        setFormData({
            month: '',
            year: '',
            date: '',
            firstName: '',
            lastName: '',
            address: '',
            address2: '',
            zip: '',
            city: '',
            state: '',
            email: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">

            {/* row 1: month - year - date */}
            <div className="row">

                {/* month select */}
                <select
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    className="input-box"
                >
                    <option value="">Month</option>
                    {[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ].map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>

                {/* year select */}
                <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="input-box"
                >
                    <option value="">Year</option>
                    {Array.from({ length: 60 }, (_, i) => 2000 + i).map((y) => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>

                {/* date select */}
                <select
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input-box"
                >
                    <option value="">Date</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>

            </div>

            {errors.month && <p className="error">{errors.month}</p>}
            {errors.year && <p className="error">{errors.year}</p>}
            {errors.date && <p className="error">{errors.date}</p>}


            {/* row 2: first name - last name */}
            <div className="row">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            {/* row 3: address */}
            <div>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errors.address && <p className="error">{errors.address}</p>}
            </div>

            {/* row 4: address 2 */}
            <div>
                <input
                    type="text"
                    name="address2"
                    placeholder="Address 2 (Optional)"
                    value={formData.address2}
                    onChange={handleChange}
                />
            </div>

            {/* row 5: zip - city*/}
            <div className="row">
                <input
                    type="text"
                    name="zip"
                    placeholder="ZIP"
                    value={formData.zip}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                />
            </div>
            {errors.zip && <p className="error">{errors.zip}</p>}
            {errors.city && <p className="error">{errors.city}</p>}

            {/* row 6: Sstate + selected state */}
            <div className="row">
                <input
                    type="text"
                    readOnly
                    value={formData.state || ""}
                    placeholder="Selected state"
                    className="input-box"
                />

                <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="input-box"
                >
                    <option value="">Select State</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                </select>
            </div>
            {errors.state && <p className="error">{errors.state}</p>}
            {/* row 7: email */}
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormWork;
