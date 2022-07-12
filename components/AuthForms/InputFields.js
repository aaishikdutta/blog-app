import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import User from "../../assets/user.svg";

export const loginInputs = [
    {
        type: 'text',
        placeholder: 'Email',
        name: 'email',
        icon: Email,
    },
    {
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        icon: Password,
    }
];

export const forgotPasswordInputs = [
    {
        type: 'text',
        placeholder: 'Email',
        name: 'email',
        icon: Email,
    },
];

export const registerInputs = [
    {
        type: 'text',
        placeholder: 'First Name',
        name: 'firstName',
        icon: User,
    },
    {
        type: 'text',
        placeholder: 'Last Name',
        name: 'lastName',
        icon: User,
    },
    {
        type: 'text',
        placeholder: 'Username',
        name: 'username',
        icon: User,
    },
    {
        type: 'text',
        placeholder: 'Email',
        name: 'email',
        icon: Email,
    },
    {
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        icon: Password,
    }


]